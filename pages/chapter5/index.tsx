import { sampleState } from "@/recoil/sampleRecoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

// Recoil은 클라이언트 상태를 관리하기 위해 사용
// Recoil 대신 Zustand와 Jotai 사용을 추천

export default function Chapter5() {
  return <Inner />;
}

const Inner = () => {
  const setSample = useSetRecoilState(sampleState);

  const handleBtn = () => {
    setSample((prev) => prev + 1);
  };

  return (
    <>
      <Inner2 />
      <button onClick={handleBtn}>+</button>
    </>
  );
};

const Inner2 = () => {
  const sample = useRecoilValue(sampleState);

  return <div>{sample}</div>;
};
