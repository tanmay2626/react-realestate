import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";
import Data from "../data/data.json";

const Home = (props) => {
  const data = Data["item"];
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="home">
      <h1>Search properties to rent</h1>
      <Filter data={data} setFilteredData={setFilteredData} />
      <div className="grid">
      {filteredData.length===0? <div><h1>Not Found</h1><p>Currently we are available in Pune and Mumbai</p></div> : 
        filteredData.map((results, index) => {
          return (
            <Item
              key={index}
              name={results.name}
              img={results.img}
              address={results.address}
              price={results.price}
              specs={results.specifications}
              city={results.city}
              availableFrom={results.available_from}
              type={results.property_type}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
