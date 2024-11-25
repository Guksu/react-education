import { CURRICULMS } from "@/constants";
import Link from "next/link";
import { useRouter } from "next/router";

// React는 가상 DOM을 사용하여 UI 업데이트를 실행
// 실제 DOM을 메모리로 복사하여 가상 DOM을 만들고, 실제 DOM과 비교하여 변화가 발생한 부분을 렌더링
// React는 SPA이므로, 컴포넌트를 동적으로 변경하여 페이지 이동되는 것 처럼 구현

export default function Home() {
  const router = useRouter();

  const goChapter = (index: number) => {
    router.push(`chapter${index}`);
  };

  return (
    <ol
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {/* <Link /> 컴포넌트의 prefetch를 사용하여 해당 페이지의 js를 먼저 로드할 수 있다.*/}
      {/* production환경에서만 적용되며, CSR은 해당되지 않는다.*/}
      {/* 단, 정적데이터만 가져오므로 getServerSideProps의 데이터는 가져오지 못한다. */}
      <Link href={"/chapter7"} prefetch={true}>
        Chapter7
      </Link>
      {CURRICULMS.map((curriculum) => {
        return (
          <li
            key={curriculum.chapter}
            onClick={() => goChapter(curriculum.chapter)}
            style={{ cursor: "pointer" }}
          >
            {curriculum.title}
          </li>
        );
      })}
    </ol>
  );
}
