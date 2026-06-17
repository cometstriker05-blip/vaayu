import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vaayu — Beyond Alerts, Towards Empowerment",
  description:
    "Vaayu strengthens the safety, resilience, and economic stability of India's coastal fishing communities through affordable navigation, weather-alert, and market-connectivity tools.",
  keywords: ["fishermen safety", "India coastal", "weather alerts", "PFZ", "fishing navigation", "Vaayu"],
  openGraph: {
    title: "Vaayu — Beyond Alerts, Towards Empowerment",
    description:
      "Delivering affordable, accessible, and reliable tools that prevent accidents, reduce wasted effort, and save lives at sea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
