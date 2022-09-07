import Link from "next/link";


export default function Header() {
    return (
      <header>
        <nav>
          <Link href="/"><a>Startseite</a></Link>
          <Link href="/dessert"><a>Produkte</a></Link>
          <Link href ="/veggie"><a>Kategorien</a></Link>
        </nav>
      </header>
    );
  }