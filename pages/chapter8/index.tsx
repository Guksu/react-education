import { GetServerSideProps } from "next";

interface Props {
  serverTime: string;
}

// Hydration은 서버에서 생성한 HTML에 JS를 입히는 과정
// 서버에서 생성한 HTML과 클라이언트에서 생성한 HTML이 일치하지 않으면 Hydration오류가 발생
// 기본적으로 Next.js의 페이지 이동은 react처럼 js로 이루어지므로 아래의 코드를 메인에서 접근하면 정상작동
// 그러나 새로고침이나 URL로 직접 접근하면 Chapter8이 HTML로 만들어지므로 오류가 발생한다.

export default function Chapter8({ serverTime }: Props) {
  const clientTime = new Date().toISOString();
  return (
    <div>
      <p>Server Time: {serverTime}</p>
      <p>Client Time: {clientTime}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const serverTime = new Date().toISOString();

  return {
    props: {
      serverTime,
    },
  };
};
