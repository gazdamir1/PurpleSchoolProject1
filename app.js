"use strict"

//.............................................................................
//SET

// const flights = [
//   "Russia",
//   "USA",
//   "London",
//   "London",
//   1,
//   false,
//   1,
//   "Any",
//   "Maria",
//   "Pavel",
// ]
// const setFlights = new Set(flights)
// console.log(setFlights)
// console.log(setFlights.size)
// console.log(setFlights.has("Russia"))
// console.log(setFlights.has("s"))
// setFlights.add("Paris")
// console.log(setFlights)
// setFlights.delete("Paris")
// console.log(setFlights)

// for (const flight of setFlights) {
//   console.log(flight)
// }

// console.log([...setFlights])

// const setObj = new Set([{ a: 1 }, { b: 2 }, { b: 2 }])
// console.log(setObj)
// console.log(new Set("abcd"))

//.............................................................................
//MAP

// "use strict"
// const wetherMap = new Map()
// wetherMap.set("London", "10", "6").set("Moscow", "7")

// console.log(wetherMap.get("Moscow"))
// console.log(wetherMap.has("Moscow"))
// wetherMap.delete("London")
// console.log(wetherMap)

// const obj = { a: 1 }
// const arr = [1, 2, 3]
// wetherMap
//   .set(1, 5)
//   .set(true, "yes")
//   .set(true, "yes!")
//   .set(false, "no")
//   .set(arr, "array")
//   .set(obj, { b: 1 })
// // wetherMap.clear()
// console.log(wetherMap)
// console.log(wetherMap.size)

// console.log(wetherMap.get(arr))
// console.log(wetherMap.get(obj))

//.............................................................................
//Быстрое создание Map

// const wetherMap = new Map([
//   ["London", "10"],
//   ["Moscow", "7"],
// ])
// console.log(wetherMap)

// const wetherObject = {
//   london: 10,
//   moscow: 7,
//   paris: 14,
// }

// console.log(Object.entries(wetherObject)) //объект в массиве
// const wetherMap2 = new Map(Object.entries(wetherObject))
// console.log(wetherMap2)
// console.log(wetherMap2.size)

//.............................................................................
//Итерация по Map

// const wetherMap = new Map([
//   ["London", "10"],
//   ["Moscow", "7"],
//   ["Paris", "14"],
// ])

// for (const [key, value] of wetherMap) {
//   console.log(key)
//   console.log(value)
// }

// console.log([...wetherMap])
// console.log([...wetherMap.keys()])
// console.log([...wetherMap.values()])

//.............................................................................
//Упражнение - swap

// let wetherMap = new Map([
//   ["London", "10"],
//   ["Moscow", "7"],
//   ["Paris", "14"],
// ])

// console.log([...wetherMap.keys()])
// const wetherMap2 = new Map()

// for (let [key, value] of wetherMap) {
//   wetherMap2.set(value, key)
// }
// console.log([...wetherMap2])
// console.log([...wetherMap2.keys()])

// wetherMap = new Map([...wetherMap].map((el) => el.reverse()))
// console.log(wetherMap)

//weakMap

// let a = { a: 1 }
// let b = { b: 1 }
// const map = new WeakMap()
// map.set(a, "testA")
// map.set(b, "testB")
// console.log(map.get(a))
// console.log(map.has(a))
// console.log(map)

// a = null
// setTimeout(() => {
//   console.log(map)
// }, 1000)

// let cache = new WeakMap()

// function getValue(obj) {
//   if (!cache.has(obj)) {
//     const res = 1
//     cache.set(obj.res)
//   }
//   return cache.get(obj)
// }

// const res = getValue(b)
// console.log(res)

//weakSet

// let a = { a: 1 }
// let b = { b: 2 }
// const set = new WeakSet([a, b])
// a = null
// setTimeout(() => {
//   console.log(set), 5000
// })

//.............................................................................
//Расчёты и math
//Конвертация и проверка чисел

// console.log(10 == 10.0) //true

// console.log(Number("10"))
// console.log(+"20")
// console.log(Number.parseInt("11", 10))
// console.log(Number.parseInt("101010", 2))
// console.log(Number.parseInt("11 sec", 10))

// console.log(Number.parseFloat("11", 10))
// console.log(Number.parseFloat("101010", 2))
// console.log(Number.parseFloat("11 sec", 10))

// console.log(Number((63).toString(2)))

// console.log(Number.isNaN(Number("10sdfd")))
// console.log(Number.isNaN(10 / 0))
// console.log(10 / 0) //infinity
// console.log(Number.isFinite(10 / 0))
// console.log(Number.isFinite(10))
// console.log(Number.isFinite(Number("10sdfd")))

// console.log(Number.isInteger(10))
// console.log(Number.isInteger(10.4))

//.............................................................................
//Библиотека Math

// console.log(Math.sqrt(36))
// console.log(Math.cbrt(27))
// console.log(16 ** (1 / 4))

// console.log(Math.sign(-100))
// console.log(Math.sign(35))
// console.log(Math.abs(-100))
// console.log(Math.abs(-100))

// console.log(Math.exp(3))

// console.log(Math.max(1, -2, "10", true, "19"))
// console.log(Math.max(1, -2, 10, 0, 19))
// console.log(Math.min(1, -2, "10", true, "19"))
// console.log(Math.min(1, -2, 10, 0, 19))

// const arr = [1, -2, 10, 0, 19]
// console.log(Math.max(...arr))

// console.log(Math.random())

//.............................................................................
//Округление

// console.log(Math.round(1.4))
// console.log(Math.round(1.6))
// console.log(Math.round(1.5))
// console.log(Math.round(1.49999))

// console.log(Math.ceil(1.1)) //до верхнего значения
// console.log(Math.ceil(1))
// console.log(Math.ceil(0.1))

// console.log(Math.floor(0.1)) //до нижнего значения
// console.log(Math.floor(2.9))

// console.log(Math.trunc(2.9))
// console.log(Math.trunc(2.1))
// console.log(Math.trunc(2.11111))

// console.log((1.49999).toFixed(1))
// console.log(Number((1.49999).toFixed(1)))
// console.log(Number(Math.random().toFixed(1)))

//.............................................................................
//Упражнение - Функция случайного числа

//Моё решение
// const randomN = (min, max) => {
//   let i = 0
//   console.log("start")
//   for (i; !((i >= min) & (i <= max)); i) {
//     i = Math.trunc(Number(Math.random().toFixed(2)) * 100)
//   }
//   return console.log(i)
// }
// randomN(1, 20)

//Решение
// function random(min,max){
//     return Math.random() * (max-min+1)+min
// }

//.............................................................................
//Оператор остатка от деления

// console.log(15 / 2)
// console.log(15 % 2) //1
// console.log(14 % 2) //0

// const isEven = (n) => n % 2 === 0
// const isOdd = (n) => n % 2 === 1
// console.log(isEven(17))
// console.log(isEven(12))
// console.log(isOdd(17))
// console.log(isOdd(12))

//.............................................................................
//Разделитель чисел

