var rect = require("./rectangle");

function solvingRect(l,b){
    console.log("Solving for rectangle with l = " +l + " and b = "+b);
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("Error: ",err.message);
        }
        else{
            console.log("The area of the Rectangle of l="+l+" and b = "+b+" is "+rectangle.area());
            console.log("The perimeter of the Rectangle of l="+l+" and b = "+b+" is "+rectangle.perimeter());
        }
    });

    console.log("This statement is after the call to the rect");
}

solvingRect(2,4);
solvingRect(3,10);
solvingRect(-3,5);