"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import "../app/globals.css";

export default function Header() {
  const pathname = usePathname();

  let logoSrc = "/logo.png"; // Default logo

  if (pathname === "/" || pathname === "/contact") {
    logoSrc = "/logo-techsweet.png";
  } else if (pathname === "/kontact") {
    logoSrc = "/logo-kontact.png";
  } else if (pathname === "/codercomplete") {
    logoSrc = "/logo-codercomplete.png";
  }

  return (
    <header className="header">
      <div className="logo">
        <Image src={logoSrc} alt="Logo" width={50} height={50} />
      </div>
      <nav className="nav-links">
        <a href="/" className={pathname === "/" ? "active" : ""}>
          TechSweet
        </a>
        <a href="/kontact" className={pathname === "/kontact" ? "active" : ""}>
          Kontact
        </a>
        <a
          href="/codercomplete"
          className={pathname === "/codercomplete" ? "active" : ""}
        >
          CoderComplete
        </a>
        <a href="/contact" className={pathname === "/contact" ? "active" : ""}>
          Contact
        </a>
      </nav>
    </header>
  );
}
