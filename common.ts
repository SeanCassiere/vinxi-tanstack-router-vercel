export const ITEMS: Array<{ id: string; title: string; content: string }> = [
	{
		id: "1",
		title: "First --item--",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium ac augue vitae egestas. Phasellus consectetur sagittis vulputate. Nam nec est eu turpis consectetur rutrum vitae ut leo.",
	},
	{
		id: "2",
		title: "Second --item--",
		content:
			"Sed ut purus nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies.",
	},
	{
		id: "3",
		title: "Third --item--",
		content:
			"Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies.",
	},
	{
		id: "4",
		title: "Fourth --item--",
		content:
			"Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies. Nullam nec nunc nec nunc tincidunt ultricies.",
	},
	{
		id: "5",
		title: "Fifth --item--",
		content:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
	{
		id: "6",
		title: "Sixth --item--",
		content:
			"Facilisis luctus etiam per ultricies cursus nullam at convallis. Tortor mi imperdiet hac luctus posuere. Conubia nulla venenatis facilisis pulvinar imperdiet interdum pharetra? Ut mattis senectus varius dictum facilisi fames iaculis ultrices.",
	},
	{
		id: "7",
		title: "Seventh --item--",
		content:
			"Parturient habitant ridiculus cras primis, efficitur congue pulvinar faucibus. Venenatis laoreet quam gravida netus malesuada. Donec molestie inceptos ad pharetra eleifend dapibus. Mauris nulla mi, conubia condimentum orci sem. Dis dolor porta ornare interdum tellus ante nec ante.",
	},
	{
		id: "8",
		title: "Eighth --item--",
		content:
			"Suspendisse ornare ligula sapien eleifend elit sociosqu nec neque. Quis torquent aptent dui quam cursus dignissim tellus torquent pulvinar. Aenean fames iaculis, imperdiet lacus etiam habitasse. Quis est fermentum accumsan eleifend sem vivamus.",
	},
	{
		id: "9",
		title: "Ninth --item--",
		content:
			"Sociosqu cursus blandit nisl neque vehicula accumsan. Nibh platea nunc felis lacus lobortis. Maximus magna per curabitur luctus velit habitant a.",
	},
	{
		id: "10",
		title: "Tenth --item--",
		content:
			"Etiam per primis mattis litora ligula malesuada. Montes euismod fermentum vitae euismod enim eleifend bibendum. Dis iaculis ultrices odio ante iaculis suscipit amet metus. Habitant feugiat eleifend donec nisl consequat leo efficitur.",
	},
];

export function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
