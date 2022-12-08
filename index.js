function createEmployeeRecord(arr){
    let employeeRecord = {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }

    return employeeRecord;
}

function createEmployeeRecords(arrays){
    let arrOfArrs = [];
    for (const arr of arrays) {
       arrOfArrs.push(createEmployeeRecord(arr));
    }
    return arrOfArrs;
}

function createTimeInEvent (obj, dateStamp){
    let dateTime = dateStamp.split(" ");
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(dateTime[1], 10),
        date: dateTime[0]
    }
    obj.timeInEvents.push(timeIn);
    return obj;
}

function createTimeOutEvent (obj, dateStamp){
    let dateTime = dateStamp.split(" ");
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(dateTime[1], 10),
        date: dateTime[0]
    }
    obj.timeOutEvents.push(timeOut);
    return obj;
}

function hoursWorkedOnDate(obj, dateStamp){
    createTimeInEvent(obj, dateStamp);
    createTimeOutEvent(obj, dateStamp);
    let hours = (obj.timeOutEvents[0].hour - obj.timeInEvents[0].hour)
    return hours/100;
}

function wagesEarnedOnDate(obj, dateStamp){
    return hoursWorkedOnDate(obj, dateStamp) * obj.payPerHour
}

console.log(hoursWorkedOnDate(createEmployeeRecord (["moe", "sizlak", "barkeep", 2]), "2014-02-28"))