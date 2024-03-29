import "./styles/main.scss"
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import RecipePage from "./pages/RecipePage/RecipePage";
import RecipeListPage from "./pages/RecipeListPage/RecipeListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipes' element={<RecipeListPage />} />
        <Route path='/recipes/:id' element={<RecipePage />} />
      </Routes>
		</BrowserRouter>
	);
}

export default App;
