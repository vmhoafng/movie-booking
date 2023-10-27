import AuthForm from "./components/AuthForm";
export default function Home() {
   return (
      <div
         className="min-h-screen py-12 sm:px-6 lg:px-8"
         style={{ backgroundImage: `url('/assets/images/bg-auth.png')` }}
      >
         <AuthForm />
      </div>
   );
}
