import { Grid } from "@mui/material";
import ReservateTable from "../UI/ReservationItems/ReservateTable";
import InformationTable from "../UI/ReservationItems/InformationTable";

import bgImg from "../../assets/mood.png";
const openHours = [
  { day: "Sunday", hours: "8:00 am - 11:00 pm" },
  { day: "Monday", hours: "8:00 am - 11:00 pm" },
  { day: "Tuesday", hours: "8:00 am - 11:00 pm" },
  { day: "Wednesday", hours: "8:00 am - 11:00 pm" },
  { day: "Thursday", hours: "8:00 am - 11:00 pm" },
  { day: "Friday", hours: "8:00 am - 11:00 pm" },
  { day: "Satuday", hours: "closed" },
];
const Reservation = () => {
  return (
    <Grid
      id="containerr"
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        minHeight: "103vh",
        marginTop: -18.8,
      }}
    >
      <Grid item xs={10} md={6} lg={4} sx={{ marginTop: 20 }}>
        <ReservateTable />
      </Grid>
      <Grid item xs={10} md={6} lg={4} sx={{ marginTop: 20 }}>
        <InformationTable openHours={openHours} />
      </Grid>
    </Grid>
  );
};
export default Reservation;
