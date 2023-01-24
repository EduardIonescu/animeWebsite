// Takes in sth like 'Attack On Titan: final season'
// And returns 'attack+on+titan+final+season' to be passed in url
export function parseQuery(inputQuery: string | null): string {
	const regex = /[A-Za-z\s\d]/g;
	let searchableQuery: string | undefined;
	if (inputQuery !== null) {
		searchableQuery = inputQuery
			.match(regex)
			?.join("")
			.replaceAll(" ", "+")
			.toLowerCase();
	}

	return searchableQuery || "";
}
