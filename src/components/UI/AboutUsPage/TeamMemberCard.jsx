import { Avatar, Grid, Paper, Typography } from "@mui/material";

const TeamMemberCard = ({ name, position, image }) => {
  return (
    <Grid
      item
      xs={12}
      sm={10}
      md={6}
      sx={{
        padding: 3,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Paper elevation={3} sx={{ padding: "1rem", textAlign: "center" }}>
        <Avatar
          variant="rounded"
          sx={{
            width: 300,
            height: 300,
            minWidth: 150,
            minHeight: 150,
            margin: "0 auto 1rem",
            textAlign: "center",
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            color: "transparent",
          }}
        >
          N
        </Avatar>
        <Typography variant="h4" sx={{ marginBottom: "0.5rem" }}>
          {name}
        </Typography>
        <Typography variant="h5">{position}</Typography>
      </Paper>
    </Grid>
  );
};
export default TeamMemberCard;
