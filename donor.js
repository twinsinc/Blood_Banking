const Bloodtype = require('./bloodtype')

module.exports = class Donor {
    constructor(name, age, bloodtype, kell, onlyPlasma = false){
        this.name = name
        this.age = age
        this.bloodtype = new Bloodtype(bloodtype)
        this.kell = kell
        this.onlyPlasma = onlyPlasma
    }

    donateTo(bank){
        bank.donors.push(this)
    }

    getBloodType(){
        return this.bloodtype.btname
    }

    donatePlasma(){
        return this.onlyPlasma
    }

    static create({name, age, bloodtype, kell, onlyPlasma}){
        return new Donor(name, age, JSON.stringify(bloodtype.btname), kell, onlyPlasma)
    }
}