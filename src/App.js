import "./app.scss";
import Header from "./components/header";
import Headline from "./components/headline";

const tempArr = [
	{
		fName: "Nicholas",
		lName: "K",
		email: "j@gmail.com",
		age: 56,
		onLineStatus: true,
	},
];

function App() {
	return (
		<div className="App">
			<Header />
			<section className="main">
				<Headline
					header="Posts"
					desc="click the button to render props"
					tempArr={tempArr}
				/>
			</section>
		</div>
	);
}

export default App;
