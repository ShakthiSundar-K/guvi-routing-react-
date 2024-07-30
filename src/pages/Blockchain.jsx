import React from "react";
import FsdCards from "../components/FsdCards";

function Blockchain() {
  const data = [
    {
      title:
        "Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech",
      text: "By Lukesh S",
      img: "/block1.webp",
    },
    {
      title: "A Guide To Learning Blockchain Technology From Scratch",
      text: "By Meghana D",
      img: "/block2.webp",
    },
    {
      title:
        "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      text: "By Isha Sharma",
      img: "/block3.jpeg",
    },
    {
      title:
        "Non-Coding Jobs in Blockchain: Exploring Opportunities Beyond Tech",
      text: "By Lukesh S",
      img: "/block1.webp",
    },
    {
      title: "A Guide To Learning Blockchain Technology From Scratch",
      text: "By Meghana D",
      img: "/block2.webp",
    },
    {
      title:
        "Blockchain Developer Resume Guide: 11 Hot Tips to Make It Professional",
      text: "By Isha Sharma",
      img: "/block3.jpeg",
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
