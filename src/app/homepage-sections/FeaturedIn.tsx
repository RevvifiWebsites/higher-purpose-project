export default function FeaturedInSection() {
    const companies = [
        {
            name: "Somoy TV",
            imageSrc: "/somoy-tv-logo.png",
        },
        {
            name: "BBC",
            imageSrc: "/bbc-logo.svg",
        },
        {
            name: "The Sydney Morning Herald",
            imageSrc: "/sidney-morning-herald-logo.png",
        },
        {
            name: "The New York Times",
            imageSrc: "/new-york-times-logo.png",
        },
    ];
    return (
        <section aria-labelledby="featured-in">
            <div className="container">
                <div>
                    <h2
                        className="mb-12 text-center text-3xl font-bold sm:text-4xl md:text-6xl"
                        id="featured-in"
                    >
                        Featured In
                    </h2>
                </div>
                <ul className="grid justify-evenly justify-items-center gap-8 md:grid-cols-[repeat(2,max-content)] lg:grid-cols-[repeat(4,max-content)]">
                    {companies.map(({ name, imageSrc }) => {
                        return (
                            <li key={name}>
                                <span className="sr-only">{name}</span>
                                <img
                                    src={imageSrc}
                                    alt={name}
                                    className="h-20"
                                    title={name}
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}