// const bigNum1 = 350500000
// const bigNum2 = 350_500_000 //только для объявления

// const payment = 20_10
// const paymentR = 20.1
// const paymentR2 = 2_0.1_0

// console.log(Number("350_500_000")) //NaN
// console.log(Number.parseInt("350_500_000")) //350
// console.log(Number.parseInt(bigNum2))

//Работа с BigInt

// const max = 2 ** 53 - 1
// console.log(Number.MAX_SAFE_INTEGER)
// console.log(max)
// console.log(max + 1)
// console.log(max + 2)
// console.log(max + 3)

// console.log(3214654783249812697n)
// console.log(BigInt("3214654783249812697"))
// console.log(BigInt(3214654783249812697))

// console.log(10n + 10n)
// console.log(10n + BigInt(10))
// console.log(10n * 10n)
// console.log(94798461987216654n * 34981365836656498n)

// console.log(10n * BigInt(10))
// console.log(10n / 3n)

// console.log(10n < 20)
// console.log(10n == 10)
// console.log(10n === 10)
// console.log(typeof 10n)

//.............................................................................
//Интернационализация чисел

// const options1 = {
//   style: "currency",
//   currency: "RUB",
//   useGrouping: false,
// }

// const options2 = {
//   style: "currency",
//   currency: "USD",
// }

// const options3 = {
//   style: "decimal",
// }

// const options4 = {
//   style: "percent",
// }

// const options5 = {
//   style: "unit",
//   unit: "celsius",
// }

// console.log(new Intl.NumberFormat("ru-RU", options1).format(23000))
// console.log(new Intl.NumberFormat("en-US", options2).format(23000))
// console.log(new Intl.NumberFormat("ru-RU", options3).format(10000))
// console.log(new Intl.NumberFormat("ru-RU", options4).format(0.1))
// console.log(new Intl.NumberFormat("ru-RU", options4).format(25))

//.............................................................................
//Упражнение - Конвертер валют

//Моё решение
// const firstCurrency = { style: "currency", currency: "RUB" }
// const secondCurrency = { style: "currency", currency: "USD" }
// const thirdCurrency = { style: "currency", currency: "EUR" }

// const converter = (sum, inСurrency, conСurrency) => {
//   if (inСurrency == "ru") {
//     switch (conСurrency) {
//       case "en":
//         sum *= 93.22
//         return console.log(
//           new Intl.NumberFormat("en-EN", secondCurrency).format(sum)
//         )
//       case "eu":
//         sum *= 98.35
//         return console.log(
//           new Intl.NumberFormat("en-EN", thirdCurrency).format(sum)
//         )
//       default:
//         break
//     }
//   }

//   if (inСurrency == "en") {
//     switch (conСurrency) {
//       case "ru":
//         sum *= 93.22
//         return console.log(
//           new Intl.NumberFormat("ru-EU", firstCurrency).format(sum)
//         )
//       case "eu":
//         sum /= 0.95
//         return console.log(
//           new Intl.NumberFormat("en-EN", thirdCurrency).format(sum)
//         )
//       default:
//         break
//     }
//   }

//   if (inСurrency == "eu") {
//     switch (conСurrency) {
//       case "ru":
//         sum *= 98.35
//         return console.log(
//           new Intl.NumberFormat("ru-EU", firstCurrency).format(sum)
//         )
//       case "en":
//         sum *= 0.95
//         return console.log(
//           new Intl.NumberFormat("en-EN", secondCurrency).format(sum)
//         )
//       default:
//         break
//     }
//   }
//   return console.log((sum = null))
// }

// console.log("ru")
// converter(1000, "ru", "en")
// converter(1000, "ru", "eu")
// console.log("en")
// converter(1000, "en", "ru")
// converter(1000, "en", "eu")
// console.log("eu")
// converter(1000, "eu", "ru")
// converter(1000, "eu", "en")
// console.log("error (null)")
// converter(1000, "russ", "es")

// function convert(sum, initialCurrency, convertCurrency) {
//   const allCurrencies = [
//     { name: "USD", mult: 1 },
//     { name: "RUB", mult: 1 / 60 },
//     { name: "EUR", mult: 1.1 },
//   ]
//   const initial = allCurrencies.find((c) => c.name === initialCurrency)
//   if (!initial) {
//     return null
//   }
//   const convert = allCurrencies.find((c) => c.name === convertCurrency)
//   if (!convert) {
//     return null
//   }
//   return new Intl.NumberFormat("ru-RU", {
//     style: "currency",
//     currency: convert.name,
//   }).format((sum * initial.mult) / convert.mult)
// }

// console.log(convert(10000, "RUB", "USD"))
// console.log(convert(10000, "RUB", "EUR"))
// console.log(convert(100, "USD", "RUB"))
// console.log(convert(100, "USD", "EUR"))
// console.log(convert(100, "EUR", "RUB"))
// console.log(convert(100, "TG", "RUB"))
// console.log(convert(100, "EUR", "TG"))

//.............................................................................
//Создание дат
// const now = new Date()
// console.log(now)

// console.log(new Date("01-01-2023"))
// console.log(new Date("02/01/2023"))
// console.log(new Date("2023/01/02"))
// console.log(new Date("10 Jan 2023"))
// console.log(new Date("10 янв 2023")) //invalid date

// console.log(new Date(2024, 11, 31)) //отсчёт месяцев с 0
// console.log(new Date(2024, 12, 10 + 100)) //прибавляется к числу(прибавляя месяц)
// console.log(new Date(0))
// console.log(new Date(1 * 24 * 60 * 60 * 1000))
// console.log(Date.now())
// console.log(new Date(Date.now()))

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getTime())

// console.log(new Date(now.setFullYear(2030)))

//.............................................................................
//Операции с датами

// const date1 = new Date(2024, 10, 15)
// const date2 = new Date(2024, 11, 15)
// console.log(Number(date1))
// console.log(date2 - date1)

// function getDaysBetweenDates(dateFirst, dateSecond) {
//   return (dateSecond - dateFirst) / (1000 * 60 * 60 * 24)
// }
// console.log(getDaysBetweenDates(date1, date2))

//.............................................................................
//Сравнение дат

// const first = new Date(2024, 10, 4)
// const second = new Date(2024, 10, 3)
// const third = new Date(2024, 10, 3)

// console.log(first.getTime() < second.getTime())
// console.log(first == second)
// console.log(second == third) //false - сравниваются именно ссылки на объекты

// console.log(second.getTime() == third.getTime())
// console.log(second.getTime() === third.getTime())
// console.log(Number(third) === Number(second))
// console.log(+third === +second)

//.............................................................................
//Упражнение - Проверка на день рождения

//Моё решение

// const user = {
//   name: "Vasia",
//   birthday: "10/31/2023",
// }

// const birth1 = new Date(user.birthday)

// const user2 = {
//   name: "Vasia2)",
//   birthday: "09/19/2023",
// }

// const birth2 = new Date(user2.birthday)

