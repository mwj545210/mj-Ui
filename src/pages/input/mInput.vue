<template>
  <div>
    <m-form :model="form" ref="bodyform">
      <m-input name="price" :name="'用户名'" :text-right="true" :placeholder="'请输入用户名'" v-model="form.userName" :validator="['required']"></m-input>
      <m-input name="price" :name="'手机号'" :placeholder="'请输入手机号'" v-model="form.age" :validator="['required','mobile']"></m-input>
      <m-input name="price" :name="'用户名'" :placeholder="'请输入用户名'" v-model="form.mobile" :validator="['required']"></m-input>
      <!--<m-picker :label-text="'picker'" v-model="pickerValue" :placeholder="'请选择时间'"></m-picker>-->
      <!--<m-cell :value="'最右'" :label-text="'cell'" :right="false"></m-cell>-->
      <!--<m-cell :value="'最右2'" :label-text="'cell'" ></m-cell>-->
      <!--<m-cell :value="'最右2'" :label-text="'cell'" ></m-cell>-->
      <!--<m-cell v-model="cell" :label-text="'cell'" :show-ft="false"></m-cell>-->
      <!--<m-picker :label-text="'picker'" v-model="pickerValue" :placeholder="'请选择时间'"></m-picker>-->
      <!--<m-picker :label-text="'picker'" v-model="pickerValue3" :placeholder="'显示选择3个'" :visibleItemCount="3"></m-picker>-->
      <!--<m-picker :label-text="'picker'" v-model="pickerValue7" :placeholder="'显示选择7个'" :visibleItemCount="7"></m-picker>-->
      <m-test :label-text="'picker'" v-model="pickerValue7" :placeholder="'显示选择7个'" :visibleItemCount="7"></m-test>
      <!--<button @click="submitButtonClick">提交</button>-->
    </m-form>
  </div>
</template>

<script>
    import MPicker from "../../components/MPicker/MPicker";
    import MTest from "../../components/MPicker/Mtest";
    export default {
      name:"mj-input",
      components: {MTest, MPicker},
      data:function(){
        return {
          form:{
            userName:'',
            age:'',
            mobile: ''
          },
          mark:false,
          test:false,
          cell:"最右3",
          pickerValue:'',
          pickerValue3:'',
          pickerValue7:''
        }
      },
      methods:{
        submitButtonClick() {
          var that = this;
          // if (that.$refs['bodyform'].check() === true) {
          // }
          this.mark=!this.mark;
          document.getElementsByTagName("body")[0].className="notScroll";
        },
      },
      watch:{
        mark(newVal){
          if (newVal == true) {
            console.log(newVal);

          }
        }
      },
      created(){

      }
    }
</script>

<style scoped>


</style>
