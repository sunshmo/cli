import type { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="root-page">
      app

      <ThemeToggle></ThemeToggle>
    </div>
  );
}

export const metadata: Metadata = {
  title: "app",
};
