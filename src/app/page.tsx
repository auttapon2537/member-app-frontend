"use client";

import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <ScrollUp />
      {session ? (
        <>
          <Hero />
          <Blog />
        </>
      ) : <Welcome />}
    </>
  );
}
