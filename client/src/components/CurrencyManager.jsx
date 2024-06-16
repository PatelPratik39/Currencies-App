// import React, { useState } from "react";
// import {
//   Grid,
//   Typography,
//   CardActionArea,
//   Container,
//   TextField,
//   Button,
//   MenuItem,
//   Select,
//   FormControl,
//   InputLabel
// } from "@mui/material";
// import {
//   getAllCurrency,
//   getSingleCurrency,
//   getLimitedCurrencies,
//   searchCurrencies,
//   sortCurrencies
// } from "../API/api.js";
// import CurrencyCard from "./CurrencyCard";

// const CurrencyManager = () => {
//   const [currencies, setCurrencies] = useState([]);
//   const [error, setError] = useState(null);
//   const [query, setQuery] = useState("");
//   const [limit, setLimit] = useState("");
//   const [sortField, setSortField] = useState("");
//   const [sortOrder, setSortOrder] = useState("");

//   // GetAll Currency
//   const handleGetAllCurrency = async () => {
//     try {
//       const fetchAllCurrency = await getAllCurrency();
//       setCurrencies(fetchAllCurrency);
//     } catch (error) {
//       setError("Failed to fetch all currencies.");
//     }
//   };

//   // get Single Currency

//   const handleGetSingle = async (id) => {
//     try {
//       const singleCurrencyData = await getSingleCurrency(id);
//       setCurrencies([singleCurrencyData]);
//     } catch (error) {
//       setError(`Failed to fetch currency with ID ${id}.`);
//     }
//   };

//   // filter the limit of currency
//   const handleGetLimited = async () => {
//     try {
//       const data = await getLimitedCurrencies(limit);
//       setCurrencies(data);
//     } catch (error) {
//       setError(`Failed to fetch ${limit} currencies.`);
//     }
//   };

//   const handleSearch = async () => {
//     try {
//       const data = await searchCurrencies(query);
//       setCurrencies(data);
//     } catch (error) {
//       setError(`Failed to search currencies with query "${query}".`);
//     }
//   };

//   const handleSort = async () => {
//     try {
//       const data = await sortCurrencies(sortField, sortOrder);
//       setCurrencies(data);
//     } catch (error) {
//       setError(
//         `Failed to sort currencies by ${sortField} in ${sortOrder} order.`
//       );
//     }
//   };

//   return (
//     <>
//       <Container>
//         <h1 style={{ textAlign: "center" }}> Currency Finder</h1>
//         {error && <div>{error}</div>}
//         <Grid>
//           <Button
//             variant="contained"
//             onClick={handleGetAllCurrency}
//             sx={{ margin: 1 }}
//           >
//             Currencies
//           </Button>
//         </Grid>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item>
//             <TextField
//               label="Currency ID"
//               variant="outlined"
//               onChange={(e) => handleGetSingle(e.target.value)}
//               sx={{ margin: 1 }}
//             />
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Limit"
//               variant="outlined"
//               value={limit}
//               onChange={(e) => setLimit(e.target.value)}
//               sx={{ margin: 1 }}
//             />
//             <Button
//               variant="contained"
//               onClick={handleGetLimited}
//               sx={{ margin: 1 }}
//             >
//               Limited Currencies
//             </Button>
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Search Query"
//               variant="outlined"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               sx={{ margin: 1 }}
//             />
//             <Button
//               variant="contained"
//               onClick={handleSearch}
//               sx={{ margin: 1 }}
//             >
//               Search
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid container spacing={2} alignItems="center">
//           <Grid item>
//             <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
//               <InputLabel>Sort Field</InputLabel>
//               <Select
//                 value={sortField}
//                 onChange={(e) => setSortField(e.target.value)}
//                 label="Sort Field"
//               >
//                 <MenuItem value="name">Name</MenuItem>
//                 <MenuItem value="code">Code</MenuItem>
//                 <MenuItem value="exchange_rate">Exchange Rate</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item>
//             <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
//               <InputLabel>Sort Order</InputLabel>
//               <Select
//                 value={sortOrder}
//                 onChange={(e) => setSortOrder(e.target.value)}
//                 label="Sort Order"
//               >
//                 <MenuItem value="asc">Ascending</MenuItem>
//                 <MenuItem value="dec">Descending</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item>
//             <Button variant="contained" onClick={handleSort} sx={{ margin: 1 }}>
//               Sort Currencies
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid container spacing={3}>
//           {currencies.map((currency) => (
//             <Grid item key={currency.id} xs={12} sm={6} md={4}>
//               <CurrencyCard currency={currency} />
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </>
//   );
// };

