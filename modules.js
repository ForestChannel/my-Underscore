// let $ = [1, 2, 3, 4, 5]

let $ = {
  one: 1,
  two: 2,
}
let _ = {
  each: (args, cb) => {
    if (Array.isArray(args)) {
      let i = 0
      for (const iterator of args) {
        cb(iterator, i)
        i++
      }
    } else {
      for (const key in args) {
        if (Object.hasOwnProperty.call(args, key)) {
          const element = args[key]
          cb(element, key)
        }
      }
    }
  },
  map: (args, cb) => {
    let i = 0
    if (Array.isArray(args)) {
      for (const iterator of args) {
        args[i] = cb(iterator)
        i++
      }
      return args
    } else{
      let arr = []
      for (const key in args) {
        if (Object.hasOwnProperty.call(args, key)) { 
          const element = args[key];
          arr[i] = cb(element)
          i++
        }
      }
      return arr 
    }
  },
  reduce: (args, cb) => {

  },
}
var sum = _.reduce($, (memo, num) => memo + num, 0)