// const birthdayReader = (data) => {
//   const now = new Date()
//   if (data.getMonth() + data.getDate() == now.getMonth() + now.getDate()) {
//     return console.log(true)
//   } else {
//     return console.log(false)
//   }
// }

// birthdayReader(birth1)
// birthdayReader(birth2)

//Решение с курса

// const user1 = {
//   name: "Vasia",
//   birthday: "10/31/2023",
// }

// function isBirthday(user) {
//   const birthdayDate = new Date(user.birthday)
//   const now = new Date()
//   if (birthdayDate.getMonth() !== now.getMonth()) {
//     return false
//   }
//   if (birthdayDate.getDate() !== now.getDate()) {
//     return false
//   }
//   return true
// }

// console.log(isBirthday(user1))

//.............................................................................
//Интернационализация дат

// const date = new Date()

// console.log(date)
// console.log(new Intl.DateTimeFormat("ru-RU").format(date))
// const options1 = {
//   hour: "numeric",
//   minute: "numeric",
// }
// console.log(new Intl.DateTimeFormat("ru-RU", options1).format(date))
// const options2 = {
//   hour: "numeric",
//   minute: "numeric",
//   month: "long",
//   weekday: "short",
//   year: "2-digit",
// }
// console.log(new Intl.DateTimeFormat("en-US", options2).format(date))
// console.log(new Intl.DateTimeFormat("ru-RU", options2).format(date))

// console.log(navigator.language)
// console.log(new Intl.DateTimeFormat(navigator.language, options1).format(date))

//.............................................................................
//p.s.
// const date2 = new Date("09/19/2023")
// console.log(date2)
// console.log(date2.getTime())
// console.log(date2.setDate(2))
// console.log(date2.setTime(date2.getTime() + 100))

//.............................................................................
//Создание таймеров

// console.log(1)

// const messages = ["Bash!", "Boom!"]

// const boomTimer = setTimeout(
//   (message1, message2) => {
//     console.log(2)
//     console.log(message1)
//     console.log(message2)
//   },
//   2000,
//   ...messages
// )
// // clearTimeout(boomTimer)

// console.log(3)

//.............................................................................
//Таймеры и Event Loop

//.............................................................................
//Точность таймеров

// const mark1 = performance.now()

// console.log(performance.now())

// setTimeout(() => {
//   const mark2 = performance.now()
//   console.log(mark2 - mark1)
// }, 1000)

//.............................................................................
// Работа с интервалами

// const interval = setInterval(() => {
//   console.log(new Date())
// }, 1000)

// const timer = setTimeout(() => {
//   clearInterval(interval)
// }, 5000)

// console.log(interval)
// console.log(timer)

//.............................................................................
//Упражнение - Таймер пиццы

//Моё решение

// const mainTimer = (timer) => {
//   const pizzTimer = setInterval(() => {
//     timer -= 1000
//     console.log(new Intl.DateTimeFormat("ru-RU",{
//   minute: "numeric",
//   second: "numeric",
// }).format(timer))
//   }, 1000)
//   setTimeout(() => {
//     clearInterval(pizzTimer)
//     console.log("🍕!!!")
//   }, timer)
// }
// mainTimer(5000)

//Решение

// function pizzaTimer(ms) {
//   const end = new Date().getTime() + ms
//   const interval = setInterval(() => {
//     console.log(
//       new Intl.DateTimeFormat("ru-RU", {
//         minute: "numeric",
//         second: "numeric",
//       }).format(end + 100 - new Date())
//     )
//   }, 1000)
//   setTimeout(() => {
//     clearInterval(interval)
//     console.log("🍕!!!")
//   }, ms)
// }

// pizzaTimer(5000)

// let count = 0

// const intervalId = setInterval(function () {
//   console.log(++count)
//   if (count >= 5) {
//     clearInterval(intervalId)
//   }
// }, 1000)

//.............................................................................
//Что такое ООП
// Абстракция
// Наследования
// Инкапсуляция
// Полиморфизм

//.............................................................................
//Реализация ООП в JS

//.............................................................................
//Оператор new

// const User = function (email, password) {
//   this.email = email
//   this.password = password + "%%%"
// }

// const user1 = new User("aba@.ru", "123")
// console.log(user1)
// const user2 = new User("a2ba@.ru", "1234")
// console.log(user2)
// console.log(user2 instanceof User)

//Создаётся пустой объект
//Вызывается User функция
//this = пустому объекту
//объект связывается с prototype
//возвращается объект

//.............................................................................
//Prototype

// const Book = function (title, author) {
//   this.author = author
//   this.title = title
//   this.isRead = false
//   // this.isRead() = function(){ - так делать не надо
//   //   this.read = true
//   // }
// }

// Book.prototype.read = function () {
//   this.isRead = true
// }

// Book.prototype.cover = "Paper"

// const lordOftheRing = new Book("Lord of the Ring", "Tolkien")
// lordOftheRing.read()

// console.log(lordOftheRing)
// console.log(lordOftheRing.cover)
// console.log(lordOftheRing.hasOwnProperty("cover"))
// console.log(lordOftheRing.hasOwnProperty("author"))

// console.log(lordOftheRing, __proto__)
// console.log(lordOftheRing, __proto__ === Book.prototype)
// console.log(Book.prototype.isPrototypeOf(lordOftheRing))
// console.log(Book.prototype.isPrototypeOf(Book))

// Array.prototype.first = function () {}

// const a = [5]
// a.first()

//.............................................................................
//Упражнение - Корзина товаров

//Моё решение
// const product = { id: 1, name: "Bread", count: 1 }

// const Cart = function () {
//   this.products = []
// }

// Cart.prototype.add = function () {
//   this.products.push(product)
// }

// Cart.prototype.plus = function () {
//   this.products[0].count += 1
// }

// Cart.prototype.minus = function () {
//   this.products[0].count -= 1
//   if (this.products[0].count == 0) {
//     this.products.pop()
//   }
// }

// const newCart = new Cart()
// console.log(newCart)
// newCart.add()
// console.log(newCart)
// newCart.plus()
// console.log(newCart)
// newCart.minus()
// console.log(newCart)
// newCart.minus()
// console.log(newCart)

//решение
// const product = { id: 1, name: "Bread", count: 1 }

// const Cart = function () {
//   this.products = []
// }
// Cart.prototype.addProduct = function (product) {
//   if (this.products.find((product) => product.id === product.id)) {
//     return
//   }
//   this.products.push(product)
// }

// Cart.prototype.increaseAmount = function (id) {
//   this.products = this.products.map((product) => {
//     if (product.id == id) {
//       product.count++
//       return product
//     }
//     return product
//   })
// }

// Cart.prototype.deacreaseAmount = function (id) {
//   this.products = this.products
//     .map((product) => {
//       if (product.id == id) {
//         product.count--
//         return product
//       }
//       return product
//     })
//     .filter((product) => product.count > 0)
// }

// const cart = new Cart()
// cart.addProduct(product)
// cart.increaseAmount(1)
// cart.deacreaseAmount(1)
// cart.deacreaseAmount(1)
// console.log(cart)

