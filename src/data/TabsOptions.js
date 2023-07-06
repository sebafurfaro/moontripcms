import { MyAccountForm } from "@/components/siteConfig/MyAccountForm";
import SiteConfigForm from "@/components/siteConfig/SiteConfigForm";
import { SocialLinks } from "@/components/siteConfig/SocialLinks";

export const TabsOptions = [
  {
    id: 1,
    label: 'Redes sociales',
    content: <SocialLinks />
  },
  {
    id: 2,
    label: 'Mis datos',
    content: <MyAccountForm />
  },
  {
    id: 3,
    label: 'Configuración',
    content: <SiteConfigForm />
  }
]