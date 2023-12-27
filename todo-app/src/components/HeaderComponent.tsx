import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" className="header">
        <Typography variant="h5" color="inherit" component="div">
          Todo App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