// export default CurrencyManager;

import React, { useState } from "react";
import {
  getAllCurrencies,
  getSingleCurrency,
  getLimitedCurrencies,
  searchCurrencies,
  sortCurrencies
} from "../API/api.js";
import CurrencyCard from "./CurrencyCard.jsx";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const CurrencyManager = () => {
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState("");
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const handleGetAll = async () => {
    try {
      const data = await getAllCurrencies();
      setCurrencies(data);
    } catch (error) {
      setError("Failed to fetch all currencies.");
    }
  };
  const handleGetSingle = async (id) => {
    try {
      const data = await getSingleCurrency(id);
      setCurrencies([data]);
    } catch (error) {
      setError(`Failed to fetch currency with ID ${id}.`);
    }
  };

  const handleGetLimited = async () => {
    try {
      const data = await getLimitedCurrencies(limit);
      setCurrencies(data);
    } catch (error) {
      setError(`Failed to fetch ${limit} currencies.`);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await searchCurrencies(query);
      setCurrencies(data);
    } catch (error) {
      setError(`Failed to search currencies with query "${query}".`);
    }
  };

  const handleSort = async () => {
    try {
      const data = await sortCurrencies(sortField, sortOrder);
      setCurrencies(data);
    } catch (error) {
      setError(
        `Failed to sort currencies by ${sortField} in ${sortOrder} order.`
      );
    }
  };

  return (
    <Container>
      <h1>Currency Manager</h1>
      {error && <div>{error}</div>}
      <div>
        <Button variant="contained" onClick={handleGetAll} sx={{ margin: 1 }}>
          Get All Currencies
        </Button>
      </div>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <TextField
            label="Currency ID"
            variant="outlined"
            onChange={(e) => handleGetSingle(e.target.value)}
            sx={{ margin: 1 }}
          />
        </Grid>
        <Grid item>
          <TextField
            label="Limit"
            variant="outlined"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            sx={{ margin: 1 }}
          />
          <Button
            variant="contained"
            onClick={handleGetLimited}
            sx={{ margin: 1 }}
          >
            Get Limited Currencies
          </Button>
        </Grid>
        <Grid item>
          <TextField
            label="Search Query"
            variant="outlined"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            sx={{ margin: 1 }}
          />
          <Button variant="contained" onClick={handleSearch} sx={{ margin: 1 }}>
            Search Currencies
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
            <InputLabel>Sort Field</InputLabel>
            <Select
              value={sortField}
              onChange={(e) => setSortField(e.target.value)}
              label="Sort Field"
            >
              <MenuItem value="name">Name</MenuItem>
              <MenuItem value="code">Code</MenuItem>
              <MenuItem value="exchange_rate">Exchange Rate</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <FormControl variant="outlined" sx={{ minWidth: 120, margin: 1 }}>
            <InputLabel>Sort Order</InputLabel>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              label="Sort Order"
            >
              <MenuItem value="asc">Ascending</MenuItem>
              <MenuItem value="dec">Descending</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={handleSort} sx={{ margin: 1 }}>
            Sort Currencies
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {currencies.map((currency) => (
          <Grid item key={currency.id} xs={12} sm={6} md={4}>
            <CurrencyCard currency={currency} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CurrencyManager;
