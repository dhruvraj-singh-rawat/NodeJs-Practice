var rect = require("./rectangle");
/*
var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) =>(x*y)
};
*/

function solvingRect(l,b){
    console.log("Solving for rectangle with l = " +l + " and b = "+b);
    if(l<=0 || b<=0){
        console.log("Rectangle Dimentions should be greater than zero");
    }
    else{
        console.log("The area of the rectangle is "+rect.area(l,b));
        console.log("The perimeter of the rectangle is "+rect.perimeter(l,b));
    }
}

solvingRect(2,4);
solvingRect(3,10);
solvingRect(-3,5);