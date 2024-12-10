import Algorithms from "@/app/algoritmos/page";
import { render, screen } from "@testing-library/react";

describe("se renderizan todos los algoritmos", () => {
  it("el objeto algoritmos se carga correctamente", () => {
    render(<Algorithms />);

    expect(screen.getByText("Algoritmos")).toBeInTheDocument();
    expect(screen.getByText("Búsqueda binaria")).toBeInTheDocument();
    expect(screen.getByText("Ordenamiento por selección")).toBeInTheDocument();
    expect(screen.getByText("Ordenamiento por inserción")).toBeInTheDocument();
    expect(screen.getByText("Ordenamiento por mezcla")).toBeInTheDocument();
    expect(screen.getByText("Ordenamiento rápido")).toBeInTheDocument();
    expect(screen.getByText("Búsqueda en anchura")).toBeInTheDocument();
    expect(screen.getByText("Torres de hanoi")).toBeInTheDocument();
  });
});
