const Bloodtype = require('./bloodtype')

module.exports = class Donor {
    constructor(name, age, bloodtype){
        this.name = name
        this.age = age
        this.bloodtype = new Bloodtype(bloodtype)
    }

    donateTo(bank){
        bank.donors.push(this)
    }

    getBloodType(){
        return this.bloodtype
    }

    static create({name, age, bloodtype}){
        return new Donor(name, age, JSON.stringify(bloodtype))
    }
}