// const cart2 = new Cart()
// cart2.addProduct(product)
// console.log(cart2)

//.............................................................................
//Цепочки prototype

// const Book = function (title, author) {
//   this.author = author
//   this.title = title
// }
// Book.prototype.isRead = false

// const lordOftheRing = new Book("1", "1")

// console.log(lordOftheRing.hasOwnProperty(title))

// console.log(Book.prototype.__proto__)

//.............................................................................
//Классы
// //  {
// const Book = function (title, author) {
//   this.author = author
//   this.title = title
//   this.isRead = false
// }
// Book.prototype.read = function () {
//   Book.prototype.isRead = true
// }
// //  } - пример

// class BookClass {
//   isRead = false //общее свойство
//   constructor(title, author) {
//     this.author = author
//     this.title = title
//   }
//   read() {
//     this.isRead = true
//   }
// }

// // const BookClass2 = class {} //можно но не очень то и нужно

// const lotr = new BookClass("lotr", "Tolkien")
// console.log(lotr)
// console.log(lotr instanceof BookClass)
// lotr.read()
// console.log(lotr)
// console.log(lotr.__proto__)

//.............................................................................
//Setters и getters

// const task = {
//   title: "Task1",
//   dueTo: new Date("2023/01/01"),

//   get isOverdue() {
//     return this.dueTo < new Date()
//   },

//   set isOverdue(isOverdueTask) {
//     if (!isOverdueTask) {
//       this.dueTo = new Date()
//     }
//   },
// }

// console.log(task.isOverdue)
// task.isOverdue = false
// console.log(task)

// class Task {
//   constructor(title, dueDate) {
//     ;(this.title = title), (this.dueDate = dueDate)
//   }

//   get isOverdue() {
//     return this.dueTo < new Date()
//   }

//   set dueDate(date) {
//     if (date < new Date()) {
//       return
//     }
//     this._dueDate = date
//   }
// }

// const newTask = new Task("Task2", new Date())
// console.log((newTask.dueDate = new Date("2024/1/1")))
// console.log(newTask)

//.............................................................................
//Static

// class Test {
//   static a = 1
//   static hello() {
//     console.log("Hello")
//   }
//   static {
//     let b = 5
//     this.a = 5
//   }
// }

// Test.hello()

// //Длинная версия
// const Test2 = function () {}
// Test2.hello = function () {
//   console.log("Hello")
// }

// Test2.hello()
// console.log(Test.a)

//.............................................................................
//Приватные методы и свойства

// class Car {
//   #vin = 6
//   speed

//   constructor() {
//     //this.#test2=5 - сначала необходимо объявить в отличии от обычного св-ва, которое создаться в похожем случае
//     this.test3 = 5
//     // delete this.#vin - нельзя удалить приватное свойство
//   }

//   #changeVin() {
//     console.log("changed")
//   }
//   test() {
//     //проверка
//     this.#changeVin
//   }

//   static #field = 3
// }

// const car = new Car()

// car.test()

//.............................................................................
//Упражнение - класс пользователя

//Моё решение
// class User {
//   #login
//   #_password
//   constructor(login, password) {
//     this.#login = login
//     this.#password = password
//   }

//   get #password() {
//     return this.#_password
//   }

//   set #password(password) {
//     this.#_password = [...password].reverse().join("")
//   }

//   changePassword(oldPassword, newPassword) {
//     if (this.#checkPassword(oldPassword)) {
//       this.#password = newPassword
//       return console.log(true)
//     }
//     return console.log("wrong password")
//   }

//   #checkPassword(password) {
//     if (password == [...this.#password].reverse().join("")) {
//       return true
//     } else {
//       return false
//     }
//   }
// }

// const user1 = new User("user1", "password1")

// console.log(user1)
// user1.changePassword("password1", "password2")
// console.log(user1)

//Решение
// class User {
//   #login
//   #_password

//   constructor(login, password) {
//     this.#login = login
//     this.#password = password
//   }
//   set #password(pass) {
//     this.#_password = pass.split("").reverse().join("")
//   }

//   get #password() {
//     return this.#_password.split("").reverse().join("")
//   }

//   get login() {
//     return this.#login
//   }

//   checkPassword(pass) {
//     return this.#password === pass
//   }

//   changePassword(oldPass, newPass) {
//     if (!this.checkPassword(oldPass)) {
//       return false
//     }
//     this.#password = newPass
//     return true
//   }
// }

// const user = new User("a@a.ru", "123")
// console.log(user)
// console.log(user.login)
// // user.login = "sadsad" //проверка
// // console.log(user)
// console.log(user.checkPassword("234"))
// console.log(user.checkPassword("123"))
// console.log(user.changePassword("123", "654"))
// console.log(user)

//.............................................................................
//Object.create

// const User = {
//   init(email, password) {
//     this.email = email
//     this.password = password
//   },

//   log() {
//     console.log("Log")
//   },
// }

// const user = Object.create(User)
// console.log(user)
// user.log()
// // user.email = 'a@a.ru'
// // user.password = '123'
// user.init("a@a.ru", "123")
// console.log(user.__proto__ == User)

// const admin = Object.create(user)
// console.log(admin)
// admin.log()
// console.log(admin.email)

//.............................................................................
//Абстракция и Инкапсуляция

// class Film {
//   #name
//   #author
//   rating
//   #length

//   constructor(name, author, length) {
//     this.#name = name
//     this.#author = author
//     this.#length = length
//   }

//   get name() {
//     return this.#name
//   }

//   get author() {
//     return this.#author
//   }

//   get length() {
//     return this.#length
//   }
// }

// const film = new Film("Avatar", "Cameron", 240)
// console.log(film)

// console.log(film.name)

//.............................................................................
//Наследование

// const Book = function (title, author) {
//   this.title = title
//   this.author = author
// }

// Book.prototype.buy = function () {
//   console.log("Buy")
// }

// const AudioBook = function (title, author, lenMin) {
//   Book.call(this, title, author)
//   this.lenMin = lenMin
// }

// AudioBook.prototype = Object.create(Book.prototype)
// AudioBook.prototype.constructor = AudioBook
// AudioBook.prototype.log = function () {
//   console.log(`${this.title} - ${this.lenMin}`)
// }

// const book = new AudioBook("Lord Of The Rings", "Tolkien", 20 * 60)
// book.log()
// book.buy()
// console.log(book)

//.............................................................................
//Наследование в ES6

// class Book {
//   constructor(title, author) {
//     this.title = title
//     this.author = author
//   }

//   buy() {
//     console.log("Buy")
//   }
// }

// class AudioBook extends Book {
//   constructor(title, author, lenMin) {
//     super(title, author)
//     this.lenMin = lenMin
//   }

//   log() {
//     console.log(`${this.title} - ${this.lenMin}`)
//   }
// }

// const book = new AudioBook("LOTR", "Tolkien", 60 * 20)
// book.log()
// book.buy()

//.............................................................................
//Override методов

