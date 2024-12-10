import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("renderizar features principales", () => {
  it("el objeto features se muestra correctamente", () => {
    render(<Home />);

    expect(screen.getByText("Ver cada paso detallado")).toBeInTheDocument();
    expect(screen.getByText("Múltiples algoritmos")).toBeInTheDocument();
    expect(screen.getByText("Explicación en cada paso")).toBeInTheDocument();
    expect(screen.getByText("Editor de pruebas")).toBeInTheDocument();
    expect(screen.getByText("Diseño intuitivo")).toBeInTheDocument();
    expect(screen.getByText("Controles de paso por paso")).toBeInTheDocument();

  });
});
