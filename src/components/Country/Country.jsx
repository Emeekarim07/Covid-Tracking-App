import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@mui/material";
import styles from "./Country.module.css";
import axios from "axios";
import Cards from "../Cards/Cards";

export const Country = () => {
  const url = "https://restcountries.com/v3.1/all";
  const [countryName, setCountryName] = useState([]);
  const [selected, setSelected] = useState("");
  console.log(selected);
  function changeSelect(e) {
    setSelected(e.target.value);
  }

  async function getCountries() {
    try {
      let response = await axios.get(url);
      setCountryName(response.data.map((value) => value.name.common));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <FormControl className={styles.formControl}>
        <NativeSelect onChange={changeSelect}>
          <option>Global</option>
          {countryName.map((value) => {
            return <option key={value}>{value}</option>;
          })}
        </NativeSelect>
      </FormControl>
      <Cards selected={selected.toLowerCase()} />
    </>
  );
};
