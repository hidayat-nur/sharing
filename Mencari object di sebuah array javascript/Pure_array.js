const arrayNumber = [1,2,6,2,3,4,5,6,7,7,5,8,9,10,8]
const findNumber = arrayNumber.find((item, index) => {
  return item === 5
})
// const findNumber = arrayNumber.find(item => {
//   return item === 5
// })
// const findNumber = arrayNumber.find(item => item === 5)
// const findNumber = arrayNumber.find(item => item > 1)
// const findNumber = arrayNumber.find(item => item > 10)
// const findNumber = arrayNumber.find((item, index) => index === 0)
console.log({findNumber})