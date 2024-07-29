import React from "react";
import FsdCards from "../components/FsdCards";

function Datascience() {
  const data = [
    {
      title: "Roles and Responsibilities of a Data Scientist",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    },
    {
      title: "Can A Commerce Student Do Data Science?",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
    },
    {
      title: "AI vs ML vs Data Science: What Should You Learn In 2024?",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/02/2.-AI-vs-ML-vs-Data-Science_-2048x1072.png",
    },
    {
      title: "Roles and Responsibilities of a Data Scientist",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
    },
    {
      title: "Can A Commerce Student Do Data Science?",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
    },
    {
      title: "AI vs ML vs Data Science: What Should You Learn In 2024?",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/02/2.-AI-vs-ML-vs-Data-Science_-2048x1072.png",
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
