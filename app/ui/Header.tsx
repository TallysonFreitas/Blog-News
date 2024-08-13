import Link from 'next/link'

export default function Header() {
    return (
        <header className="min-w-screen">
            <div
                className="container m-auto p-8 ps-5 md:p-20 md:pb-10"
                style={{ maxWidth: '800px' }}
            >
                <h1 className="font-bold text-5xl md:text-6xl">
                    <Link href="/">Blog</Link>
                </h1>
            </div>
        </header>
    )
}
