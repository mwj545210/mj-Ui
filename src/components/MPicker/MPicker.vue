<template>
  <div>
    <m-cell :value="value?value:placeholder" :label-text="labelText" @click="showPicker"></m-cell>
    <div class="m-picker-bg" v-show="show">
      <div class="picker-header">
        <div class="cancel" @click="showPicker">取消</div>
        <div class="title"></div>
        <div class="submit" @click="submit">确定</div>
      </div>
      <div class="picker picker-3d">
        <div class="picker-items">
          <div class="picker-slot picker-slot-absolute" style="flex:1;">
            <div class="scroller-mask"></div>
            <div class="picker-center-highlight" style="height:36px;margin-top:-18px;">
            </div>
            <div class="picker-slot-wrapper" id="wrapper" ref="wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {draggable, tranUtil} from "./picker.js"
  import {utils,markUtil} from "../../assets/js/utils";

  let VISIBEL_ITEMS_ANGLE_MAP = {
    3: -45,
    5: -25,
    7: -15
  };

  export default {
    name: "MPicker",
    props: {
      //显示个数
      visibleItemCount: {
        type: Number,
        default: 5
      },
      value: {
        type: String,
        default: ''
      },
      itemData: {
        type: Array,
        default: function () {
          return [];
        }
      },
      itemType: {
        type: String,
        default: ''
      },
      itemHeight: {
        type: Number,
        default: 36
      },
      placeholder:{
        type:String,
        default:''
      },
      labelText:{
        type:String,
        default:''
      }
    },
    data() {
      return {
        dragState: {},
        defaultItems: [],
        currentIndex: '',
        resVal: '',
        show: false
      }
    },
    created() {
      if (this.itemData.length > 0) {
        this.defaultItems = this.itemData;
      } else if (this.itemType) {
        switch (this.itemType) {
          case 'date':
            this.defaultItems = ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'];
            break;
        }
      }else {
        this.defaultItems = ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'];
      }
    },
    mounted() {
      let that = this;
      let el = this.$refs['wrapper'];
      let valueIndex = utils.contains(that.defaultItems, that.value);
      valueIndex = valueIndex > 0 ? valueIndex : 0;
      this.resVal = that.defaultItems[valueIndex];

      // 限定容器高度
      el.style.height = that.visibleItemCount * that.itemHeight + 'px';

      // 生成DOM
      let html = '';
      that.defaultItems.forEach(data => {
        html += `<div class="picker-item" style="height:36px;line-height:36px;">${data}</div>`;
      });
      el.innerHTML = html;

      // 激活当前item
      let pickerItems = document.querySelectorAll('.picker-item');
      pickerItems[valueIndex].classList.add('picker-selected');

      document.addEventListener('DOMContentLoaded', function () {
        that.initEvents();
        //定位默认值
        tranUtil.translateElement(el, null, that.value2Translate(valueIndex));
        let items = el.querySelectorAll('.picker-item');
        [].forEach.call(items, function (item, index) {
          tranUtil.translateElement(item, null, that.itemHeight * index);
        });
      });
    },
    methods: {
      showPicker() {
        this.show = !this.show;
      },
      submit() {
        this.show = false;
        this.$emit("input", this.resVal);
      },
      initEvents() {
        let that = this;
        let dragState = {};
        let velocityTranslate, prevTranslate, pickerItems;
        let animationFrameId;
        let dragRange = [-that.itemHeight * (that.defaultItems.length - Math.ceil(that.visibleItemCount / 2)), that.itemHeight * Math.floor(that.visibleItemCount / 2)];
        draggable(that.$refs['wrapper'], {
          start: function (event) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            dragState = {
              range: dragRange,
              start: new Date(),
              startLeft: event.pageX,
              startTop: event.pageY,
              startTranslateTop: tranUtil.getElementTranslate(that.$refs['wrapper']).top
            };
            pickerItems = that.$refs['wrapper'].querySelectorAll('.picker-item');
          },
          drag: function (event) {
            that.$refs['wrapper'].classList.add('dragging');

            dragState.left = event.pageX;
            dragState.top = event.pageY;

            let deltaY = dragState.top - dragState.startTop;
            let translate = dragState.startTranslateTop + deltaY;

            tranUtil.translateElement(that.$refs['wrapper'], null, translate);
            velocityTranslate = translate - prevTranslate || translate;

            prevTranslate = translate;
          },

          end: function () {
            that.$refs['wrapper'].classList.remove('dragging');
            let momentumRatio = 7;
            let currentTranslate = tranUtil.getElementTranslate(that.$refs['wrapper']).top;
            let duration = new Date() - dragState.start;

            let momentumTranslate;
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
            }


            let dragRange = dragState.range;

            setTimeout(function () {
              let translate;
              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / that.itemHeight) * that.itemHeight;
              } else {
                translate = Math.round(currentTranslate / that.itemHeight) * that.itemHeight;
              }

              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);
              tranUtil.translateElement(that.$refs['wrapper'], null, translate);

              that.currentIndex = that.translate2Value(translate);
            }, 10);

            dragState = {};
          }
        });
      },
      value2Translate(valueIndex) {
        let offset = Math.floor(this.visibleItemCount / 2);

        if (valueIndex !== -1) {
          return (valueIndex - offset) * -this.itemHeight;
        }
      },
      translate2Value(translate) {
        let that = this;
        translate = Math.round(translate / that.itemHeight) * that.itemHeight;
        let index = Math.abs((translate - Math.floor(that.visibleItemCount / 2) * that.itemHeight) / that.itemHeight);
        let items = that.$refs['wrapper'].querySelectorAll('.picker-item');

        [].forEach.call(items, function (item, index) {
          item.classList.remove('picker-selected');
        });

        items[index].classList.add('picker-selected');
        return index;
      }
    },
    watch: {
      currentIndex(newVal, oldVal) {
        this.resVal = this.defaultItems[newVal];
      },
      show(newValue){
        markUtil(newValue);
      }
    }
  }
