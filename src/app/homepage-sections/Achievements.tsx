export default function AchievementsSection() {
    return (
        <section
            aria-label="Achievements"
            className="pb-24 pt-14 md:pb-36 md:pt-24 lg:pb-40 lg:pt-24"
        >
            <div className="container">
                <ul className="grid gap-6 md:grid-cols-3">
                    <li className="shadow-gray-300 rounded-xl bg-light-green p-6 pr-0 shadow-lg">
                        <p className="font-bold">
                            <span className="mb-4 block text-4xl text-orange lg:text-5xl">
                                15000+
                            </span>
                            <span className="text-2xl capitalize lg:text-[2.3rem]">
                                helped
                            </span>
                        </p>
                    </li>
                    <li className="shadow-gray-300 rounded-xl bg-light-green p-6 pr-0 shadow-lg">
                        <p className="font-bold">
                            <span className="mb-4 block text-4xl text-orange lg:text-5xl">
                                50+
                            </span>
                            <span className="text-2xl capitalize lg:text-[2.3rem]">
                                projects
                            </span>
                        </p>
                    </li>
                    <li className="shadow-gray-300 rounded-xl bg-light-green p-6 pr-0 shadow-lg">
                        <p className="font-bold">
                            <span className="mb-4 block text-4xl text-orange lg:text-5xl">
                                250+
                            </span>
                            <span className="text-2xl capitalize lg:text-[2.3rem]">
                                volunteers
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}