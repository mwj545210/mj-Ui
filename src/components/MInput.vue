<template>
  <div class="mInput-cell" :disabled="disabled" v-on:click="event_click">
    <div class="mInput-cell-flex" :data-state="viewState">
      <label class="mInput-cell-label">{{name}}</label>
      <input class="mInput-cell-item" :type="type" :placeholder="placeholder"
             :disabled="disabled" :readonly="readonly" :value="value" ref="inputElm" v-if="type!=='textarea'"
             v-on:focus="event_focus" v-on:blur="event_blur" v-on:input="event_input"
             v-on:keyup.enter="event_keyup_enter"/>
      <div class="close" v-show="clearShow" @click="event_clear"></div>
    </div>
    <div class="error" v-show="viewState == 2" >{{errorMsg}}</div>
  </div>
</template>
<script>
  import {Validator} from '../assets/js/validator.js'
  export default {
    props: {
      'name': '',
      'type': {
        type: String,
        default: 'text'
      },
      'value': {
        type: [String, Number],
        default: ''
      },
      'readonly': null,
      'disabled': null,
      'autoFocus': {
        type: Boolean,
        default: false
      },
      'validator': Array,
      'placeholder': null
    },
    data() {
      return {
        'errorMsg': '',
        'viewState': 0,
        'hasClear': 0,
        'clearShow':false
      };
    },
    mounted() {
      if (this.autoFocus) {
        this.$refs['inputElm'].focus();
      }
    },
    methods: {
      check(value) {
        let validVal = value != null ? value : this.value;
        let valid = Validator(validVal,this.validator);
        if (!valid.state) {
          this.errorMsg = valid.message;
          this.viewState = 2;
          return false;
        }else {
          this.errorMsg = '';
        }
        return true;
      },
      //事件
      event_clear(e) {
        this.$emit('input', '');
        this.$emit('clear');
        this.$refs['inputElm'].focus();
        this.clearShow = false;
      },
      event_blur(e) {
        this.viewState = 0;
        this.clearShow = false;
        this.check();
        this.$emit('blur', e);
      },
      event_focus(e) {
        this.viewState = 0;
        if (this.value) {
          this.clearShow = true;
        }
        this.$emit('focus', e);
      },
      event_input(e) {
        let value = e.currentTarget.value;
        if (value) {
          this.clearShow = true;
        }
        this.$emit('input', value);
        //输入的时候实时校验
        // this.check(value);
      },
      event_click(e) {
        this.$emit('click', e);
      },
      event_keyup_enter(e) {
        e.preventDefault();
        e.stopPropagation();
        this.$emit('keyup-enter', e);
      },
    },
    watch: {
      value(now, old) {
        if (this.disabled === undefined) {
          if (this.value === '') {
            this.hasClear = 0;
          } else {
            this.hasClear = 1;
          }
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .mInput-cell {

    .mInput-cell-flex {
      padding: 0 0.5rem;
      display: flex;
      line-height: 2.5;

      .mInput-cell-label {
        flex: 6rem;
        font-size: .8rem;
        border-bottom: 1px solid #ececec;
        padding: .5rem 0;
      }

      .mInput-cell-item {
        width: 100%;
        border: none;
        padding: .5rem;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        border-bottom: 1px solid #ececec;
      }

      .mInput-cell-item:focus {
        outline: none;
      }
    }

    .mInput-cell-flex[data-state ='2'] {
      border: 1px solid #FF7F24;
      border-radius: 5px;
      box-shadow: 0 0 4px rgba(214, 133, 0, 0.6);
    }

    .error {
      font-size: .5rem;
      text-align: right;
      color: red;
      padding-right: .5rem;
    }

    .box{
      width: 50px;
      height: 50px;
      background-color: #e6e6e6;
      border: 1px solid white;
      border-radius: 100%;
      outline: 15px solid white;
      outline-offset: -39px;
      cursor: pointer;
      transform: rotate(45deg);
    }

    .close {
      /* still bad on picking color */
      background: #ececec;
      color: #fff;
      /* make a round button */
      border-radius: 12px;
      /* center text */
      line-height: 14px;
      text-align: center;
      height: 16px;
      width: 16px;
      font-size: 18px;
      padding: 1px;

      position: absolute;
      right: .9rem;
      margin-top: .85rem;
    }
    /* use cross as close button */
    .close::before {
      content: "\2716";
      font-size: 13px;
    }

  }

  /*.mInput-cell[data-state='2'] {*/
  /*.mInput-cell-item {*/
  /*border-: solid 1px #4881d6 !important;*/
  /*box-shadow: 0 0 4px rgba(72, 129, 214, 0.6);*/
  /*z-index: 1000;*/
  /*}*/
  /*}*/

  /*.custom-input { position: relative; border: solid 1px #d8d8d8; border-radius: 4px; background: #fff; transition: all .3s; -webkit-transition: all .3s; }*/
  /*.custom-input input.value-text { width: 100%; display: block; line-height: 34px; height: 34px; padding: 0 10px; }*/
  /*.custom-input textarea.value-text { width: 100%; display: block; line-height: 22px; padding: 8px 10px; }*/

  /*.custom-input .value-text[disabled] { cursor: not-allowed; }*/
  /*.custom-input .clear-btn { position: absolute; right: 10px; top: 50%; font-size: 16px; margin-top: -8px; cursor: pointer; opacity: 0; background: #fff; transition: opacity .1s; -webkit-transition: opacity .1s; }*/
  /*.custom-input .clear-btn:hover:before { color: #659ae8; }*/
  /*.custom-input .error-text { position: absolute; bottom: -18px; left: 0; font-size: 12px; color: #f56c6c; line-height: 14px; pointer-events: none; opacity: 0; transform: translateY(-2px); -webkit-transform: translateY(-2px); transition: all .3s; -webkit-transition: all .3s; }*/
  /*.custom-input:hover .clear-btn { opacity: 1; }*/
  /*!*不可用状态*!*/
  /*.custom-input[disabled] { background: #f5f5f5; }*/
  /*!*选中状态*!*/
  /*.custom-input[data-state='1'] { border: solid 1px #4881d6 !important; box-shadow: 0 0 4px rgba(72,129,214,0.6); z-index: 1000; }*/
  /*!*错误状态*!*/
  /*.custom-input[data-state='2'] { border: solid 1px #f56c6c !important; }*/
  /*.custom-input[data-state='2'] .error-text { opacity: 1; transform: translateY(0); -webkit-transform: translateY(0); transition: all .3s; -webkit-transition: all .3s; }*/
</style>
