import { Header } from "@/pages/components/Header/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return(
    <div className="bg-slate-800">
    <Header />
    <main>{ children }</main>
    <footer>Default footer</footer>
    </div>
  )
}

export default DefaultLayout;