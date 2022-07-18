import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 100,
    width: 200,
  },
  card: {
    height: 200,
    width: 300,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <main className="main-content">
      This is the HOME PAGE
      <hr />
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Card className={classes.card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Card className={classes.card} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </main>
  )
}

export default Home;
