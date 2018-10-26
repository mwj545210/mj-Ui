<template>
  <div class="m-cell">
    <div class="m-cell-flex">
      <label>{{labelText}}</label>
      <div class="m-cell-val" :align="right?'right':'left'" @click="$emit('click')">
          {{value}}
      </div>
      <div class="cell-ft" v-if="showFt">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MCell",
    props: {
      "right": {
        type: Boolean,
        default: true
      },
      "showFt": {
        type: Boolean,
        default: true
      },
      "labelText":{
        type: String,
        default:''
      },
      "value":{
        type: String,
        default:''
      }
    }
  }
</script>

<style scoped lang="scss">

  .m-cell {
    padding: 0 .5rem;

    .m-cell-flex {
      display: flex;
      line-height: 1.4;
      font-size: .8rem;
      border-bottom: 1px solid #ececec;
      padding: .5rem 0;

      label {
        color: #333;
        padding: .5rem 0;
        flex: 5rem 0 0;
        text-align: center;
      }

      .m-cell-val {
        width: 100%;
        color: #999;
        padding: .5rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
      }

      .cell-ft {
        padding: 0 0.2rem;
      }

      .cell-ft:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #999;
        border-style: solid;
        -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        top: .45rem;
        position: relative;
      }
    }
  }

</style>
