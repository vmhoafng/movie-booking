// import axios from "axios";
// import { signIn, useSession } from "auth/react";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import Input from "../components/inputs/Input";
import Button from "../../../../app/components/button/Button";
import { toast } from "react-hot-toast";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
   // const session = useSession();
   // const navigate = useNavigate();
   const [variant, setVariant] = useState<Variant>("LOGIN");
   const [isLoading, setIsLoading] = useState(false);
   // useEffect(() => {
   //   if (session?.status === "authenticated") {
   //     navigate("/");
   //   }
   // }, [session?.status, navigate]);

   const toggleVariant = useCallback(() => {
      if (variant === "LOGIN") {
         setVariant("REGISTER");
      } else {
         setVariant("LOGIN");
      }
   }, [variant]);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<FieldValues>({
      defaultValues: {
         name: "",
         email: "",
         password: "",
      },
   });

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true);

      // if (variant === "REGISTER") {
      //   axios
      //     .post("/api/register", data)
      //     .then(() =>
      //       signIn("credentials", {
      //         ...data,
      //         redirect: false,
      //       })
      //     )
      //     .then((callback) => {
      //       if (callback?.error) {
      //         toast.error("Invalid credentials!");
      //       }

      //       if (callback?.ok) {
      //         navigate("/");
      //       }
      //     })
      //     .catch(() => toast.error("Something went wrong!"))
      //     .finally(() => setIsLoading(false));
      // }

      // if (variant === "LOGIN") {
      //   signIn("credentials", {
      //     ...data,
      //     redirect: false,
      //   })
      //     .then((callback) => {
      //       if (callback?.error) {
      //         toast.error("Invalid credentials!");
      //       }

      //       if (callback?.ok) {
      //         navigate("/");
      //       }
      //     })
      //     .finally(() => setIsLoading(false));
      // }
   };

   const socialAction = (action: string) => {
      setIsLoading(true);

      // signIn(action, { redirect: false })
      //   .then((callback) => {
      //     if (callback?.error) {
      //       toast.error("Invalid credentials!");
      //     }

      //     if (callback?.ok) {
      //       navigate("/");
      //     }
      //   })
      //   .finally(() => setIsLoading(false));
   };

   return (
      <div className="sm:mx-auto sm:w-full md:w-[550px]">
         <div
            className="
          bg-primary/80
          px-4
          py-8
          sm:rounded-lg
          sm:px-10
          shadow-xl
          w-full
        "
         >
            <div className="sm:mx-auto sm:w-full sm:max-w-md ">
               <h2 className="flex flex-col justify-center items-center mt-6 text-center font-bold tracking-tighter pb-8">
                  <div
                     className="
                        mb-3
                        text-highlight 
                        text-2xl 
                        [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
                        shadow-black/50"
                  >
                     Welcome
                  </div>
                  <div
                     className="
                        uppercase
                        text-white/90
                        text-4xl
                        [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
                        shadow-black/50"
                  >
                     TO CINEMA
                  </div>
               </h2>
            </div>
            <form
               className="w-full space-y-6"
               onSubmit={handleSubmit(onSubmit)}
            >
               {variant === "REGISTER" && (
                  <Input
                     disabled={isLoading}
                     register={register}
                     errors={errors}
                     required
                     id="name"
                     label="Name"
                     placeholder="Enter your name"
                  />
               )}
               <Input
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  id="email"
                  label="Email address"
                  type="email"
                  placeholder="example@gmail.com"
               />
               <Input
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  id="password"
                  label="Password"
                  type="password"
                  placeholder="Password"
               />
               {variant === "REGISTER" && (
                  <Input
                     disabled={isLoading}
                     register={register}
                     errors={errors}
                     required
                     id="cfmpassword"
                     label="Confirm password"
                     type="password"
                     placeholder="Password"
                  />
               )}
               <div>
                  <Button disabled={isLoading} type="submit">
                     {variant === "LOGIN" ? "Sign In" : "Register"}
                  </Button>
               </div>
            </form>
            <div
               className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
            >
               <div>
                  {variant === "LOGIN"
                     ? "New member?"
                     : "Already have an account?"}
               </div>
               <div
                  onClick={toggleVariant}
                  className="cursor-pointer text-highlight hover:underline"
               >
                  {variant === "LOGIN" ? "Create an account" : "Login"}
               </div>
            </div>
            <div className="mt-6">
               <div className="relative">
                  <div
                     className="
                absolute 
                inset-0 
                flex 
                items-center
              "
                  >
                     <div className="w-full border-t border-white/70" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                     <span className="bg-primary px-2 uppercase font-bold text-white/70">
                        Or continue with
                     </span>
                  </div>
               </div>

          <div className="mt-6 flex gap-2">
            {/* <AuthSocialButton
              icon={"BsGithub"}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={"BsGoogle"}
              onClick={() => socialAction("google")}
            />
            <AuthSocialButton
              icon={"BsFacebook"}
              onClick={() => socialAction("facebook")}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;