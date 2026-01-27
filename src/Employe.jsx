import React from 'react'

const Employe = () => {

    const employee = {
        name: "yash",
        age: 22,
        city: "hyderabad",
        salary: 50000,
        skills: ["react", "node", "mongodb"],
        role: "developer",
    }

    localStorage.setItem("employee", JSON.stringify(employee))
    const employee1 = localStorage.getItem("employee");
    console.log(employee1);
    return (
        <div>
            <h1>{employee.name}</h1>
            <p>{employee.age}</p>
            <p>{employee.city}</p>
            <p>{employee.salary}</p>
            <p>{employee.skills}</p>
            <p>{employee.role}</p>
        </div>
    )
}

export default Employe