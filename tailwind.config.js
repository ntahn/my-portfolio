module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"blue-text": "#658ec6",
				header: "#426696",
				glass: "rgba(255,255,255,0.7)",
				"glass-lighter": "rgba(255,255,255,0.3)",
			},
			minHeight: {
				80: "80vh",
			},
			maxHeight: {
				view: "63vh",
			},
			fontFamily: {
				body: ["Poppins"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
