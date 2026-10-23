// const product = [
//     {name: "Laptop", price: 45000},
//     {name: "Mouse", price: 1500},
//     {name:"Keyboard", price: 30000},
//     {name:"HeadPhones", price:4500}
// ]
// const affordableProducts=product.filter(product => product.price > 5000)
// console.log(affordableProducts)
// const productName = product.map(product => product.name)
// console.log(productName)
// const employees = [
//     {name:"John", department:"Engineering", salery: 25000},
//     {name:"sarah", department:"Design", salery:22000},
//     {name:"David", department:"Engineering", salery:300000}
// ]
// const engineers = employees.filter(employee => employee.department === "Engineering")
// console.log(engineers)

// import { Fragment } from "react/jsx-runtime"

// const expenses = [
//     {title:"Food", amount: 1500, category:"Food"},
//     {title:"Transport", amount: 8000, category:"Transport"},
//     {title:"Food", amount: 12000, category:"Bills"}
// ]
// const filter = expenses.filter(expense => expense.amount < 2000)
// const expensesName = filter.map(filt => filt.title)
// console.log(expensesName)
// const finding = expenses.find(finds => finds.title === "Food")
// console.log(finding)


// const employees = [
//     {name:"John", active:true},
//     {name:"Sarah", active: false},
//     {name:"David", active:true}
// ]
// const activeEmployees = employees.filter(employee => employee.active === true)
// const activeName = activeEmployees.map(employee => employee.name)
// console.log(activeName)


// function multiply(price, quntity){
//     return price * quntity
// }
// console.log(multiply(5,10))

// const add = (a, b)=> a + b;
// console.log(add(5,3))

// const greet=(name = "Guest")=> `Hello ${name}`
// console.log(greet("Favour"))
// const calculateTotal=(price, discount=0)=> price - discount;
// console.log(calculateTotal(5000, 400))

// function calculateSubTotal(price, quantity){
//     return price * quantity
// }
// function calculateTax(amount){
//     return amount * 0.07
// }
// function calculateTotal(price, quantity){
//     const subTotal = calculateSubTotal(price, quantity)
//     const tax = calculateTax(subTotal)
// return tax
// }
// console.log(calculateTotal(40,50))

// function subTotal( price, quantity){
//     return price * quantity
// }
// function discountedSubtotal(amount, discount= 5000){
// return amount - discount
// }
// function calculateTax( amount, discount= 5000){
//     const tax = discountedSubtotal(amount, discount)
// return tax * 0.075
// }
// function calculateTotal(price, quantity){
// const total = subTotal(price, quantity)
// const tax = calculateTax(total)
// const disTotal = discountedSubtotal(total)
// return tax + disTotal
// }
// console.log(calculateTotal(25000, 3))


// const invoice = {
//     client:"ABC Company",
//     price: 2500,
//     quantity: 4,
//     discount: 5000,
//     taxra: 0.075,
// }
// const companyName = "client"
// console.log(invoice[companyName])


// const menuItem={
//     name:"Jollof Rice",
//     price:3500,
//     category:"Main",
//     available: true
// }
// const {name} = menuItem
// console.log(name)

// menuItem.price = 4000
// console.log(menuItem.name)
// console.log(menuItem.price)
// menuItem.discription ="Enjoyable and Tasty"
// console.log(menuItem.discription)
// const employee={
//     name:"Sarah",
//     role:"Designer",
//     department:"Creative",
//     active:true
// }
// function getEmployeeSummary(employee){
//     return `${employee.name} ${employee.role} ${employee.department}`
// }
// console.log(getEmployeeSummary(employee))

// const product = {
//     name:"Laptop",
//     price:45000,
//     stock:12
// }
// const {name, price, stock}= product
// console.log(`Name:${name} Price:${price} Stock:${stock}`)

// function productName({name}){
//     console.log(name) 
// }
// productName()

// const book={
//     title:"Atomic Habits",
//     author:"James Clear",
//     pages: 320
// }
// function mybook({title, author, pages}){
//     return `${title} by ${author} (${pages} pages)`
// }
// console.log(mybook(book)) 

// const employee = [
//     {name: "John", role:"Frontend", }
// ]

// const [first, ...others]=freelancers
// console.log(`Name:${first.name} Role:${first.role} Rate:${first.rate} Skills:${first.skills} `)
// const [ first, ,third, fourth,...others]= freelancers
// console.log(`Mary Skills: ${fourth.skills}`)
// console.log(`David First Skill: ${third.skills[0]}`)
// const updatedjohn = {
//     ...freelancers[0],
//     role:"React Developer",
// email:"Fake@gmail.com"
// }
// console.log(`${updatedjohn.role} ${updatedjohn.email}`)

