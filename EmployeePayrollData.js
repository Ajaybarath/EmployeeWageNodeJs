class EmployeePayrllData {

    id;
    salary;

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    toString() {
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary;
    }
}

let empployeePayrollData = new EmployeePayrllData(1, "Mark", 30000);
console.log(empployeePayrollData.toString());
empployeePayrollData.name = "john";
console.log(empployeePayrollData.toString());