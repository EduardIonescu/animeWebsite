function delay(t) {
	return new Promise((resolve) => {
		setTimeout(resolve, t);
	});
}

export default async function getData(url, retries = 40) {
	return await fetch(url)
		.then((res) => {
			if (res.ok) return res.json();

			throw new Error(res.status);
		})
		.catch(async (error) => {
			if (retries > 0) {
				// limited requests per second
				await delay(200);
				return await getData(url, retries - 1);
			} else throw error;
		});
}
