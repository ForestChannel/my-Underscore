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
  map: (args, cb) => {},
}