// class Book {
//   constructor(title, author) {
//     this.title = title
//     this.author = author
//   }
//   info() {
//     console.log(`${this.title} - ${this.author}`)
//   }
// }

// const book1 = new Book("LOTR", "Tolkien")
// book1.info()

// class EBook extends Book {
//   constructor(title, author, pages) {
//     super(title, author)
//     this.pages = pages
//   }

//   info() {
//     console.log(`${this.title} - ${this.author} - ${this.pages}`)
//   }
// }

// const book2 = new EBook("LOTR", "Tolkien", 100)
// book2.info()

//.............................................................................
//Упражнение - Удар по орку

//Моё решение
// class Enemy {
//   constructor(health) {
//     this.health = health
//   }
//   getDamage(damage) {
//     this.health -= damage
//     if (this.health <= 0) {
//       console.log("Orc is dead")
//     } else {
//       console.log("Orcs health is ", this.health)
//     }
//   }
// }

// class Sword {
//   constructor(power) {
//     this.power = power
//   }
//   hit(object) {
//     object.getDamage(this.power)
//   }
// }

// class Enemy50 extends Enemy {
//   constructor(health) {
//     super(health)
//   }
//   getDamage(damage) {
//     let chance
//     chance = Math.round(Math.random())
//     if (chance == 1) {
//       this.health -= damage
//     }
//     if (this.health <= 0) {
//       console.log("2 orc is dead")
//     } else {
//       console.log("2 orcs health is ", this.health)
//     }
//   }
// }

// const orc = new Enemy(100)
// const silverSword = new Sword(50)
// silverSword.hit(orc)
// silverSword.hit(orc)
// const orc2 = new Enemy50(100)
// silverSword.hit(orc2)
// silverSword.hit(orc2)

//Решение
// class Enemy {
//   health
//   constructor(health) {
//     this.health = health
//   }

//   recieveDamage(damage) {
//     this.health = this.health - damage
//     console.log(this.health)
//   }
// }

// class Sword {
//   #damage
//   constructor(damage) {
//     this.#damage = damage
//   }

//   strike(enemy) {
//     enemy.recieveDamage(this.#damage)
//   }
// }

// class Orc extends Enemy {
//   constructor(health) {
//     super(health)
//   }

//   recieveDamage(damage) {
//     if (Math.random() > 0.5) {
//       this.health = this.health - damage
//     }
//     console.log(this.health)
//   }
// }

// const enemy = new Enemy(10)
// const sword = new Sword(3)
// sword.strike(enemy)
// sword.strike(enemy)
// sword.strike(enemy)

// const orc = new Orc(10)
// sword.strike(orc)
// sword.strike(orc)
// sword.strike(orc)

//.............................................................................
//Полиморфизм

//.............................................................................
//Паттерн Builder и chaining

// class Wallet {
//   balance = 0

//   add(sum) {
//     this.balance += sum
//     return this
//   }

//   remove(sum) {
//     this.balance -= sum
//     return this
//   }
// }

// const wallet = new Wallet()
// const res = wallet.add(100).remove(10).add(10)
// console.log(res)

// class Builder {
//   house = {}

//   addRoof() {
//     this.house.roof = "Roof"
//     return this
//   }

//   addFloor() {
//     this.house.floor = "Floor"
//     return this
//   }

//   execute() {
//     return this.house
//   }
// }

// const res2 = new Builder().addFloor().addRoof().execute()
// console.log(res2)

//.............................................................................
//О SOLID

//.............................................................................
//Принцип единой ответственности
//- класс отвечает только за что-то одно

// class Character {
//   #inventory = []
//   #health = 10

//   pickItem(item) {
//     this.#inventory.push(item)
//   }

//   receiveDamage(damage) {
//     this.#health -= damage
//   }
// }

// class DB {
//   save(item) {
//     localStorage.setItem("char", item)
//   }

//   load() {
//     ///...
//   }
// }

//.............................................................................
//Принцип открытости и закрытости
//- класс должен быть открыт к дополнению, но не модификации

// class Treasure {
//   value = 0
// }

// class Coin extends Treasure {
//   value = 1
// }

// class Crystal extends Treasure {
//   value = 10
// }

// class Brilliant extends Treasure {
//   value = 20
// }

// class Inventory {
//   #score = 0
//   pick(treasure) {
//     // if (treasure instanceof Coin) { - так не надо
//     //   this.#score += 1
//     // }
//     // if (treasure instanceof Crystal) {
//     //   this.#score += 10
//     // }
//     this.#score += treasure.value
//     console.log(this.#score)
//   }
// }

// const coin = new Coin()
// const crystal = new Crystal()
// const inventory = new Inventory()

// inventory.pick(coin)
// inventory.pick(crystal)

//.............................................................................
//Принцип подстановки Барбары Лисков
//- возможность замены общим классом

// class User {
//   #role = "user"

//   getRole() {
//     return this.#role
//   }
// }

// class Admin extends User {
//   #role = ["user", "admin"]

//   getRole() {
//     return this.#role.join(", ")
//   }
// }

// function logRole(user) {
//   console.log("Role: " + user.getRole().toUpperCase())
// }

// logRole(new User())
// logRole(new Admin())

//.............................................................................
//Принцип разделения интерфейса
//- class не должен зависить от метода, который ему не нужен

// class Weapon {
//   // strike(){} - оставлять только необходимое
//   // shoot(){}
//   cost

//   dealDamage() {}
// }

// class Rifle extends Weapon {
//   // strike(){
//   //   //Неэффективно
//   // }

//   shoot() {
//     // 🔥
//     this.dealDamage()
//   }
// }

// class Sword extends Weapon {
//   strike() {
//     //Неэффективно
//     this.dealDamage()
//   }

//   // shoot(){
//   //   // 🔥
//   // }
// }

//.............................................................................
//Принцип инверсии зависимостей

// class DB {
//   save(items) {
//     console.log(`Saved: ${items}`)
//   }
// }

// class MongoDB extends DB {
//   save(items) {
//     console.log(`Saved to Mongo: ${items}`)
//   }
// }

// class ToDoList {
//   items = [1, 2, 3]
//   db
//   constructor(db) {
//     this.db = db
//   }
//   //db = new DB()
//   saveToDo() {
//     this.db.save(this.items)
//   }
// }

// const list1 = new ToDoList(new DB())
// list1.saveToDo()
// const list2 = new ToDoList(new MongoDB())
// list2.saveToDo()

//.............................................................................
//Асинхронный код в JS

//.............................................................................
//Запросы на сервер

//.............................................................................
//Пример работы с Insomnia

//.............................................................................
//JSON

//.............................................................................
//Получение данных

// function req(id) {
//   const request = new XMLHttpRequest()
//   request.open("GET", "https://dummyjson.com/products/" + id)
//   request.send()

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText)
//     console.log(data)
//   })
// }

// req(1)
// req(2)
// req("")
// req(3)

// console.log("end")

//.............................................................................
//Упражнение - Расчёт цены

