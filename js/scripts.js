
   
function getTriangleArea(a, h) {
    
    if (a <= 0) {
        return alert('nieprawilowe dane');
    }
    
    else if (h <= 0){
        return alert('nieprawilowe dane');
    }
    
    else {
        return (a * h / 2);
    }
}
console.log(getTriangleArea(10,6)); 

var triangle1Area = getTriangleArea(10,15);
var triangle2Area = getTriangleArea(-3,15);
var triangle3Area = getTriangleArea(12,5);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

