import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const goMain = () => router.push("/");

  return (
    <header
      style={{
        marginBottom: "100px",
        borderBottom: "2px solid black",
        padding: "20px",
      }}
    >
      <button onClick={goMain}>Go Main</button>
    </header>
  );
}
