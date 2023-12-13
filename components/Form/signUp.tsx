import React, {SetStateAction, useState} from 'react';
import { useForm } from "react-hook-form";
import Link from "next/link";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {handleFont} from "../../constants/helpers";
import {Alert, AlertTitle} from "@mui/material";
interface IFormInput {
  firstName: string
  lastName: string
  email: string
  password: string
  subscribe: boolean
}
const SignUpFrom = () => {
  const router = useRouter();
  const { register, handleSubmit:submitHandler, formState: { errors }, } = useForm<IFormInput>()
  const [error , setError] = useState<SetStateAction<any>>(null);

  const  handleSubmit = async(data: IFormInput) => {
    const res = await signIn('signup', {
      ...data,
      redirect: false
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
      <div className="flex flex-col sm:flex-row gap-x-8">
        <div className="sm:w-1/2">
          <label className="text-dark flex relative flex-col">
            First Name
            <input
              placeholder="John"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "First name is required"
                },
                maxLength: 20,
              })}
              className="mb-12 border-dark border-b-[1px] focus:outline-none"
            />
            {errors.firstName && <p className="absolute bottom-4 mb-2 text-xs text-error" role="alert">{errors.firstName.message}</p>}
          </label>
        </div>
        <div className="sm:w-1/2">
          <label className="text-dark flex relative flex-col">
            Last Name
            <input
              {...register("lastName", {
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Enter the correct Last Name"
                }
              })}
              className="mb-12 border-dark border-b-[1px] focus:outline-none"
              placeholder="Doe"
            />

            {errors.lastName && (
              <p className="absolute bottom-4 mb-2 text-xs text-error" role="alert">
                {errors.lastName.message}
              </p>
            )}
          </label>
        </div>
      </div>
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
      <label className={handleFont("mt-6 text-xs text-dark flex flex-row items-center gap-[9px]", false)}>
        <input {...register("subscribe")} type="checkbox" className="w-6 h-6"/>
        Subscribe to our monthly newsletter
      </label>
      <p className={handleFont("text-xs text-light-gray mt-6 mb-3.5", false)}>By clicking below you agree to our
        <Link href="/" className="text-dark mx-1 underline underline-offset-2">
          Terms of Service
        </Link>
        and
        <Link href="/" className="text-xs mx-1 text-dark underline underline-offset-2">
          Privacy Policy
        </Link>
      </p>

      {error && (
        <Alert severity="error">
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}

      <input
        type="submit"
        value="Sign up"
        className="cursor-pointer mt-3.5 rounded-3xl bg-black text-light py-3.5 mb-2"
      />
    </form>
  );
};

export default SignUpFrom;
