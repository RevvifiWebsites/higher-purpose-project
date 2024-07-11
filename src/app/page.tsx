import Photos from "@/components/Photos";

export default function Home() {
    return (
        <main>
            <article>
                <div className="container">
                    <h1>
                        Inspire and teach the youth about the spirit of altruism
                        to lift up orphans, elderly, refugees, and the
                        unfortunate
                    </h1>
                    <div>
                        <Photos />
                    </div>
                </div>

                <section aria-labelledby="current-projects">
                    <div className="container">
                        <div>
                            <h2 id="current-projects">Our current projects</h2>
                        </div>
                        <div>
                            <article>
                                <h3>Project Señorita</h3>
                                <p>
                                    We distributed hundreds of sanitary pads
                                    along with other sanitary items to tea
                                    garden workers in Sylhet
                                </p>
                            </article>
                            <article>
                                <h3>Project Eid</h3>
                                <p>
                                    We distributed new Punjabis all across Dhaka
                                    city to guards and other blue collar workers
                                </p>
                            </article>
                            <article>
                                <h3>Project Ramadan</h3>
                                <p>
                                    We feed thousands of orphans and elderly
                                    throughout the blessed month of Ramadan
                                </p>
                            </article>
                            <div>
                                <p>15000+ PEOPLE HELPED</p>
                            </div>
                            <article>
                                <h3>Project Winter&apos;s Tale</h3>
                                <p>
                                    We distributed thousands of Winter clothes
                                    and blankets all across the country
                                </p>
                            </article>
                            <div>
                                <p>15000+ PEOPLE HELPED</p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
