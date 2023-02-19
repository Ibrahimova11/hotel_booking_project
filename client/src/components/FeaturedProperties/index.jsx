import useFetch from "../../hooks/useFetch";
import "./style.css";

const Index = () => {

  const { data, loading, error } = useFetch("http://localhost:8080/api/hotels?featured=true&min=50&max=200");
  return (
    <div className="featuredProperties">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="featuredPropertiesItem" key={item._id}>
              <img
                src={item.photos[0]}
                alt=""
                className="featuredPropertiesImg"
              />
              <span className="featuredPropertiesName">{item.name}</span>
              <span className="featuredPropertiesCity">{item.city}</span>
              <span className="featuredPropertiesPrice">Starting from ${item.cheapestPrice}</span>
              {item.rating && <div className="featuredPropertiesRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Index