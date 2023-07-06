import { RandomImage } from "@/components/RandomImage";
import { LoginForm } from "./components/loginRegister/LoginForm";
import LoginLayout from "@/layouts/LoginLayout";
import { useState } from "react";
import { RegisterForm } from "./components/loginRegister/RegisterForm";


export default function LoginPage() {

  const [ changeForm, setChangeForm ] = useState(true)

  const handleChangeForm = () => {
    setChangeForm(!changeForm)
  }

  return(
    <div className="grid md:grid-cols-3 sm:grid-cols-2 min-h-screen w-full relative">
      <div className="py-5 px-10 bg-white flex flex-col items-center justify-center space-y-5">
        {changeForm ? <LoginForm /> : <RegisterForm />}
        <button onClick={handleChangeForm} className="btn btn-link">{changeForm ? 'Registrarse' : 'Iniciar sesión'}</button>
      </div>
      <div className="md:col-span-2 relative overflow-hidden">
        {/* <RandomImage className={'absolute top-0 left-0 w-full h-full object-cover'}/> */}
      </div>
    </div>
  )
}

LoginPage.getLayout = function(page) {
  return <LoginLayout>{page}</LoginLayout>
}