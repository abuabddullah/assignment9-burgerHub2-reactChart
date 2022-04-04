import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import useReviews from './components/customHooks/useReviews/useReviews';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavigationBar from './components/NavigationBar/NavigationBar';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';


export const ReviewsContext = createContext()

function App() {
  const [reviews, setReviews] = useReviews()

  // console.log(reviews);

  return (
    <ReviewsContext.Provider value={[reviews, setReviews]}>

      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />



        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />

    </ReviewsContext.Provider>
  );
}

export default App;
