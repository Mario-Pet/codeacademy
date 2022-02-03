const getSleepHours = function(day) {
    day = day.toLowerCase();
    switch (day) {
        case "monday":
        return 8;

        case "tuesday":
        return 8;

        case "wednesday":
        return 8;

        case "thursday":
        return 8;

        case "friday":
        return 8;

        case "saturday":
        return 8;

        case "sunday":
        return 0;

        default: 
        return "Invalid"
    }
}

const sleepHoursPerWeek = function() {
    return getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday");
}

const getIdealSleepHours = function() {
    const idealSleepHours = 7;
    return idealSleepHours * 7;
}

const calculateSleepDebt = function() {
    const actualSleepHours = sleepHoursPerWeek();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours == idealSleepHours) {
        console.log("Perfect amount of sleep met.")
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`Excess amount by ${actualSleepHours - idealSleepHours} hours a week.`)
    } else if (actualSleepHours < idealSleepHours){
        console.log(`Not Enough, you need to sleep ${idealSleepHours - actualSleepHours} more hour a week.`)
    }
}
calculateSleepDebt()
