import "./globals.css";

export const metadata = {
  title: "GreekRoot AI",
  description: "Building Future With AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}