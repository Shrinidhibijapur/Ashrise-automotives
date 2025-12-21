import { useParams } from "react-router-dom";

export default function CarDetails() {
  const { name } = useParams();

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h1>{name?.toUpperCase()} Details</h1>
      <p>
        This page will show full details, images, specs, price and booking
        options for {name}.
      </p>
    </div>
  );
}
