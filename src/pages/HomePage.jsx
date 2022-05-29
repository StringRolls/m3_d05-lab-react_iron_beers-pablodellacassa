import React from 'react';
import { Link } from "react-router-dom";
import imgAllBeers from "../assets/beers.png";
import imgRandomBeers from "../assets/random-beer.png";
import imgNewBeer from "../assets/new-beer.png";

export default function HomePage() {
  return (
    <div>
      <Link to="/beers">
        <img src={imgAllBeers} alt="beers" />
      </Link>
      <h1>All Beers</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis
        eleifend aliquet. Maecenas dignissim malesuada velit, nec dictum quam
        porta id. Sed dictum venenatis congue.
      </p>
      <Link to="/random-beer">
        <img src={imgRandomBeers} alt="random-beer" />
      </Link>
      <h1>Random Beer</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis
        eleifend aliquet. Maecenas dignissim malesuada velit, nec dictum quam
        porta id. Sed dictum venenatis congue.
      </p>
      <Link to="/new-beer">
        <img src={imgNewBeer} alt="new-beer" />
      </Link>
      <h1>New Beer</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis
        eleifend aliquet. Maecenas dignissim malesuada velit, nec dictum quam
        porta id. Sed dictum venenatis congue.
      </p>
    </div>
  );
}
