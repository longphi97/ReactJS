

//CallBack
function Myfunction(prm) {
    prm("Example CallBack");
}
function myCallBack(value) {
    console.log(value);
}
Myfunction(myCallBack);

//Promise
const promise = new Promise(
    function (resolve, reject) {
        resolve();
    }
);

promise
    .then(function() {
        console.log("Thanh cong roi ban oi!");
    })
    .catch(function() {
        console.log("That bai roi ban a!");    
    })
    .finally(function() {
        console.log("Ket Thuc!")
    })

//Async-Await
async function Display() {
    const myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve(" Async await Dong nay in ra sau 2s");}, 2000);
    });
       var value = await myPromise;
    console.log(value)
    }
Display();

//Async-Await(error)

async function Example() {
    try {
        const a = await fetch ("https://jsonplaceholder.typicode.com/postqwes")
        const data = await res.json();
        console.log(data);
    } catch(error) {
        console.error("error");
    }    
}
Example ();