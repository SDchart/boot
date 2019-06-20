function compress(x){
    // var attr=[];
    var father=[];
    // for(var key in x[0]){
    //     attr.push(key);
    // };
    var attr=Object.keys(x[0]);
    father.push(attr);
    for(var item of x){
    //     var son=[];
    //     for(var i in item){
    //         son.push(item[i]);
    //     }
        var son=Object.values(item);
        father.push(son);
    // console.log(son);
    }
    return father;
}


var arr=[{name:'zhangsan',age:20,sex:'male'},{name:'lisi',age:19,sex:'female'},{name:'wangwu',age:23,sex:'male'}];

// console.log(Object.values(arr),Object.keys(arr));

console.log(compress(arr));