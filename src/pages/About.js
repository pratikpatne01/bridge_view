import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography, imageListClasses } from "@mui/material";
import "../styles/HomeStyles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        {/* <Typography variant="h4">Welcome To Bridgeview Maritime</Typography> */}
        <section className="page-section bg-white text-black mb-0" id="about">
         
            
             
                <h2 className="page-section-heading text-center  text-black  ">ABOUT</h2>
                
               
                
                <div className="container">
                <div className="row">
                     
                    <div className="col-lg-5  ">
                        <div className="square-list ">
                            <p className="lead"> was established  bhgdukhcuhdjb in 2019, located in Navi MumbaiWe provide best human resource management servicesWe provide best human resource management servicesWe provide best human resource management servicesWe provide best human resource management servicesWe provide best human resource management services</p>
                            
                        </div>
                    </div>
                    <div className="   col-lg-5 ms-auto " >
                      <div className="about  ">
                    <img src={require("../images/bg1.jpeg")}  width="500px"alt="gh"/>                       
                    </div>
                    </div>
                </div>
               
                
            </div>
        </section>
       
      </Box>
    </Layout>
   
  );
};


export default About;
