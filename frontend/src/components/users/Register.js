import React, { Component, useState } from 'react'

const Register = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    });

	const onSubmit = (event) => {
		event.preventDefault();
		axios({
			method: 'POST',
			url: 'http://localhost:8000/api/register/',
			data: user,
		})
	}
    const onChange = (event) => {
    event.preventDefault();
    setUser({ ...user, [event.target.name]: event.target.value
    });
    };

    return (
			// <div>
			// 	<h1>forms</h1>
			// </div>
			<div className='card card-body mt-4 mb-4'>
				<h2>Register an Account </h2>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<label htmlFor='exampleInputUsername1'>Username</label>
						<input
							type='username'
							className='form-control'
							id='exampleInputUsername1'
							aria-describedby='usernameHelp'
							placeholder='Enter username'
							onChange={onChange}
							value = {user.username}
						/>
						<label htmlFor='exampleInputEmail1'>Email address</label>
						<input
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
							placeholder='Enter email'
							onChange={onChange}
							value={user.email}
						/>
						<small id='emailHelp' className='form-text text-muted'>
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputPassword1'>Password</label>
						<input
							type='password'
							className='form-control'
							id='exampleInputPassword1'
							placeholder='Password'
							onChange={onChange}
							value = {user.password}
						/>
					</div>

					<div className='form-check'>
						<input
							type='checkbox'
							className='form-check-input'
							id='exampleCheck1'
						/>
						<label className='form-check-label' htmlFor='exampleCheck1'>
							Check me out
						</label>
					</div>

					<div>
						<button type='submit' className='btn btn-primary'>
							Register
						</button>
					</div>
				</form>
			</div>
		);
};

export default Register;
