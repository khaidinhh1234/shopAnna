import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, set, useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import instance from "../config/axios";
import { loginSchema, registerSchema } from "../schemaValid/authvalid";
import { IUser } from "../interface/auth";

const AuthForm = ({ isSignup }: any) => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignup ? registerSchema : loginSchema),
  });
  const onSubmit:SubmitHandler<IUser> = async (data: IUser) => {
    try {
      if (isSignup) {
        console.log(data);
        await instance.post(`/signup`, data);
        toast.success("Đăng ký thành công");
      } else {
        const res = await instance.post(`/signin`, data);

        localStorage.setItem("user", JSON.stringify(res.data));
        if (confirm("Successfully, redirect home page?")) {
          nav("/admin");
        }
      }
      setTimeout(() => {
        if (isSignup) {
          if (confirm("Successfully, redirect login page?")) {
            nav("/signin");
          }
        }
      }, 500);
    } catch (error) {
      toast.error(error?.response?.data);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          {isSignup ? "Signup" : "Sigin"}
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                type="email"
                autoComplete="email"
                className="form-control block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("email", { required: true })}
              />
              {errors.email?.message && (
                <p className="text-danger">{errors.email?.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                type="password"
                autoComplete="current-password"
                className="form-control block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register("password", { required: true })}
              />
              {errors.password?.message && (
                <p className="text-danger">{errors.password?.message}</p>
              )}
            </div>
          </div>
          {isSignup && (
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Comfirm Password
                </label>
              </div>

              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  className="form-control block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("confirmPass", { required: true })}
                />
                {errors.confirmPass?.message && (
                  <p className="text-danger">{errors.confirmPass?.message}</p>
                )}
              </div>
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center mb-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isSignup ? "SignUp" : "SignIn"}
            </button>
            {isSignup && (
              <Link to="/signin">Da co tai khoan, chuyen sang dang nhap?</Link>
            )}
          </div>
          <p />
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
