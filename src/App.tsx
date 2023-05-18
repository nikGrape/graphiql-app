import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Welcome } from './features/welcome/Welcome';
import { PageNotFound } from './features/404/PageNotFound';
import { MainPage } from './features/main/MainPage';
import { LoginPage } from './features/login/LoginPage';
import { SignUpPage } from './features/login/SignUpPage';
import { Footer } from './features/footer/Footer';
import { Header } from './features/header/Header';

function App() {
	return (
		<>
			<Provider store={store}>
				<HashRouter>
					<Header />
					<Routes>
						<Route path='/welcome' element={<Welcome />} />
						<Route path='/main' element={<MainPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/signup' element={<SignUpPage />} />
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</HashRouter>
				<Footer />
			</Provider>
		</>
	);
}

export default App;