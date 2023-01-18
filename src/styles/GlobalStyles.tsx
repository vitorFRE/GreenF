import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

//Reset 
* {
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  margin: 0px;
  padding:0px;
  color:white;
  background-color: #070D08;
}
a {
  text-decoration: none;
  color:inherit;
}
h1,
h2,
h3,
p {
  margin: 0px;
}
ul,
li {
  list-style: none;
  padding: 0px;
  margin: 0px;
}
img {
  display: block;
  max-width: 100%;
}

//Scroll
::-webkit-scrollbar {
  width: 7px;
}

::-webkit-scrollbar-track {
  background-color: black;
}

::-webkit-scrollbar-thumb {
  background-color: #00FF7F;
  border-radius: 5px;
}

//tipografia

.h1 {
  font: 600 64px/80px 'Poppins', sans-serif;
  letter-spacing: -2%;
}

.h2 {
  font: 600 48px/56px 'Poppins', sans-serif;
  letter-spacing: -2%;
}

.h3 {
  font: 600 32px/40px 'Poppins', sans-serif;
  letter-spacing: -2%;
}

.h4 {
  font: 700 24px/32px 'Poppins', sans-serif;
  letter-spacing: -1.5%;
}

.h5 {
  font: 700 20px/24px 'Poppins', sans-serif;
  letter-spacing: -1.5%;
}

.h6 {
  font: 700 16px/24px 'Poppins', sans-serif;
  letter-spacing: -1.5%;
}

.b1 {
  font: 400 20px/32px 'Poppins', sans-serif;
  letter-spacing: 0%;
}

.b2 {
  font: 400 16px/24px 'Poppins', sans-serif;
  letter-spacing: 0%;
}

.b3 {
  font: 400 14px/24px 'Poppins', sans-serif;
  letter-spacing: 0%;
}

.b4 {
  font: 400 12px/24px 'Poppins', sans-serif;
  letter-spacing: 0%;
}

.cap {
  font: 400 14px/16px 'Poppins', sans-serif;
  letter-spacing: 0%;
}

.o1 {
  font: 700 14px/24px 'Poppins', sans-serif;
  letter-spacing: 4%;
}

.o2 {
  font: 700 12px/16px 'Poppins', sans-serif;
  letter-spacing: 4%;
}

.l1 {
  font: 600 16px/24px 'Poppins', sans-serif;
  letter-spacing: 2%;
}

.l2 {
  font: 600 14px/24px 'Poppins', sans-serif;
  letter-spacing: 2%;
}

.l3 {
  font: 600 12px/16px 'Poppins', sans-serif;
  letter-spacing: 2%;
}


`;

export default GlobalStyles;
