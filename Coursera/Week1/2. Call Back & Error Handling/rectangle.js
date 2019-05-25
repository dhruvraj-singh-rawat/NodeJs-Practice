module.exports = ( x,y,callback)=>{
    if(x<= 0 || y<=0){
        setTimeout(()=>
            callback(new Error("Rectangle dimentions should be greater than 0"),
            null),
            2000);// 1st param is the function and the second for how much time it would be delayed
    }
    else{
        setTimeout(()=>
            callback(null,
            {
                perimeter:() => (2*(x+y)),
                area:() =>(x*y)
            }),
            2000);// 1st param is the function and the second for how much time it would be delayed
    }
        
        
}




exports.perimeter = (x,y) => (2*(x+y));
exports.area = (x,y) =>(x*y);