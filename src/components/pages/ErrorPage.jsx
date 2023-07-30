import { Grid, Link, Typography } from "@mui/material";
import notFoundImg from "../../assets/image404.png";
import CustomButton from "../UI/CustomButton";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
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
        <CustomButton
          label="Go home"
          icon={HomeIcon}
          onClick={() => clickHandler()}
        />
      </Grid>
    </Grid>
  );
};
export default ErrorPage;
