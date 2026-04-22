import React, { useState, useEffect } from 'react' ;
import "./App.css";

function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',

    
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        // Fetch data from API on component mount
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => setApiData(data))
            .catch(error => console.error('Error fetching API data:', error));
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        const tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        if (!formData.email.includes('@')) tempErrors.email = "Email is invalid";
        if (!formData.password) tempErrors.password = "Password is required";
        if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate() === {}) {
            setSuccess("Registration successful!");
        }}
    return (
        <div className="form-container">
            <h2>Registration Form</h2>
            <p style ={{ fontSize: "14px", color: "gray" }}>
                API Title: {apiData ? apiData.name : "Loading..."}
            </p>

            <form onSubmit= {handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                {errors.name && <p className="error">{errors.name}</p>}

                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                {errors.email && <p className="error">{errors.email}</p>}
                
                <input name="password" type="password" placeholder="Password" onChange={handleChange} />
                {errors.password && <p className="error">{errors.password}</p>}
                <button type="submit">Register</button>
            </form>

        </div>
    );
}

export default RegistrationForm
