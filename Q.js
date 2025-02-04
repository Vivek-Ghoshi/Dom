// 1. Extract the first and third elements from the array numbers = [5, 10, 15, 20] using destructuring.

// let numbers = [5, 10, 15, 20];
// let [a,b,c] = numbers;
// console.log(a,c);

// 2. Swap the values of a and b using array destructuring.

// let numbers = [5, 10, 15, 20]
// let [a,b] = numbers;
//  [a,b] = [b,a]
//  console.log(a,b)

// 3. Destructure the object {name: "John", age: 25, city: "New York"} to extract name and city into separate variables.

// let obj = {name: "John", age: 25, city: "New York"};
// let {name: a,city: b} = obj;
// console.log(a,b)

// 4. Using destructuring, assign a default value of "Guest" to user if it is not present in the object {id: 101}.

// var obj = {id:101,
//     user:"koi"
// };
//  var {user = 'guest'} = obj
//  console.log(user);

// 5. Extract first and last from the nested object {person: {first: "Alice", last: "Johnson"}} using destructuring.

// let obj = {
//     person: {first: "Alice", last: "Johnson"}
// }
// let {first,last} = obj.person;
// console.log(first,last)

// 6. Use array destructuring to ignore the second element of [100, 200, 300] and store the rest in another variable.

// let arr = [100, 200, 300];
// let[a, ,...c] = arr;
// console.log(a,c)

// 7. Destructure the array [1, 2, 3, 4] inside a function parameter and return the sum of all elements.

// let arr = [1, 2, 3, 4 ,5];
// function sum(elem){
//    let add = 0
//    elem.forEach(e => add +=e);
//    return add;
// }
// console.log(sum([...arr]))

// 8. Destructure an object {name: "David", age: 30, job: "Developer"} and rename job to profession.

// let obj = {name: "David", age: 30, job: "Developer"};
// let {name,age,job:profession} = obj;
// console.log(profession)

// 9. Destructure the following nested array [[1, 2], [3, 4]] to extract 1 and 4.

// let arr = [[1, 2], [3, 4]];
// let [[a,b],[c,d]] = arr
// console.log(a,d)

// 10. Destructure an array [10, 20] and swap the values inside an if condition only if the first value is smaller than the second.

// let arr =  [10, 20];
// let [a,b] = arr;
// if(a<b){
//     [a,b] = [b,a]
//     console.log(a,b)
// }



// 11. Destructure the object {user: {id: 5, info: {name: "Sam", city: "Paris"}}} and extract name and city.

// let obj = {
//     user: {
//         id: 5,
//         info: {name: "Sam", city: "Paris"}
//         }}

// let {name,city} = obj.user.info
// console.log(name,city)

// 12. Given an array [10, [20, 30], 40], destructure it to extract 10, 30, and 40 into separate variables.

// let arr = [10, [20, 30], 40];
// let [a,[ ,b],c] = arr;
// console.log(a,b,c)

// 13. Using array destructuring, loop over an array [[1, "one"], [2, "two"], [3, "three"]] and print each key-value pair.

// let arr =  [[1, "one"], [2, "two"], [3, "three"]];
// for (const [key,value] of arr) {
//     console.log(`${key},${value}`)
    
// }

// 14. Write a function that takes an object {a: 5, b: 10, c: 15} as an argument and returns the sum of a and c using destructuring.

// let obj = {a: 5, b: 10, c: 15};

// function abcd(obj){  
// let {a, c }= obj;
//     let sum = a+c;
//     return sum

// }
// console.log(abcd(obj))

// 15. Destructure a nested object {data: {user: {id: 3, details: {age: 25, country: "India"}}}} and extract id and country.

// let obj = {
//     data:
//      {user: 
//         {id: 3, details: {age: 25, country: "India"}}}
// }

// let {id} = obj.data.user
// let {country} =  obj.data.user.details
// console.log(id,country)


// 16. Given const obj = {a: [1, 2, {b: 3}], c: {d: 4, e: [5, 6]}}, destructure to extract 3 and 6.

// const obj = {
//     a: [1, 2,{b: 3}],
//  c: {d: 4, e: [5, 6]}}

//  let {a:[, ,{b}],c:{e:[,six]}} = obj
// console.log(b,six)


// 17. Destructure an object {items: [{price: 100}, {price: 200}], discount: 0.1} to calculate the total price after discount.

// let obj = {items: [{price: 100}, {price: 200}], discount: 0.1};

// let {items : [{price:a},{price: b}], discount} = obj;
// let finalprice = (a+b)*discount;
// console.log(finalprice)


// 18. Use destructuring in function parameters to pass {name: "Alice", scores: [80, 90, 100]} and return the average score.

// let obj = {name: "Alice", scores: [80, 90, 100]};
// function abcd(scores){
//     let sum = 0;
//    scores.forEach(score => {
//       sum += score
//    });
//    return (sum/3)
// }
// console.log(abcd([...obj.scores]))

// 19. Given const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}], use destructuring inside map() to extract id and name.

// const users = [{id: 1, name: "John"}, {id: 2, name: "Jane"}];
// users.map((e)=> {
//     console.log(e.id,e.name)
// })

// 20. Destructure an array [["x", 1], ["y", 2], ["z", 3]] using forEach() and log "Key: x, Value: 1" format for each pair.

// let arr = [["x", 1], ["y", 2], ["z", 3]];

// arr.forEach(([key,value]) =>{
//     console.log(`key: ${key}, value: ${value}`)
// })
