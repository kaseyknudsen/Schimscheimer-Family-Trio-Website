import Hero from "@/components/Hero";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <Hero />
      <ul>
        <li>
          <Link href="/about">About</Link>
          <Link href="/shows">Shows</Link>
          <Link href="/listen">Listen</Link>
          <Link href="/store">Store</Link>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;
