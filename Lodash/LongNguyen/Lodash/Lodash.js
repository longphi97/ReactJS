//Lodash-Isemty
const _ = require('lodash');
var val = [];
console.log("The Value is Emty : "+_.isEmpty(val));

//Lodash - filter
var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];
console.log("Lodash-Filter",_.filter(users, { 'age': 36, 'active': true }));

//Lodash- map
function square(n) {
    return n * n;
  }
console.log("Lodash-map",_.map([4, 8], square));

//Lodash - clone
var objects = [{ 'a': 1 }, { 'b': 2 }];
var shallow = _.clone(objects);
console.log("Lodash-clone",shallow[0] === objects[0]);

//Lodash - clone Deep
var original = { foo: "bar" };
var copy = _.cloneDeep(original);
copy.foo = "new value";
console.log("Lodash-clonedeep", copy);

//Lodash - reduce
var users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 28 },
    { name: "Bill", age: 65 },
    { name: "Emily", age: 17 },
    { name: "Jack", age: 30 }
]
var reducedUsers = _.reduce(users, function (result, user) {
    if(user.age >= 18 && user.age <= 59) {
        (result[user.age] || (result[user.age] = [])).push(user);
    }
  
    return result;
}, {});
console.log("Lodash-reduce",reducedUsers)

//Lodash - flatten
let array1 = [[1, 2], [4, 5], [7, 8]]
let newArray = _.flatten(array1);
console.log("Lodash-flatten", newArray)

//Lodash - merge
var object = {
    'a': [{ 'b': 2 }, { 'd': 4 }]
  };
  var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }]
  };
console.log("Lodash-merge",_.merge(object, other));

//Lodash - omit
var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log("Lodash-omit",_.omit(object, ['a', 'c']));

//Lodash - pick
var object = { 'a': 1, 'b': '2', 'c': 3 };
console.log("Lodash-pick",_.pick(object, ['a', 'c']));

//Lodash - assign
var foo = { a: "1" };
var bar = { b: 2, c: "3"}
var result = _.assign({ a: "an old number" }, foo, bar);
console.log("Lodash-assign", result);

//Lodash - get
var object = { 'a': [{ 'b': { 'c': 2345 } }] }
var pow = _.get(object, 'a[0].b.c');
console.log("Lodash-get",pow);