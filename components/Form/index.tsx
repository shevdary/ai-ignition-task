'use client'
import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";
interface IFormInput {
  firstName: string
  lastName: string
  email: string
  password: string
  isSubscribe: boolean
}

const Form = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
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
      <label className="mt-6 text-xs text-dark flex flex-row items-center gap-[9px]">
        <input {...register("isSubscribe")} type="checkbox" className="w-6 h-6"/>
        Subscribe to our monthly newsletter
      </label>
      <p className="text-xs text-light-gray mt-6 mb-3.5">By clicking below you agree to our
        <Link href="/" className="text-dark mx-1 underline underline-offset-2">
          Terms of Service
        </Link>
        and
        <Link href="/" className="text-xs mx-1 text-dark underline underline-offset-2">
          Privacy Policy
        </Link>
      </p>
      <input type="submit" value="Sign up" className="mt-3.5 rounded-3xl bg-black text-light py-3.5 mb-2"/>
    </form>
  );
};

export default Form;
