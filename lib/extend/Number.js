/**
 * Created by meteor on 15/8/13.
 */
// 数字补零
Number.prototype.LenWithZero = function(oCount) {
    var strText = this.toString();
    while (strText.length < oCount) {
        strText = '0' + strText;
    }
    return strText;
};

// Unicode还原
Number.prototype.ChrW = function() {
    return String.fromCharCode(this);
};