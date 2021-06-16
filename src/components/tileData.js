// import { makeStyles } from "@material-ui/core";
// import { Container } from "postcss-safe-parser/node_modules/postcss";
// import React from "react";
import blockinar from "../assets/img/blockinar.jpeg";

const tileData = () => {
  return [
    {
      img: blockinar,
      title: "Image",
      autor: "autor",
    },
  ];
};
// const tileData = () => {
//   const useStyles = makeStyles({
//     imgContainer: {
//       display: "flex",
//       width: "30px",
//       height: "35px",
//     },
//     img: {
//       width: "100%",
//     },
//   });

//   const classes = useStyles();
//   return (
//     <Container className={classes.imgContainer}>
//       <img
//         className={classes.imgContainer}
//         src=""
//         alt="img"
//       />
//     </Container>
//   );
// };
export default tileData;
