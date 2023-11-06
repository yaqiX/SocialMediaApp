import { useState } from "react";
import {
    Box,
    IconButton,
    InputBase,
    Typography,
    Select,
    MenuItem,
    FormControl,
    useTheme,
    useMediaQuery
} from "@mui/material";
import {
    Search,
    Message,
    DarkMode,
    LightMode,
    Notifications,
    Help,
    Menu,
    Close
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {

    const [isMobileMenuToggled, setisMobileMenuToggled] = useState(false);
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px");

    const theme = useTheme();
    const neutralLightTheme = theme.palette.neutral.light;
    const darkTheme = theme.palette.neutral.dark;
    const background = theme.palette.background.default;
    const lightTheme = theme.palette.primary.light;
    const alt = theme.palette.background.alt;

    const fullName = `${user.firstName} ${user.lastName}`;

    return(
        <FlexBetween padding="1.5rem 6%" backgroundColor={alt}>
            {/* can pass because it's Box */}
            
        </FlexBetween>
    )
};

export default Navbar;