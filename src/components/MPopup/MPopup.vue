<template>
  <div class="m-popup">
    <div @click="click">测试</div>
    <div class="popup-cell" :style="height + 'px'" v-show="show" ref="show">
    </div>
  </div>
</template>

<script>

  import MPicker from "../MPicker/MPicker";
  export default {
    name: "MPopup",
    components: {MPicker},
    props: {
      "height": {
        type: [String, Number],
        default: 200
      }
    },
    data() {
      return {
        'isFormElm': true,
        'show': true
      }
    },
    methods:{
      click(){
        this.show = !this.show;
        if (this.show) {
          // this.$refs['show'].setAttribute("style","transform: translateY(0);")
        } else {
          // this.$refs['show'].setAttribute("style","")
        }
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
      background: #eee;
      //max-height: 100%;
      height: auto;
      animation:mymove .3s;
      animation-fill-mode:forwards;
      transform: translateY(100%);

      /* Safari 和 Chrome */
      -webkit-animation:mymove .3s;
      -webkit-animation-fill-mode:forwards;
      overflow-y: auto;
    }
  }

</style>
