import React from "react";
import { Menu, ChevronLeft, ChevronRight } from "@material-ui/icons";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import useStyles from "./BodyStyle";

export default function Body() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <nav>
      <CssBaseline />
      <AppBar
        className={
          clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }) && classes.root
        }
        style={{ position: "relative" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DECENTRALEDU
          </Typography>

          <Button color="inherit" className={classes.close_btn}>
            About
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Roadmap
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Whitepaper
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Contribute
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Contact
          </Button>
        </Toolbar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["About", "Roadmap", "Whitepaper", "Contribute", "Contact"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </nav>
  );
}
