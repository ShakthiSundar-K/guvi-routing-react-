import React from "react";
import FsdCards from "../components/FsdCards";

function Blockchain() {
  const data = [
    {
      title:
        "Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
    },
    {
      title: "A Guide To Learning Blockchain Technology From Scratch",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2020/11/word-image-1-1.jpeg",
    },
    {
      title:
        "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp",
    },
    {
      title:
        "Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Blockchain.webp",
    },
    {
      title: "A Guide To Learning Blockchain Technology From Scratch",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2020/11/word-image-1-1.jpeg",
    },
    {
      title:
        "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/FEATURE-IMAGE-1-2-2048x1072.webp",
    },
  ];
  return (
    <>
      <h2 className='mt-5 mb-4 ms-2 '>BLOCKCHAIN ARTICLES</h2>
      <br />
      <FsdCards data={data} />
    </>
  );
}

export default Blockchain;
