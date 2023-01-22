const employees = [{
  id: 1,
  info: {
    name: 'Ahmad',
    age: 21,
  }
},{
  id: 2,
  info: {
    name: 'Susi',
    age: 25,
  }
},{
  id: 3,
  info: {
    name: 'Andi',
    age: 30,
  }
}]

// const findEmploye = employees.find((item, index) => {
//   return item.info.name === 'Ahmad'
// })
// const findEmploye = employees.find(item => {
//   return item.info.name === 'Ahmad'
// })
const findEmploye = employees.find(item => item.info.name === 'Ahmad')

// pakai index
const findEmploye2 = employees.find((item, index) => index === 1)

// pakai index
const findEmploye3 = employees.find((item, index) => item.info.age > 20)

console.log({findEmploye, findEmploye2, findEmploye3})