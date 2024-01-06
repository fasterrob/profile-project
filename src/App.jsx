import React, { useCallback, useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import { Box, Typography } from "@mui/material";

function Home() {
  const [count, setCount] = useState(90);
  const [counts, setCount100] = useState(0);

  const myCount = useMemo(() => {
    return count;
  }, [count]);

  const resetCount = useCallback(() => {
    setCount(90);
    console.log(1);
  }, [counts]);

  useEffect(() => {
    if (count > 100) {
      setCount100(counts + 1);
      console.log(counts);
    }
  }, [count]);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          padding: { lg: `2rem`, xs: "1rem" },
        }}
      >
        <Typography>Hello</Typography>
      </Box>
    </>
  );
}

export default Home;
