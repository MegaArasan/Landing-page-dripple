import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar({ mode, setMode }) {
  const toggleColorMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };
  const [checked, setChecked] = React.useState(false);
  const [open, setopen] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    toggleColorMode();
  };
  const toggle = () => {
    setopen(!open);
  };
  return (
    <div>
      <div className="navbar">
        <Typography variant="h6">
          <span role="img" aria-label="emoji">
            💻
          </span>
          Artmea
        </Typography>
        <Button
          sx={{
            ml: { xs: 0, sm: "auto" },
            display: { xs: "none", sm: "block" },
          }}
          variant="text"
          color="inherit"
        >
          Home
        </Button>
        <Button
          sx={{ display: { xs: "none", sm: "block" } }}
          variant="text"
          color="inherit"
        >
          Gallery
        </Button>
        <Button
          sx={{ display: { xs: "none", sm: "block" } }}
          variant="text"
          color="inherit"
        >
          Shop
        </Button>
        <Button
          sx={{
            ml: { xs: 0, sm: "auto" },
            display: { xs: "none", sm: "block" },
          }}
          variant="text"
          color="inherit"
        >
          Contact
        </Button>
        <Switch
          sx={{ display: { xs: "none", sm: "block" } }}
          checked={checked}
          onChange={handleChange}
          checkedIcon={<Brightness7Icon style={{ color: "yellow" }} />}
          icon={<Brightness4Icon style={{ color: "black" }} />}
          inputProps={{ "aria-label": "controlled" }}
        />
        <IconButton
          sx={{ display: { xs: "block", sm: "none" }, ml: "auto" }}
          aria-label="menu"
          onClick={toggle}
        >
          <MenuIcon />
        </IconButton>
      </div>
      {open === true ? (
        <div style={{ borderBottom: "1px solid whitesmoke" }}>
          <Button variant="text" color="inherit">
            Home
          </Button>
          <Button variant="text" color="inherit">
            Gallery
          </Button>
          <Button variant="text" color="inherit">
            Shop
          </Button>
          <Button variant="text" color="inherit">
            Contact
          </Button>
          <Switch
            checked={checked}
            onChange={handleChange}
            checkedIcon={<Brightness7Icon style={{ color: "yellow" }} />}
            icon={<Brightness4Icon style={{ color: "black" }} />}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
