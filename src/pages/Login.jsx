import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    
    const submit = (data) => {
        localStorage.setItem("email", "john@gmail.com")
        localStorage.setItem("password", "m38rmF$")
            if (String(data.email) === String(localStorage.getItem("email")) || String(data.password) === String(localStorage.getItem("password"))) {
                navigate("/#/")
            }             
            reset({
                email: "",
                password: "",
            });
            alert("Credentials invalids")
    };

    return (
        <div>
            <Form onSubmit={handleSubmit(submit)}>
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                    />
                    <Form.Text className="text-muted">
                        <p>Email: "john@gmail.com"</p>
                        <p>Password: "m38rmF"</p>
                    </Form.Text>
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("password")}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="m-4">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
