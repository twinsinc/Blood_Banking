module.exports = class Donor {
    constructor(name, age, bloodtype){
        this.name = name
        this.age = age
        this.bloodtype = bloodtype 
    }

    donates(bank){
        bank.donors.push(this)
    }
}