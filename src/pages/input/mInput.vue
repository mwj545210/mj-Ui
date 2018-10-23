<template>
  <div>
    <m-form :model="form" ref="bodyform">
      <m-input name="price" :name="'用户名'" :placeholder="'请输入用户名'" v-model="form.userName" :validator="['required']"></m-input>
      <m-input name="price" :name="'手机号'" :placeholder="'请输入手机号'" v-model="form.age" :validator="['required','mobile']"></m-input>
      <m-input name="price" :name="'用户名'" :placeholder="'请输入用户名'" v-model="form.mobile" :validator="['required']"></m-input>
      <button @click="submitButtonClick">提交</button>
    </m-form>
  </div>
</template>

<script>
    export default {
      name:"mj-input",
      data:function(){
        return {
          form:{
            userName:'',
            age:'',
            mobile: ''
          },
          mark:false
        }
      },
      methods:{
        submitButtonClick() {
          var that = this;
          // if (that.$refs['bodyform'].check() === true) {
          // }
          this.mark=true;
          document.getElementsByTagName("body")[0].className="notScroll";
        },
      },
      watch:{
        mark(newVal){
          if (newVal == true) {
            console.log(newVal);

          }
        }
      }
    }
</script>

<style scoped>


</style>
