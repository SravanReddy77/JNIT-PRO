import React, { useState } from 'react';
import employee from "./employee.svg";
import "./hireEmployee.css";
import NavbarComponent from "./Navigation";
import axios from "axios";

export default function HireEmployee() {
    const [employees, setEmployees] = useState([
/*        { name: "John Hooper", role: "Sr.Full Stack Java Developer", details: "1500$/month, Client: Neilson(Chicago), USA" },
        { name: "James Richardson", role: "Python", details: "3000$/month, Client: Macys(Texas), India" },
        { name: "Kinney William", role: "Devops", details: "5000$/month, Client: Amazon(Boston), USA" },
        { name: "Robert Tony", role: "AWS", details: "1300$/month, Client: Costco(NewYork), China" },*/
    ]);

    const [newEmployee, setNewEmployee] = useState({
        name: "",
        role: "",
        details: "",
    });

    const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const openAddEmployeeModal = () => {
        setAddEmployeeModalOpen(true);
    };

    const closeAddEmployeeModal = () => {
        setAddEmployeeModalOpen(false);
        // Clear the input fields when closing the modal
        setNewEmployee({ name: "", role: "", details: "" });
    };

    const addEmployee = async () => {
        const { name, role, details } = newEmployee;

        if (name && role && details) {
            try {
                const response = await axios.post("http://localhost:8080/saveConsultants", { name, role, details });
                const updatedEmployees = [...employees, response.data];
                setEmployees(updatedEmployees);
                closeAddEmployeeModal();
            } catch (error) {
                // Handle error
                console.error('Error adding employee:', error);
            }
        }
    };
    return (
        <div>
            <NavbarComponent />

{/*            <h2 align="center">JNIT Team Members</h2>*/}
            <button type="button" className="add-employee-btn" onClick={openAddEmployeeModal}>
                Add Employee
            </button>
            {employees.map((employee, index) => (
                <div key={index} className="employee-box">
                    <h2>{employee.name}</h2>
                    <p>{employee.role}</p>
                    <p>Details: {employee.details}</p>
                    <button
                        type="button"
                        className="view-details-btn"
                    >
                        View Details
                    </button>
                </div>
            ))}
            {isAddEmployeeModalOpen && (
                <div className="employee-box">
                    <div className="modal-content">
                        <span className="close-modal-btn" onClick={closeAddEmployeeModal}>&times;</span>
                        <h2>Add Employee</h2>

                        <label className="custom-label">Name:</label>
                        <input type="text" name="name" value={newEmployee.name} onChange={handleInputChange} />

                        <label className="custom-label">Role:</label>
                        <input type="text" name="role" value={newEmployee.role} onChange={handleInputChange} />

                        <label className="custom-label">Details:</label>
                        <input type="text" name="details" value={newEmployee.details} onChange={handleInputChange} />

                        <button type="button" className="add-employee-btn2" onClick={addEmployee}>
                            Add Employee
                        </button>
                    </div>
                </div>
            )}

{/*            <button type="button" className="add-employee-btn" onClick={openAddEmployeeModal}>
                Add Employee
            </button>*/}
        </div>
    );
}

