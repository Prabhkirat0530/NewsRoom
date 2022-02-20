import './App.css';
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './My Components/Main';
import Footer from './My Components/Footer';
import Articles from './My Components/Articles';
import TopHeadlines from './My Components/TopHeadlines';
import NavBar from './My Components/NavBar';

function App() {
  return (
    <div className="APP">
      <NavBar />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/headlines' element={<TopHeadlines />} />
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
