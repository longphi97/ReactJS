var x = [5, 8, 4, 1, 7, 3, 4, 1,45];
function SumArray(x) {
    var sum =0;
    var i = 0;
    for (i=0; i< x.length; i++) {
        sum += x[i];
    } return sum;
}
console.log("Case 1 = ",SumArray(x));
function SumArray1(x) {
    var sum = 0;
    x.forEach(element => {
            sum += element;
    }); 
    return sum;
};
console.log("case 2 = ",SumArray1(x));
function SumArray2(x) {
    var sum = 0;
    x.map(element => {
            sum += element;
    });
    return sum;
}
console.log("case 3 = ",SumArray2(x));
function SumArray3(x) {
    var i = 0;
    var sum = 0;
    while (i < x.length){
        sum += x[i];
        i++;
    }
    return sum;
}
console.log("Case 4 =",SumArray3(x));
const total = x.reduce((sum,element) => {
        return  sum + element;
    });
console.log("case 5 =",total);