const Recipient = require('./recipient')
const Donor = require('./donor')
const Bank = require('./bank')
const Database = require('./database')

const california = new Bank('Stanford Blood Center', 'California', '888-723-7831')
const texas = new Bank('Carter Blood Care', 'Texas', '817-412-5830')

const andy = new Donor('Andy', '23', 'A+')
const alisha = new Donor('Alisha', '31', 'O+')
const brian = new Donor('Brian', '27', 'AB-')

const scot = new Donor('Scot', '34', 'AB+')
const blake = new Donor('Blake', '19', 'B-')

const mandy = new Recipient('Mandy', 'A-')
const kevin = new Recipient('Kevin', 'B-')

andy.donates(california)
alisha.donates(california)
brian.donates(california)

scot.donates(texas)
blake.donates(texas)

mandy.needsBlood(california)
kevin.needsBlood(california)

california.report()

console.log(california.name, 'has blood of those types:')
california.donors.forEach(element => {
    console.log(element.bloodtype)
});


console.log('Today\'s blood needed:')
california.recipients.forEach(element => {
    console.log(element.bloodtype)
});

console.log('Blood donation appointments:', california.telNum)

texas.report()

Database.save(california)
const loadedFile = Database.load()
console.log(loadedFile)