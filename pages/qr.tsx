import QRCode from "react-qr-code";

export default function QRPage() {
  const url = "https://eshahodatnoma.uz/document.pdf";

  return (
    <div style={{ padding: 40 }}>
      <h1>QR-код для доступа к PDF</h1>
      <QRCode value={url} size={256} />
      <p>Отсканируйте код, чтобы открыть PDF.</p>
    </div>
  );
}