// const {email, ...remaining}= updatedjohn
// const johnWithoutmail = {
//     ...remaining
// }
// console.log(remaining)
// function findFreelancerByName(freelancers, name){
//     return freelancers.find((freelancer)=> freelancer.name === name)
// }
// console.log( findFreelancerByName(freelancers,"Mary"))
// console.log(findFreelancerByName(freelancers,"John"))

// function getAvailableFreelancer(freelancers, available){
//     return freelancers.filter(freelancer => freelancer.available === available)
// }
// console.log(getAvailableFreelancer(freelancers, true))
// console.log(getAvailableFreelancer(freelancers, false))
// function getFrontendDeveloper(freelancers){
//     return freelancers.filter(freelancer => freelancer.role === "Frontend Developer")
// }
// console.log(getFrontendDeveloper(freelancers))
// function getFreelancerNames(freelancers){
//     return freelancers.map(freelancer => freelancer.name)
// }
// console.log(getFreelancerNames(freelancers))

// function getTotalRates(freelancers){
//     return freelancers.reduce ((freelancer,sum) => sum + freelancer.rate, 0)
// }
// console.log(getTotalRates(freelancers))

// function getAvailableFrontendDevelopers(freelancers){
//     return freelancers.filter(freelancer => freelancer.available === true && freelancer.role === "Frontend Developer")
// }
// console.log(getAvailableFrontendDevelopers(freelancers))

// function getAvailableFreelancerNames(freelancers){
//     const available = freelancers.filter(freelancers => freelancers.available === true)
//     const availableFreelancers = available.map(freelancer => freelancer.name)
//     return availableFreelancers
// }
// console.log(getAvailableFreelancerNames(freelancers))
// function addExperiencelevel(freelancers){
// return freelancers.map(freelancer => ({
//     ...freelancer,
//     experience:"Junior"
// }))
// }
// console.log(addExperiencelevel(freelancers))

// function newFreelancer(freelancer,id,newRole){
// return freelancers.map(freelancers =>{
//     if(freelancers.id === id){
//         return {
//              ...freelancers,
//         role:newRole}
//     }else{
//       return freelancers
//     }
// })
// }
// console.log(newFreelancer(freelancers,1,"Senior React Developer"))

// function getBestAvilableFreelancer(freelancer){
//     const available = freelancers.filter(freelancer => freelancer.available === true)
//    return available.reduce((current, coming)=> {if(current.rate > coming.rate){
//         return current
//     }else{
//         return coming
//     }})
// }
// console.log(getBestAvilableFreelancer(freelancers))
// function getFreelancerSummary(freelancers,name){
//     return freelancers.find(freelancer => freelancer.name === name)
// }
// console.log(getFreelancerSummary(freelancers,"Mary"))
// function updatedFreelancerRate(freelancers, id , newRate){
//     return  freelancers.map(freelancer => 
//         { if(freelancer.id === id){
//        return {...freelancer,
//           id : id,
//           rate:newRate
//        }
//     }else{
//        return {...freelancer}
//     } } )
// }
// console.log(updatedFreelancerRate(freelancers,1,2000))
// function removeFreelancer(freelancers,id){
//     return freelancers.filter(freelancer => freelancer.id !== id)
// }
// console.log(removeFreelancer(freelancers,1))

// function addSkill(freelancers, id, newSkill){
//     return freelancers.map(freelancer => {if(freelancer.id === id){
//         return {
//             ...freelancer,
//             id:id,
//            skills:[...freelancer.skills,newSkill]
//         }
//     }else{
//         return {...freelancer}
//     }})
// }
// console.log(addSkill(freelancers,1,"CSS"))

// function getAverageRate(freelancers){
//     return freelancers.reduce((sum,total)=> sum + total.rate / freelancers.length,0)
// }
// console.log(getAverageRate(freelancers))
// function getMostExpensiveFreelancer(freelancers){
//     return freelancers.reduce((current,coming)=> 
//         {if(current.rate > coming.rate){
//        return current
//     }else{
//         return coming
//     }})
// }
// console.log(getMostExpensiveFreelancer(freelancers))
// function findFreelancerBySkill(freelancers,skill){
//     return freelancers.filter(freelancer => {if(freelancer.skills.includes(skill)){
//         return freelancer
//     }})
// }
// console.log(findFreelancerBySkill(freelancers,"React"))
// function getAvailableFreelancerBySkill(freelancers, skill){
//     return freelancers.filter(freelancer => {if(freelancer.skills.includes(skill) && freelancer.available === true){
//         return freelancer
//     }})
// }
// console.log(getAvailableFreelancerBySkill(freelancers,"React"))

// // function createFreelancerCards(freelancers){
// // return freelancers.map(freelancer =>
// //     { const [
// //     name,
// //     role,
// //     rate,
// //     ...others
// // ] = freelancer

// // })

// // }
// // console.log(createFreelancerCards(freelancers))` 

