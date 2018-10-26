const Donor = require('./donor')
const Recipient = require('./recipient')

module.exports = class Bank {
    constructor(name, location, telNum) {
        this.name = name
        this.location = location
        this.telNum = telNum
        this.donors = []
        this.recipients = []
    }

    report() {
        console.log(this.name, 'in', this.location, 'has', this.donors.length, 'donors and', this.recipients.length, 'recipients')
    }

    static create({name, location, telNum, donors, recipients}){
        const bank = new Bank(name, location, telNum, donors, recipients)
        bank.donors = donors.map(Donor.create)
        bank.recipients = recipients.map(Recipient.create)
        return bank
    }


}