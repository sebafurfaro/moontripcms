import React from "react";

const DefaultLayout = ({ children }) => {
  return(
    <div className="bg-slate-800 min-h-screen text-white">
    <main>{ children }</main>
    </div>
  )
}

export default DefaultLayout;