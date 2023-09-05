import Button from "@/components/button"
import Input from "@/components/forms/Input"
import useSubmitForm from "@/hooks/useSubmitForm"

export const AddTaskForm = () => {

  const initialFormData = {
    title: '',
    summary: '',
    tag: '',
    status: 'pending'
  }

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/tasks'
  )

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return(
    <form className="flex flex-col space-y-4">
      <Input
        type="text"
        label="Título"
        placeholder="titulo"
        name="title"
        onChange={handleChange}
      />
      <Input
        type="text"
        label="Resumen"
        placeholder="Resumen"
        name="summary"
        onChange={handleChange}
      />
      <Input
        type="text"
        label="Tag"
        placeholder="Tag"
        name="category"
        onChange={handleChange}
      />
      <Button
        label="Añadir nueva"
        variant={'link'}
        className={'text-white bg-violet-800 hover:bg-violet-900'}
        onClick={handleSubmit} />
    </form>
  )
}