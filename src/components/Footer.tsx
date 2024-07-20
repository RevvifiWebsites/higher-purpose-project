import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black py-12 text-sm text-white">
            <div className="container px-12">
                <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
                    <p>&copy; A Higher Purpose {new Date().getFullYear()}</p>
                    <ul className="flex gap-x-4">
                        <li>
                            <Link
                                href="https://www.instagram.com/a.higherpurpose.foundation/"
                                className="hover:underline"
                            >
                                Instagram
                            </Link>
                        </li>
                        <li>
                            <Link href="" className="hover:underline">
                                Email
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
