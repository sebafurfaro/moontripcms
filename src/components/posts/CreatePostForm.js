import { useState } from "react"
import { Button } from "../Buttons/Button"
import { useFetchPost } from "@/hooks/useFetchPost"
import { RichTextEditor } from "../forms/RichTextEditor"
import { InputField } from "../forms/InputField"
import { TextareaField } from "../forms/TextareaField"
import useSubmitForm from "@/hooks/useSubmitForm"

export const CreatePostForm = () => {
  const initialFormData = {
    title: '',
    summary: '',
    resume: '',
    urlImage: '',
    status: 'pending'
  }

  const fields = [
    {
      type: 'text',
      name: 'title',
      label: 'Título de la nota *',
      isRequired: true,
    },
    {
      type: 'url',
      name: 'urlImage',
      label: 'URL de la imagen *',
      isRequired: true,
    }
  ]

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/posts',
    '/dashboard/entradas'
  )

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5 mt-10 w-full">
      <div className="flex items-center space-x-3 justify-between">
        {fields.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={field.isRequired}
            onChange={handleChange}
          />
        ))}
      </div>
        <TextareaField
          name="summary"
          cols={3}
          rows={5}
          label="Síntesis"
          placeholder="Ingrese la síntesis de la nota"
          isRequired={true}
        />
        <RichTextEditor
          isRequired={true}
          name="resume"
          label="Cuerpo de la nota *"
          placeholder="Cuerpo de la nota"
          onChange={handleChange} />
      <div className="mr-auto">
        <Button variant="info" label="Guardar nota" type="submit"/>
      </div>
    </form>
  )

}