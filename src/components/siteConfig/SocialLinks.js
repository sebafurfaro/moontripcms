
import Button from "../button"
import Input from "../forms/Input"
import useSubmitForm from "@/hooks/useSubmitForm"

export const SocialLinks = () => {

  const social = [
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
    }
  ]
  const stores = [
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
        <Input
          type="url"
          name="facebookUrl"
          label="Facebook"
          typeLabel="float"
          placeholder="http://facebook.com"
          icon="facebook"
          onChange={handleChange}
        />
        <Input
          type="url"
          name="instagramUrl"
          label="Instagram"
          typeLabel="float"
          placeholder="http://instagram.com"
          icon="instagram"
          onChange={handleChange}
        />
        <Input
          type="url"
          name="youtubeUrl"
          label="Youtube"
          typeLabel="float"
          placeholder="http://youtube.com"
          icon="youtube"
          onChange={handleChange}
        />
        <Input
          type="url"
          name="twitterUrl"
          label="Twitter"
          typeLabel="float"
          placeholder="http://twitter.com"
          icon="twitter"
          onChange={handleChange}
        /> 
      </div>
      <div className="border-b border-slate-300"></div>
      <h2 className="font-semibold text-base">App Links</h2>
      <div className="flex items-center space-x-3 justify-between">
        <Input
          type="url"
          name="appstoreUrl"
          label="App Store"
          typeLabel="float"
          placeholder="http://appstore.com"
          icon="appstore"
          onChange={handleChange}
        />
        <Input
          type="url"
          name="playstoreUrl"
          label="Play Store"
          typeLabel="float"
          placeholder="http://playstore.com"
          icon="playstore"
          onChange={handleChange}
        />
      </div>
      <div className="mr-auto">
        <Button variant="info" label="Guardar cambios" type="submit" />
      </div>
    </form>
  )
}