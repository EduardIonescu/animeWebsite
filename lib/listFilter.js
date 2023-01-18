export function mapQuery(queryName, queryArray) {
	let array;
	if (queryArray) {
		if (queryArray.length >= 1) {
			array = queryArray.map((q) => q.value);
			console.log("array", array);
			const string = `${queryName}=${array.join(",")}&`;
			return string;
		} else if (typeof queryArray == "object")
			return `${queryName}=${queryArray.value}&`;
	}
	return "";
}
export function dealWithYear(year) {
	if (year && year.length >= 1)
		if (year <= 1990) {
			const query = `start_date=${year}`;
			return query;
		}
}
// makes the url clean
export function mapAllQueries(genres, ratings, year, status, score, order) {
	console.log("asd", status && status.value);

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
