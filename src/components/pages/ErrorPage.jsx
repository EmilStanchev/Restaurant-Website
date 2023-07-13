import { Grid, Link, Typography } from "@mui/material";
import notFoundImg from "../../assets/image404.png";
const ErrorPage = () => {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <Typography variant="h1">Page not found</Typography>
        <Typography variant="h5">
          The requested URL was not found on this server
        </Typography>
        <Typography>
          <img
            src={notFoundImg}
            alt="not found"
            style={{ padding: 15, width: "75%" }}
          />
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        sx={{
          flexWrap: "wrap",
          marginTop: 2,
        }}
      >
        <Link
          href="/"
          fontSize={24}
          underline="none"
          color="secondary"
          sx={{ textAlign: "center", "&:hover": { color: "orange" } }}
        >
          Go home
        </Link>
      </Grid>
    </Grid>
  );
};
export default ErrorPage;
