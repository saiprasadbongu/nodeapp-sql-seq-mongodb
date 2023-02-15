
var connection = require("../connections/mysqldb")



// get all employee details

const getEmployeeData = async () => {
    try {
        let sqlQuery = `select * from employee`;
        return new Promise((resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    } catch (err) {
        console.log("Error while calling getuserdata function : ", err);

    }

}

//post employee data
const postEmployee = async () => {
    try {
        console.log("inserting the details :")

        let sqlQuery = `insert into employee (EmpID, EmpFname, EmpLname, Age, EmailID, PhoneNo, Address) values ('" + req.body.EmpID + "','" + req.body.EmpFname + "','" + req.body.EmpLname + "','" + req.body.Age + "','" + req.body.EmailID + "','" + req.body.PhoneNo + "','" + req.body.Address + "')`;
        return new Promise(async (resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    } catch (err) {
        console.log("Error while calling getuserdata function : ", err);

    }

}


//update the employee data

const updateEmployee = async () => {
    try {
        console.log("inserting the details :")

        let sqlQuery = "UPDATE mcityemp set empid=IFNULL( ? ,empid), name=IFNULL( ? ,name), dept=IFNULL( ? ,dept), location=IFNULL( ? ,location)where Id=" + req.params.empid;
        return new Promise(async (resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    } catch (err) {
        console.log("Error while calling getuserdata function : ", err);
    }
}



//innerjoin 

const empInnerJoin = async () => {
    try {
        console.log("inserting the details :")

        let sqlQuery = "SELECT employee.EmpID,employee.EmpFname,employee.EmpLname,project.ProjectID,project.ProjectName FROM employee INNER JOIN Project ON employee.EmpID=project.EmpID";
        return new Promise(async (resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    } catch (err) {
        console.log("Error while calling getuserdata function : ", err);
    }
}


//leftjoin

const empLeftJoin = async () => {
    try {
        console.log("inserting the details :")

        let sqlQuery = "SELECT employee.EmpFname,employee.EmpLname,project.ProjectID,project.ProjectName FROM employee LEFT JOIN Project ON employee.EmpID=project.EmpID";
        return new Promise(async (resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    } catch (err) {
        console.log("Error while calling getuserdata function : ", err);
    }
}


const empRightJoin = async () => {
    try {
        console.log("inserting the details :")

        let sqlQuery = "SELECT employee.EmpFname,employee.EmpLname,project.ProjectID,project.ProjectName FROM employee RIGHT JOIN Project ON employee.EmpID=project.EmpID";
        return new Promise(async (resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {

                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
    } catch (err) {
        console.log("Error while calling getuserdata function : ", err);
    }
}




module.exports = { getEmployeeData, postEmployee, updateEmployee: updateEmployee, empInnerJoin, empLeftJoin, empRightJoin }


