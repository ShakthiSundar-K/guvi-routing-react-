import React from "react";
import FsdCards from "../components/FsdCards";

function Cloud() {
  const data = [
    {
      title: "Amazon Web Services (AWS) – Beginners’ Guide",
      text: "By Meghana D",
      img: "/cloud1.jpg",
    },
    {
      title: "Effective Cloud Computing Career Roadmap 2024",
      text: "By Isha Sharma",
      img: "/cloud2.webp",
    },

    {
      title:
        "Best 15 Product-based Companies for IoT Solutions Architects in India",
      text: "By Lukesh S",
      img: "/cloud3.webp",
    },

    {
      title: "Amazon Web Services (AWS) – Beginners’ Guide",
      text: "By Meghana D",
      img: "/cloud1.jpg",
    },
    {
      title: "Effective Cloud Computing Career Roadmap 2024",
      text: "By Isha Sharma",
      img: "/cloud2.webp",
    },

    {
      title:
        "Best 15 Product-based Companies for IoT Solutions Architects in India",
      text: "By Lukesh S",
      img: "/cloud3.webp",
    },
  ];
  return (
    <>
      <h2 className='mt-5 mb-4 ms-2 '>CLOUD COMPUTING ARTICLES</h2>
      <br />
      <FsdCards data={data} />
    </>
  );
}

export default Cloud;
