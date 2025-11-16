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
    
    const newTimeIn =  {
        type: "TimeIn",
        hour: parseInt(hour),
        date 
    }
    this.timeInEvents.push(newTimeIn)
    console.log("this is: ",this.timeInEvents)
    return this
}

function createTimeOutEvent(dateStamp) {
    const [date,hour] = dateStamp.split(" ")
    const newTimeOut = {
        type: "TimeOut",
        hour: parseInt(hour),
        date
    }
    this.timeOutEvents.push(newTimeOut)
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

 function wagesEarnedOnDate(date) {
    const hours = hoursWorkedOnDate.call(this, date) // refer to 0neNOte for the explaination of the code. 
    const dayWages = hours * this.payPerHour
    console.log(dayWages)
    return dayWages
 }

 function findEmployeeByFirstName(employeeRecords,firstName) {
    const employeeMatched = employeeRecords.find(employeeRecord => employeeRecord.firstName === firstName)
    return employeeMatched
 }

   
function calculatePayroll(employees){
    const totalWages = employees.reduce((total,employee)=>{
        const wagesArrayPerEmployee = employee.timeInEvents.map(workDay =>{
            return wagesEarnedOnDate.call(employee,workDay.date)
        }) 
        
        const totalPerEmployee = wagesArrayPerEmployee.reduce((accumulator,dayPay) => {return(accumulator+dayPay)},0)
        // for single line code to return the value, we can use different format as below, without using 'return' keyword and '{}' : 
        // const totalPerEmployee = wagesArrayPerEmployee.reduce((accumulator,dayPay) => (accumulator+dayPay),0)
        return (total + totalPerEmployee)
    },0)
    return totalWages

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