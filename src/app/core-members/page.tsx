import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Core Members",
};

export default function CoreMembers() {
    const members = [
        {
            name: "Maaz Saleh",
            img: {
                alt: "Young man with glasses, curly hair, wearing a navy blue sweater, sitting at a wooden table in a casual restaurant.",
                src: "/Maaz_Saleh.jpg",
            },
        },
        {
            name: "Maria Hishma",
            img: {
                alt: "Young woman with long, straight hair, wearing a peach-colored traditional outfit, sitting on a beige sofa against a textured wall.",
                src: "/Maria_Hishma.jpg",
            },
        },
        {
            name: "Mustafa Tazwar",
            img: {
                alt: "Young man with short hair and a beard, wearing a black t-shirt, sitting on a brown leather sofa in a cozy, dimly-lit room with a lamp in the background.",
                src: "/Mustafa_Tazwar.jpg",
            },
        },
        {
            name: "Nabiha Subaita",
            img: {
                alt: "A young woman wearing a black hijab and glasses, seated on a beige sofa, dressed in a black and colorful patterned traditional outfit.",
                src: "/Nabiha_Subaita.jpg",
            },
        },
        {
            name: "Samin Rahman Srabon",
            img: {
                alt: "A young man in a light blue traditional kurta, standing outdoors on a grassy lawn, looking down with his hands in his pockets. The background includes trees and a decorated tent.",
                src: "/Samin_Rahman_Srabon.jpg",
            },
        },
        {
            name: "Surid Ahmed",
            img: {
                alt: "Young man with glasses, smiling, with his straight black hair covering part of his face, on a red and white background, and talking into a microphone",
                src: "/Surid_Ahmed.jpg",
            },
        },
    ];
    return (
        <div className="pb-20 pt-10 md:pb-36 md:pt-16">
            <div>
                <div className="container">
                    <h1 className="mb-14 md:mb-24 text-4xl font-bold text-dark-green text-center">
                        Core Members
                    </h1>
                    <ul className="space-y-16 md:space-y-24">
                        {members.map(({ name, img }, i) => {
                            return (
                                <li key={name}>
                                    <figure className={`text-dark-green`}>
                                        <div className="">
                                            <div className="mx-auto max-w-sm md:max-w-none">
                                                <Image
                                                    src={img.src}
                                                    alt={img.alt}
                                                    width="1500"
                                                    height="800"
                                                    className="aspect-[4/3] w-full rounded-xl object-cover max-w-xl mx-auto object-top"
                                                />
                                            </div>
                                        </div>
                                        <figcaption className="">
                                            <h2 className="mb-2 mt-6 text-center text-xl font-bold md:mb-3 md:text-3xl lg:text-4xl">
                                                {name}
                                            </h2>
                                        </figcaption>
                                    </figure>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
