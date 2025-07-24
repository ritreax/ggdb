import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "GGDB",
  description: "GGDB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body cz-shortcut-listen="true">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
