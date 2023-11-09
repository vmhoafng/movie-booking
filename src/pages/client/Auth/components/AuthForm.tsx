// import axios from "axios";
// import { signIn, useSession } from "auth/react";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import LoadingAnimation from "../../../../app/components/loading/LoadingAnimation";
import AuthSocialButton from "../../../../app/components/button/AuthSocialButton";
import LoginForm from "./form/LoginForm";
import RegisterForm from "./form/RegisterForm";

type Variant = "LOGIN" | "REGISTER";

// const useYupValidationResolver = (validationSchema: Function) => {
//    useCallback(
//       async (data: any) => {
//          try {
//             const values = await validationSchema.validate(data, {
//                abortEarly: false,
//             });

//             return {
//                values,
//                errors: {},
//             };
//          } catch (errors) {
//             return {
//                values: {},
//                errors: errors.inner.reduce(
//                   (
//                      allErrors: any,
//                      currentError: { path: any; type: any; message: any }
//                   ) => ({
//                      ...allErrors,
//                      [currentError.path]: {
//                         type: currentError.type ?? "validation",
//                         message: currentError.message,
//                      },
//                   }),
//                   {}
//                ),
//             };
//          }
//       },
//       [validationSchema]
//    );
// };

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
    setIsLoading(true);
    setTimeout(() => {
      if (variant === "LOGIN") {
        setVariant("REGISTER");
      } else {
        setVariant("LOGIN");
      }
      setIsLoading(false);
    }, 2000);
  }, [variant]);

  // console.log(isLoading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      // confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // setIsLoading(true);
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
    <div className="sm:mx-auto sm:w-full md:w-[540px] shadow-2xl shadow-black/50">
      {isLoading && <LoadingAnimation />}
      <div className="bg-primaryBar px-10 py-16 sm:rounded-lg sm:px-10 w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="flex flex-col justify-center items-center text-center font-bold tracking-tighter pb-8">
            <div className="mb-3 text-highlight text-2xl [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-black/50">
              Welcome
            </div>
            <div className="uppercase text-white/90 text-4xl [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-black/50">
              TO CINEMA
            </div>
          </h2>
        </div>
        {variant === "LOGIN" ? <LoginForm /> : <RegisterForm />}
        <div className="flex flex-col gap-8 justify-center items-center text-sm mt-8 px-2 text-white/90">
          <div className="flex gap-2">
            <div>
              {variant === "LOGIN" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
            </div>
            <div
              onClick={toggleVariant}
              className="cursor-pointer text-highlight hover:underline"
            >
              {variant === "LOGIN" ? "Tạo tài khoản" : "Đăng nhập"}
            </div>
          </div>
        </div>
        <div className="mt-6">
          {/* <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-white/70" />
                  </div> */}
          <div className="relative flex justify-center text-sm overflow-hidden">
            <span
              className="relative uppercase font-bold text-white/70 
                  before:block before:w-[150px] before:h-[2px] before:absolute before:top-[8px] before:right-[80px] before:bg-white/20
                  after:block after:w-[150px] after:h-[2px] after:absolute after:top-[8px] after:left-[80px] after:bg-white/20"
            >
              Hoặc
            </span>
          </div>

          <div className="mt-4 flex justify-center gap-4">
            <AuthSocialButton
              icon={"/assets/icons/twitter.svg"}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={"/assets/icons/google.svg"}
              onClick={() => socialAction("google")}
            />
            <AuthSocialButton
              icon={"/assets/icons/facebook.svg"}
              onClick={() => socialAction("facebook")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
