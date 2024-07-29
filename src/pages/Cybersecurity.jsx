import React from "react";
import FsdCards from "../components/FsdCards";

function Cybersecurity() {
  const data = [
    {
      title:
        "What is Cybersecurity? Importance & the growing challenges in 2023!",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    },
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    },
    {
      title:
        "What is Cybersecurity? Importance & the growing challenges in 2023!",
      text: "By Lukesh S",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      text: "By Meghana D",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png",
    },
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      text: "By Isha Sharma",
      img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png",
    },
  ];
  return (
    <>
      <h2 className='mt-5 mb-4 ms-2 '>CYBER SECURITY ARTICLES</h2>
      <br />
      <FsdCards data={data} />
    </>
  );
}

export default Cybersecurity;