// function getBestFreelancer(freelancers,skill, maxRate){
//     return freelancers.filter(freelancer => {if(freelancer.skills.includes(skill) && freelancer.available === true && freelancer.rate <= maxRate){
//         return freelancer
//     }})
// }
// console.log(getBestFreelancer(freelancers, "React", 175000))

// function getFreelancerStats(freelancers){
//  const sumarry = {
//     totalFreelancers:freelancers.length,
//     availableFreelancers:freelancers.filter(freelancer => freelancer.available === true).length,
//     averageRate: freelancers.reduce((current,coming)=> current + coming.rate / freelancers.length ,0),
//     highestRate: freelancers.reduce((current,coming)=> {if(current.rate > coming.rate)
//         { return current}else{
//         return coming
//     }}).rate,
//     lowestRate: freelancers.reduce((current,coming)=> {if(current.rate > coming.rate){
//         return coming
//     }else{
//         return current
//     }}).rate,
//     frontEnd: freelancers.filter(freelancer => freelancer.role === "Frontend Developer").length
//  }
//     return sumarry
    
// }
// console.log(getFreelancerStats(freelancers))

// const freelancers=[
//     {id:1, name:"John", role:"Frontend Developer", skills:["JavaScript", "React"], rate:15000, available:true},
//     {id:2, name:"Sarah", role:"UI Designer", skills:["Figma", "Photoshop"], rate:12000, available:true},
//     {id:3, name:"David", role:"Backend Developer", skills:["Node.js", "MongoDB"], rate:18000, available:true},
//     {id:4, name:"Mary", role:"Frontend Developer", skills:["JavaScript", "React","CSS"], rate:17000, available:true},
//     {id:5, name:"Daniel", role:"Graphic Designer", skills:["Photoshop","Illustrator"],rate:10000, available:false},
// ]
// const rates = [150000, 120000,180000,170000,100000]
// let highestrates = rates[0]
// for(let a = 0; a < rates.length; a++){
//     if(highestrates < rates[a]){
//         highestrates = rates[a]
//     }
// }
// console.log(highestrates)

// let count = 0

// for(let a = 0; a < rates.length; a++){
//     if(150000 < rates[a]){
//        count++ 
//     }
// }
// console.log(count)
// for (freelancer of freelancers){
//    if(freelancer.available){
//     console.log(freelancer.name)
//    }
// }

// for (freelancer of freelancers){
// if(freelancer.role === "Frontend Developer"){
//     console.log(freelancer.name)
// }
// }
// let sum = 0
// for(freelancer of freelancers){
//     if(freelancer.available){

//         sum = sum + freelancer.rate
//     }
    
// }
// console.log(sum)

// // for(let a = 0; a < freelancers.length; a++){

// //     if(freelancers[a].available){
// //         console.log(freelancers[a].name)
// //     }
// // }
// for(let a = 0; a < freelancers.length; a++){
//     if(freelancers[a].role === "Frontend Developer"){
//         console.log(freelancers[a].name)
//     }
// }
// // let sum = 0
// // for(let a = 0; a < freelancers.length; a++){
// //     sum = sum + freelancers[a].rate
// // }
// // console.log(sum)

// let availableFreelancers = []

// for(freelancer of freelancers){
// if(freelancer.available === true){

//     availableFreelancers.push(freelancer.name)
// }
// }
// console.log(availableFreelancers)

// let target = ""

// for(let a = 0; a < freelancers.length; a++){
//     if(freelancers[a].name === "Mary"){
//         target = "Mary found"
//         break
//     }
// }
// console.log(target)

// for(let freelancer of freelancers){
//     if(freelancer.available){
//         continue;
//     }
//      console.log(freelancer.rate)
// }


// function analyzeFreelancers(freelancers){
// let analyze = {}
// let availableCount = 0
// for(let a = 0; a < freelancers.length; a++){
        
//         }
//         analyze = {
//         total:freelancers.length,
//          available:freelancers[a].available,
// }

// return analyze
// }
//     console.log(analyzeFreelancers

// scope

// let name = "John"
// function greet(){
//     let greetme = "Hello"
//     var name = "Sarah"
//     console.log(greetme)
//     console.log(name)
// }
// greet()
// console.log(name)

// if(true){
//     var meet = "Im John"
// }
// console.log(meet)

// let company = "TechCorp"
// function Team(){

//     let department = "React Team"

//     function employee(){
//         let name = "John"
//    console.log(`My Name is ${name} Department:${department} Company:${company}`)
//     }
//     employee()
// }
// Team()


// let company = "TechCorp"
// function team(){

//      function employee(){
//         console.log(company)
//     }
//     return employee
// }
//  const now =team()
//  now()

