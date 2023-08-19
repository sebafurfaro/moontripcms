import { ClientGrid } from "./components/home/ClientsGrid";
import { Feature } from "./components/home/Feature";
import { Hero } from "./components/home/Hero";

export default function Home() {

  return (
    <div>
      <Hero />
      <ClientGrid />
      <Feature />
    </div>
  )
}
