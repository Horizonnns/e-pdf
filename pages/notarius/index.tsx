import { useEffect } from "react";

export default function NoterPage() {
  useEffect(() => {
    window.location.href = "/notarius.pdf";
  }, []);

  return <p>Переход к PDF...</p>;
}
