"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/background-beams";
import { GlowingStarsBackgroundCardPreview } from "./GlowingStarsBackgroundCardPreview";

export function BackgroundBeamsDemo() {
    return (
        <div className="h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                    Get in touch{" "}
                </h1>
                <p></p>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    We value your inquiries and feedback. You can reach out to us through
                    our contact form, phone number, or visit our office in person. Our
                    team is here to assist you promptly.
                </p>
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                    <GlowingStarsBackgroundCardPreview content="Email" line="Our Email address for your assistance" url="info@eaisoft.com" />
                    <GlowingStarsBackgroundCardPreview content="Phone" line="For urgent matters outside regular hours, please call our emergency support" url="+923451222219" />
                    <GlowingStarsBackgroundCardPreview content="Office Address" line="Come and visit us at our headquarters, where our dedicated team is located." url="Eaisoft (SMC - Pvt.) Ltd.  15th Floor, G.M Trade Center,  Bahria Town, Karachi, Pakistan " />
                    <GlowingStarsBackgroundCardPreview content="Support" line="We take pride in providing exceptional customer support." url="Monday - Saturday," />
                </div>
                {/* <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                    Welcome to MailJet, the best transactional email service on the web.
                    We provide reliable, scalable, and customizable email solutions for
                    your business. Whether you&apos;re sending order confirmations,
                    password reset emails, or promotional campaigns, MailJet has got you
                    covered.
                </p>
                <input
                    type="text"
                    placeholder="hi@manuarora.in"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
                /> */}
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit distinctio deserunt ullam nobis blanditiis iusto sint consequuntur iste ducimus recusandae accusantium illo iure ea quas, voluptatem voluptas quos vitae totam commodi doloremque quidem mollitia, earum, eligendi excepturi! Nisi, error. Voluptates molestias veritatis eveniet voluptate, quaerat quae ducimus quis explicabo aut reprehenderit incidunt nulla ullam unde. Nam consequuntur non cupiditate vitae accusantium quibusdam perspiciatis quis tempore ad qui nihil quas iusto illum nesciunt voluptate magnam, doloribus assumenda dignissimos quia. Architecto, dolor assumenda natus possimus eveniet est nesciunt aperiam voluptates! Cupiditate quibusdam perferendis aut consectetur laudantium impedit ad saepe iste dicta harum?</p>
            </div>
            <BackgroundBeams />
        </div>
    );
}
