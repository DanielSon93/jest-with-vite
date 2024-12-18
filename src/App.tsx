import { FormEvent } from "react";
import "./App.css";
import useLogin from "./hooks/useLogin";

function App() {
  const { values, error, handleChange, validate } = useLogin({
    email: "",
    password: "",
  });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }
  };

  return (
    <>
      <header>
        <h1>HEADER</h1>
      </header>

      {error && <p id="errorMessage">ERROR</p>}

      <main>
        <form onSubmit={onSubmit}>
          <div>
            <h2>email</h2>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <h2>password</h2>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button id="submitButton" type="submit">
            Form 제출
          </button>
        </form>
      </main>

      <footer>
        <h1>FOOTER</h1>
      </footer>
    </>
  );
}

export default App;
