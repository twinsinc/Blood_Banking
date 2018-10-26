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

andy.donateTo(california)
alisha.donateTo(california)
brian.donateTo(california)
console.log(andy.getBloodType())

scot.donateTo(texas)
blake.donateTo(texas)

mandy.needBlood(california)
kevin.needBlood(california)

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
const loadedCF = Database.load()
const bankCF = Bank.create(loadedCF)
console.log(bankCF.donors)
console.log(bankCF.recipients)

Database.save(texas)
const loadedTX = Database.load()
const bankTX = Bank.create(loadedTX)
console.log(bankTX.donors)
console.log(bankTX.recipients)