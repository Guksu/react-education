import { sampleState } from "@/recoil/sampleRecoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

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
