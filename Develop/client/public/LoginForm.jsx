import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

const LoginForm = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginUser, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: { ...formState },
      });

      console.log(data); // You can handle the response as needed

      // Clear the form
      setFormState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {/* Your form input fields go here */}
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
