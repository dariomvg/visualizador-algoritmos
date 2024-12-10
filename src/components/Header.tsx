import Link from "next/link"
import "../styles/header.css"

export const Header = (): JSX.Element => {
  return (
    <header className="header">
        <h3 className="logo-header">VisualizadorAlgoritmos</h3>
        <div className="links">
        <Link href="/algoritmos" className="link-header">Algoritmos</Link>
        <a href="https://github.com/dariomvg/visualizador-algoritmos" rel="noreferrer" target="_blank" className="link-header">Github</a>
        </div>
    </header>
  )
}
