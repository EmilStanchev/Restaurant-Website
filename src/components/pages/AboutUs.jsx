import { Container, Grid, Typography } from "@mui/material";
import { Sections } from "../UI/AboutUsPage/Sections";
import TeamMemberCard from "../UI/AboutUsPage/TeamMemberCard";
import jane from "../../assets/femaleChief.png";
import john from "../../assets/maleChief.jfif";
import japaneseMaleChief from "../../assets/japaneseMaleChief.jfif";
import japaneseFemaleChief from "../../assets/japaneseFemaleChief.jfif";
import aboutUsImg from "../../assets/restorauntBg.png";
import NavBar from "../UI/AboutUsPage/NavBar";

const sections = [
  {
    title: "About Us",
    content:
      "At TasteBuds, we believe that dining is not just about satisfying hunger; it's an experience that should tantalize your  " +
      "taste buds and create lasting memories. Nestled in the heart of downtown Cityville,  our restaurant is a culinary oasis" +
      " where food enthusiasts can embark on a delightful journey through a world of flavors.",
    image: aboutUsImg,
    anchorName: "aboutUs",
  },
  {
    title: "Our Story",
    content:
      "TasteBuds Bistro was founded in 2010 by Chef Alex Thompson, a passionate and creative culinary expert with a dream of bringing " +
      "diverse and delectable dishes to our community. Chef Alex's vision was to establish a restaurant that seamlessly blends different" +
      "culinary traditions to create something truly extraordinary. With years of experience honing his craft and a team of skilled chefs" +
      "by his side, he brought his dream to life with the opening of TasteBuds Bistro.",
    image: aboutUsImg,
    anchorName: "ourStory",
  },

  {
    title: "Our Philosophy",
    content:
      "At TasteBuds Bistro, we are driven by a simple yet powerful philosophy – to deliver exceptional dining experiences. " +
      "Every aspect of our restaurant, from the carefully curated menu to the warm ambiance, reflects our commitment to excellence." +
      "We believe that food should not only be delicious but also a work of art, carefully plated to entice both the eyes and the palate.",
    image: aboutUsImg,
    anchorName: "ourPhilosophy",
  },
];
const AboutUs = () => {
  return (
    <Container sx={{ paddingTop: "2rem" }}>
      <NavBar />
      <Sections sections={sections} />
      <Typography
        variant="h1"
        sx={{ marginBottom: "1rem", display: "flex", justifyContent: "center" }}
      >
        Our Team
      </Typography>
      <Grid
        id="team"
        container
        spacing={6}
        sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
      >
        <TeamMemberCard name="John Doe" position="Chef" image={john} />
        <TeamMemberCard name="Jane Smith" position="Chef" image={jane} />
        <TeamMemberCard
          name="Minato Hayashi"
          position="Chef"
          image={japaneseMaleChief}
        />
        <TeamMemberCard
          name="Akari Akiyama"
          position="Chef"
          image={japaneseFemaleChief}
        />
      </Grid>
    </Container>
  );
};
export default AboutUs;
