import Image from "next/image";
import Link from "next/link";

export default function OurMissionSection() {
    return (
        <section aria-labelledby="our-mission">
            <div className="grid items-center md:grid-cols-[1fr_repeat(2,minmax(0,35rem))_1fr]">
                <div className="md:[grid-column:3/5] md:[grid-row:1]">
                    <Image
                        src="/kids-sitting.jpg"
                        alt="kids sitting"
                        width="500"
                        height="500"
                        className="aspect-square w-full object-cover md:aspect-[5/6] md:max-w-lg lg:aspect-square"
                    />
                </div>
                <div className="p-4 md:px-8 md:[grid-column:2/3] md:[grid-row:1] lg:px-28">
                    <h2
                        id="our-mission"
                        className="mb-4 text-3xl font-bold text-dark-green md:text-4xl lg:text-5xl"
                    >
                        Our Mission
                    </h2>
                    <p className="mb-12 text-xl font-bold text-dark-green md:mb-16">
                        To inspire and teach the youth about the spirit of
                        altruism to lift up orphans, elderly, refugees and the
                        unfortunate.
                    </p>
                    <Link
                        href="https://www.instagram.com/a.higherpurpose.foundation/"
                        className="shadow-gray-400 block w-max rounded-lg bg-orange px-3 py-2 text-lg font-bold text-white shadow-lg hover:brightness-125 focus-visible:brightness-125"
                    >
                        Join Us
                    </Link>
                </div>
            </div>
        </section>
    );
}