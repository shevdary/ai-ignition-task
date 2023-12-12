import React from 'react';
import Image from "next/image";
import Link from "next/link";

import Layout from "../../../components/Layout";
import Form from "../../../components/Form";
import img from "../../../assets/images/main-dev.webp";

import '../../global.css'

const SignUp = () => {
  return (
    <Layout>
      <section className="container px-4 py-12 mx-auto flex justify-center">
        <div className={
          "bg-light overflow-hidden w-full " +
          "lg:w-9/12 flex flex-col-reverse lg:flex-row gap-x-16 " +
          "lg:pl-6 rounded-small lg:columns-2"}
        >
          <div className="lg:h-full lg:w-3/5 pt-7 px-4 lg:px-0">
            <h1 className="text-title mb-3.5">Create an account</h1>
            <p className="text-light-gray">
              Already have an account? {' '}
              <Link href="sign-in" className="text-dark underline underline-offset-2">
                Log in
              </Link>
            </p>
            <div className="flex flex-col gap-2.5 mt-10">
              <button className="rounded-3xl border-[1px] py-3">Continue with Facebook</button>
              <button className="rounded-3xl border-[1px] py-3">Continue with Google</button>
              <button className="rounded-3xl border-[1px] py-3">Continue with Twitter</button>
            </div>
            <div className="flex items-center py-6 text-divider">
              <hr className="w-full h-px mr-7 border-t-0 bg-divider opacity-100 dark:opacity-50"></hr>
              or
              <hr className="w-full h-px ml-7 border-t-0 bg-divider opacity-100 dark:opacity-50"></hr>
            </div>
            <div className="h-fit pt-3.5 pb-8">
              <Form />
              <p className="text-xs text-center text-light-gray">
                Already have an account? {' '}
                <Link href="sign-in" className="text-dark underline underline-offset-2">
                  Log in
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 h-full">
            <Image
              src={img}
              width={384}
              height={953}
              alt="Main image"
              placeholder="blur"
              className="w-full h-[200px] lg:h-full lg:max-w-[384px] object-cover"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignUp;
