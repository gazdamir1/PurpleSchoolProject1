"use strict"
//.............................................................................
//IIFE в модулях

// const APP = {}(function () {
//   const a = 1

//   function add(f, s) {
//     return f + s
//   }

//   function sub(f, s) {
//     return f - s
//   }
//   APP.calc = { add, sub }
// })()

//.............................................................................
//Модули commonjs

// function add(f, s) {
//   return f + s
// }

// function sub(f, s) {
//   return f - s
// }

// console.log("test")

// module.exports = { add, sub }

//.............................................................................
//ES6 модули

// export function add(f, s) {
//   return f + s
// }

// export function sub(f, s) {
//   return f - s
// }

// setTimeout(() => {
//   add = function (f, s) {
//     return f * s
//   }
// }, 1500)

//.............................................................................
//Await на верхнем уровне

// export function add(f, s) {
//   return f + s
// }

// export function sub(f, s) {
//   return f - s
// }

// async function getProducts() {
//   const res = await fetch("https://dummyjson.com/products")
//   return res.json()
// }

// export const res = await getProducts()

//.............................................................................
//Процесс сборки

// export function add(f, s) {
//   return f + s
// }

// export function sub(f, s) {
//   return f - s
// }

// export function div(f, s) {
//   return f / s
// }

// const a = 1
// console.log(a)
