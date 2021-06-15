import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Hero from "../components/Hero";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//   },
//   Container: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundImage: `url(https://estaticos-cdn.elperiodico.com/clip/ae0b9b68-f233-46cc-bc01-6ef32f7a9e80_alta-libre-aspect-ratio_default_0.jpg)`,
//     backgroundSize: "cover",
//     [theme.breakpoints.down("sm")]: {
//       height: "300px",
//     },
//   },
//   title: {
//     maxWidth: 450,
//     [theme.breakpoints.down("sm")]: {
//       maxWidth: 300,
//     },
//     color: "#57ea9a",
//   },
// }));

// const Home = () => {
//   const classes = useStyles();
//   return (
//     <main className={classes.root}>
//       <Container className={classes.Container} maxWidth="false">
//         <Typography className={classes.title} variant="h2" gutterBottom>
//           Coronavirus
//         </Typography>
//         <Typography className={classes.title} variant="h5" gutterBottom>
//           Avance de la pandemia
//         </Typography>
//       </Container>
//     </main>
//   );
// };
const useStyles = makeStyles({
  root: {
    padding: 0,
  },
});

const Home = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className={classes.root} maxWidth={false}>
      <Hero />
    </Container>
  );
};
export default Home;
