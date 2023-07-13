import RichTextEditor from "../forms/input/Inputs/RichTextEditor"
import useSubmitForm from "@/hooks/useSubmitForm"
import Input from "../forms/Input"
import Button from "../button"

export const CreatePostForm = () => {
  const initialFormData = {
    title: '',
    summary: '',
    resume: '',
    urlImage: '',
    status: 'pending'
  }

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
        <Input
          type="text"
          name={"title"}
          label="Título de la nota"
          typeLabel={'float'}
          onChange={handleChange}
        />
        <Input
          type="url"
          name={"urlImage"}
          label="URL de la imagen"
          typeLabel={'float'}
          onChange={handleChange}
        />
      </div>
        <Input
          type="textarea"
          name="summary"
          cols={3}
          rows={5}
          label="Síntesis"
          placeholder="Ingrese la síntesis de la nota"
          isRequired={true}
        />
        <RichTextEditor
          name="resume"
          label="Cuerpo de la nota"
          typeLabel="float"
          onChange={handleChange}
          />
      <div className="mr-auto">
        <Button variant="info" label="Crear" type="submit" />
      </div>
    </form>
  )

}