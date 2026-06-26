import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Typography,
  Box
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import PersonIcon from "@mui/icons-material/Person";
import HistoryIcon from "@mui/icons-material/History";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 250;

const menuItems = [
  {
    text: "Dashboard",
    icon: <DashboardIcon />
  },
  {
    text: "Prediction",
    icon: <AnalyticsIcon />
  },
  {
    text: "Customers",
    icon: <PersonIcon />
  },
  {
    text: "Prediction History",
    icon: <HistoryIcon />
  },
  {
    text: "Reports",
    icon: <AssessmentIcon />
  },
  {
    text: "Settings",
    icon: <SettingsIcon />
  },
  {
    text: "Logout",
    icon: <LogoutIcon />
  }
];

export default function Sidebar() {

  return (

    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1e293b",
          color: "white"
        }
      }}
    >

      <Toolbar />

      <Box sx={{ textAlign: "center", p: 2 }}>

        <Typography variant="h6" fontWeight="bold">
          AI Marketing
        </Typography>

        <Typography variant="body2">
          Intelligence System
        </Typography>

      </Box>

      <Divider sx={{ bgcolor: "#475569" }} />

      <List>

        {menuItems.map((item) => (

          <ListItem key={item.text} disablePadding>

            <ListItemButton>

              <ListItemIcon
                sx={{ color: "white" }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.text}
              />

            </ListItemButton>

          </ListItem>

        ))}

      </List>

    </Drawer>

  );
}