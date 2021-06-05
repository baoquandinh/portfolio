import { Container, Grid } from "@material-ui/core";

const Home = () => {
  return (
    <Grid container>
      {/* Main Body */}
      <Grid item={12}>
        <Grid container>
          <Grid item xs={2}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                A
              </Grid>
              <Grid item xs={12}>
                B
              </Grid>
              <Grid item xs={12}>
                C
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid container>
              <Grid item xs={12}>
                Hi, I am Baoquan
              </Grid>
              <Grid item={12}>Frontend developer</Grid>
              <Grid item={12}>
                Lots of words here vLots of words here Lots of words here Lots
                of words here Lots of words here
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Scrolling Section */}
    </Grid>
  );
};

export default Home;
