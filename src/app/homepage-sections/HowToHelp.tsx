import Link from "next/link";

export default function HowToHelpSection() {
    return (
        <section
            aria-labelledby="how-to-help"
            className="my-14 md:my-24 lg:my-40"
        >
            <div className="mx-auto max-w-xl px-4">
                <h2
                    className="mb-4 text-3xl font-bold capitalize text-dark-green md:text-4xl lg:text-5xl"
                    id="how-to-help"
                >
                    Hou you can help
                </h2>
                <p className="mb-4 text-xl text-dark-green">
                    Join Us as a Volunteer and help spread smiles or Donate by
                    clicking the link below ↓.
                </p>
                <div className="flex gap-x-4">
                    <Link
                        href="https://www.instagram.com/a.higherpurpose.foundation/"
                        className="shadow-gray-400 hover:bg-gray-700 focus-visible:bg-gray-700 block rounded-lg bg-dark-gray px-4 py-2 text-lg font-bold text-blue shadow-lg outline-offset-2"
                    >
                        Join Us
                    </Link>
                    <Link
                        href=""
                        className="hover:bg-gray-700 focus-visible:bg-gray-700 block rounded-lg bg-dark-gray px-4 py-2 text-lg font-bold text-white outline-offset-2"
                    >
                        Donate
                    </Link>
                </div>
            </div>
        </section>
    );
}