import React from "react";
import { useSelector } from "react-redux";

const Search = ({ filteredResList, setFilteredResList, resList }) => {
  const isDark = useSelector((store) => store.user.isDarkMode);

  const handleSearch = (term) => {
    if (term === "") {
      setFilteredResList(resList);
    } else {
      const filtered = resList.filter(
        (res) =>
          res.info.name.toLowerCase().includes(term.toLowerCase()) ||
          res.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(term.toLowerCase())
          )
      );
      filtered.sort((a,b)=> ((b.info?.avgRating || 0)-(a.info?.avgRating ||0)));
      setFilteredResList(filtered);
    }
  };

  const getCostValue = (costForTwo) => {
      if (!costForTwo) return 0;
      return Number(costForTwo.replace(/[^0-9]/g, ""));
  };

  const handleSort = (e) => {
    const value = e.target.value;
    let sortedList = [...filteredResList];

    switch (value) {
      case "rating-asc":
        sortedList.sort(
          (a, b) => (a.info.avgRating || 0) - (b.info.avgRating || 0)
        );
        break;

      case "rating-desc":
        sortedList.sort(
          (a, b) => (b.info.avgRating || 0) - (a.info.avgRating || 0)
        );
        break;

      case "price-asc":
        sortedList.sort(
      (a, b) =>
      getCostValue(a.info.costForTwo) -
      getCostValue(b.info.costForTwo)
      );
      break;

      case "price-desc":
        sortedList.sort(
      (a, b) =>
      getCostValue(b.info.costForTwo) -
      getCostValue(a.info.costForTwo)
      );
      break;

      case "delivery-asc":
        sortedList.sort(
          (a, b) =>
            (a.info?.sla?.deliveryTime || 0) -
            (b.info?.sla?.deliveryTime || 0)
        );
        break;

      case "delivery-desc":
        sortedList.sort(
          (a, b) =>
            (b.info?.sla?.deliveryTime || 0) -
            (a.info?.sla?.deliveryTime || 0)
        );
        break;

      default:
        sortedList.sort((a,b)=> ((b.info?.avgRating || 0)-(a.info?.avgRating ||0)));
    }
    setFilteredResList(sortedList);
  };

  return (
  <div className={`flex justify-center gap-4 p-4 ${isDark ? "bg-gray-900" : "bg-white"}`}>

<input
      type="text"
      placeholder="Search for restaurants or cuisines..."
      className={`h-10 w-80 px-3 border rounded-md
        ${isDark ? "bg-gray-800 text-white border-gray-700" : "bg-white text-black border-gray-300"}
      `}
      onChange={(e) => handleSearch(e.target.value)}
    />
    <div className="relative">
  <select
    onChange={handleSort}
    className={`appearance-none p-2 pr-12 rounded-md border cursor-pointer
      ${isDark
        ? "bg-gray-800 text-white border-gray-700"
        : "bg-white text-black border-gray-300"}
    `}
  >
    <option value="rating-desc">Rating : High → Low</option>
    <option value="rating-asc">Rating : Low → High</option>
    <option value="price-asc">Price : Low → High</option>
    <option value="price-desc">Price : High → Low</option>
    <option value="delivery-asc">Delivery : Low → High</option>
    <option value="delivery-desc">Delivery : High → Low</option>
  </select>

  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
    ▼
  </span>
  </div>
  </div>
);
};
export default Search;
