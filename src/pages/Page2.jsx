import { Link } from "react-router-dom";

function Page2() {
	return (
		<div>
			<h1>Page 2</h1>
			<Link to='/page1'>Go to Page 1</Link>
			<br />
			<Link to='/page2'>Go to Page 2</Link>
			<br />
			<Link to='/'>Root</Link>
		</div>
	);
}

export default Page2;
