import "./App.css";
import "./styles/Home.css"
import Home from "./components/Home"
import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";

function App() {
  const navItems = ["Home", "About", "Skills", "Portfolio", "Contact Me"]
  return (
    <div className="App" style={{ width: "100vw" }}>
      <AppBar style={{ position: "sticky", position: "-webkit-sticky" }}>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h6">Baoquan</Typography>
            </Grid>
          </Grid>
          <Grid container>
            {navItems.map(item => {
              return <Grid item key={item} xs={2}>
              <a href={`#${item.toLowerCase()}`}>
                <Typography variant="h6">{item}</Typography>
              </a>
            </Grid>
            })}
          </Grid>
        </Toolbar>
      </AppBar>
        <Home />
    </div>
  );
}

export default App;
