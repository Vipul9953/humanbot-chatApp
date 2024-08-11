import { useState, useCallback } from 'react';

export const useFormState = (initialState) => {
  const [state, setState] = useState(initialState);

  const validateField = useCallback((name, value) => {
    let error = '';
    switch (name) {
      case 'username':
        if (!value) error = 'Username is required';
        else if (value.length > 25) error = 'Username must not exceed 25 characters'
        break;
      case 'password':
        if (!value) error = 'Password is required';
        else if (value.length < 6) error = 'Password must be at least 6 characters';
        else if (value.length > 20) error = 'Password must not exceed 20 characters';
        break;
      case 'name':
        if (!value) error = 'Name is required';
        else if (value.length > 25) error = 'Name must not exceed 25 characters'
        break;
      case 'bio':
        if (!value) error = 'Bio is required';
        else if (value.length > 25) error = 'Bio must not exceed 25 characters'
        break; 
      default:
        break;
    }
    return error;
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setState((prevState) => ({
      ...prevState,
      [name]: { value, error },
    }));
  }, [validateField]);

  const validateForm = useCallback(() => {
    let isValid = true;
    const newState = {};
    for (let key in state) {
      const error = validateField(key, state[key].value);
      if (error) isValid = false;
      newState[key] = { ...state[key], error };
    }
    setState(newState);
    return isValid;
  }, [state, validateField]);

  return [state, handleChange, validateForm];
};
