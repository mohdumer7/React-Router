import { createBrowserRouter, RouteProvider } from "react-router-dom";
import Dummy from "./pages/Dummy";
import Rootlayout from "./pages/Rootlayout";
import SomeotherRootlayout from "./pages/SomeotherRootlayout";
import ProductDetail from "./pages/ProductDetail";
import GenericError from "./pages/GenericError";
import Loader from "./pages/Loader";

///////////////////////////////////////////////////////////////////////
//                                                                  ///
//             INDIVIDUAL ROUTING WITHOUT ANY LAYOUT                ///
//                                                                  ///
// const router = createBrowserRouter([                             ///
//   { path: "/", element: <Dummy /> },                             ///
//   { path: "/products", element: <Dummy /> },                     ///
// ]);                                                              ///
///////////////////////////////////////////////////////////////////////

//Routing with LAYOUT

const router = createBrowserRouter([
  //--------------------------------------------------------------------------------

  //this is a demo showing how another kind of layout is integrated such that
  //you have 2 diffrent layout for two diffrent functionalities
  {
    path: "/users",
    element: <SomeotherRootlayout />,
    children: [
      { path: "/", element: <Dummy /> },
      { path: "/admin", element: <Dummy /> },
    ],
  },
  //--------------------------------------------------------------------------------

  //this is the main Root Element whwre all navs are present
  //children is where all the elements will mapped to on the <outlet> element
  //go into the RootLayout element and you shall find Outlet thtat where these
  //children are put into.
  {
    path: "/",
    element: <Rootlayout />,
    errorElement: <GenericError />,
    // An Error element can  be used in the routes for error Pages to display
    //we cab also custom throw error and render the error page
    //these error pages can also be defined in the children routes for custom errors
    children: [
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //NOTICE we dont use XX"/products"XX but we use "products" as the PATH   |
      //this is called relative route to its parent if "/products"is used in as|
      //children then                                                          |
      //it becomes abosule routing to the URL.                                 |
      //the index is just "/"                                                  |
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      { index: true, element: <Dummy /> },
      { path: "products", element: <Dummy /> },
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      //this is a dynamic route but how do we access the id of the product?   |
      //check out the :productid become the dynamic value, how do we use it?  |
      //in the product-details we use **useParams HOOK**,thats how we do it   |
      { path: "products/:productId", element: <ProductDetail /> }, ///////////|
      //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    ],
  },

  //_______________________________________________________________________________________
  // HUH...!!!! You were using useEffect() to fetch data right?                            |
  //PSYCH....react-router does that for you all you need to do is use the loader in router |
  //give it a function (loader:()=>{return lemme fetch some data})                         |
  //there you go you have data even before the element is already loaded and ready for use |
  // But how we access the data?                                                           |
  // useLoaderData is HOOK how we get data out from this return value                      |
  // Loader data can be used anywhere in the parent and the children also get the access it|
  // The loader id here is OPTIONAL but if you have children they can use this to access it|
  //_______________________________________________________________________________________|
  {
    path: "/load-data",
    id: "loader-id",
    element: <Loader />,
    loader: () => {
      //load data into the element
      return;
    },
  },
  //_______________________________________________________________________________________
  // This is a continuation expamle for dynamic loader where data is passed to the loader  |
  // This is how you access the params in the loader function                              |
  //_______________________________________________________________________________________|
  {
    path: "/load-data/:data-Id",
    element: <Loader />,
    loader: ({ request, params }) => {
      const data = params.dataId;
      return data;
    },
  },
  //_______________________________________________________________________________________
  // what is this action in the routes?                                                    |
  // this is the action that can used to do actions to certain taska exp-send post request |
  // after a form is submitted to the backend                                              |
  //_______________________________________________________________________________________|
  {
    path: "/load-data/:data-Id",
    element: <Loader />,
    action: ({ request, params }) => {
      //submit like forms or stuff
      //automatically when a form is submitted
      //but programatically we can submit action by using useSubmit HOOK
      //submit({data},{method:'post',action:'/posts'(custom route path)})
    },
  },
]);

function App() {
  return <RouteProvider router={router} />;
}

export default App;
