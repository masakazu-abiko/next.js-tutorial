import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
    title: "サンプルサイト",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>
                <header style={{ padding: "1rem", background: "#eee" }}>
                    <h1 style={{ color: "pink" }}>春フェス特集</h1>
                </header>

                <main>{children}</main>

                <footer style={{ padding: "1rem", background: "#eee" }}>
                    <Link href="/">ホーム</Link>
                    <Link href="/memos">メモ一覧</Link>
                </footer>
            </body>
        </html>
    );
}