import News from './ui/News'

export default function Home() {
    return (
        <main
            className="container mx-auto min-h-full p-5 pt-0 md:px-20"
            style={{ maxWidth: '800px' }}
        >
            <News />
        </main>
    )
}
