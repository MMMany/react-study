import React from "react";
import { Box, Typography } from "@mui/material";
import {
  Home as HomeIcon,
  Devices as DevicesIcon,
  SettingsInputHdmi as HdmiIcon,
  ReportProblem as ErrorIcon,
} from "@mui/icons-material";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Colors from "../values/Colors";
import { Link } from "react-router-dom";

export default function SideMenu() {
  const MenuItemStyles = {
    icon: ({ level, active, disabled }) => {
      if (level === 0) {
        return {
          color: disabled ? Colors.gray : Colors.primary,
        };
      } else {
        return {
          color: disabled ? Colors.gray : Colors.primary,
        };
      }
    },
    label: ({ level, active, disabled }) => {
      if (level === 0) {
        return {
          color: disabled ? Colors.gray : Colors.black,
        };
      } else {
        return {
          color: disabled ? Colors.gray : Colors.black,
        };
      }
    },
  };

  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Sidebar>
        <Menu menuItemStyles={MenuItemStyles}>
          <MenuItem icon={<HomeIcon />} component={<Link to="/" />}>
            <Typography>Home</Typography>
          </MenuItem>
          <MenuItem
            icon={<DevicesIcon />}
            component={<Link to="/agent/list" />}
          >
            <Typography>Test Agent</Typography>
          </MenuItem>
          <SubMenu icon={<HdmiIcon />} label="HDMI Test">
            <MenuItem component={<Link to="/hdmitest/request" />}>
              <Typography>Request</Typography>
            </MenuItem>
            <MenuItem component={<Link to="/hdmitest/results" />}>
              <Typography>Results</Typography>
            </MenuItem>
          </SubMenu>
          <MenuItem disabled icon={<ErrorIcon />}>
            <Typography>Not Found (Disabled)</Typography>
          </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
}
