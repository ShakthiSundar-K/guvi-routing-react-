import React from "react";
import FsdCards from "../components/FsdCards";

function Fsd() {
  const data = [
    {
      title: "Best Full-Stack Development Project Ideas in 2024",
      text: "By Tushar Vinocha",
      img: "https://cors-anywhere.herokuapp.com/https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },
    {
      title: "How Long Would It Take to Be a Full Stack Developer?",
      text: "By Meghana D",
      img: "https://cors-anywhere.herokuapp.com/https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    },
    {
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      text: "By Isha Sharma",
      img: "https://cors-anywhere.herokuapp.com/https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
    },
    {
      title: "Best Full-Stack Development Project Ideas in 2024",
      text: "By Tushar Vinocha",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    },
    {
      title: "How Long Would It Take to Be a Full Stack Developer?",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp",
    },
    {
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
    },
  ];
  return (
    <>
      <h2 className='mt-5 mb-4 ms-2 '>MERN FSD ARTICLES</h2>
      <br />
      <FsdCards data={data} />
    </>
  );
}

export default Fsd;
