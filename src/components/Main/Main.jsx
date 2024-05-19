import { IMG_URL } from "../../assets/domain/apiClient";
import { dataFetcher } from "../../assets/domain/apiClient";
import { useEffect, useState } from "react";
import "../../styles/Main.css";

export const Main = () => {
  const [pop, setPop] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  // const num = Math.floor(Math.random() * 20);

  useEffect(() => {
    const popularImg = async () => {
      const data = await dataFetcher("tv/popular?");
      setPop(data?.results?.[currentIndex % 20]?.backdrop_path);
    };
    popularImg();

    const interval = setInterval(() => {
      setCurrentIndex(((prev) => prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="scrolling-container">
    <div className="scrolling-content"
      style={{
        backgroundImage: `url(${IMG_URL}${pop})`,
        // width: "100vw",
        // height: "100vh",
        // backgroundSize: "cover",
      }}
      ></div>
      </div>
  );
};
