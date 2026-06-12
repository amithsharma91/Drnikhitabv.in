import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollProgress from "./components/feature/ScrollProgress";
import CustomCursor from "./components/feature/CustomCursor";
import PageTransition from "./components/feature/PageTransition";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={__BASE_PATH__}>
        <ScrollProgress />
        <CustomCursor />
        <PageTransition>
          <AppRoutes />
        </PageTransition>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
