import { AppBar, Box, Drawer, Toolbar, useTheme } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./layout.module.css";
import drawerList from "./drawerList";
import { Link, Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const toggleDrawerOpen = (event) => {
    setDrawerOpen((prevState) => !prevState);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <AppBar position="static">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <button
              style={{
                backgroundColor: theme.palette.primary.main,
                border: "none",
                cursor: "pointer",
              }}
              onClick={toggleDrawerOpen}
            >
              <MenuIcon className={styles.iconStyle} />
            </button>
            <Link to="/home">Home</Link>
            <Link to="/superheroes">Superheroes</Link>
            <Link to="/rqsuperheroes">RQSuperheroes</Link>
            <Link to="/sample">Sample</Link>
            <Link to="/colors">Colors</Link>
            <Link to="/infinite">Infinite</Link>
            <Link to="/post">Post</Link>
            <Link to="/optimistic">Optimistic Update</Link>
          </Toolbar>
        </AppBar>

        <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawerOpen}>
          {drawerList()}
        </Drawer>
        <h1>Hello</h1>
        <Box
          sx={{
            backgroundColor: "lightblue",
            height: "200px",
            width: "200px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default Layout;
