import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function Rootlayout() {
  return (
    <>
      {/* THE MAIN NAVIGATION */}
      <MainNavigation />
      {/*THIS IS WHERE ALL THE CHILDREN FROM THE ROUTER ARE PLACED  */}
      <Outlet />
    </>
  );
}
