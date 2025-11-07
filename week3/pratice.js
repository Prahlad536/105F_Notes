// var name = "prahlad";
// let age = 20;
// const isStudent = false;
// console.log(name, age, isStudent)

//2. string, number, boolean

// let fruit = "Apple"
// let price=200;
// let available = true;

// console.log("fruit", "=",fruit)
// console.log("price","=",price)
// console.log("available", "=", available)

//3. array

// let fruits = ["Apple", "Banana","Orange"]
// // console.log(fruits)
// // fruits[1] = "lutchi";
// // console.log(fruits)
// fruits.push("grapes")
// console.log(fruits)
// fruits.pop()
// console.log(fruits)

// fruits.unshift("kera khau")
// console.log(fruits)
// fruits.shift()
// console.log(fruits)

// console.log(fruits.includes("Banana"))
// console.log(fruits.length)
// console.log(fruits.indexOf("Orange"))

//4. object
// let person = {
//     name: "prakash",
//     age:20,
//     city: "kathmandu"
// }
// console.log(person.city)
// console.log("age", "=", person.age)

//5. conditional statement
// let marks = 41;
// if(marks>80){
//     console.log("Grade A");
// }else if(marks>60){
//     console.log("Crade B");
// }else if(marks>40){
//     console.log("Grade C");
// }else{
//     console.log("Fail")
// }

// //6. double equals to
// var sathiLeyDinaKojekoPaisa = "100"
// var maSangaVakoPaisa = 30;

// if(sathiLeyDinaKojekoPaisa=="100"){
//     maSangaVakoPaisa = maSangaVakoPaisa+ parseInt( sathiLeyDinaKojekoPaisa)
// }
// console.log(maSangaVakoPaisa)


// for loop
// for(let i=0; i<=10; i++){
//     console.log("4 *",i ,"=", 4*i)
// }

// //while loop
// let i=10;
// while(i>=1){
//     console.log(i)
//     i--
// }
//do while loop
// let k=1;
// do{
//     console.log(k)
//     k++
// }while(k<10)


//for in loop
// let car={
//     name:"Toyota",
//     model:"corola",
//     year:2020
// }
// for(let key in car){
//     console.log(key, "=", car[key]);
// }

//for of loop
// let color=["red", "green", "blue"]
// for(let name of color){
//     console.log(name)
// }

//array with object
// let students = [
//     {name:"prakash",
//         age:20,
//         city: "ktm"
//     },
//     {
//         name:"sunil",
//         age:22,
//         city:"itahari"
//     },
//     {
//         name:"sanjana",
//         age:28,
//         city:"brt"
//     }
// ]

// console.log(students[1].age)
// console.log(students[0].name)
// for(let kera of students){
//     console.log(kera, students.name[kera])
// }


var response = {
    status: 200,
    message: "Files fetched successfully",
    files: [
        {
            _id: "6908479693d17ff5aa7e8ba6",
            name: "pexels-artempodrez-7233359.jpg",
            userId: "841247",
            ipAddress: "2400:1a00:1b66:b662:959f:2332:d2f5:f827",
            path: "https://tapshare.digitalpathshalanepal.com/u/pexels-artempodrez-7233359.jpg",
            size: "1671616",
            createdAt: "2025-11-03T06:11:34.702Z",
            updatedAt: "2025-11-03T06:11:34.702Z",
            __v: 0
        }
    ]
}

var files=response.Files
// files.forEach(function(val){
//     console.log(val.ipAddress)
// })

console.log(response.files[0].ipAddress)