</script>

<style scoped lang="scss">

  @keyframes mymove {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @-webkit-keyframes mymove /* Safari 和 Chrome */
  {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .m-picker-bg {
    z-index: 401;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #eee;
    //max-height: 100%;
    height: auto;
    animation: mymove .3s;
    animation-fill-mode: forwards;
    transform: translateY(100%);

    /* Safari 和 Chrome */
    -webkit-animation: mymove .3s;
    -webkit-animation-fill-mode: forwards;
    overflow-y: auto;

    .picker-header {
      padding: 8px;
      display: flex;
      background-color: #f5f5f5;
      border-bottom: 1px solid #dedede;
      border-top: 1px solid #dedede;
      font-size: 16px;
      .cancel {
        padding-left: 18px;
      }
      .title {
        flex: 1;
      }
      .submit {
        padding-right: 16px;
        color: #ff7f24;
      }
    }
  }

  .picker {
    overflow: hidden;
  }

  .picker-items {
    display: flex;
    justify-content: center;
    padding: 0;
    text-align: center;
    font-size: 24px;
    position: relative;
    color: #000000;
  }

  .picker-center-highlight {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    width: 100%;
    top: 50%;
    margin-top: -18px;
    pointer-events: none;
    background-color: rgba(249, 251, 254, 0.3);
  }

  .picker-center-highlight:before,
  .picker-center-highlight:after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #ccc;
    display: block;
    z-index: 15;
    transform: scaleY(0.5);
  }

  .picker-center-highlight:before {
    top: 0;
    bottom: auto;
    right: auto;
  }

  .picker-center-highlight:after {
    left: 0;
    bottom: 0;
    top: auto;
    right: auto;
  }

  .picker-slot {
    font-size: 18px;
    overflow: hidden;
    position: relative;
    max-height: 100%;
  }

  .picker-slot-wrapper {
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    backface-visibility: hidden;
  }

  .picker-slot-wrapper.dragging,
  .picker-slot-wrapper.dragging .picker-item {
    transition-duration: 0s;
  }

  .picker-item {
    height: 36px;
    line-height: 36px;
    padding: 0 10px;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #a7a9ab;
    left: 0;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    transition-duration: .3s;
    backface-visibility: hidden;
  }

  .picker-slot-absolute .picker-item {
    position: absolute;
  }

  .picker-item.picker-item-far {
    pointer-events: none;
  }

  .picker-item.picker-selected {
    color: #000;
    transform: translate3d(0, 0, 0) rotateX(0);
  }

  .picker-3d .picker-items {
    overflow: hidden;
    perspective: 700px;
  }

  .picker-3d .picker-item,
  .picker-3d .picker-slot,
  .picker-3d .picker-slot-wrapper {
    transform-style: preserve-3d;
  }

  .picker-3d .picker-slot {
    overflow: visible;
  }

  .picker-3d .picker-item {
    transform-origin: center center;
    backface-visibility: hidden;
    transition-timing-function: ease-out;
  }

  .scroller-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    margin: 0 auto;
    width: 100%;
    z-index: 3;
    pointer-events: none;
    transform: translateZ(0px);
    background-image: -webkit-linear-gradient(top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), -webkit-linear-gradient(bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6)), linear-gradient(to top, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.6));
    background-position: top, bottom;
    background-size: 100% 72px;
    background-repeat: no-repeat;
  }
</style>
