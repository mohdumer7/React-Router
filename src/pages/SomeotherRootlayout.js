import { Outlet } from "react-router-dom";
import OtherNavigation from "../components/OtherNavigation";
export default function SomeotherLAyout() {
  return (
    <>
      {/* THE MAIN NAVIGATION */}
      <OtherNavigation />
      {/*THIS IS WHERE ALL THE CHILDREN FROM THE ROUTER ARE PLACED  */}
      <Outlet />
    </>
  );
}
