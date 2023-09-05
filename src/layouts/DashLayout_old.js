import React, { useState, useEffect } from "react";
import withAuth from "@/lib/withAuth";
import { useRouter } from "next/router";
import { Spinner } from "@/components/Spinner";
import { SideNav } from "@/components/forDashboard/SideNav";
import { SideNavItems } from "@/components/forDashboard/sidenav/SideNavItems";
import { TopNav } from "@/components/forDashboard/topnav/TopNav";

const DashDefault = ({ children }) => {
  const [ hideSidebar, setHideSidebar ] = useState(false)
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
    <div className="relative bg-[#f8f8f8]">
      <div className={`layout w-full min-h-screen overflow-x-hidden`}>
        <SideNav pills={SideNavItems}/>
        <TopNav handleLogout={handleLogout} />
        <main className={`pl-24 transition-all duration-500 ease-in-out`}>
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
