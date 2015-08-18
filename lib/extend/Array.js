/**
 * 清空数组
 * @returns {Array}
 */
Array.prototype.clear = function () {
    this.length = 0;
    return this;
}
/**
 * 返回item中数组中的位置
 * @param item
 * @returns {number}
 */
Array.prototype.indexOf = function (item) {
    if (this.length == 0) return -1;
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i] === item) {
            return i;
        }
    }
    return -1;
}
/**
 *
 * @param item
 * @returns {boolean}
 */
Array.prototype.exists = function(item){
    return isEmpty(item)?false:this.indexOf(item) != -1;
}
/**
 *
 * @returns {null}
 */
Array.prototype.first=function() {
    return this.length==0?null:this[this.length-1];
}
/**
 * 获取数组最后一个元素
 * @returns {null}
 */
Array.prototype.last=function() {
    return this.length==0?null:this[this.length-1];
}
/**
 * 克隆一个数组
 * @returns {Array.<T>}
 */
Array.prototype.clone = function () {
    // return [].concat(this);
    return this.slice(0);
}
/**
 *
 * @param iterator
 */
Array.prototype.each = function(iterator){
    if (type(iterator) != 'function') return;
    for(var i = 0; i < this.length; i++){
        iterator(i, this[i]);
    }
}
/**
 * 按条件过渡数组
 * @param fun
 * @returns {Array}
 */
Array.prototype.filter = function (fun) {
    if (type(fun) != 'function') return this;
    var values = [];
    for (var i = 0, len = this.length; i < len; i++) {
        if (fun.call(null, i, this[i], this)) {
            values.push(this[i]);
        }
    }
    return values;
}
/**
 *
 * @param item
 * @returns {*}
 */
Array.prototype.remove = function (item) {
    var itemIndex = this.indexOf(item);
    if (itemIndex >= 0) {
        this.splice(itemIndex, 1);
        return itemIndex;
    }
    return -1;
}
/**
 *
 * @param arr
 */
Array.prototype.removeAll = function (arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        this.remove(arr[i]);
    }
}
/**
 *
 * @param item
 */
Array.prototype.add = function (item) {
    this.push(item);
}
/**
 *
 * @param arr
 */
Array.prototype.addAll = function (arr) {
    for (var i = 0, len = arr.length; i < len; i++) {
        this.add(arr[i]);
    }
}
Array.prototype.size = function(){
    return this.length;
}
// 数字数组由小到大排序
Array.prototype.Min2Max = function() {
    var oValue;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (this[i] < this[j]) {
                oValue = this[i];
                this[i] = this[j];
                this[j] = oValue;
            }
        }
    }
    return this;
};

// 数字数组由大到小排序
Array.prototype.Max2Min = function() {
    var oValue;
    for (var i = 0; i < this.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (this[i] > this[j]) {
                oValue = this[i];
                this[i] = this[j];
                this[j] = oValue;
            }
        }
    }
    return this;
};

// 获得数字数组中最大项
Array.prototype.GetMax = function() {
    var oValue = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] > oValue) {
            oValue = this[i];
        }
    }
    return oValue;
};

// 获得数字数组中最小项
Array.prototype.GetMin = function() {
    var oValue = 0;
    for (var i = 0; i < this.length; i++) {
        if (this[i] < oValue) {
            oValue = this[i];
        }
    }
    return oValue;
};


