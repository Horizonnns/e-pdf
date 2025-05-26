import { useEffect } from "react";

export default function ShahodatnomaPage() {
  useEffect(() => {
    window.location.href = "/shahodatnomatayanch.pdf";
  }, []);

  return <p>Переход к PDF...</p>;
}