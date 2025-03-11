import { useState } from "react";
import "./App.css";

export default function App() {
  const [show, setShow] = useState<string>("password");

  const [name, setName] = useState<string>("");
  const [nameDirty, setNameDirty] = useState<boolean>(false);
  const [nameError, setNameError] = useState<string>(
    "The name cannot be empty"
  );

  const [email, setEmail] = useState<string>("");
  const [emailDirty, setEmailDirty] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>(
    "The email cannot be empty"
  );

  const [password, setPassword] = useState<string>("");
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>(
    "The password cannot be empty"
  );

  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [repeatPasswordDirty, setRepeatPasswordDirty] =
    useState<boolean>(false);
  const [repeatPasswordError, setRepeatPasswordError] = useState<string>(
    "The password cannot be empty"
  );

  const isValid = (str: string): boolean => /^[a-zA-Zа-яА-Я0-9]+$/.test(str);
  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    if (event.target.value.length <= 1 || event.target.value.length >= 10) {
      setNameError(
        "The name must contain more than 2 characters and less than 10"
      );
      event.currentTarget.style.outline = "2px solid red";
      if (event.target.value.length === 0) {
        setNameError("The name cannot be empty");
      }
    } else {
      setNameError("");
      event.currentTarget.style.outline = "2px solid rgb(98, 231, 109)";
    }
    if (!isValid(event.target.value)) {
      setNameError("The name can only contain letters and numbers.");
      event.currentTarget.style.outline = "2px solid red";
      if (event.target.value.length === 0) {
        setNameError("The name cannot be empty");
        event.currentTarget.style.outline = "2px solid red";
      }
    }
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    if (!isValidEmail(event.target.value.toLowerCase())) {
      console.log(isValidEmail(event.target.value));
      setEmailError("Invalid email format");
      event.target.style.outline = "2px solid red";
      if (event.target.value.length === 0) {
        setEmailError("The email cannot be empty");
      }
    } else {
      setEmailError("");
      event.target.style.outline = "2px solid rgb(98, 231, 109)";
    }
  };

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    if (event.target.value.length === 0) {
      setPasswordError("The password cannot be empty");
      event.target.style.outline = "2px solid red";
    } else {
      setPasswordError("");
      event.target.style.outline = "2px solid rgb(98, 231, 109)";
    }
  };

  const repeatPasswordHundler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatPassword(event.target.value);
    if (event.target.value.length === 0) {
      setRepeatPasswordError("The Repeat Password cannot be empty");
      event.target.style.outline = "2px solid red";
      // return;
    }
    if (event.target.value !== password) {
      setRepeatPasswordError("The Repeat Passwords do not match");
      event.target.style.outline = "2px solid red";
    } else {
      setRepeatPasswordError("");
      event.target.style.outline = "2px solid rgb(98, 231, 109)";
    }
  };

  const showPassword = () => {
    setShow((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { name, email, password };
    console.log(user);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "name":
        setNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "repeatPassword":
        setRepeatPasswordDirty(true);
        break;
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1 className="form__title">Welcome!</h1>
        <label htmlFor="name" className="form__label visually-hidden">
          Name:
        </label>
        <input
          id="name"
          type="text"
          value={name}
          name="name"
          placeholder="Name"
          onChange={(event) => nameHandler(event)}
          onBlur={(event) => blurHandler(event)}
        />
        {nameDirty && nameError && <p className="error">{nameError}</p>}

        <label htmlFor="email" className="form__label visually-hidden">
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          name="email"
          placeholder="Email"
          onChange={(event) => emailHandler(event)}
          onBlur={(event) => blurHandler(event)}
        />
        {emailDirty && emailError && <p className="error">{emailError}</p>}

        <label htmlFor="password" className="form__label visually-hidden">
          Password:
        </label>
        <input
          id="password"
          type={show}
          value={password}
          name="password"
          placeholder="Password"
          onChange={(event) => passwordHandler(event)}
          onBlur={(event) => blurHandler(event)}
        />
        {passwordDirty && passwordError && (
          <p className="error">{passwordError}</p>
        )}

        <label
          htmlFor="repeat-password"
          className="form__label visually-hidden"
        >
          Repeat Password:
        </label>
        <input
          id="repeat-password"
          type={show}
          value={repeatPassword}
          name="repeatPassword"
          placeholder="Repeat Password"
          onChange={(event) => repeatPasswordHundler(event)}
          onBlur={(event) => blurHandler(event)}
        />
        {repeatPasswordDirty && repeatPasswordError && (
          <p className="error">{repeatPasswordError}</p>
        )}
        <div className="form__show">
          <label htmlFor="show_pass" className="form__label">
            Show password:
          </label>
          <input id="show_pass" type="checkbox" onChange={showPassword} />
        </div>

        <button type="submit" className="form__button">
          Register
        </button>
      </form>
    </main>
  );
}
