import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";
import FlexBetween from "./FlexBetween";

const DataGridCustomToolbar = ({
  isVisibile = false,
  searchInput,
  setSearchInput,
  setSearch,
}) => {
  return (
    <GridToolbarContainer>
      <FlexBetween width="100%">
        <FlexBetween>
          <GridToolbarColumnsButton />
          <GridToolbarDensitySelector />
          {!isVisibile && <GridToolbarExport />}
        </FlexBetween>
        {!isVisibile && (
          <TextField
            label="Search..."
            sx={{ mb: "0.5rem", width: "15rem" }}
            value={searchInput}
            variant="standard"
            onChange={(e) => setSearchInput(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setSearch(searchInput);
                      setSearchInput("");
                    }}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </FlexBetween>
    </GridToolbarContainer>
  );
};

export default DataGridCustomToolbar;
