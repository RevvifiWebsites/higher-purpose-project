import Image from "next/image";
import Link from "next/link";

export default function AboutUsSection() {
    return (
        <section
            aria-labelledby="about-us"
            className="bg-beige py-8 md:py-24 lg:py-32"
        >
            <div className="grid items-center md:container md:grid-cols-2">
                <div>
                    <Image
                        src="/kids-eating.jpg"
                        alt="Two boys smiling at the camera while sitting at a crowded table with others eating and chatting in the background"
                        width="500"
                        height="400"
                        className="mx-auto aspect-[8/7] w-full object-cover md:rounded-3xl"
                    />
                </div>
                <div className="px-6 py-3">
                    <h2
                        id="about-us"
                        className="mb-1 text-3xl font-bold md:mb-4 md:text-5xl"
                    >
                        About Us
                    </h2>
                    <p className="mb-6 text-xl md:mb-12 lg:mb-16">
                        We are a social media based non profit organization that
                        has students volunteering for us, from roughly every
                        school in Dhaka, with close to 500 students working with
                        us till now. Our volunteers go out and help in providing
                        aid to the poor and the downtrodden throughout the
                        country and even in different places across the globe.
                    </p>
                    <Link
                        href="https://www.instagram.com/a.higherpurpose.foundation/"
                        className="shadow-gray-500 rounded-lg bg-yellow px-3 py-3 font-bold text-black shadow-lg hover:brightness-125 focus-visible:brightness-125"
                    >
                        Follow Us
                    </Link>
                </div>
            </div>
        </section>
    );
}