import { Grid } from "@mui/material";
import ReservateTable from "../UI/ReservationItems/ReservateTable";
import InformationTable from "../UI/ReservationItems/InformationTable";

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
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 5,
        flexWrap: "wrap",
      }}
    >
      <Grid item xs={10} md={4}>
        <ReservateTable />
      </Grid>
      <Grid item xs={10} md={4} sx={{ padding: 4, marginTop: 1 }}>
        <InformationTable openHours={openHours} />
      </Grid>
    </Grid>
  );
};
export default Reservation;
