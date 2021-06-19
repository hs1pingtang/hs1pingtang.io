// 中文验证 (正则)
$.validator.addMethod('chinese', function (value, input, params){
  if(params != true){
    return true;
  }
  return new RegExp("^(?:[\u4e00-\u9fa5]{1,})$").test(value);
});

// 手机号码验证 (正则)
$.validator.addMethod('phone', function (value, input, params){
  if(params != true){
    return true;
  }
  return new RegExp("^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$").test(value);
});

// 只允许输入中文或字母
$.validator.addMethod("chineseAndLetter", function(value, element) {
  var score = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  return this.optional(element) || (score.test(value));
}, "请输入中文或字母");
