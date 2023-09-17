const employees = [
  { "nik":"1", "name":"ABIYYU" },
  { "nik":"2", "name":"ADHIKA" },
  { "nik":"3", "name":"AFRIE" },
  { "nik":"4", "name":"ALAM"}
];

const selected_employees = [
  { "nik": "1", "name": "ABIYYU" },
  { "nik": "2","name":"ADHIKA"}
];

function getUnselectedEmployees(employees, selected_employees) {
  const selectedNiks = selected_employees.map(employee => employee.nik);
  return employees.filter(employee => !selectedNiks.includes(employee.nik));
}

const unselected_employees = getUnselectedEmployees(employees, selected_employees);
console.log(unselected_employees);