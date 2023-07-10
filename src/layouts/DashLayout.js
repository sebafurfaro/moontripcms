import React, { useState, useEffect } from "react";
import withAuth from "@/lib/withAuth";
import { useRouter } from "next/router";
import { Header } from "@/components/forDashboard/Header";
import { Sidebar } from "@/components/forDashboard/Sidebar";
import { Spinner } from "@/components/Spinner";

const DashDefault = ({ children }) => {
  const [ hideSidebar, setHideSidebar ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(true);
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const router = useRouter();

  const closeSidebar = () => {
    setHideSidebar(!hideSidebar)
  }

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
      <Header handleLogout={handleLogout} closeSidebar={closeSidebar} />
      <div className={`${hideSidebar ? 'active' : ''} layout w-full min-h-screen overflow-x-hidden pt-11`}>
        <Sidebar hideSidebar={hideSidebar} className={`${hideSidebar ? 'w-[66px]' : 'w-[280px]'} pl-[8px] transition-all duration-500 ease-in-out`}/>
        <main className={`main ${hideSidebar ? 'pl-[66px]' : 'pl-[280px]'} transition-all duration-500 ease-in-out`}>
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
