const data = {
  PortLand: '78/50',
  Dublin: '88/52',
  Lima: '58/40'
}

Object.defineProperty(data, 'Lima', {
  enumerable: false,
  writable: false
})

console.log('keys', Object.keys(data))
console.log('descriptors', Object.getOwnPropertyDescriptors(data))
console.log('descriptor', Object.getOwnPropertyDescriptor(data, 'Lima'))

data.Lima = '59/50'  // 执行到这里就报错
