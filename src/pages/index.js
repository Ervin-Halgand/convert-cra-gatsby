import '../style/App.css';
import '../style/Home.css';
import React from "react";
import { Link } from "gatsby"
import { Seo } from '../components/Seo/Seo'

const IndexPage = () => {
  return (
    <main className="app">
      <Seo slug="/" />
      <section className="home">
        <Link to="/imc">
          <h2 className="home__link">imc</h2>
        </Link>
        <Link to="/metabolisme">
          <h2 className="home__link">Metabolisme</h2>
        </Link>
        <Link to="/ffmi">
          <h2 className="home__link">ffmi</h2>
        </Link>
      </section>
    </main>
  )
}

export default IndexPage