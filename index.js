const Recipient = require('./recipient')
const Donor = require('./donor')
const Bank = require('./bank')
const Database = require('./database')

const california = new Bank('Stanford Blood Center', 'California', '888-723-7831')

const andy = new Donor('Andy', '23', 'A+')
const alisha = new Donor('Alisha', '31', 'O+')
const brian = new Donor('Brian', '27', 'AB-')

const mandy = new Recipient('Mandy', 'A-')
const kevin = new Recipient('Kevin', 'B-')

andy.donates(california)
alisha.donates(california)
brian.donates(california)

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

Database.save(california)
const loadedFile = Database.load()
console.log(loadedFile)