import QRCode from "react-qr-code";

export default function NoterQRPage() {
  const url = "https://eshahodatnoma.com/noter.pdf";

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <QRCode value={url} size={256} />
      <p style={{ fontSize: 16, color: "#aaa" }}>
        Отсканируйте код, чтобы открыть PDF.
      </p>
    </div>
  );
}
