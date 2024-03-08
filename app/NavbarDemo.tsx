"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../app/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import aicarz from "../public/aicarz.png"
import eaisoft from "../public/eaisoft.png"

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="AI Software Development"
              href="https://www.aicarz.com/"
              src={aicarz}
              description="Our team of experts specialises in developing AI-powered software tailored to your unique needs.

              "
            />
            <ProductItem
              title="AI Integration
              "
              href="https://www.eaisoft.com/"
              src={eaisoft}
              description="We help businesses integrate AI into their existing processes and systems, unlocking new levels of efficiency, data analysis, and automation."
            />
            <ProductItem
              title="Consulting and Strategy"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="We offer strategic AI and mobile app consulting services to help you understand the possibilities and potential of AI and mobile technology for your business."
            />
            <ProductItem
              title="Retail Transformation
              "
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Explore how our mobile app development expertise helped a retail giant increase customer engagement through a feature-rich e-commerce app."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Aicarz"
              href="https://www.aicarz.com/"
              src={aicarz}
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Eaisoft"
              href="https://www.eaisoft.com/"
              src={eaisoft}
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Contactus">Contactus</HoveredLink>
            <HoveredLink href="/Carrers">Carrers</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">What We Do</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
