function flatten2tree(x){
    var child=[];
    for(var i=0;i<x.length;i++){
        if(x[i].pid==1){
            child=child.concat(x.splice(i,1));
            i--;
        }
    }
    for(var i=0;i<x.length;i++){
        if(x[i].id==1){
            x[i].children=child;
        }
    }
    return x;
}


var arr=[{id:1,pid:0,name:'a',level:1},{id:2,pid:0,name:'b',level:1},{id:3,pid:1,name:'aa',level:2},{id:4,pid:1,name:'ab',level:2}]


console.log(flatten2tree(arr));