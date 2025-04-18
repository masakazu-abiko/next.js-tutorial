import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <h1>Welcome to 04 Limited Sazabys</h1>
            <Link href="/memos/">
                <a>MOON</a>
            </Link>
        </div>
    );
}