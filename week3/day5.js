// function prahlad(){
//     console.log("hello, how are you")
// }

// prahlad()
//  function add(a,b){
//     console.log(a-b)
//  }

//  add(9,10)


// function greet(name){
//     console.log("hello:" + name);
// }

// greet("salina")

// const sayhello= function(){
//     console.log("hello world")
// }
// sayhello()

// const add= function(a,b){
//     console.log(a+b);
// }
// add(9,9)

// setTimeout(function(){
//     console.log("This appear at after 2 second")
// },2000)


// (function(a,b){
//     console.log(a+b)
// })(9,10)

// function hello(name = "manish"){
//     console.log(`hello ${name}`  )
// }

// hello("sakuntala")

// const add =(a,b) =>{
//     return a+b;
// }
// console.log(add(9,9))

// const hello =(name)=>{
//     console.log("heloo "+ name)
// }
// hello("sabnam")

// const multiply=(a,b)=>{
//     console.log(a*b)
// }

// multiply(2,9)

// var numbers = [1,2,3,4,5,6,7,8,9]

// numbers.forEach((number)=>{
//     console.log(number)
// })

// const codding = ["java","python","ruby","flutter"]

// codding.forEach( function(val){
//     console.log(val)
// } )

// const myCodding =[
//     {
//         languageName:"java",
//         languageFile:"ja"
//     },
//     {
//           languageName:"reactjs",
//         languageFile:"rj"
//     },
//     {
//           languageName:"python",
//         languageFile:"py"
//     },
// ]
// myCodding.forEach((value)=>{
//     console.log(myCodding[1].languageName)
// })
//  var numbers = [1,2,3,4,5,6,7,8]
//  var squares =[]
//  numbers.forEach((num)=>{
//     squares.push(num*num)
//  })
//  console.log(squares)


// let numbers = [2,3,4,5,6]

// let divide= numbers.map((num)=>{
//     return num/2
// })
// console.log(divide)

//filter
// let numbers = [1,2,3,4,5,6,7,8,9]

// let evenNumber= numbers.filter((value)=>{
//   return value % 2==0
// })

// console.log(evenNumber)

// let numbers = [1,2,3,4,5,6,7,8,9]

// let evenNumber= numbers.filter((value)=>{
//   return value ==8
// })

// console.log(evenNumber)

// let ages = [10,12,14,16,18,20,22,25,28]

// let adults = ages.filter((num)=>{
//     return num>=18;
// })
// console.log(adults)

// let names = ["Sita", "Rita", "Gita", "Hari", "Bina"];

// let namesWithA = names.filter((name)=>{
//      name.includes("a")});

// console.log(namesWithA);

// let students =[
//   {name:"gita", marks:30},
//   {name:"sita", marks:40},
//   {name:"rita", marks:50},
//   {name:"milan", marks:70}
//   ]
  
//   let passed = students.filter((student)=>{
//     return student.marks>=40;
//   })
// console.log(passed)

let numbers = [1,2,3,4,5,6]
let even = numbers.filter((num)=>{
    return num%2==0
})
console.log(even)