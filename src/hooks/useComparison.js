import { useState } from "react"

export const useComparison = () => {
  
  const [ inputValue, setInputValue ] = useState('')
  const [ confirmInputValue, setConfirmInputValue ] = useState('')
  const [ messageError, setMessageError ] = useState('')

  const handleInputChange = event => {
    setInputValue(event.target.value)
  }

  const handleConfirmInput = event => {
    setConfirmInputValue(event.target.value)
  } 

  const comparisonInputs = () => {
    if (inputValue != confirmInputValue) {
      setMessageError('Los campos no coinciden')
    }
  }

  return {inputValue, setInputValue, confirmInputValue, setConfirmInputValue, messageError, setMessageError, handleConfirmInput, handleInputChange}
}