// function counter(){
//     let count = 0
//     function add(){
//         count++
//         console.log(count)
//     }
//     add()
// }
// const increase = counter()

 
// function createCounter(){
// let counter = 0   
// function adding(num){
//     counter = counter + num
//    console.log(counter)
// }
// return adding
// }
// const added = createCounter()
// const another = createCounter()
// added(3)
// added(5)
// another(4)
// another(3)

// function calculateCommissin(rate){
//     return function(price){
//         return price * rate
//     }
// } 
// const commission = calculateCommission(0.05)
// console.log(commission(100000))

// function outer(){
//     let name = "John"
//     function inner(){
// console.log(name)
//     }
//     return inner()
// }
// let greet = outer
// greet()

// function createWallet(){
// let balance = 0

// return{
// deposited,
// withdrawn,
// getbalance,
// }

// function deposited(deposit){

//    balance = balance + deposit
// }

// function withdrawn(withdraw){

//    balance = balance - withdraw
//  }

// function getbalance(){

//       return balance
// }
// return getbalance
// }
// const myWallet = createWallet()
// myWallet.deposited(500)
// myWallet.withdrawn(200)

// console.log(myWallet.getbalance())

// // function createDeliveryTracker(stat){
// //    const delivered = stat

// // return function(){

// //     if(delivered === true){
// //         return "Delivery Completed"
// //     }else{
// //         return "Delivery Canceled"
// //     }
// // }
// // }
// // let failed = createDeliveryTracker(false)
// // let success = createDeliveryTracker(true)
// // console.log(failed())
// // console.log(success())


// function createDeliveryTracker(){
// let completed = 0
// let canceled = 0
// return{
//     complete,
//     getCompletedDelivery,
//     cancel,
//     getCancelledDelivery,
// }
// function complete(){
//    completed++
// }
// function getCompletedDelivery(){
//     return completed
// }
// function cancel(){
//     canceled++
// }
// function getCancelledDelivery(){
//     return canceled
// }
// }
// let trackerA = createDeliveryTracker()
// let trackerB = createDeliveryTracker()
// trackerA.complete()
// trackerB.cancel()
// console.log(trackerA.getCompletedDelivery())
// console.log(trackerB.getCancelledDelivery())

// function createEarningTracker(freelancerName){

//     const name = freelancerName
//     let completedJob = 0
//     let balance = 0
// return{
//     name,
//     addPayment,
//     completeJob,
//     getStatus,
// }
//     function addPayment(amount){
//      balance = balance + amount

//         return balance
//     }
//     function completeJob(){
//         completedJob++
//     }
//     function getStatus(){
//         return{
//             FreelancerName:name,
//             TotalEarning:balance,
//             CompletedJobs:completedJob,
//         }
//     }
// }
// const johnTracker = createEarningTracker("John")
// johnTracker.addPayment(500)
// johnTracker.addPayment(500)
// johnTracker.completeJob()
// console.log(johnTracker.getStatus())



// // const nfts = [
// //   { name: "NeoPunk #1", price: 2.5 },
// //   { name: "NeoPunk #2", price: 0.8 },
// //   { name: "NeoPunk #3", price: 2.5 }, 
// //   { name: "NeoPunk #4", price: 1.9 },
// //   { name: "NeoPunk #5", price: 3.2 }
// // ];
// // const uniqueNFT = nfts.reduce((box,nft) => {
// // const key = nft.price
// // if(box[key]){
// // box[key] = box[key] + 1
// // }else{
// //     box[key] = 1
// // }
// // return box
// // },{})

// // console.log(uniqueNFT)


// function added(num){
//     let numb = num + num
//     console.log(numb)
// }
//   function turn(callback){
//         callback(5)
//     }
// turn(added)

// function start(callback){
//     console.log("Starting......")
//     callback()
// }
// function outer(){
//     console.log("Finished!")
// }
// start(outer)

// function processPayment(amount, callback){
// callback(amount)
// }

// function showPayment(amount){
// console.log(`Payment ${amount}`)
// }
// processPayment(500,showPayment)


// function processPayment(amount, callback, position){
//     console.log(`${position} Payment in Process......`)
//     callback(amount)
// }

// function firstPayment(amount){
//     console.log(`This is my Frist Payment ${amount}`)
// }

// function secondPayment(amount){
//     console.log(`This is my Second Payment ${amount}`)
// }
// processPayment(5000, firstPayment, "first")
// processPayment(20000, secondPayment, "Second")

// processPayment(50000,function(amount){
//     console.log(`Payment Recieved:${amount}`)
// })
// processPayment(1000,(amount)=>{
//     console.log(`${amount}`)
// })

// setTimeout((amount)=>{
//     console.log(amount)
// },20000,300)
// let numbers = [1,2,4,7,9]

//  let multy = numbers.map(function(number){
//       return number*2
// }).filter(function(number){
//     number >= 9
// })
// console.log(multy)

