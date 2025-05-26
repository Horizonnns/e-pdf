import QRCode from "react-qr-code";

export default function ApostilleQRPage() {
  const url = "https://eshahodatnoma.com/apostilletayanch.pdf";

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
      <QRCode value={url} size={512} level="H" />
      <p style={{ fontSize: 16, color: "#aaa" }}>
        Scan QR code
      </p>
    </div>
  );
}
