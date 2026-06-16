import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";

const ScrollToTop = lazy(() => import("./common/ScrollToTop"));
const Header = lazy(() => import("./common/Header"));
const Notfound = lazy(() => import("./common/NotFound"));
const Loader = lazy(() => import("./common/Loader"));

const Home = lazy(() => import("./screen/home/Home"));
const About = lazy(() => import("./screen/about/About"));
const Project = lazy(() => import("./screen/project/Project"));

const Layout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
            </Route>
            <Route path='*' element={<Notfound />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;