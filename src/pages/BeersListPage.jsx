import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";

export default function BeersListPage() {
  const [beers, setBeers] = useState([]);
  const [searchBarData, setSearchBarData] = useState("");

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  function filterBeers(event) {
    const value = event.target.value;
    setSearchBarData(value);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${value}`)
      .then((response) => {
        response.data.length ? setBeers(response.data) : setBeers([]);
      });
  }

  return beers.length ? (
    <section>
      <section>
        <Header />
        <div className="search">
          <p>Search:</p>
          <input
            className="search-bar"
            value={searchBarData}
            type="search"
            name="search-bar"
            onChange={filterBeers}
          />
        </div>
      </section>
      <section className="beers">
        {beers.map((beer) => {
          return (
            <div className="beerinfo">
              <Link key={beer._id} to={`/beers/${beer._id}`}>
                <img className="beerimage" src={beer.image_url} alt="beerImg" />
              </Link>
              <div className="beertext">
                <h1>{beer.name}</h1>

                <h2>{beer.tagline}</h2>
                <p>
                  <b>Created by: </b>
                  {beer.contributed_by}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  ) : searchBarData.length ? (
    <section>
      <Header />
      <input
        className="search-bar"
        value={searchBarData}
        type="search"
        name="search-bar"
        onChange={filterBeers}
      />
      <img
        src="https://thumbs.dreamstime.com/b/sad-beer-cartoon-character-sad-beer-cartoon-character-vector-illustration-design-113397539.jpg"
        alt="loading-img"
        width={300}
      />
      <p>No beers found!</p>
    </section>
  ) : (
    <section>
      <Header />
      <input
        className="search-bar"
        value={searchBarData}
        type="search"
        name="search-bar"
        onChange={filterBeers}
      />
      <img
        src="https://c.tenor.com/tEBoZu1ISJ8AAAAC/spinning-loading.gif"
        alt="loading-img"
        width={300}
      />
      <p>Loading...</p>
    </section>
  );
}
