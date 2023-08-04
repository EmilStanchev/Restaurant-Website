import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

const InformationTable = ({ openHours }) => {
  return (
    <Grid item sx={{ backgroundColor: "#c9a272" }}>
      <Typography variant="h3">Opening Time</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {openHours?.map((openHour) => (
              <TableRow key={openHour.day}>
                <TableCell sx={{ borderBottom: "none" }}>
                  {openHour.day}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  {openHour.hours}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
export default InformationTable;
