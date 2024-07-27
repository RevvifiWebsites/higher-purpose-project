import Image from "next/image";
import Link from "next/link";

import AboutUsSection from "./homepage-sections/AboutUs";
import OurMissionSection from "./homepage-sections/OurMission";
import HowToHelpSection from "./homepage-sections/HowToHelp";
import AchievementsSection from "./homepage-sections/Achievements";
import FeaturedInSection from "./homepage-sections/FeaturedIn";
import JoinUsSection from "./homepage-sections/JoinUs";
import ContactUsSection from "./homepage-sections/ContactUs";

export default function Home() {
    return (
        <div>
            <div className="pb-12 pt-12 md:pb-32 md:pt-24">
                <div className="container">
                    <div>
                        <Image
                            src="/campaign-1.jpg"
                            alt='A group of young people posing outdoors with a banner that reads "A Higher Purpose"'
                            width="850"
                            height="400"
                            className="mx-auto aspect-[3/4] w-full max-w-sm rounded-2xl object-cover md:aspect-video md:max-w-3xl"
                        />
                    </div>
                    <div className="py-6 text-center">
                        <h1 className="mb-6 text-6xl font-bold text-dark-green">
                            Make the world a better place
                        </h1>
                        <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                            <Link
                                href="https://www.instagram.com/a.higherpurpose.foundation/"
                                className="shadow-gray-400 block w-max rounded-lg bg-orange px-3 py-1 text-lg font-bold text-white shadow-lg hover:brightness-125 focus-visible:brightness-125"
                            >
                                Join Us
                            </Link>
                            <Link
                                href=""
                                className="shadow-gray-400 block w-max rounded-lg bg-orange px-3 py-1 text-lg font-bold text-white shadow-lg hover:brightness-125 focus-visible:brightness-125"
                            >
                                Donate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <AboutUsSection />

            <OurMissionSection />

            <HowToHelpSection />

            <AchievementsSection />

            <FeaturedInSection />

            <JoinUsSection />

            <ContactUsSection />
        </div>
    );
}
