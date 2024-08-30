import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button"; // Import Material-UI Button

import { useState } from "react";

export default function CounterCard() {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
          <h2>{num}</h2>
        </CardContent>
        <CardActions>
          <Button onClick={inc} size="small" variant="contained" disabled={num >= 20}>Increment</Button>
          <Button onClick={dec} size="small" variant="outlined" disabled={num <= 0}>Decrement</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
