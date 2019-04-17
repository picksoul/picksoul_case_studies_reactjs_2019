import React from 'react';
import './picksoul_custom_sass.scss';
//import { AppBar, Button, Container, CameraIcon, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography} from 'muicss/react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PsLogo from'./images/logo_img/ps_drk.svg';
import Cereal from'./images/home_img/cereal.svg';


const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.background.black,
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 2000,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 10 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


function Album(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img src={PsLogo} alt="PickSoulLogo"/>
          <CameraIcon className={classes.icon} />
          <Typography variant="h1" color="white" font='serif' noWrap>
            Peter Birlem
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>

            <Typography component="h1" variant="h2" align="center" color="textSecondary" gutterBottom>
              UX Design & Front-End Engineering
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              100% Whole Brain Goodness
            </Typography>
            <div className={classes.heroButtons}>
              <Grid Container spacing={24} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Case Studies
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Process
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Resume
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary">
                    Contact
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
                        <img src={Cereal} alt="cereal_img"/>
        </div>
      <div className={classNames(classes.layout, classes.cardGrid)}>
        <Typography component="h2" variant="h2" align="center" color="textSecondary" gutterBottom>
          Case Studies
        </Typography>
          {/* End hero unit */}
          <Grid Container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={4} md={3} lg={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="image: ./img/home_img/cereal.png" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Revolv Smart Watch UX
                    </Typography>
                    <Typography>
                      UX research and design for a smart-home application.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="large" variant="contained" align="center" color="primary">
                      View Case Study
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          KEEP IT SIMPLE. KEEP IT FRESH.
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Designed with love. Developed with react.js | c 2019 Peter Birlem & PickSoul
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);
