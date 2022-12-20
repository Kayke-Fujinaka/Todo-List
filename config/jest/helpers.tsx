import { render, RenderOptions } from "@testing-library/react";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../src/styles/theme";

interface AllProviderProps {
  children: ReactNode;
}

function AllProvider({ children }: AllProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllProvider, ...options });

export * from "@testing-library/react";
export { customRender as renderWithTheme };
