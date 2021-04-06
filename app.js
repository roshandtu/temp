
const names=require('./4-names')
const sayHI=require('./5-utils')
const data= require('./6-alteranrive-flavor')

require('./7-mind-grenade')

console.log(data)
sayHI('susan')
sayHI(names.peter)

//http
const _=require('lodash')
const items=[1,[2,[3,[4]]]]
const newItems=_.flattenDeep(items)
console.log(newItems)