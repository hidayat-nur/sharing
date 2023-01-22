const users = [{
  id: 1,
  name: 'Ahmad',
  age: 21,
},{
  id: 2,
  name: 'Susi',
  age: 25,
},{
  id: 3,
  name: 'Andi',
  age: 30,
}]

// const findUser = users.find((item, index) => {
//   return item.id === 2
// }) 
// const findUser = users.find(item => {
//   return item.id === 2
// }) 
const findUser = users.find(item => item.id === 2)

// pakai index
const findUser2 = users.find((item, index) => index === 0)

// jika tidak ketemu
const findUser3 = users.find(item => item.id === 0)

// jika property tidak ada
const findUser4 = users.find(item => item.xxx === 0)

// jika hasil lebih dari satu
const findUser5 = users.find(item => item.id > 0)

console.log({findUser, findUser2, findUser3, findUser4, findUser5})
