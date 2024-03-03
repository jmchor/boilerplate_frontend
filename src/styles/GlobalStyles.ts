import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@font-face {
	font-family: 'Work Sans';
	src: url()('/static/fonts.css');

	font-weight: normal;
	font-style: normal;
}

html {
	--red: #ff0000;
	--blue: #346fa1;
	--black: #393939;
	--purple: #6F2DBD;
	--mauve: #A663CC;
	--wisteria: #B298DC;
	--blueish: #B8D0EB;
	--celeste: #B9FAF8;
	--steelbluegrey: linear-gradient(90deg, hsla(213, 77%, 14%, 1) 0%, hsla(202, 27%, 45%, 1) 100%);
	--Reversesteelbluegrey: linear-gradient(60deg, hsla(202, 27%, 45%, 1) 0%, hsla(213, 77%, 14%, 1) 120%);
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
	/* background: var(--offWhite); */
}

a {
	text-decoration: none;
	color: var(--black);
}

a:hover {
	text-decoration: underline;
}

button {
	font-family: 'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	width: auto;
	background: var(--blue);
	color: white;
	border: 0;
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
