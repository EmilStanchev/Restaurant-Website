import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ThemeContext } from "../../../themes/Theme";
const InformationTable = ({ openHours }) => {
  const theme = useContext(ThemeContext);

  return (
    <Grid
      item
      sx={{
        backgroundColor: `${theme.isDark ? "#c9a272" : "#222222"}`,
        marginTop: 4,
        borderRadius: 7,
        display: "flex",
        justifyContent: "center",
        opacity: `${theme.isDark ? "1" : "0.8"}`,
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h3">Opening Time</Typography>
      <TableContainer>
        <Table>
          <TableBody>
            {openHours?.map((openHour) => (
              <TableRow key={openHour.day}>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography variant="body1">{openHour.day}</Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography variant="body1" sx={{ textAlign: "center" }}>
                    {openHour.hours}
                  </Typography>
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
