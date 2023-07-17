import Input from "@/components/forms/Input"
import { useFetch } from "@/hooks/useFetch"

export const ContactSection = () => {

  const fields = [
    {
      type: 'text',
      label: 'Nombre'
    },
    {
      type: 'text',
      label: 'Apellido'
    },
    {
      type: 'email',
      label: 'email'
    },
    {
      type: 'tel',
      label: 'Teléfono'
    }
  ]

  const { data, refetch } = useFetch('/api/siteconfig')

  if(!data) return null;


  return(
    <section id="contacto" className="bg-white min-h-screen flex flex-col justify-center">
      <h2 className="font-semibold text-5xl text-center text-slate-800 mb-4">Hola!</h2>
      <div className="grid grid-cols-2 items-center space-y-5 mx-auto px-4 max-w-3xl w-full">
        <form className="grid grid-cols-2 gap-x-4 gap-y-6 w-full">
          {fields.map((field) => (
            <Input
              key={field.label}
              label={field.label}
              type={field.type}
            />
          ))}
        </form>
        <ul className="list-disc">
          {data.data.map((item) => (
            <>
              <li><a href={`mailto:${item.email}`}>{item.email}</a></li>
              <li>{item.address}, {item.city} {item.postalCode}, {item.country}</li>
              <li><a href={`tel:+${item.phone}`}>{item.phone}</a></li>
            </>
          ))}
        </ul>
      </div>
    </section>
  )
}