import React, { createContext } from "react";
import one from "../img/1.jpg";
import seven from "../img/7.jpg";
import three from "../img/3.jpg";
import four from "../img/4.jpg";
import five from "../img/5.jpg";

export const BioContext = createContext();

function BioContextProvider({ children }) {
  const bio = [
    {
      id: 1,
      name: "Moses Gameli",
      img: five,
      initials: "MG",
      email: "moses.gameli@vodafone.com",
      languages: ["Python", "Dart", "JavaScript", "Java"],
      interests: [
        "Artificial Intelligence",
        "Data Science",
        "Mobile Software",
        "Machine Learning",
      ],
    },
    {
      id: 2,
      name: "Kelvin Ashong",
      img: seven,
      initials: "KA",
      email: "kelvin.ashong@vodafone.com",
      languages: ["JavaScript"],
      interests: [
        "Artificial Intelligence",
        "Data Science",
        "Machine Learning",
      ],
    },
    {
      id: 3,
      name: "Regine Bambara",
      img: three,
      initials: "RB",
      email: "regine.bambara@vodafone.com",
      languages: ["JavaScript", "Python", "PHP"],
      interests: ["Data Mining", "Network Engineering", "Linux Administration"],
    },
    {
      id: 4,
      name: "Arnold Kofi Akpadji",
      img: four,
      initials: "AK",
      email: "arnold.akpadji@vodafone.com",
      languages: ["Python", "PHP", "SQL", "JavaScript"],
      interests: ["Artificial Intelligence", "Machine Learning"],
    },
    {
      id: 5,
      name: "Eunice Adorkor",
      img: one,
      initials: "EA",
      email: "eunice.adorkor@vodafone.com",
      languages: ["JavaScript", "PHP", "Java", "MySQL"],
      interests: ["Web Development", "ui/ux design"],
    },
  ];
  return <BioContext.Provider value={{ bio }}>{children}</BioContext.Provider>;
}

export default BioContextProvider;
