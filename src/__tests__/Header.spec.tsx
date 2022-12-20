import { screen } from "@testing-library/react";
import { renderWithTheme } from "../../config/jest/helpers";
import Header from "../components/Header";
import { theme } from "../styles/theme";

describe("Header Component", () => {
  it("should have 'to.do' heading in the document", () => {
    renderWithTheme(<Header />);

    expect(screen.getByText("to.")).toBeInTheDocument();
    expect(screen.getByText("do")).toBeInTheDocument();
  });

  it("should have heading with color white and span with font weight bold", () => {
    renderWithTheme(<Header />);

    expect(screen.getByText("to.")).toHaveStyle({
      color: theme.colors.white,
    });
    expect(screen.getByText("do")).toHaveStyle("font-weight: bold");
  });
});
