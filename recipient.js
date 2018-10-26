const Bloodtype = require('./bloodtype')

module.exports = class Recipient {
    constructor(name, bloodtype){
        this.name = name
        this.bloodtype = new Bloodtype(bloodtype)
    }

    needBlood(bank){
        bank.recipients.push(this)
    }

    static create({name, bloodtype}){
        return new Recipient(name, JSON.stringify(bloodtype))
    }
}