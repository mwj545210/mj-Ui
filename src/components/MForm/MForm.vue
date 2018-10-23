<template>
  <div><slot></slot></div>
</template>
<script>
    export default {
        props: {
            'model': Object,
        },
        data: function () {
            var that = this;
            var init_model = oftenFunc.clone(that.model);
            return {
                'init_model': init_model
            };
        },
        methods: {
            reset: function () {
                var that = this;
                that.$children.forEach(function (item) {
                  var value = that.init_model[item.name];
                  item.viewState = 0;
                  item.$emit('input', value);
                });
            },
            check: function () {
                var that = this;
                var pass = true;
                that.$children.forEach(function (item) {
                    if (item.isFormElm && item.check() === false) {
                        pass = false;
                    }
                });
                return pass;
            }
        },
    }
</script>
<style scoped>

</style>
