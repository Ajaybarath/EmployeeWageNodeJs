class EmployeePayrllData {

    id;
    salary;
    gender;
    startDate;

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : 
        this.startDate.toLocaleDateString("en-US", options);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary + ", gender= " + this.gender + ", startDate= " + empDate;
    }
}

let empployeePayrollData = new EmployeePayrllData(1, "Mark", 30000);
console.log(empployeePayrollData.toString());
empployeePayrollData.name = "john";
console.log(empployeePayrollData.toString());
let newEmployeePayrollData = new EmployeePayrllData(2, "Tressia", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());
