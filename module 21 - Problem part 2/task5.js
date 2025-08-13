// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function totalPresentSalary(employees) {
  let sum = 0;
  let increment = 0;
  let salaryAfterIncrement = 0;

  for (const employee of employees) {
    increment = employee.experience * employee.increment;
    salaryAfterIncrement = employee.starting + increment;
    sum += salaryAfterIncrement;
    if (increment !== 0) {
      console.log(employee.name, salaryAfterIncrement, "(Including Increment", increment + "tk)");
    } else {
      console.log(employee.name, salaryAfterIncrement, "(No increment due to experience less than 1 year)");
    }
  }

  return sum;
}

const totalSalary = totalPresentSalary(employees);
console.log("Total Salary", totalSalary);
