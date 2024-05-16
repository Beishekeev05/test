import { useReducer } from "react";
import "./App.css";
const initState = {
	todos: [],
};

function App() {
	const [state, dispatch] = useReducer(reducer, initState);
	return <></>;
}

export default App;
