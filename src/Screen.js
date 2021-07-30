import React from "react";
import Lang, { useSetLang, useT } from "./Context";

export default () => {
  const setLang = useSetLang();
  const t = useT();
  return (
    <>
      <h1>{t("hi")}</h1>
      <button onClick={() => setLang("es")}>Translate</button>
    </>
  );
};
