import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  CardContent: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 400,
    margin: 20,
    "&:hover": {
      boxShadow: "0px 0px 5px 1px #57ea9a",
    },
  },
}));

const InfoCards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Card className={classes.CardContent}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="imagen"
            height="300px"
            image="https://i.pinimg.com/736x/3e/4e/13/3e4e13cb5600254cffb5276806ac7277.jpg"
            title="como protegerse del covid-19"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Como protegerse del COVID-19
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Si la COVID-19 se propaga en su comunidad, manténgase seguro
              mediante la adopción de algunas sencillas medidas de precaución,
              que puede seguir en el link a continuación. ¡Hágalo!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.CardContent}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="imagen"
            height="300"
            image="https://img2.rtve.es/i/?w=1600&i=1615998979529.jpg"
            title="situacion de la pandemia en america"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Situacion de la pandemia en America
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Datos estadisticos de la distribución geográfica de la enfermedad
              por el coronavirus 2019-nCoV en las Américas.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://who.maps.arcgis.com/apps/webappviewer/index.html?id=2203b04c3a5f486685a15482a0d97a87&extent=-17277700.8881%2C-1043174.5225%2C-1770156.5897%2C6979655.9663%2C102100"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.CardContent}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="imagen"
            height="300"
            image="https://www.intermundial.es/blog/wp-content/uploads/2020/06/coronavirus-viajes-fuera-espana-este-verano.jpg"
            title="viajes en pandemia"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Viajes en Pandemia
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Consideraciones de salud pública al reanudar los viajes
              internacionales.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://www.who.int/es/news-room/articles-detail/public-health-considerations-while-resuming-international-travel"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>

      <Card className={classes.CardContent}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image="https://www.consilium.europa.eu/media/46372/10-things-highlight.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Orientaciones técnicas sobre el nuevo coronavirus (2019-nCoV)
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              En el siguiente enlace podra encontrar distintos pasos a seguir
              según la situacion que vive.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <a
              href="https://www.who.int/es/emergencies/diseases/novel-coronavirus-2019/technical-guidance"
              target="_blank"
            >
              Learn More
            </a>
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default InfoCards;
