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
          <div class="scroller-mask" :data-count="visibleItemCount"></div>
          <div class="picker-center-highlight" style="height:36px;margin-top:-18px;">
          </div>
          <div class="picker-slot picker-slot-absolute" style="flex:1;" v-for="(item,index) of defaultItems">
            <div class="picker-slot-wrapper" :id="index" :ref="index"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import {draggable, translateUtil} from "./picker.js"
  import {markUtil, recursionArray} from "../../assets/js/utils";
  import {china_address} from "../../assets/js/china_address"

  export default {
    name: "MTest",
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
      //多级联
      itemsData: {
        type: Array,
        default: function () {
          return [[{id: 1, value: "A"}, {id: 2, value: "B"}, {id: 3, value: "C"}],
            [{id: 11, value: "a", parent: 1}, {id: 22, value: "ab", parent: 1}, {id: 33, value: "ac", parent: 1},
              {id: 44, value: "D", parent: 2}, {id: 55, value: "E", parent: 2}, {id: 66, value: "F", parent: 3}],
            [{id: 111, value: "a", parent: 11}, {id: 222, value: "ab", parent: 22}, {id: 112, value: "D", parent: 11}]];
        }
      },
      //多少级联
      itemsNum: {
        type: Number,
        default: 1
      },
      itemType: {
        type: String,
        default: ''
      },
      itemHeight: {
        type: Number,
        default: 36
      },
      placeholder: {
        type: String,
        default: ''
      },
      labelText: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        dragState: {},
        defaultItems: [],
        currentIndex: '',
        resVal: '',
        show: false,
        currentData: [1, 1, 0],
        dragRange:[]
      }
    },
    created() {
      // console.log(this.itemsData);
      if (this.itemData.length > 0) {
        this.defaultItems = this.itemData;
      } else if (this.itemType) {
        switch (this.itemType) {
          case 'date':
            this.defaultItems = ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007'];
            break;
        }
      } else {
        this.defaultItems = china_address;
      }
    },
    mounted() {
      this.createdItem();

    },
    methods: {
      showPicker() {
        this.show = !this.show;
      },
      submit() {
        this.show = false;
        this.$emit("input", this.resVal);
      },
      createdItem(){
        this.defaultItems = recursionArray(china_address, "aearList",this.currentData);
        for (let item in this.defaultItems) {
          this.dragRange.push(0);
          this.createWrapper(item);
        }
      },
      createWrapper(wrapperId) {
        let that = this;
        let el = that.$refs[wrapperId][0];
        let valueIndex = that.currentData[wrapperId];
        // let valueIndex = utils.contains(that.defaultItems, that.value);
        // valueIndex = valueIndex > 0 ? valueIndex : 0;
        // this.resVal = that.defaultItems[valueIndex];


        // 限定容器高度
        el.style.height = that.visibleItemCount * that.itemHeight + 'px';

        // 生成DOM
        let html = '';

        //默认值中第1个（第1个数组索引）对应的数组对象 ---从索引1开始
        let dbItem;
        if (wrapperId - 1 >= 0) {
          dbItem = that.defaultItems[wrapperId - 1][that.currentData[wrapperId - 1]];
        }

        that.defaultItems[wrapperId].forEach(data => {
          html += `<div class="picker-item" style="height:36px;line-height:36px;">${data.areaName}</div>`;
        });
        el.innerHTML = html;

        // 激活当前item
        let pickerItems = document.querySelectorAll('.picker-item');
        pickerItems[that.currentData[wrapperId]].classList.add('picker-selected');

        that.dragRange[wrapperId] = [-that.itemHeight * (that.defaultItems[wrapperId].length - Math.ceil(that.visibleItemCount / 2)), that.itemHeight * Math.floor(that.visibleItemCount / 2)];

        document.addEventListener('DOMContentLoaded', function () {
          that.initEvents(wrapperId);
          //定位默认值
          translateUtil.translateElement(el, null, that.value2Translate(that.currentData[wrapperId]));
          let items = el.querySelectorAll('.picker-item');
          [].forEach.call(items, function (item, index) {
            translateUtil.translateElement(item, null, that.itemHeight * index);
          });
        });
      },
      initEvents(wrapperId) {
        let that = this;
        let dragState = {};
        let velocityTranslate, prevTranslate, pickerItems;
        let animationFrameId;
        draggable(that.$refs[wrapperId][0], {
          start: function (event) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
            dragState = {
              range: that.dragRange[wrapperId],
              start: new Date(),
              startLeft: event.pageX,
              startTop: event.pageY,
              startTranslateTop: translateUtil.getElementTranslate(that.$refs[wrapperId][0]).top
            };
            pickerItems = that.$refs[wrapperId][0].querySelectorAll('.picker-item');
          },
          drag: function (event) {
            that.$refs[wrapperId][0].classList.add('dragging');

            dragState.left = event.pageX;
            dragState.top = event.pageY;

            let deltaY = dragState.top - dragState.startTop;
            let translate = dragState.startTranslateTop + deltaY;

            translateUtil.translateElement(that.$refs[wrapperId][0], null, translate);
            velocityTranslate = translate - prevTranslate || translate;

            prevTranslate = translate;
          },

          end: function () {
            that.$refs[wrapperId][0].classList.remove('dragging');
            let momentumRatio = 7;
            let currentTranslate = translateUtil.getElementTranslate(that.$refs[wrapperId][0]).top;
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
              translateUtil.translateElement(that.$refs[wrapperId][0], null, translate);

              that.currentData[wrapperId] = that.translate2Value(translate, wrapperId);

              for (let i = parseInt(wrapperId) + 1; i < that.defaultItems.length; i++) {
                that.currentData[i] = 0;
              }

              that.defaultItems = recursionArray(china_address, "aearList", that.currentData);
              that.createdItem();
              console.log(that.currentData);
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
      translate2Value(translate, wrapperId) {
        let that = this;
        translate = Math.round(translate / that.itemHeight) * that.itemHeight;
        let index = Math.abs((translate - Math.floor(that.visibleItemCount / 2) * that.itemHeight) / that.itemHeight);
        let items = that.$refs[wrapperId][0].querySelectorAll('.picker-item');

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
      show(newValue) {
        markUtil(newValue, this.showPicker);
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
    background-repeat: no-repeat;
  }

  .scroller-mask[data-count = '3'] {
    background-size: 100% 36px;
  }

  .scroller-mask[data-count = '5'] {
    background-size: 100% 72px;
  }

  .scroller-mask[data-count = '7'] {
    background-size: 100% 110px;
  }

</style>
