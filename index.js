function createEmployeeRecord([firstName, familyName, title, payRate]) {
    let record = {
        "firstName" : firstName,
        "familyName" : familyName,
        "title" : title,
        "payPerHour" : payRate,
        "timeInEvents" : [],
        "timeOutEvents" : []
    }
    return record
}
function createEmployeeRecords(records) {
    return records.map(record=> createEmployeeRecord(record))
}

let createTimeInEvent = function(events) {
    let obj = {
        'type' : 'TimeIn',
        'hour' : events.substring(events.length()-4, events.length()),
        'date' : events.substring(0,10)
    }
    this.timeInEvents.push(obj)
    return this
}



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}