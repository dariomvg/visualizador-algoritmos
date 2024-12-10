"use client"; 
import Link from "next/link";
import "../styles/aside-nav.css"; 
import menu from "@/assets/menu.svg"
import { useState } from "react";
import { algorithms } from "@/utils/algorithms";

export const AsideNav = (): JSX.Element => {
  const [active, setActive] = useState(false); 
  return (
    <aside className={`aside-nav ${active ? "active" : ""}`}>
      <img src={menu.src} alt="menu outline" width={40} height={40} className="menu-aside" onClick={() => setActive(!active)} />
      <nav className="nav">
        <Link href="/" className="link-nav">Principal</Link>
        {algorithms.map(({id, title, link}) => <Link key={id} href={`/algoritmo/${link}`} className="link-nav">{title}</Link>)}
      </nav>
    </aside>
  )
}
