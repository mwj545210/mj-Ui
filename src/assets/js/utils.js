export const utils = {
  //查询返回索引
  contains:function (array, val) {
    if (val) {
      let i = array.length;
      while (i--) {
        if (array[i] === val) {
          return i;
        }
      }
      return -1;
    } else {
      return -1;
    }
  }
};

export const markUtil = function (option,callback) {
  let dbBody = document.getElementsByTagName("body")[0];
  if (option) {
    dbBody.className="not-scroll";
    let div = document.createElement("div");
    div.className = "m-mark";
    div.style.height = document.getElementsByTagName("html")[0].offsetHeight + 'px';
    div.addEventListener('click',callback);
    dbBody.appendChild(div);
  } else {
    dbBody.className="";
    let removeObj = dbBody.getElementsByClassName('m-mark')[0];
    removeObj.parentNode.removeChild(removeObj);
  }
};
