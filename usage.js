////// Each Alias forEach

let $ = [1, 2, 3, 4, 5]
// let $ = {
//   one: 1,
//   two: 2,
// }
_.each($, (element, iterator) => console.log(`${iterator} : ${element}`))
