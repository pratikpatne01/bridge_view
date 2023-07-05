import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/bg2.jpeg";
import "../styles/HomeStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Bridgeview ships & ports</h1>
      
          <Link to="/Shipmanagement" >
            <button>Ship Management</button>
          </Link>
          <Link to="/shipowning">
            <button>Ship Owning</button>
          </Link>
          <Link to="/Crewmanagement">
            <button>Crew Management</button>
          </Link>
          <Link to="/Shipchantering">
            <button>Ship Chartering</button>
          </Link>
        </div>
      </div>
      <div>

      </div>
      
      

    </Layout>
  );
};

export default Home;
