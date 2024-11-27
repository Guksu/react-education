// 다국어 세팅 순서
// 1. i18next 라이브러리 설치
// 2. _app.tsx파일에서 appWithTranslation사용
// 3. next-i18next.config.js 파일 생성
// 4. next.config.ts 파일에 next-i18next.config.js에서 생성한 i18n 추가
// 5. locales 폴더 생성 후 언어 입력
// 6. 컴포넌트 최상단(pages폴더에 있는 index.tsx파일)에서
//    getStaticProps or getServerSideProps으로 serverSideTranslations호출

import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Chapter10() {
  const { t } = useTranslation(["main"]);
  const TRANSLATION = {
    TITLE: t("TITLE"),
    CONTENT: t("CONTENT"),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span>TITLE : {TRANSLATION.TITLE}</span>
      <span>CONTENT : {TRANSLATION.CONTENT}</span>
    </div>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale as string, ["main"])),
    },
  };
};
