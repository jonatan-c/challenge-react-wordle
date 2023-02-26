/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import './index.css';
import WordleApp from './components/WordleApp';
import { Provider } from 'react-redux';
import store from './store/store';

function App(): JSX.Element {
	return (
		<>
			<Provider store={store}>
				<div className="h-[100%]   bg-white pt-[83px] dark:bg-black">
					<WordleApp />
				</div>
			</Provider>
		</>
	);
}

export default App;
