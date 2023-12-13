'use client'
import React, { SetStateAction, useState } from 'react';
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {Alert, AlertTitle} from "@mui/material";
interface IFormInput {
  email: string
  password: string
}

const SignInForm = () => {
  const router = useRouter();

  const { register, handleSubmit:submitHandler, formState: { errors } } = useForm<IFormInput>()
  const [error , setError] = useState<SetStateAction<any>>();

  const  handleSubmit = async (data: IFormInput) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
      return;
    }

    if (res && !res.error) {
      router.push('/');
    }
  }

  return (
    <form className="flex flex-col" onSubmit={submitHandler(handleSubmit)}>
      <label className="text-dark flex relative flex-col">
        Email
        <input
          {...register("email",
            {
              required: true,
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/gi,
                message: "Enter the correct email"
              }
            })
          }
          className="mb-12 border-dark border-b-[1px] focus:outline-none"
          placeholder="Jane@gmail.com"
        />

        {errors.email && (
          <p className="absolute bottom-4 mb-2 text-xs text-error" role="alert">
            {errors.email.message}
          </p>
        )}
      </label>
      <label className="text-dark flex relative flex-col">
        Password
        <input
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/gi,
              message: 'Enter the correct password'
            }
          })}
          type="password"
          className="mb-12 border-dark border-b-[1px] focus:outline-none"
        />

        {errors.password && (
          <p className="absolute bottom-4 mb-2 text-xs text-error" role="alert">
            {errors.password.message}
          </p>
        )}
      </label>

      {error && (
        <Alert severity="error">
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}

      <input type="submit" value="Login" className="mt-3.5 rounded-3xl bg-black text-light py-3.5 mb-2"/>
    </form>
  );
};

export default SignInForm;
