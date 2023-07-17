import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { useState } from 'react'

const PasswordType = ({ type, icon, placeholder, name, label, typeLabel, className, onChange, value }) => {

  const [ showPass, setShowPass ] = useState(false)

  const handleShowPass = (event) => {
    event.preventDefault()
    setShowPass(!showPass)
  }

  return(
    <>
    {label && 
      <fieldset className={typeLabel === 'float' ? 'float-label' : 'default-label'}>{label}</fieldset>
    }
    <div className="relative">
      <input
        type={showPass ? 'text' : 'password'}
        className={`form-control ${icon && 'pl-9'} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      />
      <button
        className="absolute top-0 bottom-0 right-3 m-auto z-30 text-slate-800"
        onClick={handleShowPass}>
          {showPass ? <EyeIcon className='h-5 w-5' /> : <EyeSlashIcon className='h-5 w-5' />}
        </button>
    </div>
    {icon && icon}
    </>
  )
}

export default PasswordType;