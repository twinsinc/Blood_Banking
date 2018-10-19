module.exports = class Recipient {
    constructor(name, bloodtype){
        this.name = name
        this.bloodtype = bloodtype 
    }

    needsBlood(bank){
        bank.recipients.push(this)
    }
}