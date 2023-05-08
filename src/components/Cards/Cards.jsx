import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Cards.module.css";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import cx from "classnames";
import Chart from '../Chart/Chart'

const Cards = ({ selected }) => {
  let url;
 
  const [data, setData] = useState([]);
  console.log(data);

  const fetchData = async () => {
    try {
      let resp;
      if (selected) {
        resp = await axios.get("https://covid-19.dataflowkit.com/v1/" + selected + "");

      }else{
        resp = await axios.get("https://covid-19.dataflowkit.com/v1/all")
    
      }

      const modifiedData = {
        active: resp.data["Total Cases_text"],
        deaths: resp.data["Total Deaths_text"],
        recovered: resp.data["Total Recovered_text"],
        date: resp.data["Last Update"],
        lastestActive:resp.data["Active Cases_text"],
        lastestCases:resp.data["New Cases_text"],
        lastestDeaths:resp.data["New Deaths_text"],
      };
      
      
      setData(modifiedData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [selected]);

  if (!data || !data.active) {
    return <p>...Loading</p>;
  }

  return (
    <>
    <div className={styles.container}>
      <Grid container spacing={1} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={10}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              {" "}
              {data.active} <br />
              Active Cases
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">Number of Active cases</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={10}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              {data.recovered} <br />
              Recovered Cases
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">Number of Recovered cases</Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container spacing={1} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={10}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Death
            </Typography>
            <Typography variant="h5">
              {" "}
              {data.deaths} <br /> Deaths <br /> Cases
            </Typography>
            <Typography color="textSecondary">
              {new Date().toDateString()}
            </Typography>
            <Typography variant="body2">Number of Death cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
    <Chart data={data}/>
    </>
  );
}

export default Cards;
