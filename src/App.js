import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/main/Home";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import store from "./store/store";
import { Provider } from "react-redux"; // 모든 곳에 store 를 사용 가능.
import FoodList from "./components/food/FoodList";
import FoodFind from "./components/food/FoodFind";
import FoodDetail from "./components/food/FoodDetail";
import YoutubeFind from "./youtube/YoutubeFind";
import InfoList from "./components/info/InfoList";

function App() {
  return (
      <Provider store={store}>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/food/list" element={<FoodList />} />
            <Route path="/food/find" element={<FoodFind/>} />
            <Route path="/food/detail/:fno" element={<FoodDetail/>} />
            <Route path="/youtube/find" element={<YoutubeFind/>} />
            <Route path="/info/list/:cno" element={<InfoList/>} />
          </Routes>
        <Footer />
      </Router>
      </Provider>
  );
}

export default App;
