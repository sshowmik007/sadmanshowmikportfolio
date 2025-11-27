import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata = {
  title: "Sadman Showmik | Frontend Developer React Next.js",
  description:
    "Frontend Developer specializing in React, Next.js, MobX, and modern UI engineering. Builds scalable SaaS interfaces, security dashboards, and high-performance web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="geist-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
