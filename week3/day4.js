// for(var i=0; i<=10; i=i+1){
//     console.log(i, "prahlad")
// }

//another method
// var i;
// for (i=1; i<=100; i=i+10){
//     console.log(i)
// }

// for (let i=1; i<=10; i++){
//     console.log("2 *", i, "=", 2*i );
// }

//do while
// let i=0;
// do{
// console.log(i, "number");
// i++
// }while(i<=5)

//while
// let i = 1;
// while(i<=10){
//     console.log(i);
//     i+=2;
// }
//for loop
// for(let i=1; i<=10; i++){
//     console.log(i, "number")
// }


//do while
// let i=0;
// do{
//     console.log(i, "number")
//     i++
// }while(i<=10);


// for(let i=1; i<=10; i++){
//     console.log("3 *", i, "=", 3*i);
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

var files = response.files
// files.forEach((kela)=>{
//     console.log(kela.ipAddress)
// })\
for (var i=0; i<files.length; i++){
    console.log(files[i].ipAddress)
}
// console.log(files)
// for(let i=0; i<1; i++){
//     console.log(files[i].name)
// }

// for(kera of files){
//     console.log(kera._id)
// }

// console.log(response.files[0].path)

//for in loop

// let person = {
//     name: "salina",
//     age: 22,
//     address: "brt"
// }

// for (let key in person){
//     console.log(person[key])
// }

// let person = ["manish", "mahesh", "prakhash", "bindu"]
//  for (let prahlad in person){
//     console.log(person[prahlad])
//  }
// let person = {
//    name: "Ram",
//    age: 20,
//    city: "Kathmandu"
// };

// for (let key in person) {
//    console.log(key,":", person[key]);
// }
// let fruits =["mango", "lutch", "apple"]
// for(let name of fruits){
// }
// console.log(fruits)

//for loop
// let person =[ "manish", "mahesh", "prakhash", "bindu", "sanu"]
// for(let i=0; i<person.length; i++){
//     console.log(person[i])
// }

