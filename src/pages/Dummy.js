import { Link } from "react-router-dom";

export default function Dummy() {
  return (
    <>
      <h1>Dummy</h1>
      {/* This is a LINK element acts as an anchor element
          this helps you navigate around the relative defines the
          the type of navigation to take place if absolte routing then
          choose relative="path" else use relative="route" for relative routing
      */}
      <Link to="products" relative="route">
        products
      </Link>
      {/* The relative case can also be seen here where 
          just by writing LINK=".." will go remove all chilren routing
          adn become absolute while adding relative goes back using children
          routing too
      */}
      <Link to=".." relative="route">
        back one
      </Link>
      <Link to=".." relative="path">
        back home to main page
      </Link>
    </>
  );
}
