import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './Components/Loader'; 

const DashboardComponent = lazy(() => import('./Components/DashboardComponents'));
const KavitaComponent = lazy(() => import('./Components/KavitaComponent'));
const MazaParichayComponent = lazy(() => import('./Components/MazaParichayComponent'));
const PrastavnaComponent = lazy(() => import('./Components/PrastavnaComponent'));
const ContactComponent = lazy(() => import('./Components/ContactComponent'));
const PreranaComponent = lazy(() => import('./Components/PrernaComponent'));
const ViewKavitaComponent = lazy(() => import('./Components/ViewKavitaComponent'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/kavita-sangrah" element={<KavitaComponent />} />
          <Route path="/kavita-sangrah/:title" element={<ViewKavitaComponent />} />
          <Route path="/maza-parichay" element={<MazaParichayComponent />} />
          <Route path="/prastavna" element={<PrastavnaComponent />} />
          <Route path="/contact" element={<ContactComponent />} />
          <Route path="/prerana" element={<PreranaComponent />} />
          <Route path="/" element={<DashboardComponent />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
