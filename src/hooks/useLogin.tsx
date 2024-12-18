import { useState } from "react";

function useLogin(initialValues: { [key: string]: string }) {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const hasEmptyFields = Object.values(values).some((value) => !value);
    setError(hasEmptyFields);
    return hasEmptyFields;
  };

  return { values, error, handleChange, validate };
}

export default useLogin;
