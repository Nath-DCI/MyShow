import { useState, useEffect } from "react";

export const FilterButton = ({ name, id, onFilterListChange, style }) => {
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    onFilterListChange(id, selected);
  }, [selected]);

  return (
    <button
      className={selected ? "cta selected" : "cta"}
      onClick={handleOnClick}
      style={style}
    >
      <span>{name}</span>
    </button>
  );
};
