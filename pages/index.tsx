import { curriculums } from "@/constants";
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
      {curriculums.map((curriculum) => {
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
