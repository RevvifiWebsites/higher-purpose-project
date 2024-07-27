import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Past Projects",
};

export default function PastProjects() {
    const projects = [
        {
            name: "Project Winter’s Tale",
            description:
                "Consequently, we distributed thousands of Winter clothes and blankets all across the country. with around 300 students working with us to make the project a success.",
            img: {
                src: "/campaign-1.jpg",
                alt: 'A group of young people posing outdoors with a banner that reads "A Higher Purpose"',
            },
        },
        {
            name: "Project Senorita",
            description:
                "We distributed hundreds of sanitary pads along with other sanitary items to tea garden workers in Sylhet.",
            img: {
                src: "/campaign-5.jpg",
                alt: 'A group of people standing in front of a building, holding a green banner with the text "A Higher Purpose" and other items.',
            },
        },
        {
            name: "Project Eid",
            description:
                "Hitherto, we distributed new punjabis all across Dhaka city to guards and other blue collar workers.",
            img: {
                src: "/campaign-4.jpg",
                alt: 'A group of people, mostly young adults, standing together outdoors and holding a green banner with the text "A higher purporse".',
            },
        },
        {
            name: "Project Ramadan",
            description:
                "We feed thousands of orphans and elderly throughout the blessed month of Ramadan.",
            img: {
                src: "/kids-eating.jpg",
                alt: "Two boys smiling at the camera while sitting at a crowded table with others eating and chatting in the background",
            },
        },
    ];

    return (
        <div className="pb-20 pt-10 md:pb-36 md:pt-16">
            <div>
                <div className="container">
                    <h1 className="mb-12 text-4xl font-bold text-dark-green md:text-center">
                        Past Projects
                    </h1>
                    <ul className="space-y-16 md:space-y-24">
                        {projects.map(({ name, description, img }, i) => {
                            return (
                                <li key={name}>
                                    <article
                                        className={`flex flex-col gap-x-[clamp(1rem,5vw,4rem)] gap-y-6 text-dark-green md:items-center ${i % 2 === 1 ? "md:flex-row" : "md:flex-row-reverse"}`}
                                    >
                                        <div className="[flex-basis:100%]">
                                            <h2 className="mb-2 text-xl font-bold md:mb-3 md:text-3xl lg:text-4xl">
                                                {name}
                                            </h2>
                                            <p className="text-lg font-semibold md:max-w-xs">
                                                {description}
                                            </p>
                                        </div>
                                        <div className="[flex-basis:100%]">
                                            <div className="mx-auto max-w-sm md:max-w-none">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width="1500"
                                                    height="800"
                                                    className="aspect-[4/3] w-full rounded-xl object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                    </article>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <section
                aria-labelledby="contact-us"
                className="mt-16 border-t border-black px-5 pt-16 text-center md:mt-24 md:pt-28 lg:mt-32"
            >
                <div className="container">
                    <h2
                        className="mb-8 text-3xl font-bold md:mb-12 md:text-4xl lg:text-5xl"
                        id="contact-us"
                    >
                        Contact
                    </h2>
                    <p className="mb-3 text-xl font-extrabold">
                        Whatsapp - (019) 7909-9790
                    </p>
                    <p>
                        <Link
                            href="https://www.instagram.com/a.higherpurpose.foundation/"
                            className="mx-auto flex w-max max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            target='_blank'
                        >
                            <Image
                                src="/instagram.svg"
                                alt="Instagram Logo"
                                width="60"
                                height="60"
                            />
                            <span className="font-bold text-xl break-all">a.higherpurpose.foundation</span>
                        </Link>
                    </p>
                </div>
            </section>
        </div>
    );
}
