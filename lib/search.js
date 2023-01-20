// Takes in sth like 'Attack On Titan: final season'
// And returns 'attack+on+titan+final+season' to be passed in url
export function parseQuery(inputQuery) {
	const regex = /[A-Za-z\s\d]/g;
	const searchableQuery =
		inputQuery &&
		inputQuery.match(regex).join("").replaceAll(" ", "+").toLowerCase();
	return searchableQuery;
}