//Моё решение
// function midNum() {
//   let sum = 0
//   const request = new XMLHttpRequest()
//   request.open("GET", "https://dummyjson.com/products/")
//   request.send()

//   request.addEventListener("load", function () {
//     const data = JSON.parse(this.responseText)
//     console.log(data.products[0].price)
//     data.products.forEach((prod) => {
//       sum += prod.price
//     })
//     console.log(sum / data.products.length)
//   })
// }

// midNum()

//Решение
// const request = new XMLHttpRequest()
// request.open("GET", "https://dummyjson.com/products/")
// request.send()

// request.addEventListener("load", function () {
//   const { products } = JSON.parse(this.responseText)
//   console.log(products)
//   const sum = products.reduce((acc, p) => (acc += p.price), 0)
//   console.log(sum / products.length)
// })

//.............................................................................
//Проблемы callback

// const request = new XMLHttpRequest()
// request.open("GET", "https://dummyjson.com/products/")
// request.send()

// request.addEventListener("load", function () {
//   const { products } = JSON.parse(this.responseText)
//   console.log(products)

//   const request = new XMLHttpRequest()
//   request.open("GET", "https://dummyjson.com/products/" + products[0].id)
//   request.send()
//   //...дальше повторы - как делать не надо
// })

//.............................................................................
//Promises и fetch

// const res = fetch("https://dummyjson.com/products/1")
// console.log(res)

//.............................................................................
//Обработка promises

// fetch("https://dummyjson.com/products/1")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })

//.............................................................................
//Цепочка promise

// fetch("https://dummyjson.com/products")
//   .then((response) => response.json())
//   .then(({ products }) => {
//     console.log(products)
//     return fetch("https://dummyjson.com/products/" + products[0].id)
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })

//.............................................................................
//Обработка reject

// fetch("https://dummyjsons.com/products") //намеренная ошибка
//   .then(
//     (response) => {
//       console.log(response)
//       return response.json()
//     }
//     // (error) => console.log(error) //для локального использования
//   )
//   .then(
//     ({ products }) => {
//       console.log(products)
//       return fetch("https://dummyjson.com/products/" + products[0].id)
//     }
//     // (error) => console.log(error)  //для локального использования
//   )

//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => console.log(error)) //для глобального отлова, добавляется в конце

//.............................................................................
//Finally

// fetch("https://dummyjson.com/products") //намеренная ошибка
//   .then((response) => {
//     console.log(response)
//     return response.json()
//   })
//   .then(({ products }) => {
//     console.log(products)
//     return fetch("https://dummyjson.com/products/" + products[0].id)
//   })

//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => console.log(error)) //для глобального отлова, добавляется в конце
//   .finally(() => {
//     console.log("Finally")
//   })

//.............................................................................
//Упражнение - Select выбора категорий

//Моё решение
// fetch("https://dummyjson.com/products/categories")
//   .then((responce) => {
//     return responce.json()
//   })
//   .then((categories) => {
//     selectorFunction(categories)
//   })
//   .catch((error) => console.log(error))

// const selectorFunction = (categories) => {
//   const selectElement = document.getElementById("selector")
//   categories.forEach((category) => {
//     const option = document.createElement("option")
//     option.value = category
//     option.text = category
//     selectElement.appendChild(option)
//   })
// }

//Решение
// function createSelect(array) {
//   const el = document.querySelector(".filter")
//   el.innerHTML = `<select>
//      ${array.map((arrEl) => `<option value=${arrEl}>${arrEl}</option>`)}
//     </select>`
// }

// function getCategories() {
//   fetch("https://dummyjson.com/products/categories")
//     .then((responce) => responce.json())
//     .then((data) => createSelect(data))
//     .catch((error) => console.log(`Ошибка: ${error}`))
// }

// getCategories()

//.............................................................................
//Ручное создание ошибок

// fetch("https://dummyjson.com/productss") //намеренная ошибка
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`Is error ${response.status}`)
//     }
//     return response.json()
//   })
//   .then(({ products }) => {
//     console.log(products)
//     return fetch("https://dummyjson.com/products/" + products[0].id)
//   })

//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     const el = document.querySelector(".filter")
//     el.innerHTML = error.message
//   })

//.............................................................................
//Упражнение - Функция запросов

//Моё решение
// const checker = (addres, error) => {
//   return fetch(addres)
//     .then((response) => response.json())

//     .catch((error) => {
//       const el = document.querySelector(".filter")
//       el.innerHTML = error.message
//     })
// }

// console.log(checker("https://dummyjson.com/products/", "error"))

//Решение

// function getData(url, errorMessage, method = "GET") {
//   return fetch(url, { method }).then((response) => {
//     if (!response.ok) {
//       throw new Error(`Is error ${errorMessage} ${response.status}`)
//     }
//     return response.json()
//   })
// }

// getData("https://dummyjson.com/products/", "Can not get products")
//   .then(({ products }) => {
//     console.log(products)
//     return getData(
//       "https://dummyjson.com/products/" + products[0].id,
//       "Can not get product"
//     )
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     const el = document.querySelector(".filter")
//     el.innerHTML = error.message
//   })

//.............................................................................
//Как работает асинхронность

//.............................................................................
//Пример работы Event Loop

// console.log(1)

// setTimeout(() => {
//   console.log(2)
// }, 0)

// Promise.resolve(3).then((res) => {
//   console.log(res)
//   for (let i = 0; i < 100000000000; i++) {}
// })

// console.log(4)

// for (let i = 0; i < 100000000000; i++) {}

//.............................................................................
//Создание простого Promise

// const prom = new Promise((resolve, reject) => {
//   if (new Date() < new Date("01/01/2024")) {
//     reject(new Error("Error"))
//   }
//   resolve("Success")
// })

// prom.then((data) => console.log(data)).catch((error) => console.log(error))

// function timeout(sec) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, sec * 1000)
//   })
// }

// timeout(1)
//   .then(() => {
//     console.log(1)
//     return timeout(1)
//   })
//   .then(() => {
//     console.log(1)
//     return timeout(1)
//   })
//   .then(() => {
//     console.log(1)
//     return timeout(1)
//   })

//.............................................................................
//Статические методы Promise

// const prom = new Promise((resolve) => {
//   console.log("Constructor")
//   //for (let i = 0; i < 100000000000; i++) {}
//   setTimeout(() => {
//     resolve("Timer")
//   }, 1000)
// })
// prom.then((data) => console.log(data))

// Promise.reject(new Error("Error")).catch((error) => console.error(error))
// Promise.resolve("Instant").then((data) => console.log(data))

//.............................................................................
//Упражнение - создание fetch

//Моё решение
// const myFetch = (address) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.open("GET", address)
//     request.send()

//     if (request.readyState === XMLHttpRequest.DONE) {
//       request.addEventListener("load", function () {
//         const data = JSON.parse(this.responseText)
//         resolve(data)
//       })
//     } else {
//       reject(new Error(`Is error`))
//     }
//   })
// }

// myFetch("https://dummyjson.com/products/")
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error))

//Решение
// function myFetch(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest()
//     request.open("GET", url)
//     request.send()

