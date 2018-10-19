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


}