// function processUser(name,callback){
//     console.log("Loading Message...")
// callback(name)
// }

// function welcomeMessage(name){
//     console.log(`Welcome to Callbacks ${name}`)
// }
// processUser("John",welcomeMessage)

// function processPayment(amount, callback){

//     callback(amount)
// }
// function paymentConfirmation(amount){
// console.log(`Confirm Payment:${amount}`)
// }
// function processNFTTransaction(transaction,callback){
//         callback(transaction)
//     }
    
//     function notifyBuyer(transaction){
        
//     console.log(`Hello ${transaction.BuyerName}, You have succesfully bought ${transaction.CollectionName} for ${transaction.Price}`)
//     }
//     function notifySeller(transaction){
        
//         console.log(`Hello ${transaction.SellerName}, You have succesfully sold ${transaction.CollectionName} for ${transaction.Price}`) 
//     }
//     function displayTransInfo(transaction){
        
//         console.log(`${transaction.CollectionName} was sold for ${transaction.Price}, By ${transaction.BuyerName} to ${transaction.SellerName}`)
//     }
//     function salesVolume(transaction){
//         console.log(`Total NFT sold ${transaction.Price}`)
//     }
//     processNFTTransaction(
//         {CollectionName:"Dead Ape",
//             BuyerName:"John", 
//         SellerName:"Sarah",
//         Price:5000,
//     },notifyBuyer)
    
//      processNFTTransaction({CollectionName:"Dead Ape",
//         SellerName:"Sarah", BuyerName:"John", Price:5000}, notifySeller)
    
//     processNFTTransaction({CollectionName:"Dead Ape", BuyerName:"John", SellerName:"Sarah",Price:5000},displayTransInfo)
//     processNFTTransaction({CollectionName:"Dead Ape",
//         SellerName:"Sarah", BuyerName:"John", Price:5000}, salesVolume)
        
// const payment = new Promise((resolve, reject) => {
//     resolve("Payment Recieved")
// })
// payment
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })

// function processPayment(amount){
   

//     return new Promise((resolve, reject) => {

// setTimeout(()=>{
    
//         if (amount > 0) {
//             resolve(`Paid ${amount}`)
//         }else{
//             reject("Payment is Less than the Minimum amount")
//         }
// },3000)

//     })
// }
// processPayment(500)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Payment Process Finished")
// })



// function processPayment(amount){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(amount > 10000){
//                 resolve(`Payment of ${amount} successfully processed`)
            
//             }else{
//                 reject("Payment Failed: Invalid payment amount")
//             }
//         },2000)
//     })
// }
// processPayment(15000)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Payment processing Completed")
// })

// processPayment(500)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Payment processing Completed")
// })

// processPayment(0)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Payment processing Completed")
// })

// const john = {
//     name:"John",
//     role:"Frontend Developer",
//     available:true
// }
// const sarah = {
//     name:"Sarah",
//     role:"Backend Developer",
//     available:false
// }
// const david ={
//     name:"David",
//     role:"Backend Developer",
//     available:true
// }
// const websiteProject = {
//     name:"E-commerce Website",
//     budget:9999
// }
// const nftWebsite = {
//     name:"NFT webpage",
//     budget:1500
// }
// const nuclearPower = {
//     name:"Nuclear Power Plant Website",
//     budget:800000
// }
// function hireFreelancer(freelancer,project){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//   if(freelancer.available === true && project.budget >= 10000){
//             resolve (`${freelancer.name} has been hired for ${project.name} with a budget of ${project.budget} has a ${freelancer.role}`)
//         }else if(project.budget < 10000){
//          reject("Project budget is too low")
//         }else{
//                reject(`${freelancer.name} is currently unavailable`)
//         }
//         },3000)
      
//     })
// }
// hireFreelancer(john,nuclearPower)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("The Hiring process has finished")
// })

// hireFreelancer(sarah,websiteProject)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("The Hiring process has finished")
// })

// hireFreelancer(david,nftWebsite)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("The Hiring process has finished")
// })

// function processNFTPurchase(transaction){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(transaction.Price > 0){
//                 resolve(transaction)
//             }else{
//                 reject("Price is to low")
//             }

//         },2000)
//     })
// }

// processNFTPurchase({
// CollectionName:"Dead Ape",
//  NFTid:2009, 
//  Price:5000,
//  BuyerName:"John",
//      })
// .then((transaction)=>{
//     console.log("Transaction Verified")
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(transaction)
//     },5000)
//    })
// })
// .then((transaction)=>{
//     console.log(`${transaction.CollectionName} was trasfered to ${transaction.BuyerName} for ${transaction.Price}`)
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(transaction)
//         },3000)
//     })
// })
// .then((transaction)=>{

//     console.log("Sales Record Updated.......")
    
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(transaction)
//         },2000)
        
//     })


