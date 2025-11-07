// //reduce

// productItem=[
//     {
//         productName:"headPhone",
//         productPrice:800,
//         qty:4
//     },
//        {
//         productName:"keyBoard",
//         productPrice:1200,
//         qty:2
//     },
//        {
//         productName:"earBud",
//         productPrice:2000,
//         qty:3
//     },
//        {
//         productName:"ps5",
//         productPrice:150000,
//         qty:1
//     },
//        {
//         productName:"momo",
//         productPrice:150,
//         qty:4
//     },
//        {
//         productName:"horlicks",
//         productPrice:400,
//         qty:8
//     },
// ]

// const totalPrice= productItem.reduce((accumulator,currentProduct)=>{
//     return accumulator+currentProduct.productPrice
// },0);
// console.log(totalPrice)

// const totalQty=productItem.reduce((accumulator, currentProduct)=>{
//     return accumulator+currentProduct.qty
// },0)
// console.log(totalQty)

//map loop
let productCardItem=[
    {
        productName:"headPhone",
        productPrice:800,
        qty:4,
        haha:"huhu"
    },
       {
        productName:"keyBoard",
        productPrice:1200,
        qty:2,
        hihi:"jiji"
    },
       {
        productName:"earBud",
        productPrice:2,
        qty:3
    },
       {
        productName:"ps5",
        productPrice:150000,
        susu:"pop",
        qty:1
    },
       {
        productName:"momo",
        productPrice:150,
        jiji:"kuku",
        qty:4
    },
       {
        productName:"horlicks",
        productPrice:400,
        qty:8
    },
]

let newProductCardItem = productCardItem.map((item)=>{
    return {
        productName:item.productName,
        productPrice:item.productPrice,
        qty:item.qty
    }
})
// console.log(newProductCardItem)
// console.log(productCardItem)

let total= productCardItem.filter((item)=>{
    return item.productPrice==2
})

// .map((total)=>{
//     return {
//         productName:total.productName
//     }
// })
// console.log(total)

//
// let numbers = [2,3,4,5,6]
// const multipy=numbers.reduce((multi,num)=>{
//     return multi*num
// },1)
// console.log(multipy)

//object destructuring
let {name, age} ={
    name:"suku",
    age:"22"
}
console.log(name, age)

//array destructuring
let {mulu,suku} =["mulu", "suku"]
console.log("mulu", "suku")

//copy
let numbers= [1,2,3,4,5]
let numbersCopy=[...numbers]
console.log(numbersCopy)

//nickname
// let person:pulu = ["mukedh", "samir", "jiwan"]
// console.log(pulu)

// import "pakageName"
// export const name