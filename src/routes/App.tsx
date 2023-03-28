import { BrowserRouter, Route, Routes } from 'react-router-dom';

import '../styles/App.css';

import Home from '../pages/Home';
import ArticleDetail from '../pages/ArticleDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/article/detail/:articleTitle"
          element={<ArticleDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
