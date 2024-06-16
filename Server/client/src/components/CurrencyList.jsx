import React, { useEffect, useState } from "react";
// import CurrencyCard from "./CurrencyCard";
// import axios from "axios";
import GetAllCurrency from "../API/api";
import { Grid } from "@mui/material";
import CurrencyCard from "./CurrencyCard";

const CurrencyList = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetAllCurrency();
        setCurrencies(data);
      } catch (error) {
        setError("Failed to fetch currencies.");
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>
        <h1> Currency List </h1>
        <Grid container spacing={4}>
            {currencies.map((currency) => (
                <Grid item key={currency.id} xs={12} sm={6} md={4}>
                    <CurrencyCard currency={currency}/>
                </Grid>
            ))}
        </Grid>
      </div>
    </>
  );
};

export default CurrencyList;