//     request.addEventListener("load", function () {
//       if (this.status > 400) {
//         reject(new Error(this.status))
//       }
//       resolve(this.responseText)
//     })

//     request.addEventListener("error", function () {
//       reject(new Error(this.status))
//     })

//     request.addEventListener("timeout", function () {
//       reject(new Error("Timeout"))
//     })
//   })
// }

// myFetch("https://dummyjson.com/products/")
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))

//.............................................................................
//Async await

// async function getProducts() {
//   // fetch("https://dummyjson.com/products/")
//   //   .then((response) => response.json())
//   //   .then((data) => console.log(data))
//   const productsResponse = await fetch("https://dummyjson.com/products/")
//   const { products } = await productsResponse.json
//   console.log(products)

//   const productResponse = await fetch(
//     "https://dummyjson.com/products/" + products[0].id
//   )
//   const product = await productResponse.json
//   console.log(product)
// }

// getProducts()
// console.log("End")

//.............................................................................
//Try catch

// async function getProducts() {
//   try {
//     const productsResponse = await fetch("https://dummyjson.com/products/") // намеренная ошибка
//     if (!productsResponse.ok) {
//       throw new Error(productsResponse.status)
//     }
//     const { products } = await productsResponse.json()
//     console.log(products)

//     const productResponse = await fetch(
//       "https://dummyjson.com/products/" + products[0].id
//     )
//     const product = await productResponse.json()
//     console.log(product)
//   } catch (e) {
//     console.error(e)
//   } finally {
//     console.log("Finally")
//   }
// }

// try {
//   const a = 5
//   a = 4
// } catch (e) {
//   console.error(e)
// }

// getProducts()
// console.log("End")

//.............................................................................
//Упражнение - Мой город

//Моё решение
// const navigator = () => {
//   const options = {
//     enableHighAccuracy: true,
//     timeout: 5000,
//     maximumAge: 0,
//   }

//   function success(pos) {
//     const crd = pos.coords

//     console.log("Your current position is:")
//     console.log(`Latitude : ${crd.latitude}`)
//     console.log(`Longitude: ${crd.longitude}`)
//     console.log(`More or less ${crd.accuracy} meters.`)
//   }

//   function error(err) {
//     console.warn(`ERROR(${err.code}): ${err.message}`)
//   }

//   navigator.geolocation.getCurrentPosition(success, error, options)
// }

// async function getGeolocation(pos) {
//   const crd = pos.coords
//   try {
//     const geoloc = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${crd.latitude}&longitude=${crd.longitude}`
//     )
//     if (!geoloc.ok) {
//       throw new Error(geoloc.status)
//     }
//     const { city } = await geoloc.json()
//     console.log(city)
//   } catch (error) {
//     console.log(error)
//   }
// }

// navigator.geolocation.getCurrentPosition(getGeolocation, error, options)

//Решение

// function getMyCoordinates() {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(
//       ({ coords }) => {
//         resolve({ latitude: coords.latitude, longitude: coords.longitude })
//       },
//       (err) => {
//         reject(err)
//       }
//     )
//   })
// }

// async function getMyCity() {
//   try {
//     const { latitude, longitude } = await getMyCoordinates()
//     const response = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
//     )
//     if (!response.ok) {
//       throw new Error(response.status)
//     }
//     const data = await response.json()
//     console.log(data)
//   } catch (e) {
//     console.error(e)
//   }
// }

// getMyCity()

//.............................................................................
//Асинхронные методы

// class ProductRepository {
//   async getProducts() {
//     const response = await fetch("https://dummyjson.com/products")
//     console.log(await response.json())
//   }
// }

// const repo = new ProductRepository()
// repo.getProducts()

// const asyncArrow = async () => {
//   const response = await fetch("https://dummyjson.com/products")
//   console.log(await response.json())
// }

// asyncArrow()

//.............................................................................
//Последовательность выполнения

// const asyncArrow = async () => {
//   try {
//     const response = await fetch("https://dummyjson.com/products")
//     const data = await response.json()
//     return data
//   } catch (e) {
//     console.error(e)
//     throw e
//   }
// }

// console.log("1")(
//   // asyncArrow()
//   //   .then((data) => {
//   //     console.log(data)
//   //   })
//   //   .catch (e=> console.error(e))
//   //   .finally(() => console.log("2"))

//   async () => {
//     console.log("1")
//     const res = await asyncArrow()
//     console.log(res)
//     console.log("2")
//   }
// )()

//.............................................................................
//Параллельное выполнение

// async function getAllProducts() {
//   const response = await fetch("https://dummyjson.com/products/")
//   return response.json()
// }

// async function getProduct(id) {
//   const response = await fetch("https://dummyjson.com/products/" + id)
//   return response.json()
// }

// async function getProductError(id) {
//   const response = await fetch("https://dummyjsons.com/products/" + id)
//   return response.json()
// }

// async function main() {
//   const { products } = await getAllProducts()
//   const res = await Promise.all(
//     products.map((product) => getProduct(product.id))
//   )
//   console.log(res)
//   // for (const product of products) {
//   //   const res = await getProduct(product.id)
//   //   console.log(res)
//   // }
// }

// main()

//.............................................................................
//Другие комбинации Promise

// async function getProduct(id) {
//   const response = await fetch("https://dummyjson.com/products/" + id)
//   return response.json()
// }

// async function getProductError(id) {
//   const response = await fetch("https://dummyjsons.com/products/" + id)
//   return response.json()
// }

// async function main() {
//   // const res1 = await Promise.all([getProduct(1), getProduct(2)])
//   // console.log(res1)
//   // const res2 = await Promise.allSettled([getProduct(1), getProduct(2)])
//   // console.log(res2)
//   const res3 = await Promise.race([getProduct(1).getProduct(2)])
//   console.log(res3)
// }

// main()

//.............................................................................
//Все возможности fetch

// async function main() {
//     const res = await fetch ('https://dummyjsons.com/auth/login', {
//         method: 'POST',
//         headers:{
//             'Content-Type': 'application/json',
//             // 'Autorization':'Token' //пример для авторизации
//         },
//         body: JSON.stringify({
//             username: 'user',
//             password: 'password'
//         })
//     })
//     const data = await res.json()
//     console.log(data)
// }

// main()

//.............................................................................
//Упражнение - Генератор активностей

//Моё решени
// const getAction = async () => {
//   const getter = await fetch("https://www.boredapi.com/api/activity")
//   return getter.json()
// }

// async function getAction3() {
//   const label = document.querySelector(".filter")
//   label.innerHTML = ""
//   try {
//     const data = await Promise.all([getAction(), getAction(), getAction()])
//     data.forEach((element) => {
//       const div = document.createElement("div")
//       div.innerHTML = element.activity
//       label.appendChild(div)
//     })
//     //   console.log(data.Object.activity)
//   } catch (e) {
//     console.error(e)
//   }
// }

//решение
// async function getActivity() {
//   const res = await fetch("https://www.boredapi.com/api/activity")
//   return res.json()
// }
// const wrapper = document.querySelector(".wrapper")

