import { createContext, useContext } from "react";

// 컴포넌트들 간 상태를 공유하기 위해 사용
// [단점]
// 1. 업데이트가 많은 경우 최적화 문제
// 2. contex를 구독하는 모든 컴포넌트는 Provider의 value가 변경되면 리렌더링됨

const ContextSample = createContext("Context Test");

export default function Chapter4() {
  const value = "Context";
  const withoutContext = "Without Context";

  return (
    <ContextSample.Provider value={value}>
      <Inner withoutContext={withoutContext} />
    </ContextSample.Provider>
  );
}

const Inner = ({ withoutContext }: { withoutContext: string }) => {
  return <Inner2 withoutContext={withoutContext} />;
};

const Inner2 = ({ withoutContext }: { withoutContext: string }) => {
  const value = useContext(ContextSample);

  return (
    <div>
      <p>Context : {value}</p>
      <p>Without Context : {withoutContext}</p>
    </div>
  );
};
