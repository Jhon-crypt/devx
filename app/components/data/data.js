
  import { ImProfile } from "react-icons/im";
  import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
  import { AiFillThunderbolt } from "react-icons/ai";
  
  import benefitOneImg from "../../../public/img/coder.svg";
  import benefitTwoImg from "../../../public/img/benefit-two.png";
  
  const benefitOne = {
    title: "Crafting Unique Developer Portfolios",
    desc: "Explore the powerful features that make DevX the perfect choice for developers looking to create personalized, impressive portfolios.",
    image: benefitOneImg,
    bullets: [
      {
        title: "Portfolio Builder",
        desc: "A user-friendly interface for designing and customizing portfolios with ease..",
        icon: <ImProfile />,
      },
      {
        title: "Project Showcases",
        desc: "Display your coding projects with detailed descriptions, images, and links.",
        icon: <BsFillFileEarmarkCodeFill />,
      },
      {
        title: "Skills Spotlight",
        desc: "Highlight your technical expertise and proficiency in various languages and tools.",
        icon: <AiFillThunderbolt />,
      },
    ],
  };

  
  
  export {benefitOne};
  