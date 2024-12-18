import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setLoginError(true);
      return;
    }
  };

  useEffect(() => {
    axios.get("/data/data.json").then((res) => console.log(res));
  }, []);

  return (
    <>
      <header>
        <h1>HEADER</h1>
      </header>

      {loginError && <p id="errorMessage">ERROR</p>}

      <main>
        <form onSubmit={onSubmit}>
          <div>
            <h2>email</h2>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <h2>password</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
