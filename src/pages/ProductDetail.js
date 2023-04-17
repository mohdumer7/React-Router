import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  //Here is where we will expract the query param from the URL awith the name specified
  //in the URL
  const id = params.productId;

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
