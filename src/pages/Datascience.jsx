import React from "react";
import FsdCards from "../components/FsdCards";

function Datascience() {
  const data = [
    {
      title: "Roles and Responsibilities of a Data Scientist",
      text: "By Lukesh S",
      img: "data-1.webp",
    },
    {
      title: "Can A Commerce Student Do Data Science?",
      text: "By Meghana D",
      img: "data-2.webp",
    },
    {
      title: "AI vs ML vs Data Science: What Should You Learn In 2024?",
      text: "By Isha Sharma",
      img: "data-3.webp",
    },

    {
      title: "Roles and Responsibilities of a Data Scientist",
      text: "By Lukesh S",
      img: "data-1.webp",
    },
    {
      title: "Can A Commerce Student Do Data Science?",
      text: "By Meghana D",
      img: "data-2.webp",
    },
    {
      title: "AI vs ML vs Data Science: What Should You Learn In 2024?",
      text: "By Isha Sharma",
      img: "data-3.webp",
    },
  ];
  return (
    <>
      <h2 className='mt-5 mb-4 ms-2 '>DATA SCIENCE ARTICLES</h2>
      <br />
      <FsdCards data={data} />
    </>
  );
}

export default Datascience;
