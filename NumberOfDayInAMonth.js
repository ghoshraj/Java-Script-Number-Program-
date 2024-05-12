function day() {

    let year = Number(prompt("Enter the year : "))
    let month = Number(prompt("Enter the month : "))
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            {
                console.log("31 days in this month ")
            } break;
        case 4:
        case 6:
        case 9:
        case 11:
            {
                console.log("30 days in this month ")
            } break;
        case 2:
            {
                if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
                    console.log("29 days in this month ")
                }
                else {

                } console.log("28 days in this month ")
            } break;
        default:
            console.log("Enter correct month : ")

    }
}
day();