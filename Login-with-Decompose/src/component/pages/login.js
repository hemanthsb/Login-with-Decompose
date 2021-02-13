import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Task from './Task';

export default function Login() {
  return(
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <Link to='/Task'>
		<Button variant="btn btn-primary">Submit</Button>
		</Link>
      </div>
    </form>
  )
}