// })
// .then((transaction)=>{
//     console.log(`NFT RECIPT: Collection Name:${transaction.CollectionName}, NFT ID:${transaction.NFTid} BUYER:${transaction.BuyerName}, PRICE:${transaction.Price}`)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("NFT purchase completed")
// })

// function processFreelancerPayment(payment){

// return new Promise((resolve, reject) => {

//         setTimeout(()=>{
//                 if(payment.amount > 0 && payment.freelancer !== "" && payment.amount !== "" && payment.paymentMethod !=="" ){
//                     resolve(payment)
//                 }else if(payment.freelancer === ""){
//                     reject("Input Freelancer Name")
//                 }else if(payment.paymentMethod === ""){
//                     reject("Select a Payment Method")
//                 }else if(payment.amount === ""){
//                     reject("Input Amount")
//                 }else{
//                     reject("Payment Amount Invalid")
//                 }
//         },2000)
    
// })
// }
// processFreelancerPayment({
//     freelancer: "John",
//     amount: 10000,
//     paymentMethod: "Bank Transfer"
// })
// .then((payment)=>{
//     console.log(`${payment.freelancer} Your Payment is been verified`)
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve(payment)
//         },3000)
        
//     })
// })
// .then((payment)=>{
//     console.log(`Updating Balance..... ${payment.amount}`)
//     return new Promise((resolve, reject) => {
//        setTimeout(()=>{
//             if(payment.amount >= 10000){
//              reject("Exceed Amount Limit, Transaction Failed")
//             }else{
//              resolve(payment) 
//             }
           
//         },2000)
//     })
// })
// .then((payment)=>{
//     console.log(`New Balance is ${payment.amount}`)
//     return new Promise((resolve, reject) => {
//       setTimeout(()=>{
//         resolve(payment)
//       },3000)
//     })
// })
// .then((payment)=>{
//     console.log(`Payment Complete: Freelancer:${payment.freelancer}, Amount:${payment.amount}, Method:${payment.paymentMethod}`)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     setTimeout(()=>{
//          console.log("Transaction Finished")
//     },3000)
   
// })
// function processPayment(amount){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(amount > 0){
//                 resolve("Payment Sucessful")
//             }else{
//                 reject("Payment Failed")
//             }
//         },3000)
//     })
// }
// processPayment(400)
// .then((message)=>{
//     console.log(message)
// })
// .catch((error)=>{
//     console.log(error)
// })
// .finally(()=>{
//     console.log("Transaction Finish")
// })


// async function handlePayment(amount){
// try{
// const message = await processPayment(amount)
// console.log(message)
// }catch(error){
//     console.log(error)
// }
// }
// handlePayment(0)

// const payment = {
//     freelancer: "John",
//     amount: 75000,
//     paymentMethod: "Bank Transfer"
// }

// function verifyPayment(payment){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(payment.amount > 0){
//                resolve(payment) 
//             }else{
//                 reject("Invaild Amount")
//             }
//         },2000)
//     })  
// }
// verifyPayment(payment)

// function updatedBalance(payment){ 
    
//     return new Promise((resolve, reject) => {
//          setTimeout(()=>{
//        if(payment.amount >= 10000){
//         resolve(payment)
//        }else{
//         reject("Amount must not be less than 10000")
//        }
//     },3000) 
//     })
// }



// function sendNotification(payment){

//     return new Promise((resolve, reject) => {
//             setTimeout(()=>{
//                 if(payment.amount >= 10000){
//                     resolve(payment)
//                 }else{
//                     reject("Unable to add Payment")
//                 }
//     },2000)
//     })

    
// }


// async function completePayment(payment){

//    try{

//     const verify = await verifyPayment(payment)
// console.log("Payment Verified")

// const updated = await updatedBalance(verify)
// console.log("Balance Updated")

// const notification = await sendNotification(updated)
// console.log(`${notification.freelancer} ${notification.amount} was added to your Account via ${notification.paymentMethod}`)
//    }catch(error){
// console.log(error)
//    }
// }
// completePayment(payment)

const freelancer ={
    name:"John",
    role:"FrontEnd Developer"
}

const project = [
    {
                    name: "E-commerce Website",
                    budget: 150000
                },
                {
                    name: "NFT Marketplace",
                    budget: 500000
                },
                {
                    name: "Portfolio Website",
                    budget: 0
                }
]

const payment = [
       {
                    amount: 50000,
                    method: "Bank Transfer"
                },
                {
                    amount: 75000,
                    method: "PayPal"
                },
                {
                    amount: 0,
                    method: "Bank Transfer"
                }
]

function getFreelancer(freelancer){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(freelancer.name === "" || freelancer.role === ""){
            reject("Freelancer Name or Freelancer Role can not be Empty")
        }else{
            resolve(freelancer)
        }
        },3000)
    })
}



