### Links

-   Live Site URL: [Click here to see webpage](https://anime-website-eduardionescu.vercel.app/)

# AnimeSun - Personal Website

## Description

&nbsp;&nbsp;&nbsp;&nbsp;I've been using [MAL](https://myanimelist.net/) for quite a while and their website sometimes felt slow and had this old school look to it. I wanted to try and create something similar but see how much faster I can make it and hopefully also give it a better feeling to using it. Given the fact that I'm limited in the amount of requests I can use, I think I've done a good job in improving its speed, even though I haven't recreated all the pages, but I believe it's quite easily scalable.

## Table of contents

-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
    -   [Useful resources](#useful-resources)
-   [Author](#author)
-   [Acknowledgments](#acknowledgments)

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   Mobile-first workflow
-   [React](https://reactjs.org/) - JS library
-   [Next.js](https://nextjs.org/) - React framework
-   [TailwindCSS](https://tailwindcss.com/) - CSS library
-   [next-themes](https://www.npmjs.com/package/next-themes) - Nextjs Hook
-   [Custom Hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks) - React Custom Hooks
-   `TypeScript`
-   [Jikan API](https://docs.api.jikan.moe/) - Unofficial MAL API
-   React Slick | React Select | React Modal

### What I learned

-   `TypeScript`.
-   Custom Hooks - Pratical way of creating hooks I can reuse in my code, making everything cleaner and less bug proned.
-   Fetch with retry on `429 too many attempts` error, because I was limited to 3 requests/s.
-   The Search API from Jikan/MAL only accepts official names when searching,
    so I had to use another API to get the official names and then search for them using the Jikan Search API.
-   Better structuring of the folder + naming, still have a long way to go.
-   I've created my own carousel by creating some buttons that `translateX` everything and then update the initial data (not the best way to manipulate the state but it works):

```js
function handleClickNext() {
	if (ulRef.current) {
		ulRef.current.style.transition = "all 0.3s";
		ulRef.current.style.transform = "translateX(-728px)";
	}

	setTimeout(() => {
		if (ulRef.current) {
			ulRef.current.style.transition = "none";
			ulRef.current.style.transform = "translateX(0)";
		}
		setRecommendations((r) => [...r.slice(7, 21), ...r.slice(0, 7)]);
	}, 250);
}
```

### Continued development

-   The Search Bar can use some improvement, but it's mostly an API limitation.
-   There are some other small bugs with the Search Bar.
-   Dark mode theme could use some desing improvement.
-   Mobile view has fewer pages available to itself, because it was too cluttered. Might consider finding a solution to it.
-   `TypeScript` is quite useful for finding bugs early. I want to implement other testing methods in upcoming projects.
-   I had no design when I first started this project, so in the future I'd want to spend some time creating one with consistent sizes / colors / transitions between pages.

### Useful resources

-   [Jikan/Unofficial MAL API](https://docs.api.jikan.moe/) - Great API with detailed documentation.
-   [TypeScript](https://www.typescriptlang.org/docs/handbook/) - Great resource on migrating JavaScript apps to Typescript and creating interfaces/types.
-   [Custom Hooks](https://beta.reactjs.org/learn/reusing-logic-with-custom-hooks)- Great resource to learn how and when to use `Custom Hooks`.
-   [React Slick](https://react-slick.neostack.com/) - Lightweight / simple way to implement carousels.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
