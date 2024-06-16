import React from "react";
import {
  Avatar,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea
} from "@mui/material";
import { green } from "@mui/material/colors";

const CurrencyCard = ({ currency }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ padding: 2 }}
        >
          <Avatar
            alt={currency.name}
            src={currency.name}
            sx={{ width: 56, height: 56, backgroundColor: green[500] }}
          />
        </Grid>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {currency.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Code:</strong> {currency.code}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Symbol:</strong> {currency.symbol}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Exchange Rate:</strong> {currency.exchange_rate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Countries:</strong> {currency.countries.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Subunits:</strong> {currency.subunits.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {currency.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CurrencyCard;

/*
{
        "id": 273,
        "name": "Zimbabwean Dollar",
        "code": "ZWL",
        "symbol": "Z$",
        "exchange_rate": 361.9,
        "countries": [
            "Zimbabwe"
        ],
        "subunits": [
            "cent"
        ],
        "description": "The Zimbabwean Dollar is the official currency of Zimbabwe.",
        "image": "https://fakeimg.pl/100x100/cccccc"
    },
*/
