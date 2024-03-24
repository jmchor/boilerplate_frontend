import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@font-face {
	font-family: 'Work Sans';
	src: url()('/fonts.css');

	font-weight: normal;
	font-style: normal;
}

html {
	--red: #ff0000;
	--blue: #346fa1;

	--bandaid: #b39686;
	--muddygreen: #616044;
	--muddygold: #766961;
	--dirtypurple: #4b475e;
	--darkpurple:#31365e;
	--purpleblack:#2c2c36;

	--steelbluegrey: linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%);
	--Reversesteelbluegrey: linear-gradient(60deg, hsla(202, 27%, 45%, 1) 0%, hsla(180, 100%, 25%, 1) 120%);
	--radiantBluegrey: radial-gradient(circle, hsla(202, 27%, 45%, 1) 0%, hsla(213, 77%, 14%, 1) 100%);
	--grey: #3A3A3A;
	--gray: var(--grey);
	--darkbluegray: hsla(213, 77%, 14%, 1);
	--bluegrey: hsla(202, 27%, 45%, 1);
	--lightblue: #8FB1EC;
	--lightGrey: #e1e1e1;
	--lightGray: var(--lightGrey);
	--offWhite: #f5f5f5;
	--maxwidth: 1000px;
	--bs: 0 12px 24px 0 rgba(0,0,0,0.09);
	box-sizing: border-box;
	font-size: 62.5%;

}

*, *:before, *:after {
	box-sizing: inherit;
}

body {
	font-family: 'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding: 0;
	margin: 0;
	font-size: 1.5rem;
	line-height: 2;
	background: url('/background.jpg');
	/* background: var(--offWhite); */
	color: var(--darkpurple);
}

a {
	text-decoration: none;
	color: var(--darkpurple);
}

a:hover {
	text-decoration: underline;
}

button {
	font-family: 'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	width: auto;
	background: none;

	color: white;
	border: 2px solid var(--bandaid);
	border-radius: 5px;
	font-size: 2rem;
	font-weight: 600;
	padding: 0.5rem 1.2rem;

}

	@media (max-width: 1440px) {
    /* Media query for smaller screens */
    body {
      overflow: hidden; /* Prevent scrolling on smaller screens */
    }
	}
`;

export default GlobalStyles;
