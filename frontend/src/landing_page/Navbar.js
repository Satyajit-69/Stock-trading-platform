import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Tooltip,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard,
  BusinessCenter,
  Star,
  Settings,
  Logout,
  Person,
  Close,
} from "@mui/icons-material";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );

  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  // Sync auth state
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem("token"));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setIsSidebarOpen(false);
    setAnchorEl(null);
    navigate("/login");
  };

  const handleUserMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setAnchorEl(null);
  };

  const sidebarLinks = [
    {
      label: "Dashboard",
      icon: <Dashboard />,
      action: () => {
        window.location.href = "https://stock-trading-platform-ochre.vercel.app/";
        setIsSidebarOpen(false);
      },
    },
    {
      label: "Portfolio",
      icon: <BusinessCenter />,
      action: () => {
        setIsSidebarOpen(false);
        navigate("/portfolio");
      },
    },
    {
      label: "Watchlist",
      icon: <Star />,
      action: () => {
        setIsSidebarOpen(false);
        navigate("/watchlist");
      },
    },
    {
      label: "Settings",
      icon: <Settings />,
      action: () => {
        setIsSidebarOpen(false);
        navigate("/settings");
      },
    },
  ];

  const navLinks = [
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    { label: "Pricing", path: "/pricing" },
    { label: "Support", path: "/support" },
  ];

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "text.primary",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ minHeight: "64px !important", px: { xs: 2, md: 4 } }}>
          {/* Left Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {isAuthenticated && (
              <Tooltip title="Menu">
                <IconButton
                  onClick={() => setIsSidebarOpen(true)}
                  sx={{
                    color: "text.primary",
                    "&:hover": { bgcolor: "grey.100" },
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
            )}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Stock<span style={{ color: "#2196f3" }}>mates</span>
              </Typography>
            </Link>
          </Box>

          {/* Center Navigation - Desktop */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              gap: 4,
              mx: "auto",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.label}
                component={Link}
                to={link.path}
                sx={{
                  color: "text.primary",
                  fontWeight: 500,
                  textTransform: "none",
                  fontSize: "1rem",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "transparent",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: "auto" }}>
            {!isAuthenticated ? (
              <>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    display: { xs: "none", lg: "inline-flex" },
                    color: "text.primary",
                    textTransform: "none",
                    fontWeight: 500,
                  }}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  sx={{
                    display: { xs: "none", lg: "inline-flex" },
                    textTransform: "none",
                    fontWeight: 500,
                    px: 3,
                    borderRadius: 2,
                    boxShadow: "none",
                    "&:hover": { boxShadow: 2 },
                  }}
                >
                  Sign up
                </Button>
              </>
            ) : (
              <Tooltip title="Account">
                <IconButton
                  onClick={handleUserMenuOpen}
                  sx={{ display: { xs: "none", lg: "flex" }, p: 0 }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "primary.main",
                      width: 40,
                      height: 40,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Person />
                  </Avatar>
                </IconButton>
              </Tooltip>
            )}

            {/* Mobile Menu Toggle */}
            <IconButton
              sx={{ display: { xs: "flex", lg: "none" } }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* User Menu Dropdown */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleUserMenuClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            boxShadow: 3,
            borderRadius: 2,
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleUserMenuClose();
            navigate("/profile");
          }}
        >
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleUserMenuClose();
            navigate("/settings");
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ color: "error.main" }}>
          <ListItemIcon>
            <Logout fontSize="small" sx={{ color: "error.main" }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>

      {/* Mobile Menu Drawer */}
      <Drawer
        anchor="top"
        open={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        sx={{ display: { lg: "none" } }}
        PaperProps={{
          sx: {
            mt: "64px",
            borderRadius: 0,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <List>
            {!isAuthenticated ? (
              <>
                <ListItemButton
                  component={Link}
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ListItemText primary="Login" />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ListItemText primary="Sign up" />
                </ListItemButton>
                <Divider sx={{ my: 1 }} />
              </>
            ) : null}
            {navLinks.map((link) => (
              <ListItemButton
                key={link.label}
                component={Link}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Sidebar Drawer */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            mt: "64px",
            height: "calc(100% - 64px)",
            boxShadow: 3,
          },
        }}
      >
        {/* Sidebar Header */}
        <Box
          sx={{
            p: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "white",
                color: "primary.main",
                width: 48,
                height: 48,
              }}
            >
              <Person />
            </Avatar>
            <Box>
              <Typography variant="subtitle1" fontWeight={600}>
                User
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Investor
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Sidebar Links */}
        <List sx={{ flex: 1, py: 2 }}>
          {sidebarLinks.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={item.action}
                sx={{
                  py: 1.5,
                  px: 3,
                  "&:hover": {
                    bgcolor: "primary.light",
                    "& .MuiListItemIcon-root": {
                      color: "primary.main",
                    },
                    "& .MuiListItemText-primary": {
                      color: "primary.main",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 40, color: "text.secondary" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {/* Sidebar Footer */}
        <Box sx={{ borderTop: "1px solid", borderColor: "divider", p: 2 }}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            startIcon={<Logout />}
            onClick={handleLogout}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              py: 1,
              borderRadius: 2,
            }}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      {/* Spacer for fixed navbar */}
      <Toolbar sx={{ minHeight: "64px !important" }} />
    </>
  );
}

export default Navbar;