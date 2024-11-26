import Link from "next/link";
import { useRouter } from "next/router";

export default function Chapter7Router() {
  const router = useRouter();

  return (
    <ul>
      <li onClick={() => router.push("/chapter7/0")}>First User Info</li>
      {/* <Link /> 컴포넌트의 prefetch를 사용하여 해당 페이지의 js를 먼저 로드할 수 있다.*/}
      {/* production환경에서만 적용되며, CSR은 해당되지 않는다.*/}
      {/* 단, 정적데이터만 가져오므로 getServerSideProps의 데이터는 가져오지 못한다. */}
      {/* null / true / false 차이 :  https://nextjs-ko.org/docs/app/api-reference/components/link#prefetch*/}
      <Link href={"/chapter7/1"}>Second User Info</Link>
      <Link href={"/chapter8"}>Chapter 8</Link>
    </ul>
  );
}
