import React, { useState, useEffect } from 'react';
import "./hireEmployee.css";
import NavbarComponent from "./Navigation";
import axios from "axios";

export default function HireEmployee() {
    const [newEmployee, setNewEmployee] = useState({
        firstname: "",
        lastname: "",
        email: "",
        date_of_birth: "",
        experience: "",
        topskill: "",
        recruiter: "",
    });

    const [consultants, setConsultants] = useState([]);

    const [isAddEmployeeModalOpen, setAddEmployeeModalOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEmployee({ ...newEmployee, [name]: value });
    };

    const openAddEmployeeModal = () => {
        setAddEmployeeModalOpen(true);
    };

    const closeAddEmployeeModal = () => {
        console.log("Closing modal");
        setAddEmployeeModalOpen(false);
        // Clear the input fields when closing the modal
        setNewEmployee({
            firstname: "",
            lastname: "",
            email: "",
            date_of_birth: "",
            experience: "",
            topskill: "",
            recruiter: "",
        });
    };

    const addEmployee = async () => {
        const {
            firstname,
            lastname,
            email,
            date_of_birth,
            experience,
            topskill,
            recruiter,
        } = newEmployee;

        if (firstname && lastname && email && date_of_birth && experience && topskill && recruiter) {
            try {
                const response = await axios.post("http://localhost:8080/saveConsultants", {
                    firstname,
                    lastname,
                    email,
                    date_of_birth,
                    experience,
                    topskill,
                    recruiter,
                });
                console.log('API Response:', response.data);
                // Fetch the updated list of consultants after adding a new one
                fetchConsultants();
            } catch (error) {
                console.error('Error adding employee:', error);
            }
        } else {
            console.log("Please fill in all the fields before adding an employee.");
        }
    };
    const fetchConsultants = async () => {
        try {
            console.log("11111111111111")
            const response = await axios.get("http://localhost:8080/getConsultants");
            console.log("2222222222222222222222", response)
            setConsultants(response.data);
            console.log('Consultants State:', consultants);
        } catch (error) {
            console.error('Error fetching consultants:', error);
        }
    };


    useEffect(() => {
        // Fetch the list of consultants when the component mounts
        fetchConsultants();
    }, []);

    return (
        <div>
            <NavbarComponent />
            <button type="button" className="add-employee-btn" onClick={openAddEmployeeModal}>
                Add Employee
            </button>

            {consultants.map((consultant, index) => (
                <div key={index} className="employee-box">
                    <h2>{consultant.firstname} {consultant.lastname}</h2>
                    <p>Email: {consultant.email}</p>
                    <p>Date of Birth: {consultant.date_of_birth}</p>
                    <p>Experience: {consultant.experience}</p>
                    <p>Top Skill: {consultant.topskill}</p>
                    <p>Recruiter: {consultant.recruiter}</p>
                </div>
            ))}

            {isAddEmployeeModalOpen && (
                <div className="employee-box">
                    <div className="modal-content">
                        <span className="close-modal-btn" onClick={closeAddEmployeeModal}>&times;</span>
                        <h2>Add Employee</h2>
                        <label className="custom-label">First Name:</label>
                        <input type="text" name="firstname" value={newEmployee.firstname} onChange={handleInputChange} />

                        <label className="custom-label">Last Name:</label>
                        <input type="text" name="lastname" value={newEmployee.lastname} onChange={handleInputChange} />

                        <label className="custom-label">Email:</label>
                        <input type="email" name="email" value={newEmployee.email} onChange={handleInputChange} />

                        <label className="custom-label">Date of Birth:</label>
                        <input type="date" name="date_of_birth" value={newEmployee.date_of_birth} onChange={handleInputChange} />

                        <label className="custom-label">Experience:</label>
                        <input type="text" name="experience" value={newEmployee.experience} onChange={handleInputChange} />

                        <label className="custom-label">Top Skill:</label>
                        <input type="text" name="topskill" value={newEmployee.topskill} onChange={handleInputChange} />

                        <label className="custom-label">Recruiter:</label>
                        <input type="text" name="recruiter" value={newEmployee.recruiter} onChange={handleInputChange} />

                        <button type="button" className="add-employee-btn2" onClick={addEmployee}>
                            Add Employee
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
