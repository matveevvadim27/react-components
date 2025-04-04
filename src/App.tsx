import { useState } from "react";
import "./App.css";
import { registerSchema, User } from "schemas/registerSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function App() {
  const [show, setShow] = useState<string>("password");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: User) => {
    console.log(data);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Welcome!</h1>
        <label htmlFor="name" className="form__label visually-hidden">
          Name:
        </label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          aria-required="true"
          {...register("name")}
        />
        {errors.name && (
          <p className="error" aria-live="polite">
            {errors.name.message}
          </p>
        )}
        <label htmlFor="email" className="form__label visually-hidden">
          Email:
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          aria-required="true"
          {...register("email")}
        />
        {errors.email && (
          <p className="error" aria-live="polite">
            {errors.email.message}
          </p>
        )}
        <label htmlFor="password" className="form__label visually-hidden">
          Password:
        </label>
        <input
          id="password"
          placeholder="Password"
          type={show}
          aria-required="true"
          {...register("password")}
        />
        {errors.password && (
          <p className="error" aria-live="polite">
            {errors.password.message}
          </p>
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
          {...register("repeatPassword")}
          placeholder="Repeat Password"
          aria-required="true"
        />
        {errors.repeatPassword && (
          <p className="error" aria-live="polite">
            {errors.repeatPassword.message}
          </p>
        )}

        <div className="form__show">
          <label htmlFor="show_pass" className="form__label">
            Show password:
          </label>
          <input
            id="show_pass"
            type="checkbox"
            onChange={() =>
              setShow((prev) => (prev == "password" ? "text" : "password"))
            }
          />
        </div>

        <button type="submit" className="form__button">
          Register
        </button>
      </form>
    </main>
  );
}
