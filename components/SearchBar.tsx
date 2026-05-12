import { update } from "@/app/slice/querySlice";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(update(searchValue));
    }, 300);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        marginBottom: "10px",
        marginLeft: "15px",
      }}
    >
      <TextField
        id={`input`}
        label={"Search Stories"}
        variant="standard"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
    </Box>
  );
}
