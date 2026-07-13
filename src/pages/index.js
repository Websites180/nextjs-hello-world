import Link from "next/link";
import Image from"next/image";
export default function Home() {
  return (
    <div>
      Gatinhos fofos programando.{" "}
      <br></br>
       <Image 
          src="/images/gatofofo.jpg" 
          alt="Gatinho fofo programando" 
          width={500} 
          height={300} 
        />
        <br></br>
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
