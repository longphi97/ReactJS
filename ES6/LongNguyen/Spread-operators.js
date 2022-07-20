let long = [1,23,4,5,123];
let phi  = [75,51,45,1];
let number =[...long,...phi]
console.log(number);

const demo = {
    a: 1,
    b: "test"
};

const demo2 = {
    c:2,
    d: "testing"
}

const object = {...demo,...demo2}
console.log(object);