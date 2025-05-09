import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.location.href = "/document.pdf";
  }, []);

  return <p>Переход к PDF...</p>;
}
