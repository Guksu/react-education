import { useState } from "react";

// Next.js 디버그 한글 문서
// https://nextjs-ko.org/docs/pages/building-your-application/configuring/debugging

export default function Chapter11() {
  const [num, setNum] = useState(0);

  const handleClick = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Up</button>
      <div>{num}</div>
    </>
  );
}
