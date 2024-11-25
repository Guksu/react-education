import { useRef, useState } from "react";

// useRef는 DOM을 접근하거나 값을 유지하는 데 사용됨
// 렌더링을 트리거하지 않지만 리렌더링 되어도 값이 유지된다

export default function Chapter3() {
  const [useStateInput, setUseStateInput] = useState<string>("");
  const useRefInput = useRef<HTMLInputElement>(null);

  const handleBtn = () => {
    alert(
      `useState : ${useStateInput} / useRef : ${useRefInput.current?.value}`
    );
  };

  return (
    <div style={{ display: "flex", gap: 10 }}>
      {/* Controlled Component */}
      {/* 상태(State)를 사용해서 관리 */}
      <input
        type="text"
        onChange={(e) => setUseStateInput(e.currentTarget.value)}
        placeholder="useState"
      />
      {/* Uncontrolled Component */}
      {/* 상태(State)를 사용하지 않고 관리 */}
      <input type="text" ref={useRefInput} placeholder="useRef" />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
}
