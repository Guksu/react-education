import { useState } from "react";

// React는 컴포넌트들로 구성
// Prpos는 부모 컴포넌트에서 자식 컴포넌트로 전달하는 데이터
// State는 해당 컴포넌트에서 사용하는 데이터
// 리렌더링시 State값은 유지된다.
// let은 리렌더링 시 값이 유지되지 않는다.

export default function Chapter1() {
  const [num, setNum] = useState<number>(0);
  let letNum = 0;

  const handleNum = (type: "INCREASE" | "DECREASE") => {
    if (type === "INCREASE") {
      setNum((prev) => prev + 1);
      letNum++;
    }

    if (type === "DECREASE") {
      setNum((prev) => prev - 1);
      letNum--;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Child stateNum={num} letNum={letNum} />
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => handleNum("INCREASE")}>Up</button>
        <button onClick={() => handleNum("DECREASE")}>down</button>
      </div>
    </div>
  );
}

interface Props {
  stateNum: number;
  letNum: number;
}
const Child = ({ stateNum, letNum }: Props) => {
  return (
    <>
      <div>State : {stateNum}</div>
      <div>let : {letNum}</div>
    </>
  );
};
