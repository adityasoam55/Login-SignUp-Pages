import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState();

    function handleClick(event) {
        event.preventDefault();

        if (password.length < 8) {
            setPasswordError("Password should have atleast 8 Characters")
            return;
        }

        console.log("Sending Data...", email, password);
    }

    function handlePasswordBlur() {
        if (password.length <= 8) {
            setPasswordError("Password should have atleast 8 Characters");
            return;
        }
    }

    function handleReset() {
        setEmail("");
        setPassword("");
    }

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='flex flex-col items-center w-60 gap-2 bg-gray-200 py-4 rounded-lg'>
                <h3 className='font-bold'>Login to codeAdi.io</h3>
                <input className='border outline-none rounded-md'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => (setEmail(e.target.value))}
                />
                <input className='border outline-none rounded-md'
                    type="text"
                    placeholder='Password'
                    value={password}
                    onBlur={handlePasswordBlur}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (password.length >= 8) {
                            setPasswordError("");
                        }
                    }}
                />
                {passwordError && <p className='text-xs text-red-600'>{passwordError}</p>}
                <div>
                    <button className='bg-blue-600 text-white rounded-md px-2 py-0.5 mr-4'
                        type='button'
                        onClick={handleReset}
                    >
                        Reset</button>

                    <button className='bg-blue-600 text-white rounded-md px-2 py-0.5'
                        type='submit'
                        onClick={handleClick}
                    >
                        Login</button>
                </div>
            </div>
        </div>
    )
}


export default Login;
