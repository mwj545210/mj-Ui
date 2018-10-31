export const utils = {
  //查询返回索引
  contains: function (array, val) {
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

let noMove = function (e) {
  e.preventDefault();
};
//生成遮罩层
export const markUtil = function (option, callback) {
  let dbBody = document.getElementsByTagName("body")[0];

  if (option) {
    dbBody.className = "not-scroll";
    let div = document.createElement("div");
    div.className = "m-mark";
    div.addEventListener('click', callback);
    dbBody.appendChild(div);

    //阻止滑动界面
    dbBody.addEventListener('touchmove', noMove, {passive: false});
  } else {
    dbBody.className = "";
    let removeObj = dbBody.getElementsByClassName('m-mark')[0];
    removeObj.parentNode.removeChild(removeObj);
    dbBody.removeEventListener('touchmove', noMove);
  }
};

//将通过属性
export const getItemByArrayItem = function (array, value, key) {
  array = [{id: 11, value: "a", parent: 1}, {id: 22, value: "ab", parent: 1}, {id: 33, value: "ac", parent: 1},
    {id: 44, value: "D", parent: 2}, {id: 55, value: "E", parent: 2}, {id: 66, value: "F", parent: 3}]
  value = 1;
  key = 'parent';
  let resList = [];
  array.forEach(res => {
    if (res[key] == value) {
      resList.push(res);
    }
  });
  return resList;
};

/**
 * 将循环出的数组组成一个新的数组 格式如下 [[],[],[]]
 * @param array
 * @param key
 * @param index
 */
export const recursionArray = function (array, key, index = []) {
  let floorNum = 0;
  let resList = [array];
  let nextFloor = array;
  let unWhile = true;
  while (unWhile) {
    if (index.length > floorNum) {
      nextFloor = nextFloor[index[floorNum]][key];
      floorNum++;
    }else {
      nextFloor = nextFloor[0][key];
    }
    if (nextFloor) {
      resList.push(nextFloor);
    }else {
      unWhile = false;
    }
  }

  console.log(resList);
  return resList;
};
