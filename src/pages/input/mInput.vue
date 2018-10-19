<template>
  <div>
    <form-wrap :model="form" ref="bodyform">
      <m-input name="price" :name="'用户名'" :placeholder="'请输入用户名'" v-model="form.userName" :validator="['required']"></m-input>
      <m-input name="price" :name="'用户名'" :placeholder="'请输入用户名'" v-model="form.age" :validator="['required']"></m-input>
      <m-input name="price" :name="'用户名'" :placeholder="'请输入用户名'" v-model="form.mobile" :validator="['required']"></m-input>
      <button @click="submitButtonClick">提交</button>
    </form-wrap>
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
          }
        }
      },
      methods:{
        submitButtonClick() {
          var that = this;
          if (that.$refs['bodyform'].check() === true) {
          }
        },
      }
    }
</script>

<style scoped>

</style>
