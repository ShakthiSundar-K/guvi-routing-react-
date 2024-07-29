import React from "react";
import FsdCards from "../components/FsdCards";

function Cloud() {
  const data = [
    {
      title:
        "Best 15 Product-based Companies for IoT Solutions Architects in India",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Product-based-Companies-for-IoT-Solutions-Architects-in-India-01.jpg",
    },
    {
      title: "Amazon Web Services (AWS) – Beginners’ Guide",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/315_181.png",
    },
    {
      title: "Effective Cloud Computing Career Roadmap 2024",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Feature-image-Effective-Cloud-Computing-Career-Roadmap.webp",
    },

    {
      title:
        "Best 15 Product-based Companies for IoT Solutions Architects in India",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Product-based-Companies-for-IoT-Solutions-Architects-in-India-01.jpg",
    },
    {
      title: "Amazon Web Services (AWS) – Beginners’ Guide",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/06/315_181.png",
    },
    {
      title: "Effective Cloud Computing Career Roadmap 2024",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Feature-image-Effective-Cloud-Computing-Career-Roadmap.webp",
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
