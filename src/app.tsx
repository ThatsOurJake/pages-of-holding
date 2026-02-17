import { NotFoundPage } from "./pages/not-found";
import { PlaceholderPage } from "./pages/placeholder";
import { PortfolioPage } from "./pages/portfolio";

const MAP = {
  placeholder: ['jakeking.co.uk', 'thatsourjake.dev'],
  portfolio: ['thatsourjake.com', 'thatsourjake.co.uk', 'jake-is.gay', 'jakeki.ng'],
}

export const App = () => {
  const host = window.location.host;

  if (MAP.placeholder.includes(host)) {
    return <PlaceholderPage />;
  }

  if (MAP.portfolio.includes(host)) {
    return <PortfolioPage />;
  }

  return <NotFoundPage />;
}
