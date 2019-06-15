function compress(x){
    var attr=[];
    var father=[];
    for(var key in x[0]){
        attr.push(key);
    };
    father.push(attr);
    for(var item of x){
        var son=[];
        for(var i in item){
            son.push(item[i]);
        }
        father.push(son);
    }
    return father;
}


var arr=[{name:'zhangsan',age:20,sex:'male'},{name:'lisi',age:19,sex:'female'},{name:'wangwu',age:23,sex:'male'}];


console.log(compress(arr));