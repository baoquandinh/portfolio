import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import AppsIcon from "@material-ui/icons/Apps";
import '../styles/Helper.css'

export const Footer = () => {
  return (
    <BottomNavigation className="test">
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item>
          <Button>
            <Typography>Baoquan</Typography>
          </Button>
        </Grid>
        <Grid item>
          <BottomNavigationAction label="Apps" icon={<AppsIcon />} />
        </Grid>
      </Grid>
    </BottomNavigation>
  );
};
