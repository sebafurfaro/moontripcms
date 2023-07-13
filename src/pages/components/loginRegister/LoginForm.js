import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import Input from "@/components/forms/Input"
import { Alert } from "@/components/Alert"


async function authenticate(username, password) {
  try {
    const response = await axios.post('/api/authentication', {
      username,
      password
    })
    if (response.status === 200) {
      return response.data.message
    } else {
      throw new Error(response.data.error)
    }
  } catch (error) {
    console.error('Error during authentication', error)
    throw new Error('Las credenciales son inválidas')
  }
}

export const LoginForm = () => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ errorFetch, setErrorFetch ] = useState('')
  const router = useRouter()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await authenticate(username, password)
      localStorage.setItem('isLoggedIn', 'true')
      localStorage.setItem('username',username)
      router.push('/dashboard')
    } catch (error) {
      setErrorFetch(error.message)
    }
  }

  return(
    <form className="flex flex-col space-y-5 w-full" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold">Bienvenido!</h1>
      <h2 className="text-base font-thin">Ingresa los datos de acceso para iniciar sesión</h2>
      {errorFetch && <Alert type="danger" label={errorFetch} />}
      <Input
        type="text"
        value={username}
        name="username"
        label="Usuario"
        typeLabel="default"
        placeholder="Usuario"
        className={errorFetch ? 'border-red-500': ''}
        onChange={handleUsernameChange}
      />
      <Input
        type="password"
        value={password}
        name={'password'}
        label="Password"
        typeLabel={'default'}
        className={errorFetch ? 'border-red-500': ''}
        onChange={handlePasswordChange}
      />
      {/* <Button variant="info" label="Iniciar sesión" /> */}
    </form>
  )
}