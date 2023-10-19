import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Router, Link } from "@reach/router";
export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const { store, actions } = useContext(Context);

    useEffect(() => {
        // Verifica se todos os campos estão preenchidos para habilitar/desabilitar o botão SignUp
        if (name.trim() && email.trim() && password.trim()) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [name, email, password]);

    const handleSignup = () => {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        console.log(trimmedEmail, trimmedName,trimmedPassword,"TRIM***")

        if (trimmedName && trimmedEmail && trimmedPassword) {
            actions.signUp(trimmedName, trimmedEmail, trimmedPassword);
        }
    };

    return (
        <div className="text-center mt-5">
            <h2>Enter your name, email and password...</h2>
            <input
                type="text"
                placeholder="Name:"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/">
                <button
                    className="btn-btn"
                    disabled={isButtonDisabled}
                    onClick={handleSignup}
                >
                    SignUp
                </button>
            </Link>
        </div>
    );
};