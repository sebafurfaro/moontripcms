import { RandomImage } from "@/components/RandomImage";
import { LoginForm } from "./components/loginRegister/LoginForm";
import LoginLayout from "@/layouts/LoginLayout";

export default function LoginPage() {

  return(
    <div className="h-screen w-full relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 max-w-sm h-fit m-auto p-10 text-white flex flex-col items-center justify-center space-y-5 backdrop-blur-md shadow-lg">
        <LoginForm />
      </div>
      <RandomImage className={'w-full h-full object-cover'}/>
    </div>
  )
}

LoginPage.getLayout = function(page) {
  return <LoginLayout>{page}</LoginLayout>
}