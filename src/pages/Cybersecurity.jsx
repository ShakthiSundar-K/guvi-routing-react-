import React from "react";
import FsdCards from "../components/FsdCards";

function Cybersecurity() {
  const data = [
    {
      title:
        "What is Cybersecurity? Importance & the growing challenges in 2023!",
      text: "By Lukesh S",
      img: "/cybersecuity-.gif",
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      text: "By Meghana D",
      img: "8bfd01c18be1b5059bc0d7770d9dabf1.webp",
    },
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      text: "By Isha Sharma",
      img: "cyber-2.webp",
    },

    {
      title:
        "What is Cybersecurity? Importance & the growing challenges in 2023!",
      text: "By Lukesh S",
      img: "/cybersecuity-.gif",
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      text: "By Meghana D",
      img: "8bfd01c18be1b5059bc0d7770d9dabf1.webp",
    },
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      text: "By Isha Sharma",
      img: "cyber-2.webp",
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
