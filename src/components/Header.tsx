import Link from "next/link";

export default function Header() {
    const navLinks = [
        ["Past Projects", ""],
        ["About Us", ""],
        ["Our Mission", ""],
    ];
    return (
        <header>
            <div className="container">
                <div>
                    <h1>The Higher Purpose Foundation</h1>
                </div>
                <div>
                    <nav>
                        <ul>
                            {navLinks.map(([label, href]) => {
                                return (
                                    <li key={label}>
                                        <Link href={href}>{label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                    <div>
                        <Link href="https://www.instagram.com/a.higherpurpose.foundation/">
                            Join Us!
                        </Link>
                        <Link href="https://www.instagram.com/a.higherpurpose.foundation/">
                            Donate
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
