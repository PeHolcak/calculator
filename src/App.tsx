import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomThemeContextProvider from "./contexts/CustomThemeContext/index";

import { NotFound, Dashboard } from "./pages";
import CalculatorContexProvider from "./contexts/CalculatorContext";
import Layout from "./components/Layout";
import * as S from "./styled";
import "./App.css";

function App() {
  return (
    <CalculatorContexProvider>
      <CustomThemeContextProvider>
        <S.AppWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Dashboard />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </S.AppWrapper>
      </CustomThemeContextProvider>
    </CalculatorContexProvider>
  );
}

export default App;
