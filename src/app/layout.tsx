import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const notoSans = Noto_Sans_JP({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "next-shadcn-supabase",
	description: "next-shadcn-supabase",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body
				className={cn(
					"bg-background antialiased min-h-screen",
					notoSans.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
