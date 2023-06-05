console.log(`person1: shows ticket`)
console.log(`person2: shows ticket`)

// const premovie = async () => {
//   const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("ticket")
//     }, 3000)
//   })

//   const getPopcorn = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`popcorn`)
//     }, 0)
//   })

//   const getButter  = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(`Butter`)
//     }, 0);
//   })

//   const getColdDrink = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//       resolve(`cold drink`)
//     }, 0);
//   })

//   let ticket = await promiseWifeBringingTickets
//   console.log(`wife: i have the ${ticket}`)
//   console.log("husband: we should go in")
//   console.log("wife: no i am hungry")

//   let popcorn = await getPopcorn

//   console.log(`husband: i got some ${popcorn}`)
//   console.log("husband: we should go in")
//   console.log("wife: no i need butter on my popcorn")

//   let butter = await getButter
//   console.log(`husband: i got ${butter}`)
//   console.log(`husband: anything else darling?`)
//   // console.log(`wife: no we are getting late`)
//   // console.log(`husband: thanks for reminding me ....grins`)
//   console.log(`wife: who will bring the cold drink?!!!`)
  
//   let colddrink = await getColdDrink 
//   console.log(`here is your ${colddrink} mam`)
//   console.log(`husband: anything else darling?`)
//   console.log(`wife: no we are getting late`)
//   console.log(`husband: thanks for reminding me ....grins`)

//   return ticket
// }

// premovie().then((m) => console.log(`person3: shows ${m}`))

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket")
  }, 3000)
})

const getPopcorn = promiseWifeBringingTickets.then((t) => {
  console.log("wife: i have the tickets")
  console.log("husband: we should go in")
  console.log("wife: no i am hungry")
  return new Promise((resolve, reject) => resolve(`${t}  popcorn`))
})

const getButter = getPopcorn.then((t) => {
  console.log(`husband: i got some popcorn`)
  console.log("husband: we should go in")
  console.log("wife: no i need butter on my popcorn")
  return new Promise((resolve, reject) => {
    resolve(`${t}  butter`)
  })
})

const getColdDrink = getButter.then((t)=>{
  console.log(`husband: i got the cold drink`)
  return new Promise((resolve,reject)=> resolve(`${t} cold drink`))
})


getColdDrink.then((t) => {
  console.log(`${t} `)
})

console.log(`person4: shows ticket`)
console.log(`person5: shows ticket`)
