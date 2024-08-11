import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './register.css'

function Register() {
    const [formValues, setFormValues] = useState({
        email: "",name: "",username: "",password: "",confirmPassword: ""
    });

    const [formErrors, setFormErrors] = useState({
        email: false, name: false, username: false, password: false, confirmPassword: false
    });

    const validateEmail = (email) => {
        return /^\S+@\S+\.\S+$/.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8 &&
            /[a-z]/.test(password) &&
            /[A-Z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[!@#$%^&*]/.test(password);
    };

    const validateConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailValid = validateEmail(formValues.email);
        const passwordValid = validatePassword(formValues.password);
        const confirmPasswordValid = validateConfirmPassword(formValues.password, formValues.confirmPassword);
        const nameValid = formValues.name.length > 0;
        const usernameValid = formValues.username.length > 0 === !/\s/.test(formValues.username);

        setFormErrors({
            email: !emailValid,
            name: !nameValid,
            username: !usernameValid,
            password: !passwordValid,
            confirmPassword: !confirmPasswordValid
        });

        if (emailValid === passwordValid === confirmPasswordValid === nameValid === usernameValid) {
            alert("You submitted successfully", formValues);
        } else {
            alert("Your submit is failed");
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));

        switch (name) {
            case "email":
                setFormErrors(prevErrors => ({ ...prevErrors, email: !validateEmail(value) }));
                break;
            case "password":
                setFormErrors(prevErrors => ({ ...prevErrors, password: !validatePassword(value) }));
                break;
            case "confirmPassword":
                setFormErrors(prevErrors => ({ ...prevErrors, confirmPassword: !validateConfirmPassword(formValues.password, value) }));
                break;
            case "name":
                setFormErrors(prevErrors => ({ ...prevErrors, name: value.length === 0 }));
                break;
            case "username":
                setFormErrors(prevErrors => ({ ...prevErrors, username: value.length === 0 || /\s/.test(value) }));
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <h2 className='title'> Welcome To Registeration Page </h2>
        <Form className='container w-50 p-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='w-100 text-start'>Email address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={formValues.email}
                    onChange={handleFormChange}
                />
                {formErrors.email === <Form.Text className="text-danger text-start w-100 d-block">Invalid email format.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label className='w-100 text-start'>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    value={formValues.name}
                    onChange={handleFormChange}
                />
                {formErrors.name === <Form.Text className="text-danger text-start w-100 d-block">Name is required.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label className='w-100 text-start'>Username</Form.Label>
                <Form.Control
                    name="username"
                    type="text"
                    placeholder="Enter username"
                    value={formValues.username}
                    onChange={handleFormChange}
                />
                {formErrors.username === <Form.Text className="text-danger text-start w-100 d-block">Username must not contain spaces.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='w-100 text-start'>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={formValues.password}
                    onChange={handleFormChange}
                />
                {formErrors.password && <Form.Text className="text-danger text-start w-100 d-block">
                    Password must be at least 8 characters, contain at least one lowercase letter, one uppercase letter, one digit, and one special character.
                </Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label className='w-100 text-start'>Confirm Password</Form.Label>
                <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={formValues.confirmPassword}
                    onChange={handleFormChange}
                />
                {formErrors.confirmPassword === <Form.Text className="text-danger text-start w-100 d-block">Passwords must match.</Form.Text>}
            </Form.Group>

            <Button variant="secondary" type="submit">
                Register
            </Button>
        </Form>
        </div>
    );
}

export default Register;


