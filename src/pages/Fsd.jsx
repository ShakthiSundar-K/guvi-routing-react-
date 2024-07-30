import React from "react";
import FsdCards from "../components/FsdCards";

function Fsd() {
  const data = [
    {
      title: "Best Full-Stack Development Project Ideas in 2024",
      text: "By Tushar Vinocha",
      img: "/mern.jpg",
    },
    {
      title: "How Long Would It Take to Be a Full Stack Developer?",
      text: "By Meghana D",
      img: "/mern-2.jpg",
    },
    {
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      text: "By Isha Sharma",
      img: "/react-945x495.jpg",
    },
    {
      title: "Best Full-Stack Development Project Ideas in 2024",
      text: "By Tushar Vinocha",
      img: "/mern.jpg",
    },
    {
      title: "How Long Would It Take to Be a Full Stack Developer?",
      text: "By Meghana D",
      img: "/mern-2.jpg",
    },
    {
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      text: "By Isha Sharma",
      img: "/react-945x495.jpg",
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
