import { IMG_URL } from "../../assets/domain/apiClient";
import { dataFetcher } from "../../assets/domain/apiClient";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilterBy } from "./FilterBy";

export const Main = () => {
  const [gallery, setGallery] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const allResults = [];
    const fetchPopular = async () => {
      try {
        for (let i = 1; i <= 20; i++) {
          const data = await dataFetcher(`tv/popular?page=${i}&`);
          allResults.push(...data.results);
        }
        const uniqueResults = Array.from(
          new Set(allResults.map((a) => a.id))
        ).map((id) => allResults.find((a) => a.id === id));

        setGallery(uniqueResults);
        setAllData(uniqueResults);
      } catch (error) {
        console.error("Failed to fetch popular TV shows:", error);
      }
    };

    fetchPopular();
  }, []);

  const handleSubmitOnClick = () => {
    if (filterList.length > 0) {
      const filteredData = allData.filter(
        (tv) =>
          tv.genre_ids.some((genreId) => filterList.includes(genreId)) &&
          filterList.every((item) => tv.genre_ids.includes(item))
      );

      setGallery(filteredData);
    } else {
      setGallery(allData);
    }

    //  actors filter
    // languages filter
  };

  return (
    <div className="main">
      <FilterBy
        filterList={filterList}
        setFilterList={setFilterList}
        onSubmit={handleSubmitOnClick}
      />
      <div className="main_container">
        {gallery?.map((tv) => (
          <Link to={`/filter/${tv.id}`} key={tv.id} className="main_card">
            <img src={`${IMG_URL}${tv.poster_path}`} alt={tv.name} />
            <h4>{tv.name}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
};
