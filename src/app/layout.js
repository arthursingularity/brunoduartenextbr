import "./globals.css";

export const metadata = {
  title: "Bruno Duarte personal",
  description: "Transformar o seu corpo é só o começo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
