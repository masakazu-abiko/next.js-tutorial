import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
    title: "サンプルサイト",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ja">
            <body>
                <header style={{ padding: "1rem", backgroundColor: "#eee" }}>
                    <h1 style={{ color: "pink", margin: 0 }}>春フェス特集</h1>
                </header>
                <main style={{ padding: "1rem" }}>{children}</main>
            </body>
        </html>
    );
}