import { Header } from "@/pages/components/Header/Header";
import React from "react";

const DefaultLayout = ({ children }) => {
  return(
    <>
    <Header />
    <main>{ children }</main>
    <footer>Default footer</footer>
    </>
  )
}

export default DefaultLayout;