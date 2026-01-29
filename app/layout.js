import "./globals.css";

export const metadata = {
  title: "Five Words",
  description: "Say how you feel in five words and one symbol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-100 text-neutral-900">{children}</body>
    </html>
  );
}
