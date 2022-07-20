//Array
const [, year, month, day] =  /^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');
console.log([year]);

//object
const obj = { foo: 123 };
const {writable, configurable} =
    Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable);