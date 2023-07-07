import React, { useState, useEffect } from "react";
import withAuth from "@/lib/withAuth";
import { useRouter } from "next/router";
import { Header } from "@/components/forDashboard/Header";
import { Sidebar } from "@/components/forDashboard/Sidebar";
import { Spinner } from "@/components/Spinner";

const DashDefault = ({ children }) => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
    router.replace('/login')
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
      setIsLoggedIn(storedIsLoggedIn);

      if (!storedIsLoggedIn) {
        router.replace("/login");
      }

      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center">
      <Spinner className={'w-20 h-20'}/>
    </div>;
  }

  return (
    <div className="relative bg-slate-100">
      <Header handleLogout={handleLogout} />
      <div className="w-full min-h-screen grid grid-cols-12 overflow-x-hidden pt-11">
        <Sidebar
          className={`col-span-2 transition-transform duration-500 ease-in-out`}
        />
        <main className={`col-span-10 transition-all duration-500 ease-in-out`}>
          <div className="p-4">{children}</div>
        </main>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const storedIsLoggedIn = context.req.headers.cookie.includes("isLoggedIn=true");

  if (!storedIsLoggedIn) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default withAuth(DashDefault);
