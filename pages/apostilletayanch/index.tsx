import { useEffect } from "react";

export default function ApostillePage() {
  useEffect(() => {
    window.location.href = "/apostilletayanch.pdf";
  }, []);

  return <p>Переход к PDF...</p>;
}
