// const a = new Map()
// a.set("aboba", 1).set("biba", 9000).set("fox", 123)
// console.log(a)
// for (const [key, value] of a) {
//   console.log([key, value])
// }
// console.log(a.has("biba"))
// console.log(a.size)
// console.log(a.get("fox"))
// console.log(a.delete("aboba"))
// console.log(a)
// console.log(a.size)

// const objMap = new Map()
// const b1 = { objA: 1 }
// const b2 = b1
// console.log(objMap.set(b1, "objA"))
// console.log(objMap.set(b2, "objB"))
// console.log(objMap)

// const map = new Map()
// const key1 = { name: "John" }
// const key2 = { name: "John" }
// console.log(key1 === key2)

// map.set(key1, "Value 1")

// console.log(map.get(key2)) // "Value 1"

// const setter = new Set([2, 3, 4, 4])
// console.log(setter)
// const setter2 = new Set([])
// setter2.add(1).add(2).add(4).add(6)
// console.log(setter2)

// const union = (firObj, secObj) => {
//   let unionObj = new Set()
//   for (const key of secObj) {
//     unionObj.add(key)
//   }
//   return unionObj
// }

// const intersection = (firstSet, secondSet) => {
//   let intersectionSet = new Set()
//   for (const value of firstSet) {
//     if (secondSet.has(value)) {
//       intersectionSet.add(value)
//     }
//   }
//   return intersectionSet
// }

// const difference = (firstSet, secondSet) => {
//   let differenceSet = new Set()
//   for (const value of firstSet) {
//     if (!secondSet.has(value)) {
//       differenceSet.add(value)
//     }
//   }
//   for (const value of secondSet) {
//     if (!firstSet.has(value)) {
//       differenceSet.add(value)
//     }
//   }

//   return differenceSet
// }

// console.log("intersection")
// console.log(intersection(setter, setter2))
// console.log("difference")
// console.log(difference(setter, setter2))
// console.log("union")
// console.log(union(setter, setter2))

// const editedSetter = new Set(["q", "we", "rty"])
// console.log(editedSetter)
// console.log(editedSetter.has("q"))
// console.log(editedSetter.has("b"))
// editedSetter.delete("q")
// console.log(editedSetter)
// editedSetter.clear()
// console.log(editedSetter)

// const evenSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
// const newEvenSet = new Set()
// const filterSet = (set1, set2) => {
//   for (const key of set1) {
//     if (key % 2 == 0) {
//       set2.add(key)
//     }
//   }
//   console.log(set2)
// }
// filterSet(evenSet, newEvenSet)

// const arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 6, 6]
// const arrUnic = new Set()
// const unic = (par1, par2) => {
//   for (const key of par1) {
//     par2.add(key)
//   }
//   return console.log(par2)
// }
// unic(arr, arrUnic)

// const array = [1, 2, 1, 3, 1, 2, 4]
// const createUniqueSet = (array) => new Set(array)
// console.log(createUniqueSet(array))
