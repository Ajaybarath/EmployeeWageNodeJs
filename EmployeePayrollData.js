class EmployeePayrllData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }

    get gender() {
        return this._gender;
    }

    get startDate() {
        return this._startDate;
    }

    set name(name) {
        let namrRegex = RegExp('^[A-Z]{1}[a-z]{3,}$')
        if (namrRegex.test(name))
            this._name = name;
        else throw 'Name is Incorect'
    }

    set id(id) {
        let idRegex = RegExp('^[1-9]{1}[0-9]{0,}$')
        if (idRegex.test(id)) {
            this._id = id;
        }
        else throw 'Id is Incorect'

    }

    set salary(salary) {
        let salaryRegex = RegExp('^[1-9]{1}[0-9]{0,}$')
        if (salaryRegex.test(salary)) {
            this._salary = salary;
        }
        else throw 'salary is Incorect'
    }

    set gender(gender) {
        let genderRegex = RegExp('^[M, F]$')
        if (genderRegex.test(gender)) {
            this._gender = gender;
        }
        else throw 'gender is Incorect'
    }

    set startDate(startDate) {
        this._startDate = startDate;
    }



    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id= " + this.id + ", name= " + this.name + ", salary= " + this.salary + ", gender= " + this.gender + ", startDate= " + empDate;
    }
}


try {
    let empployeePayrollData = new EmployeePayrllData(1, "Mark", 30000, "M", new Date());
    console.log(empployeePayrollData.toString());
    
}
catch (e) {
    console.error(e)
}
// try {
//     empployeePayrollData.name = "john";
//     console.log(empployeePayrollData.toString());
// }
// catch (e) {
//     console.error(e)
// }
try {

    let newEmployeePayrollData = new EmployeePayrllData(2, "Tressia", 30000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
    console.log(newEmployeePayrollData.name)
}
catch (e) {
    console.error(e)
}
