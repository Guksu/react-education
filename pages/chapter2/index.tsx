import { useEffect, useState } from "react";

export default function Chapter2() {
  // State는 UI 변경을 위해 컴포넌트 내부에 저장되는 값
  // State는 읽기전용으로 생각하면 편하므로 변경을 위해선 무조건 setState를 호출해야 한다.
  // React는 이벤트 핸들러의 모든 코드가 실행되고 State를 업데이트한다(batching)
  // 업데이트 방식은 Queue

  const [num, setNum] = useState<number>(0);
  const [isUseEffect, setIsUseEffect] = useState<string>("");

  const handleNum = (
    type:
      | "INCREASE"
      | "DECREASE"
      | "INCORRECT_DOUBLE_INCREASE"
      | "CORRECT_DOUBLE_INCREASE"
  ) => {
    if (type === "INCREASE") {
      setNum((prev) => prev + 1);
    }

    if (type === "DECREASE") {
      setNum((prev) => prev - 1);
    }

    if (type === "CORRECT_DOUBLE_INCREASE") {
      // prev를 통해 이전 Queue의 State값을 가져온다
      setNum((prev) => prev + 1);
      setNum((prev) => prev + 1);

      // 위 코드가 실행될 시점의 모습
      // setNum(0 + 1)
      // setNum(1 + 1)

      // 아래의 코드도 동일하게 동작한다
      // setNum(num + 1);
      // setNum((prev) => prev + 1);
    }

    if (type === "INCORRECT_DOUBLE_INCREASE") {
      setNum(num + 1);
      setNum(num + 1);

      // 위 코드가 실행될 시점의 모습
      // setNum(0 + 1)
      // setNum(0 + 1)

      // 아래의 코드도 동일한게 동작한다.
      // setNum((prev) => prev + 1);
      // setNum(num + 1);
    }
  };

  // useEffect는 렌더링 후 실행된다.
  // 두번째 인자(의존성 배열)이 빈 배열이면 마운트(컴포넌트가 나타날 때) 딱 한 번 실행
  // 배열에 인자값이 있으면 해당 인자값이 변경된 경우에 실행
  useEffect(() => {
    setIsUseEffect(
      "useEffect useEffect useEffect useEffect useEffect useEffect useEffect"
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
      }}
    >
      <div>num : {num}</div>
      <div style={{ display: "flex", gap: 20 }}>
        <button onClick={() => handleNum("INCREASE")}>Up</button>
        <button onClick={() => handleNum("DECREASE")}>down</button>
        <button onClick={() => handleNum("CORRECT_DOUBLE_INCREASE")}>
          Correct Double Up
        </button>
        <button onClick={() => handleNum("INCORRECT_DOUBLE_INCREASE")}>
          Incorrect Double Up
        </button>
      </div>
      <p>useEffect : {isUseEffect}</p>
    </div>
  );
}
