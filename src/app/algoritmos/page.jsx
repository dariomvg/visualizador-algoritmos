import Link from "next/link";
import "./algorithms.css";
import { algorithms } from "@/utils/algorithms";

export default function Algorithms() {
  return (
    <section className="page-algorithms">
      <h1 className="title-algorithms">Algoritmos</h1>
      <section className="section-algorithms">
        {algorithms.map(({ id, title, description, link }) => (
          <div className="card-algorithm" key={id}>
            <h3 className="title-card">{title}</h3>
            <p className="desc-card">{description}</p>
            <Link href={`/algoritmo/${link}`} className="link-card">
              Visitar
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
}
