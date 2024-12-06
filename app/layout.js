import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Calculator",
  description: "Calculator using NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
