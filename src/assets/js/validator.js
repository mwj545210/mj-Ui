//身份证正则校验
export const idCardVali = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
//居民户口蒲 9位数
export const householdVali = /^\d{9}$/;
//出生证
export const birthVali = /[A-Z]{1}\d{9}$/;
//港澳通行证
export const hkmcPassVali = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
// 台湾通行证
export const taiwanPassVali = /^[0-9]{8}$/;
//护照
export const passportVali = /^[a-z0-9A-Z]{6,25}$/;
//外国人永久居留证
export const permanentResidenceVali = /^[a-zA-Z]{3}\d{12}$/;
//小数点后两位校验
export const int = /^[1-9]\d*$/;
//被保人收入校验
export const insuredInt =/^[0-9]\d*$/;
//固定电话校验
export const fixedTel = /([0-9]{3,4}-)?[0-9]{7,8}$/;
//手机号码校验
export const mobile = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
//邮箱校验
export const mail = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
//表情包校验
export const emoji = /\*[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
//空格校验
export const space = /\s+/g;


var validator = {
  required: {
    valid: function (val) {
      //去除前后两端的空格
      let res = val.replace(/(^[\s\n\t]+|[\s\n\t]+$)/g, "");
      return res.length > 0;
    },
    message: '必填项'
  },
  //手机号码校验
  mobile: {
    valid: function (val) {
      return mobile.test(val)
    },
    message: '请输入正确的手机号码'
  },
  mail: {
    valid: function (val) {
      return mail.test(val)
    },
    message: '请输入正确的邮箱'
  },
  idCardVali:{
    valid: function (val) {
      return idCardVali.test(val)
    },
    message: '请输入正确的身份证'
  },
  emoji: {
    valid: function (val) {
      return emoji.test(val)
    },
    message: '有非特殊字符'
  }

};

/**
 * 校验
 * @param val 校验内容
 * @param validList 输入框校验的数组 如:['mobile','required']
 * @returns {{state: boolean, message: string}}
 * @constructor
 */
export const Validator = function (val, validList) {
  let result = {
    state:true,
    message:''
  };
  if (validList) {
    for (let i = 0; i < validList.length; i++) {
      let validName = validList[i];
      if (!validator[validName].valid(val)) {
        result.state = false;
        result.message = validator[validName].message;
        break;
      }
    }
  }
  return result;
};
