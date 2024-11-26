import { GetServerSideProps } from "next";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// 13버전부터 app router와 pages router로 분리
// 현재 프로젝트들은 pages router로 구성
// SSR : 그때그때 생성
// SSG : 빌드 시 딱 한 번 생성

interface UserData {
  idx: number;
  name: string;
  age: number;
}

interface Props {
  ssrUserData: UserData;
}

export default function Chapter7({ ssrUserData }: Props) {
  // app router에선 useRouter().query는 사용불가
  // const query = useRouter().query;
  const params = useParams<{ userIdx: string }>();
  const [csrUserData, setCsrUserData] = useState<UserData>();
  const getUserData = async () => {
    const GET_USER = "/api/getUserInfo";

    try {
      const response = await fetch(
        `${GET_USER}?userIdx=${params.userIdx}`
      ).then((res) => res.json());
      setCsrUserData(response.data);
    } catch (error: unknown) {
      throw new Error(`API호출 에러 :${error}`);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <div>
        <h3>SSR</h3>
        <div>idx : {ssrUserData.idx}</div>
        <div>name : {ssrUserData.name}</div>
        <div>age : {ssrUserData.age}</div>
      </div>

      {csrUserData && (
        <div>
          <h3>CSR</h3>
          <div>idx : {csrUserData.idx}</div>
          <div>name : {csrUserData.name}</div>
          <div>age : {csrUserData.age}</div>
        </div>
      )}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const GET_USER = "http://127.0.0.1:3000/api/getUserInfo";
  const USER_IDX = context.params!.userIdx;

  const response = await fetch(`${GET_USER}?userIdx=${USER_IDX}`).then((res) =>
    res.json()
  );

  return {
    props: {
      ssrUserData: response.data ?? null,
    },
  };
};
