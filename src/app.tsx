import { Route, Routes } from 'react-router';
import { About } from './components/about-us-page/About';
import { CurrentCard } from './components/home-page/current-card/CurrentCard';
import { Home } from './components/home-page/Home';
import { InfoForm } from './components/info-form-page/InfoForm';
import { Layout } from './components/layout/Layout';
import { NotFound } from './components/not-found-page/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="form" element={<InfoForm />} />
        <Route path="card/:id" element={<CurrentCard />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
