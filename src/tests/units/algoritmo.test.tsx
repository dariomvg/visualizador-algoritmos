import PageAlgorithm from "@/app/algoritmo/[name]/page";
import { useAlgorithm } from "@/hooks/useAlgorithm";
import { render, screen } from "@testing-library/react";

jest.mock("@/hooks/useAlgorithm", () => ({
  useAlgorithm: jest.fn(),
}));

describe("se renderizan todos los algoritmos", () => {
  it("el objeto algoritmos se carga correctamente", async () => {
    (useAlgorithm as jest.Mock).mockReturnValue({
      algorithm: {
        id: 1,
        name: "programming",
        description: "programming with react",
        steps: [{ id: 1, details: "create function", code: "react code" }],
      },
      selected: { id: 1, details: "create function", code: "react code" },
      viewDesc: true,
    });
    render(<PageAlgorithm params={{ name: "1" }} />);

    expect(screen.getByText("programming with react")).toBeInTheDocument();
    expect(screen.getByText("create function")).toBeInTheDocument();
  });
});
