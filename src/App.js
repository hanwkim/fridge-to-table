import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Header />
      <Routes>
        {/* <Route to='/' element={<HomePage />} /> */}
        {/* <Route to='/recipes' element={<RecipeListPage />} />
        <Route to='/recipes/:id' element={<RecipePage />} /> */}
      </Routes>
		</BrowserRouter>
	);
}

export default App;
