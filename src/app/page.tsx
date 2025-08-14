import { Header } from "../components/Header";
import { features } from "../utils/features_main";
import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main">
      <Header />
      <section className="section-main">
        <h1 className="title-main">Visualizador de algoritmos</h1>
        <p className="subtitle-main">
          Visualiza y entiende como funcionan y para qué sirven, mejorando así
          tu logíca en programación
        </p>
        <Link href="/algoritmos" className="link-main">
          Algoritmos
        </Link>
      </section>
      <section className="section-docs">
        <h2 className="title-docs">Funcionalidades</h2>
        <div className="features">
          {features.map(({ id, title, details }) => (
            <div className="card-docs" key={id}>
              <h3 className="title-card-docs">{title}</h3>
              <p className="details-card-docs">{details}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer-main">
        <a href="https://github.com/dariomvg" target="_blank" rel="noreferrer" className="link-footer">
          Github del creador✨
        </a>
      </footer>
    </main>
  );
}
