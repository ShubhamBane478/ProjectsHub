
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SearchFilter from '../mini-projects/search-filter/SearchFilter';
import HookForm from '../mini-projects/react-hook-forms/HookForm';
// import DataFetching from '../react-basics/dataFetching';
import PlaygroundReact from '../mini-projects/react-playground';
import ProductsPageQuery from '../mini-projects/product-page/ProductsPageQuery';
import ReactQuery from '../mini-projects/react-query/ReactQuery';
import ReduxToolkit from '../playground/react-toolkit/reactToolkit';
import HabitTracker from '../mini-projects/habit-tracker';
// import { RetracingSideBar } from '../mini-projects/animated-sidebar/RetractingSideBar';
// import FramerMotion from '../playground/famerMotion/FramerMotionCC';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/search-filter" element={<SearchFilter/>} />
        
        <Route path="/" element={<HomePage />} />
        <Route path="/react-hook-forms" element={<HookForm/>} />
        <Route path='/react-playground' element={<PlaygroundReact/>} />
        <Route path='/products-page' element={<ProductsPageQuery />} />
        <Route path="/react-query/*" element={<ReactQuery />} />
        <Route path="/redux-toolkit/" element={<ReduxToolkit />} />
        <Route path="/habit-tracker" element={<HabitTracker />} />
        {/* <Route path='/framer-motion' element={<FramerMotion />} /> */}
        {/* Add routes for other projects here */}

        {/* <Route path='/animated-sidebar' element={<RetracingSideBar />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
