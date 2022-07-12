import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import Divider from "@mui/material/Divider";

const Filter = ({ data, setFilteredData }) => {
  const [searchInput, setSearchInput] = useState("");
  const [priceInput, setPriceInput] = useState(0);
  const [typeInput, setTypeInput] = useState(0);
  const [dateInput, setDateInput] = useState(null);

  const applyFilters = () => {
    let updatedData = data;

    if (searchInput !== "") {
      updatedData = updatedData.filter((item) => {
        return item.city.includes(searchInput.toLowerCase());
      });
    }

    if (priceInput !== "0") {
      if (priceInput === "10") {
        updatedData = updatedData.filter((item) => {
          return item.price <= 25000;
        });
      } else if (priceInput === "20") {
        updatedData = updatedData.filter((item) => {
          return item.price > 25000 && item.price <= 75000;
        });
      } else if (priceInput === "30") {
        updatedData = updatedData.filter((item) => {
          return item.price > 75000;
        });
      }
    }

    if (typeInput !== "0") {
      if (typeInput === "10") {
        updatedData = updatedData.filter((item) =>
          item.property_type.includes("apartment")
        );
      } else if (typeInput === "20") {
        updatedData = updatedData.filter((item) =>
          item.property_type.includes("villa")
        );
      }
    }

    if (dateInput) {
      updatedData = updatedData.filter(
        (d) => new Date(d.available_from) <= new Date(dateInput)
      );
    }

    setFilteredData(updatedData);
  };

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput, priceInput, typeInput, dateInput]);

  return (
    <div className="filter">
      <div className="filter-option">
        <TextField
          sx={{ width: 90 + "%", marginTop: 1 }}
          label="City"
          id="standard-size-small"
          defaultValue="Any"
          size="small"
          variant="standard"
          InputProps={{ disableUnderline: true, style: { fontWeight: 600 } }}
          InputLabelProps={{ style: { fontWeight: 600 } }}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <Divider variant="middle" orientation="vertical" flexItem />
      <div className="filter-option">
        <TextField
          sx={{ width: 90 + "%", marginTop: 1 }}
          id="date"
          label="When"
          type="date"
          variant="standard"
          defaultValue="0000-00-00"
          onChange={(e) => setDateInput(e.target.value)}
          InputLabelProps={{
            shrink: true,
            style: { fontWeight: 600 },
          }}
          InputProps={{ disableUnderline: true, style: { fontWeight: 600 } }}
        />
      </div>
      <Divider variant="middle" orientation="vertical" flexItem />
      <div className="filter-option">
        <div className="filter-wrap">
          <InputLabel
            sx={{ fontWeight: 600, fontSize: 0.7 + "rem" }}
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Price
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
              style: { fontWeight: 600 },
            }}
            onChange={(e) => setPriceInput(e.target.value)}
            disableUnderline
          >
            <option value={0}>All</option>
            <option value={10}>Below ₹25,000</option>
            <option value={20}>₹25,000 - ₹75,000</option>
            <option value={30}>More than ₹75,000</option>
          </NativeSelect>
        </div>
      </div>
      <Divider variant="middle" orientation="vertical" flexItem />
      <div className="filter-option">
        <div className="filter-wrap">
          <InputLabel
            sx={{ fontWeight: 600, fontSize: 0.7 + "rem" }}
            variant="standard"
            htmlFor="uncontrolled-native"
          >
            Property Type
          </InputLabel>
          <NativeSelect
            defaultValue={0}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
              style: { fontWeight: 600 },
            }}
            disableUnderline
            onChange={(e) => {
              setTypeInput(e.target.value);
            }}
          >
            <option value={0}>House</option>
            <option value={10}>Apartment</option>
            <option value={20}>Villa</option>
          </NativeSelect>
        </div>
      </div>
      <Divider variant="middle" orientation="vertical" flexItem />
      <div className="filter-option bt">
        <Button
          type="submit"
          size="small"
          sx={{
            textTransform: "none",
            backgroundColor: "#764AF1",
            borderRadius: 2,
            width: 80 + "%",
            height: 50 + "px",
            ml: 2,
          }}
          variant="contained"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Filter;
