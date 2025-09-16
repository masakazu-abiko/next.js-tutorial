import Link from "next/link";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ja">
            <body>
                <main>{children}</main>
                <footer style={{ padding: "1rem", background: "#eee" }}/>
            </body>
        </html>
    );
}