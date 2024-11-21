import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Chapter6() {
  const [userIdx, setUserIdx] = useState(0);
  const GET_USER = "/api/getUser";

  const { data, isError, isLoading, error } = useQuery({
    queryKey: [`queryKey_${userIdx}`],
    queryFn: async () => {
      const fetchFn = fetch(`${GET_USER}?userIdx=${userIdx}`);

      const response = await fetchFn.then((res) => res.json());

      if (!response.data) {
        throw new Error(response.message);
      }

      return response.data;
    },
    // 가져온 데이터가 유효한 시간, 해당 시간동안은 데이터를 호출하지 않음
    staleTime: Infinity,
    // 가져온 데이터의 캐싱시간, staleTime이 만료되고 새로 데이터를 가져올 떄 gcTime이 유효한 데이터를 보여준다.
    gcTime: Infinity,
    // false값이면 API호출하지 않는다
    enabled: userIdx >= 0,
    // 응답이 에러인 경우 재요청하는 횟수, 기본값은 3
    retry: 0,
  });

  const handleBtn = (type: "INCREASE" | "DECREASE") => {
    if (type === "INCREASE") {
      setUserIdx((prev) => prev + 1);
    }

    if (type === "DECREASE") {
      setUserIdx((prev) => prev - 1);
    }
  };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  // isError의 기준은 queryFn
  // API에서 400을 응답해도 queryFn에서 throw Error가 없으면 isError는 false
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {data && (
        <>
          <p>Idx : {data.idx}</p>
          <p>Name : {data.name}</p>
          <p>Age : {data.age}</p>
        </>
      )}
      <button onClick={() => handleBtn("INCREASE")}>+</button>
      <button onClick={() => handleBtn("DECREASE")}>-</button>
    </div>
  );
}
