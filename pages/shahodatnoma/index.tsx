import { useEffect } from "react";

export default function ShahodatnomaPage() {
  useEffect(() => {
    window.location.href = "/shahodatnoma.pdf";
  }, []);

  return <p>Переход к PDF...</p>;
}
