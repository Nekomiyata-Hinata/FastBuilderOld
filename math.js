
//极坐标to直角坐标
function getpos(r, d){
    var x = Math.round(r*Math.cos(d));
    var y = Math.round(r*Math.sin(d));
    console.log(x);
    console.log(y);
}
getpos(10, 50);
console.log("================")
function sc2rc(r, θ, φ){
    var x = Math.round(r*Math.sin(θ)*Math.cos(φ));
    var y = Math.round(r*Math.sin(θ)*Math.sin(φ));
    var z = Math.round(r*Math.cos(θ));
    console.log(x);
    console.log(y);
    console.log(z);
}
sc2rc(10,10,10)
