<template>
  <div class="m-popup">
    <div @click="click">测试</div>
    <div class="popup-cell" :style="'height:'+height + 'px;'" v-if="show" ref="show">
      <div class="slot-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>

  import {markUtil} from "../../assets/js/utils";

  export default {
    name: "MPopup",
    props: {
      "height": {
        type: [String, Number],
        default: 200
      }
    },
    data() {
      return {
        'isFormElm': true,
        'show': false
      }
    },
    methods:{
      click(){
        let that = this;
        that.show = !that.show;
        markUtil(that.show,that.click)
      }
    }
  }
</script>

<style scoped lang="scss">

  .m-popup {

    @keyframes mymove
    {
      from {transform: translateY(100%);}
      to {transform: translateY(0);}
    }

    @-webkit-keyframes mymove /* Safari 和 Chrome */
    {
      from {transform: translateY(100%);}
      to {transform: translateY(0);}
    }

    .popup-cell {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 401;
      background: #ffffff;
      border-top: 1px solid #ececec;
      max-height: 100%;
      height: auto;
      animation:mymove .3s;
      animation-fill-mode:forwards;
      transform: translateY(100%);

      /* Safari 和 Chrome */
      -webkit-animation:mymove .3s;
      -webkit-animation-fill-mode:forwards;
      overflow-y: auto;
    }

    .slot-content {
      margin: 5px;
    }
  }

</style>
