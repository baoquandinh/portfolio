import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  LinearProgress,
  colors,
  Card,
  CardContent,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React, { Component } from "react";
import "../styles/About.scss";

const SkillLinearProgress = withStyles((theme) => ({
  bar1Determinate: {
    backgroundColor: "#F9ED69",
  },
  bar: {
    borderRadius: 5,
    backGroundColor: "#F08A5D",
  },
}))(LinearProgress);

const SkillAccordion = withStyles(() => ({
  root: {
    borderRadius: "30px",
    height: "60%",
  },
  expanded: {
    // margin: 0
  },
}))(Accordion);

class About extends Component {
  constructor() {
    super();
  }

  skillContainer = [
    {
      id: 1,
      name: "Frontend Development",
      skills: [
        { name: "HTML", progress: 60, years: 4, lineColor: "primary" },
        { name: "CSS", progress: 60, years: 4, lineColor: "primary" },
        { name: "JavaScript", progress: 60, years: 4, lineColor: "secondary" },
        { name: "TypeScript", progress: 60, years: 4, lineColor: "secondary" },
        { name: "React", progress: 30, years: 2, lineColor: "primary" },
        { name: "Angular", progress: 30, years: 2, lineColor: "primary" },
      ],
    },
    {
      id: 2,
      name: "Backend Development",
      skills: [
        { name: "Node", progress: 30, years: 2, lineColor: "primary" },
        { name: "Express", progress: 30, years: 2, lineColor: "primary" },
        { name: "MySQL", progress: 30, years: 2, lineColor: "primary" },
        { name: "TypeScript", progress: 30, years: 2, lineColor: "secondary" },
      ],
    },
  ];

  render() {
    return (
      <div className="about-container">
        <div className="about-info-container">
          <Typography className="info-item header" variant="h2" component="h2">
            About Me
          </Typography>
          <Avatar alt="profile avatar" className="info-item avatar" />
        </div>
        <div className="skill-containers">
          {this.skillContainer.map((container) => (
            <Card key={`container-${container.id}`} className="skill-card">
              <CardHeader title={container.name} className="skill-card-header-container"/>
              <CardContent className="skill-card-content-container">
                {container.skills.map((skill) => (
                  <div
                    key={`${skill.name.toLowerCase()}-progress`}
                    className="skill-card-content"
                  >
                    <Typography className="skill-content-text">
                      {skill.name}
                    </Typography>
                    <SkillLinearProgress
                      className="skill-progress-bar"
                      variant="determinate"
                      value={skill.progress}
                    />
                    <Typography className="skill-accordion-text">
                      {skill.years} years
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
            // <SkillAccordion
            //   key={`skill-container-${container.id}`}
            //   className="skill-container"
            //   square
            // >
            //   <AccordionSummary
            //     id={`panel${container.id}-summary`}
            //     aria-controls={`panel${container.id}-content`}
            //     expandIcon={<ExpandMoreIcon />}
            //   >
            //     <Typography className="header-title" variant="body1">
            //       {container.name}
            //     </Typography>
            //   </AccordionSummary>
            //   <AccordionDetails>
            //     {container.skills.map((skill) => (
            //       <div
            //         key={`${skill.name.toLowerCase()}-progress`}
            //         className="skill-accordion-content"
            //       >
            //         <Typography className="skill-accordion-text">
            //           {skill.name}
            //         </Typography>
            //         <SkillLinearProgress
            //           className="skill-accordion-line"
            //           variant="determinate"
            //           value={skill.progress}
            //         />
            //         <Typography className="skill-accordion-text">
            //           {skill.years} years
            //         </Typography>
            //       </div>
            //     ))}
            //   </AccordionDetails>
            // </SkillAccordion>
          ))}
        </div>
      </div>
    );
  }
}

export default About;
