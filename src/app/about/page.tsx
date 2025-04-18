export const metadata = {
title: "記事タイトル",
description: "このページは記事の内容を紹介しています。",
openGraph: {
  title: "OGPタイトル",
  description: "SNS用の説明文",
  url: "https://example.com/about",
  siteName: "サンプルサイト",
  images: [
    {
        url: "https://example.com/og-image.jpg",
        width: 1200,
        height: 630,
    },
  ],
    type: "website",
},
};

export default function AboutPage() {
return (
    <main>
        <h1>04 Limited Sazabys</h1>
        <p>これは Next.js の学習用ページ兼04紹介ページです。</p>
    </main>
);
}