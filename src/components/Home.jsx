import {
  UilLinkedin,
  UilGithub,
} from "@iconscout/react-unicons";
import { Component } from "react";
import "../styles/Home.scss";
import { Typography, Button } from "@material-ui/core";
export default class Home extends Component {
  icons = [
    {
      name: "linkedin",
      component: <UilLinkedin size="40" />,
      src: "https://linkedin.com/in/baoquandinh",
    },
    {
      name: "github",
      component: <UilGithub size="40" />,
      src: "https://github.com/baoquandinh",
    },
  ];
  render() {
    return (
      <div className="home-container">
        <div className="intro-container">
          <Typography className="intro-item" variant="h2" component="h2">
            Hello, I'm Baoquan Dinh
          </Typography>
          <Typography className="intro-item" variant="h4" component="h4">
            A Front-End Developer
          </Typography>
          <Typography
            className="intro-item intro-text"
            variant="body"
            component="p"
          >
            Lots of words here vLots of words here Lots of words here Lots of
            words here Lots of words here
          </Typography>
        </div>
        <div className="intro-learn-more-container">
        <Button
            variant="contained"
            color="primary"
            className="learn-more-button"
            href="#about"
          >
            Click to learn more
          </Button>
        </div>
      </div>
    );
  }
}
