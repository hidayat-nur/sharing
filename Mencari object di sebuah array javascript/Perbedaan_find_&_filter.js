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
  name: 'Andin',
  age: 25,
},{
  id: 4,
  name: 'Andi',
  age: 30,
}]

const findUsers = users.find(user => user.age === 25)
console.log({findUsers})

const filterUsers = users.filter(user => user.age === 25)
console.log({filterUsers})