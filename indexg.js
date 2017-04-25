/**
 * Created by meteor on 15/8/12.
 */

var fs=require('fs');

var dt=require('./lib/date');
var tf=require('./lib/typeof');
var str=require('./lib/str');
//
var str_index="var dt=require('./lib/date'); \n";
str_index+="var tf=require('./lib/typeof'); \n";
str_index+="var str=require('./lib/str'); \n";
str_index+="module.exports={ \n";

for (var item in dt){
    str_index+="   "+item+":dt."+item+",\n";
}
for (var item in tf){
    str_index+="   "+item+":tf."+item+",\n";
}
for (var item in str){
    str_index+="   "+item+":str."+item+",\n";
}
str_index+="};\n";
fs.writeFile('./index.js', str_index, function(err) {
    if (err) {
        throw err;
    }
});
