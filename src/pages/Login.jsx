import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();

    const navigate = useNavigate();

    const submit = (data) => {
        data.email === "john@gmail.com" || data.password === "m38rmF$"
            ? (localStorage.setItem("email", "john@gmail.com"),
              localStorage.setItem("password", "m38rmF$"),
              navigate("/#/"))
            : (alert("Credentials invalids"),
              reset({
                  email: "",
                  password: "",
              }));
    };

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit(submit)} className="LoginContainer">
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email")}
                    />
                    <Form.Text className="text-muted">
                        <br />
                        <p>Data for login:</p>
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
