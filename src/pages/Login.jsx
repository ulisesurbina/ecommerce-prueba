import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err.response));
    }, []);


    const submit = (data) => {
        reset({
            email: "",
            password: "",
        });
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
                        We'll never share your email with anyone else.
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
