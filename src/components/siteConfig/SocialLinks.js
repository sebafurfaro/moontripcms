
import Button from "../button"
import Input from "../forms/Input"
import useSubmitForm from "@/hooks/useSubmitForm"

export const SocialLinks = () => {

  const fields = [
    {
      type: 'url',
      name: 'facebookUrl',
      icon: 'facebook',
      label: 'Facebook',
      placeholder: 'https://facebook.com/cuenta',
    },
    {
      type: 'url',
      name: 'instagramUrl',
      icon: 'instagram',
      label: 'Instagram',
      placeholder: 'https://instagram.com/cuenta',
    },
    {
      type: 'url',
      name: 'youtubeUrl',
      icon: 'youtube',
      label: 'Youtube',
      placeholder: 'https://youtube.com/cuenta',
    },
    {
      type: 'url',
      name: 'twitterUrl',
      icon: 'twitter',
      label: 'Twitter',
      placeholder: 'https://twitter.com/cuenta',
    },
    {
      type: 'url',
      name: 'appstoreUrl',
      icon: 'appstore',
      label: 'App Store',
      placeholder: 'https://example.com/cuenta',
    },
    {
      type: 'url',
      name: 'playstoreUrl',
      icon: 'playstore',
      label: 'Play Store',
      placeholder: 'https://example.com/cuenta',
    }
  ]

  const social = fields.slice(0,4)
  const stores = fields.slice(-2)


  const initialFormData = {
    facebookUrl: '',
    instagramUrl: '',
    youtubeUrl: '',
    twitterUrl: '',
    appstoreUrl: '',
    playstoreUrl: ''
  }

  const { formData, setFormData, handleSubmit } = useSubmitForm(
    initialFormData,
    '/api/sociallinks'
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return(
    <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
      <h2 className="font-semibold text-base">Redes Sociales</h2>
      <div className="grid grid-cols-2 items-center gap-x-4 gap-y-6">
        {social.map((field) => (
          <Input
            key={field.name}
            type={field.type}
            name={field.name}
            label={field.label}
            typeLabel={'float'}
            placeholder={field.placeholder}
            icon={field.icon}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="border-b border-slate-300"></div>
      <h2 className="font-semibold text-base">App Links</h2>
      <div className="flex items-center space-x-3 justify-between">
        {stores.map((field) => (
          <Input
          key={field.name}
          type={field.type}
          name={field.name}
          label={field.label}
          typeLabel={'float'}
          placeholder={field.placeholder}
          icon={field.icon}
          onChange={handleChange}
        />
        ))}
      </div>
      <div className="mr-auto">
        <Button variant="info" label="Guardar cambios" type="submit" />
      </div>
    </form>
  )
}