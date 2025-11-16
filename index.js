/* Your Code Here */
// const employee = ["Gray", "Worm", "Security", 1]
function createEmployeeRecord(employee){
    const employeeRecord = {
        firstName : employee[0],
        familyName : employee[1],
        title : employee[2],
        payPerHour : employee[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    
    return employeeRecord
}
function createEmployeeRecords(employees) {
    const records = employees.map(employee => createEmployeeRecord(employee))
    return records
}

function createTimeInEvent(dateStamp) {
    const [date,hour] = dateStamp.split(" ")
    
    const timeIn =  {
        type: "TimeIn",
        hour: parseInt(hour),
        date 
    }
    this.timeInEvents.push(timeIn)
    console.log("this is: ",this.timeInEvents)
    return this
}

function createTimeOutEvent(dateStamp) {
    const [date,hour] = dateStamp.split(" ")
    const timeOut = {
        type: "TimeOut",
        hour: parseInt(hour),
        date
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(timeInEvent => timeInEvent.date === date)
    const timeOut = this.timeOutEvents.find(timeOutEvent => timeOutEvent.date === date)
    
    const timeFinish = parseInt(timeOut.hour) 
    const timeStart = parseInt(timeIn.hour)
    const workHours = (timeFinish - timeStart)/100
    
    return workHours
    
    
    
   

}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

// createEmployeeRecord(employee)
// createTimeInEvent("2002-25-12 1642")