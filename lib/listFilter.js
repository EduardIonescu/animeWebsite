export function mapQuery(queryName, queryArray) {
	let array;
	if (queryArray) {
		if (queryArray.length >= 1) {
			array = queryArray.map((q) => q.value);
			const string = `${queryName}=${array.join(",")}&`;
			return string;
		} else if (typeof queryArray == "object" && queryArray.value) {
			return `${queryName}=${queryArray.value}&`;
		}
	}
	return "";
}

// makes the url clean
export function mapAllQueries(genres, ratings, year, status, score, order) {
	return `years=2020&sfw=true&type=tv&${mapQuery("genres", genres)}${mapQuery(
		"rating",
		ratings
	)}${mapQuery("start_date", year)}${mapQuery("status", status)}&${mapQuery(
		"min_score",
		score
	)}${mapQuery("order_by", order)}`;
}
export function getAllQueriesURL(genres, ratings, year, status, score, order) {
	const url = `https://api.jikan.moe/v4/anime?${mapAllQueries(
		genres,
		ratings,
		year,
		status,
		score,
		order
	)}`;
	return url;
}