// async function generate() {
//   try {
//     wrapper.innerHTML = ""
//     const data = await Promise.all([
//       getActivity(),
//       getActivity(),
//       getActivity(),
//     ])
//     console.log(data)
//     for (const el of data) {
//       const element = document.createElement("div")
//       element.innerHTML = `${el.activity}`
//       wrapper.appendChild(element)
//     }
//   } catch (e) {
//     console.error(e)
//   }
// }

// try {
//   const a = 1
//   throw a
// } catch (e) {
//   console.log(a)
// }

//.............................................................................
//Как работает DOM

//.............................................................................
//Работа с элементами

// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

// const el = document.querySelector(".wrapper")
// const el2 = document.querySelector("meta")
// console.log(el)
// console.log(el2)
// const el3 = document.getElementsByClassName("wrapper")
// const el4 = document.getElementsByClassName("meta")
// console.log(el3)
// console.log(el4)

// const button = document.createElement("button")
// button.innerHTML = "тест"

// el.append(button)

// const button2 = document.createElement("button")
// button.innerHTML = "тест2"

// // el.prepand(button2)
// // el.before(button2)
// el.after(button2)

// function generate() {
//   el.remove()
// }

//.............................................................................
//Визуальное положение элементов

// function generate(event) {
//   console.log(event.target.getBoundingClientRect())

//   console.log(`X offset: ${window.scrollX}`)
//   console.log(`Y offset: ${window.scrollY}`)
//   console.log(`clientsWidth: ${document.documentElement.clientWidth}`)
//   console.log(`clientsHeight: ${document.documentElement.clientHeight}`)

//   const el = document.querySelector(".down")
//   const rect = el.getBoundingClientRect()

//   window.scrollTo({
//     left: window.scrollX + rect.left,
//     top: window.scrollY + rect.top,
//     behavior: "smooth",
//   })
// }

//.............................................................................
//Типы событий и обработчики

// const button = document.querySelector(".button")

// const eventHandler = function (event) {
//   console.log("Event 1")
// }

// button.addEventListener("mouseover", eventHandler)
// button.addEventListener("click", (event) => {
//   console.log("Event 2")
//   button.removeEventListener("click", eventHandler)
// })

//.............................................................................
//Всплытие событий
//.............................................................................
//Пример всплытия событий

// const button = document.querySelector(".button")
// const inner = document.querySelector(".inner")
// const wrapper = document.querySelector(".wrapper")

// button.addEventListener("click", (event) => {
//   console.log("button")
//   console.log(event.target)
//   console.log(event.currentTarget)
//   this.style.backgroundColor = "purple"
// })

// inner.addEventListener("click", (event) => {
//   console.log("inner")
//   console.log(event.target)
//   console.log(event.currentTarget)
//   this.style.backgroundColor = "blue"
//   event.stopPropagation() // - остановка всплытия (цикла обработки событий (event))
// })

// wrapper.addEventListener(
//   "click",
//   (event) => {
//     console.log("wrapper")
//     console.log(event.target)
//     console.log(event.currentTarget)
//     this.style.backgroundColor = "green"
//   },
//   true
// ) // - true для захвата событий (первый цикл)

//.............................................................................
//Делегирование событий

// const wrapper = document.querySelector(".wrapper")

// for (let i = 0; i < 100; i++) {
//   const el = document.createElement("div")
//   el.innerHTML = `Пользователь с id ${i}`
//   el.setAttribute("data-id", i)
//   // el.addEventListener("click", () => { //так луучше не делать
//   //   console.log(`Deleted user ${i}`)
//   // })
//   wrapper.append(el)
// }

// wrapper.addEventListener("click", (e) => {
//   //лучше так
//   const i = e.target.getAttribute(`data-id`)
//   console.log(`Deleted user ${i}`)
// })

//.............................................................................
//Перемещение по DOM

// const wrapper = document.querySelector(".wrapper")
// console.log(wrapper)

// const inner = document.querySelector(".inner")
// const button = inner.querySelector(".button") //можно от элемента, а не от документа
// console.log(inner)
// console.log(inner.childNodes)
// console.log(inner.children)

// console.log(inner.parentNode)

// console.log(button.closest(".wrapper"))

// console.log(button.previousElementSibling)
// console.log(button.previousSibling)
// console.log(button.nextElementSibling)
// console.log(button.nextSibling)

// console.log(button.parentElement.children)

//.............................................................................
//Жизненный цикл событий DOM

// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log("DOMContentLoaded")
//   console.log(e)
// })

// window.addEventListener("load", function (e) {
//   console.log("load")
//   console.log(e)
// })

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault()
//   e.returnValue = ""
// })

//.............................................................................
//Упражнение - Поиск по списку

//Моё решение - не работает
// const wrapper = document.querySelector(".wrapper")
// const searcher = wrapper.querySelector(".searcher")
// console.log(searcher)

// for (let i = 0; i < 10; i++) {
//   const el = document.createElement("div")
//   el.innerHTML = `${i}`
//   el.setAttribute("id", i)
//   wrapper.append(el)
// }

// searcher.addEventListener("onchange", (event) => {
//   const i = event.target.getAttribute(`id`)
//   i.setAttribute("style", `background-color: #black`)
// })

//Рещение

// const wrapper = document.querySelector(".wrapper")
// for (let i = 0; i < 100; i++) {
//   const el = document.createElement("div")
//   el.innerHTML = i
//   wrapper.append(el)
// }

// function search(event) {
//   const inputValue = event.target.value
//   for (const el of [...wrapper.children]) {
//     if (el.innerHTML.includes(inputValue)) {
//       el.classList.add("yellow")
//       continue
//     }
//     el.classList.remove("yellow")
//   }
// }

//.............................................................................
//Загрузка скриптов defer и async

//.............................................................................
//Модули в JavaScript

//.............................................................................
//IIFE в модулях

// const a = 1(function () {})()

// console.log(APP.calc.add(1, 3))
// console.log(APP.calc.sub(1, 3))

//.............................................................................
//Модули commonjs

// const { add, sub } = require("./calc.js")

// console.log(add(1, 3))
// console.log(sub(1, 3))

//.............................................................................
//ES6 модули

// import { add, sub } from "./calc.js"

// console.log(sub(1, 3))

// setInterval(() => {
//   console.log(add(1, 3))
// }, 1000)

//.............................................................................
//Await на верхнем уровне

// import { add, sub, res } from "./calc.js"

// console.log(sub(1, 3))
// console.log(res)
// console.log(1)

//.............................................................................
//Процесс сборки

// import { add, sub } from "./calc.js"

// const a = 2
// console.log(sub(1, 3))
// console.log(add(1, 3))
// console.log(a)

//rollup app.js --file bundle.js --format iife
//rollup app.js --file bundle.js --format cjs

//.............................................................................
//Обзор NPM

//.............................................................................
//Авторизация и профиль

//.............................................................................
//Разбор package json

//.............................................................................
//Управление зависимостями
