import React from "react";
import {
  Avatar,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea
} from "@mui/material";
import { green, grey } from "@mui/material/colors";

const CurrencyCard = ({ currency }) => {
  const countries = currency.countries ? currency.countries.join(", ") : "N/A";
  const subunits = currency.subunits ? currency.subunits.join(", ") : "N/A";

  return (
    <Card sx={{ maxWidth: 345, bgcolor: grey[300] }}>
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
            <b>{currency.name}</b>
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
            {/* <strong>Countries:</strong> {currency.countries.join(", ")} */}
            <strong>Countries:</strong> {countries}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* <strong>Subunits:</strong> {currency.subunits.join(", ")} */}
            <strong>Subunits:</strong> {subunits}
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
