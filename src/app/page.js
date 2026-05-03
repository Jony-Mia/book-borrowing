import BookCarousel from "@/component/BookCarousel";
import Books from "@/component/Books";
import Feature from "@/component/Feature";
import Hero from "@/component/Hero";
import Marque from "@/component/Marquee";
import PromoBanner from "@/component/PromoBanner";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Marque/>
    <Feature/>
    <BookCarousel />
    <PromoBanner/>
    <Books/>
    </>
  );
}
