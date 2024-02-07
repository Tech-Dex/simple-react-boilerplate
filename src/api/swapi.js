const fetchPerson = async (id) => {
	console.info(`fetchPerson(${id})`);
	const response = await fetch(`https://swapi.dev/api/people/${id}/`);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

export { fetchPerson };
