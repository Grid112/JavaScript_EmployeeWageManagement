
const Is_Present = 1;
const Is_Part_Time = 1;
const Is_Full_Time = 2;
const Wage_per_Hour = 20;
let empCheck = Math.floor(Math.random()*2);
let empCheck1 =Math.floor(Math.random() * 2) + 1;

if (empCheck == Is_Present){
    console.log("Employee is Present");
    if (empCheck1 == Is_Full_Time) {
        empHours = 8;
    }
    else if (empCheck1 == Is_Part_Time) {
        empHours = 4;
    }
    else {
        empHours = 0;
    }
    let empWage = empHours * Wage_per_Hour;
    console.log("Employee Wage Is: " + empWage);
}
else {
    console.log("Employee is Absent");
}

