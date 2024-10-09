import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
// import CreateEditForm from "./CreateEditForm";

type FormFields = {
  email: string;
  password: string;
};

const HookForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      email: "test@gmail.com",
      password: "",
    }
  });

  const onSumit: SubmitHandler<FormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
    } catch (error) {
      setError("root", { message: "This Email is already taken" });
    } finally {
      console.log(data);
    }
  };

  return (
    <>
    <div className="flex justify-evenly  flex-row items-center h-screen bg-gray-100">
      <div className="flex justify-center  flex-col items-center">
        <h4 className="text-xl mb-2">React Hook Forms</h4>
        <div className="w-full max-w-xs">
          <form
            onSubmit={handleSubmit(onSumit)}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Your Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.includes("@")) {
                      return "Email must contain @";
                    }
                    return true;
                  },
                })}
                type="text"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                {...register("password", {
                  required: "Passwords is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.password.message}
                </p>
              )}
              {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
            </div>
            <div className="flex items-center justify-between">
              <Button
                btnText={isSubmitting ? "Submitting..." : "Submit"}
                variant="primary"
                className="mt-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>

              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            {errors.root && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.root.message}
                </p>
              )}
          </form>
        </div>
      </div>
      {/* <div className="flex justify-center  flex-col items-center">
        <CreateEditForm/>
      </div> */}
      </div>

      {/* <form className='flex flex-col gap-2' >
        <input {...register('email')} type='text' placeholder='Enter your email'/>
        <input {...register('password')} type='password' placeholder='Enter your password'/>
      
      </form> */}
    </>
  );
};

export default HookForm;
