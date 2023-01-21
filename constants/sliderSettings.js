const sliderSettings = {
	dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 8,
	swipeToSlide: true,
	slide: "ul",
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 6,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 5,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 4,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 3,
			},
		},
	],
};
export default sliderSettings;
