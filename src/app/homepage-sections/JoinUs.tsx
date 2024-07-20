import Link from "next/link";

export default function JoinUsSection() {
    return (
        <section
            aria-labelledby="join-us"
            className="my-16 bg-light-gray py-28 md:my-24"
        >
            <h2
                id="join-us"
                className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-4xl lg:text-5xl"
            >
                Join Us.
            </h2>
            <Link
                href="https://www.instagram.com/a.higherpurpose.foundation/"
                className="shadow-gray-400 mx-auto block w-max rounded-xl bg-orange px-6 py-5 text-xl font-bold text-white shadow-lg hover:brightness-125 focus-visible:brightness-125"
            >
                Apply Now
            </Link>
        </section>
    );
}