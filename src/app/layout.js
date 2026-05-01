import { Geist, Geist_Mono, Nunito, Poppins, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import  Footer  from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const roboto = Roboto({
  subsets: ["latin"]
})
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"]
})
export const robotoMono = Roboto_Mono({
  subsets: ["latin"]
})
export const nunito = Nunito({
  subsets: ["latin"]
})
export const metadata = {
  title: "Book Borrow",
  description: "Borrow Your desire book",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >
      <body className="min-h-full relative flex flex-col">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
