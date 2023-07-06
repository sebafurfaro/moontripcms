import { Button } from "../Buttons/Button"
import { InputField } from "../forms/InputField"
import useSubmitForm from "@/hooks/useSubmitForm"

export const SocialLinks = () => {

  const fields = [
    {
      type: 'url',
      name: 'facebookUrl',
      hasIcon: '../fb.svg',
      label: 'Facebook',
      placeholder: 'https://facebook.com/cuenta',
    },
    {
      type: 'url',
      name: 'instagramUrl',
      hasIcon: '../ig.svg',
      label: 'Instagram',
      placeholder: 'https://instagram.com/cuenta',
    },
    {
      type: 'url',
      name: 'youtubeUrl',
      hasIcon: '../yt.svg',
      label: 'Youtube',
      placeholder: 'https://youtube.com/cuenta',
    },
    {
      type: 'url',
      name: 'twitterUrl',
      hasIcon: '../tw.svg',
      label: 'Twitter',
      placeholder: 'https://twitter.com/cuenta',
    },
    {
      type: 'url',
      name: 'appstoreUrl',
      hasIcon: '../appstore.svg',
      label: 'App Store',
      placeholder: 'https://example.com/cuenta',
    },
    {
      type: 'url',
      name: 'playstoreUrl',
      hasIcon: '../playstore.svg',
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
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            hasIcon={field.hasIcon}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={false}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="border-b border-slate-300"></div>
      <h2 className="font-semibold text-base">App Links</h2>
      <div className="flex items-center space-x-3 justify-between">
        {stores.map((field) => (
          <InputField
            key={field.name}
            type={field.type}
            name={field.name}
            hasIcon={field.hasIcon}
            label={field.label}
            placeholder={field.placeholder}
            isRequired={false}
            onChange={handleChange}
          />
        ))}
      </div>
      <div className="mr-auto">
        <Button
          variant="info"
          label="Guardar cambios"
          type="submit" />
      </div>
    </form>
  )
}