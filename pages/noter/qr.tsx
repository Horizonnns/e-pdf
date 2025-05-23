import QRCode from "react-qr-code";

export default function NoterQRPage() {
  const url = "https://eshahodatnoma.com/notarius.pdf";

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",        
        alignItems: "center",
        gap: '50px',
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <QRCode value={url} size={512} level="H" />
      <p style={{ fontSize: 16, color: "#aaa" }}>
        Scan qr-code
      </p>
    </div>
  );
}