function getProject(project){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            for(let i = 0; i < project.length; i++){
                 if(project[i].name === ""){
                    reject("Project name can not be Empty")
                }
                if(project[i].budget <= 0){
                    reject("Budget can not be zero or less than zero")
                } 
            }
              
              resolve(project)
                
            
        },3000)
    })
}




function getPayment(payment){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            for(let i = 0; i < payment.length; i++){
                if(payment[i].amount <= 0 ){
                    reject("Amount can not be zero or less")
                }
                  if(payment[i].method === ""){
                    reject("Payment Method can not be Empty")
                  }
            }
                resolve(payment) 
                
            
              
        },3000)
    })
}


async  function loadDashboard(){
    try{
const [freelancers,projects,payments] = await Promise.all([getFreelancer(freelancer),getProject(project),getPayment(payment)])
console.log(`${freelancers.name}`)
    }catch(error){
console.log(error)
    }
}
loadDashboard()

async function getUser(){
    try{
        const  reponse = await fetch(url)
        if(!reponse.ok){
            throw new Error("Request Failed")
        }
        const data = await reponse.json()
        console.log(data)
    }catch(error){
console.log("Something went wrong")
    }
    
}
getUser()

// const title = document.getElementById("title")
// const message = document.getElementById("message")
//  title.textContent = "Welcome to my Website"
// message.textContent = "I am Learning the DOM!"
// const title = document.querySelector(".title")
// const description = document.querySelector("#description")
// const button = document.querySelector(".button")
// title.textContent = "My DOM Website"
// description.textContent = "I am learning querySelector!"
// const message = document.querySelectorAll(".message")
// message[0].textContent = "I am Learning Javasript"
// message[1].textContent = "I am Learning the DOM"
// message[2].textContent = "I will become a great Builder"

// const profile = document.querySelector("#profile")
// profile.innerHTML = "<h1>Profile</h1> <p>Learning JavaScript</p> <strong>Future Deleloper</strong>"

// const profileImage = document.querySelector("#profileImage")
// const profilelink = document.querySelector("#profilelink")
// const username = document.querySelector("#username")
// profileImage.src = "new.jpg"
// profileImage.alt = "New profile picture"
// profilelink.href = "https://youtube.com"
// username.value = "John"

// const productImage = document.querySelector("#productImage")
// const productLink = document.querySelector("#productLink")
// console.log(productImage.getAttribute("src"))
// productImage.getAttribute("alt")
// productLink.getAttribute("href")
// productImage.setAttribute("src", "new-product.jpg")
// productImage.setAttribute("alt", "New Product")
// productLink.setAttribute("href", "https://youtube.com")

// const title = document.querySelector("#title")
// const description = document.querySelector("#description")
// const myBox = document.querySelector("#box")
// title.style.color = "blue"
// title.style.fontSize = "40px"
// description.style.backgroundColor = "yellow"
// description.style.fontSize = "25px"
// myBox.style.backgroundColor = "black" 
// myBox.style.color = "White"
// const name = document.querySelector("#nameInput")
// const message = document.querySelector("#message")
// const title = document.querySelector("#title")
// const countryInput = document.querySelector("#countryInput")
// const result = document.querySelector("#result")
// name.addEventListener("input",(event)=>{
//     message.textContent = name.value
// })
// document.addEventListener("keydown",(event)=>{
//     title.textContent = event.key
// })

//     document.addEventListener("keydown",(event)=>{
// if(event.key === "Enter"){
//     result.textContent = countryInput.value
//     countryInput.value = ""
// }

//     })
//     const form = document.querySelector("#form")
//     const username = document.querySelector("#username")
//     const user = document.querySelector("#user")

//     form.addEventListener("submit", (event)=>{
//         event.preventDefault()
//         user.textContent = username.value
//     })


    // const searchBar = document.querySelector("#searchBar")
    // const searchbtn = document.querySelector("#searchbtn")
    // const searchpara = document.querySelector("#searchpara")
    // const results = document.querySelector("#result")

    // searchBar.addEventListener("input",(event)=>{
    //    searchpara.textContent = `searching for: ${searchBar.value}`
    //    results.textContent = ""
    // })
    // searchbtn.addEventListener("click",()=>{
    //     if(searchBar.value === ""){
    //         results.textContent = "Input can not be Empty"
    //     }else{
    //          results.textContent = `You are Searching for ${searchBar.value}`
    //     }
    //   searchBar.value = ""
    //   searchpara.textContent = ""
    // })


//     const dogInput = document.querySelector("#doginput")
//     const dogSearch = document.querySelector("#dogSearch")
//     const status = document.querySelector("#status")
//     const result = document.querySelector("#result")
// dogInput.addEventListener("input",()=>{
//     result.textContent = ""
// status.textContent = ` Searching for: ${dogInput.value}`

