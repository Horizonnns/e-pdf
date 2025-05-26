import { useEffect } from "react";

export default function NoterPage() {
  useEffect(() => {
    window.location.href = "/notariustayanch.pdf";
  }, []);

  return <p>Переход к PDF...</p>;
}
