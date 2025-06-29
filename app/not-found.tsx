// app/_not-found.tsx
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/home">Home</Link>
      </p>
    </div>
  );
};

export default NotFound