import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import main from "./assets/main1.jpeg";
import shield from "./assets/shield.png";
import Typography from "@mui/material/Typography";
import flow1 from "./assets/flow1.jpeg";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import flow2 from "./assets/flow2.jpeg";
import { Button } from "@mui/material";
// import { $, jQuery } from "jquery";
// import ArcText from "arc-text";

function App() {
  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  // useEffect(() => {
  //   // $(".example4").arctext({ radius: 300 });
  //   const arcText = new ArcText(document.getElementsByClassName(".example4"));
  //   arcText.arc(150).direction(1);
  // }, []);
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={0} style={{ borderRadius: "0", minHeight: "100vh" }}>
        <section className="App">
          {/* Nav bar */}
          <Navbar mode={mode} setMode={setMode} />
          {/* body upper part */}
          <div className="content">
            {/* Left */}
            <div className="left">
              <img src={shield} alt="shld" className="shield" />
            </div>
            {/* Center */}
            <div className="center">
              <div>
                <p
                  style={{
                    fontFamily: "Satisfy",
                    fontSize: "25px",
                    textDecoration: "underline",
                    wordWrap: "break-word",
                  }}
                >
                  Immerse yourself in the romantic worlds of Philip Reinagle
                </p>
              </div>
              {/* <svg viewBox="0 0 500 500">
                <path
                  id="curve"
                  d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
                />
                <text width="500">
                  <textPath xlink:href="#curve">
                    Immerse yourself in the romantic worlds of Philip Reinagle
                  </textPath>
                </text>
              </svg> */}

              <img src={main} alt="pic" className="cubid" />
            </div>
            {/* right side of upper part */}
            <div className="right">
              <div className="rightmin">
                <NewReleasesIcon />
                {""}
                <Typography variant="h6">
                  Welcome to our new exhibition of English painter Philip
                  Reinagle
                </Typography>
              </div>
              <img src={flow2} alt="flow2" className="flow2" />
            </div>
          </div>
          {/* body lower part */}
          <div className="content2">
            <div className="mincontent">
              <img src={flow1} alt="flow1" className="flow1" />
              <div style={{ margin: "20px" }}>
                <Button variant="text">Gallery</Button>
                <hr />
                <Button variant="text">Biography</Button>
                <hr />
                <Button variant="text">Auction</Button>
              </div>
            </div>
            <div className="maintext">
              {/* Text to be positioned */}
              <div className="postext">
                <Typography
                  sx={{ fontFamily: "Dosis", fontWeight: "600" }}
                  variant="h1"
                >
                  YOUR
                </Typography>
                <Typography
                  sx={{ fontFamily: "Dosis", fontWeight: "600" }}
                  variant="h1"
                >
                  FABULOUS
                </Typography>
                <Typography
                  sx={{ fontFamily: "Dosis", fontWeight: "600" }}
                  variant="h1"
                >
                  ADVENTURE
                </Typography>
              </div>

              <Typography
                sx={{ fontFamily: "Dosis", fontWeight: "600" }}
                variant="h1"
              >
                &
              </Typography>

              <Typography
                sx={{ fontFamily: "Dosis", fontWeight: "600" }}
                variant="h1"
              >
                OWN ART
              </Typography>
              <Typography
                sx={{ fontFamily: "Dosis", fontWeight: "600" }}
                variant="h1"
              >
                EXPERIENCE
              </Typography>
            </div>
          </div>
        </section>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
