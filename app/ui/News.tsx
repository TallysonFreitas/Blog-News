import Image from 'next/image'
import Link from 'next/link'

export type PropsMock = {
    title: string
    img: string
    time: string
    link: string
    id: number
}
export const MockNews: PropsMock[] = [
    {
        title: 'Starting and Growing a Career in Web Design',
        time: 'April 8, 2022',
        img: '/firstImage.png',
        id: 1,
        link: 'starting-a-career-in-web-design',
    },
    {
        title: 'Create a Landing Page That Performs Great',
        time: 'March 15, 2022',
        img: '/secondImage.png',
        id: 2,
        link: 'create-a-landing-page-that-performs-great',
    },
    {
        title: 'How Can You Design Prepare for the Future',
        time: 'February 28, 2022',
        img: '/thirtImage.png',
        id: 3,
        link: 'how-can-designers-prepare-for-the-future',
    },
    {
        title: 'Building a Navigation Component with Variables',
        time: 'February 6, 2022',
        img: '/fouryImage.png',
        id: 4,
        link: 'building-a-navigation-component',
    },
    {
        title: 'How to Create an Effective Design Portfolio',
        time: 'January 12, 2022',
        img: '/fifthImage.png',
        id: 5,
        link: 'how-to-create-an-effective-design-portfolio',
    },
    {
        title: 'How to Commit your Changes in your Code',
        time: 'August 13, 2024',
        img: '/commits.png',
        id: 6,
        link: 'how-to-commit-your-changes',
    },
]

export default function News() {
    return (
        <div className="w-full border-t-2 pt-10 border-gray-100 flex flex-col gap-5 items-start">
            {MockNews.map((each) => (
                <div
                    className="flex flex-row overflow-hidden max-h-24 md:max-h-32"
                    key={each.id}
                >
                    <Image
                        src={each.img}
                        alt={each.title}
                        width={128}
                        height={128}
                        className="rounded-lg max-w-24 md:max-w-32"
                        quality={100}
                        style={{ objectFit: 'cover' }}
                    />
                    <div className="px-5 py-3 flex flex-col justify-center gap-2">
                        <h2 className="font-semibold text-lg md:text-2xl leading-5 md:leading-6">
                            <Link href={`/News/${each.link}`}>
                                {each.title}
                            </Link>
                        </h2>
                        <p className="font-medium text-base text-gray-500">
                            {each.time}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