// })
//     dogSearch.addEventListener("click",()=>{
//         if(dogInput.value === ""){
//          status.textContent = "This search can not be Empty"   
//         }else{
//             result.textContent = `Selected Dog: ${dogInput.value}` 
//             status.textContent = "" 
//             dogInput.value = ""
//         }
         
//     })


//     dogInput.addEventListener("keydown",(event)=>{
//    if(event.key === "Enter"){
//         if(dogInput.value === "" ){
//             status.textContent = "This search can not be Empty"
//             result.textContent = ""
//         }else{
//                result.textContent = `Selected Dog: ${dogInput.value}` 
//              status.textContent = "" 
//            dogInput.value = ""
       
//         }
         
//         }  
//     })
// const dogImage = document.querySelector("#dogImage")
// const dogbtn = document.querySelector("#dogbtn")
// const result = document.querySelector("#result")

// dogbtn.addEventListener("click", async()=>{
//     try {
//         dogbtn.disabled = true
//         dogbtn.textContent = "Fetching......"
//         result.textContent = "Finding your dog....."
//         const response = await fetch("https://dog.ceo/api/breeds/image/random")

//         if(!response.ok){
//             throw new Error("Request Failed")
//         }
//         const data = await response.json()
//         dogImage.src = data.message

// const split = data.message.split("/")[4]

// const breed = split.split("-").map(name => name[0].toUpperCase() + name.slice(1)).join(" ")

//         result.textContent = `Breed: ${breed}`
      
//     } catch (error) {
//          result.textContent = "Something went Wrong.Please try again"
//     }
//     finally{
//           dogbtn.disabled = false 
//         dogbtn.textContent = "Click for More"
//     }
// })


// const countryInput = document.getElementById("countryinput")
// const countryImage = document.getElementById("countryImage")
// const countryName = document.getElementById("countryName")
// const countryCapital = document.getElementById("countryCapital")
// const countryRegion = document.getElementById("countryRegion")
// const countryPopulation = document.getElementById("countryPopulation")
// const countryBtn = document.getElementById("countrybtn")
// const status = document.getElementById("status")

// countryBtn.addEventListener("click", async ()=>{
//     try {
//         countryName.textContent = ""
//         countryCapital.textContent = ""
//         countryPopulation.textContent = ""
//         countryImage.src = ""
//         countryRegion.textContent = ""

//         if(countryInput.value.trim() === ""){
//             return status.textContent = "Input can not be Empty"
//         }
//         countryBtn.disabled = true
//         status.textContent = `Searching for ${countryInput.value}...`
//        const country = countryInput.value.trim()
//         console.log(countryInput.value)
// const response = await fetch(`https://countries.dev/name/${country}`)

//         if(!response.ok){
//             throw new Error("Failed to fetch")
//         }
       
//        const data = await response.json()

       
//      countryName.textContent = `Country Name: ${data[0].name}`
//         countryCapital.textContent = `Capital: ${data[0].capital}`
//         countryRegion.textContent = `Region: ${data[0].region}`
//         countryPopulation.textContent = `Population: ${data[0].population}`
//         countryImage.src = data[0].flags.png
//         status.textContent = "Result of your search"
//        countryInput.value = ""

//     } catch (error) {
//         status.textContent = "Country not found, please try again"
//         console.log(error)
//     }finally{
//         countryBtn.disabled = false 
        
//     }
// })

const status = document.getElementById("status") 
const container = document.getElementById("countriesContainer")
async function getCountries() {
    try {
        const reponse = await fetch("https://countries.dev/countries")
        if(!reponse.ok){
            throw new Error("Failed to Fetch"); 
        }
        const data = await reponse.json()
       

data.forEach((country)=>{
     const card =  document.createElement("div")
        const capital = document.createElement("p")
        const region = document.createElement("p")
        const population = document.createElement("p")
        const name = document.createElement("h2")
        const image = document.createElement("img")

        image.src = country.flags.svg
      capital.textContent = `Capital: ${country.capital}`
      region.textContent = `Region: ${country.region}`
          population.textContent = `Population: ${country.population}`
         name.textContent = country.name

card.setAttribute("class","country-card")
image.setAttribute("alt",`flag of ${country.name}`)
capital.setAttribute("class","country-capital")
region.setAttribute("class","country-region")
name.setAttribute("class","country-name")
image.setAttribute("class","country-flag")
population.setAttribute("class","country-population")

          card.append(image, name, capital, region, population)
        container.append(card)
})

// for(let i = 0; i < data.length; i++){
//     const country = data[i]
//     const myCard = document.createElement("div") 
//     const name = document.createElement("p")
//     name.textContent = country.name
//     myCard.append(name)
//     container.append(myCard)
// }

console.log(data.map(name => name.name))

    } catch (error) {
        status.textContent = "Something went wrong"
    }
}
getCountries()



