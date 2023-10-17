import React, { Suspense } from "react";
import DesktopNavbar from "../Navbar/DesktopNavbar";
import MobileNavbar from "../Navbar/MobileNavbar";
import DesktopFooter from "../Footer/DesktopFooter";
import MobileFooter from "../Footer/MobileFooter";
import { Outlet } from "react-router-dom";

const loading = () => <div className=""></div>;

type LayoutProps = {
  backgroundImage?: string;
};

function Layout({ backgroundImage }: LayoutProps) {
  return (
    <div className="h-full w-full ">
      {/* <DesktopNavbar /> */}
      {/* <MobileNavbar /> */}
      <div
        className="object-cover"
        style={{ backgroundImage: backgroundImage }}
      >
        <div className="bg-bgPrimary/80">
          <main className="h-full">
            <div className="container md:mx-auto">
              <Suspense fallback={loading()}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
      {/* <DesktopFooter /> */}
      {/* <MobileFooter /> */}
    </div>
  );
}

export default Layout;
