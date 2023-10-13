import AuthForm from "./components/AuthForm";
export default function Home() {
   return (
      <div
         className="flex flex-col min-h-screen justify-center py-12 sm:px-6 lg:px-8 bg-primary"
         style={{ backgroundImage: `url('/assets/images/bg-auth.png')` }}
      >
         <AuthForm />
      </div>
   );
}
