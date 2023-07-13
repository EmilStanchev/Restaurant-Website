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
      <Grid item xs={12} md={6}>
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
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: 2,
          gap: 4,
        }}
      >
        <Link
          href="/"
          sx={{
            fontSize: 42,
            textDecoration: "none",
            backgroundColor: "#F2952D",
            padding: "15px 62px 15px 60px",
            borderRadius: 3,
            fontFamily: '"Open Sans", sans-serif',
            color: "white",
            "&:hover": { backgroundColor: "#111111", color: "white" },
          }}
        >
          Go home
        </Link>

        <Link
          href="/contacts"
          sx={{
            fontSize: 42,
            textDecoration: "none",
            padding: "15px 62px 15px 60px",
            border: "1px solid orange",
            borderRadius: 5,
          }}
        >
          Contact
        </Link>
      </Grid>
    </Grid>
  );
};
export default ErrorPage;
