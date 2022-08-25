import { memo } from "react";

import Grid from "@mui/material/Grid";
import Card from "./Card";

function CardsList() {
  let data = [
    {
      title: "Лиги",
      id: 1
    },
    {
      title: "Команды",
      id: 2
    }
  ];

  return (
    <Grid container>
      {data.map(card =>
        <Grid key={card.id} item xs={3}>
          <Card title={card.title} />
        </Grid>
      )}
    </Grid>
  );
}

export default memo(CardsList);
