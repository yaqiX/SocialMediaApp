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
            <Typography
                fontWeight="bold"
                fontSize="clamp(1rem, 2rem, 2.5rem"
                color="primary"
                onClick={()=>navigate("/home")}
                sx={{
                    "&:hover":{
                        color:lightTheme,
                        cursor:"pointer"
                    }
                }}
            >
                SocialModule
            </Typography>
            {/* Mobile/NonMOBILE */}
            {
                isNonMobileScreen && (
                    <FlexBetween
                        backgroundColor={neutralLightTheme}
                        borderRadius="10px"
                        gap="2rem"
                        padding="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBetween>
                )
            }
            {/* Desktop Navigation */}
            {isNonMobileScreen ? (
                <FlexBetween gap="2rem">
                    <IconButton onClick={() => dispatch(setMode())}>
                        {
                            theme.palette.mode === "dark" ? (
                                <DarkMode sx={{fontSize:"25px"}} />
                            ) : (
                                <LightMode sx={{ color:darkTheme, fontSize:"25px" }} />
                            )
                        }
                    </IconButton>
                    <Message sx={{fontSize:"25px"}} />
                    <Notifications sx={{fontSize:"25px"}} />
                    <Help sx={{fontSize:"25px"}} />

                    {/* dropdown menu */}
                    <FormControl variant="standard" value={fullName}>
                        <Select
                         value={fullName}
                         sx={{
                            backgroundColor: neutralLightTheme,
                            width: "150px",
                            borderRadius: "5px",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                                pr:"0.25rem",
                                width:"3rem"
                            },
                            "& .MuiSelect-select:focus" : {
                                backgroundColor:neutralLightTheme
                            }
                         }}
                         input={InputBase}
                        >
                            <MenuItem value={fullName}>
                                <Typography>
                                    {fullName}
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout)}>
                                <Typography>
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </FlexBetween>
            ) : (
                <IconButton onClick={() => setisMobileMenuToggled(!isMobileMenuToggled)}>
                    <Menu />
                </IconButton>
            )
        }
        {/* MOBILE NAVIGATION */}
        {
            !isNonMobileScreen && isMobileMenuToggled
        } && (
            <Box
                position="fixed"
                margin="0px"
                height="100%"
                zIndex="999"
                backgroundColor={background}
            >
                {/* closeIcon */}
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <IconButton onClick={() => setisMobileMenuToggled(!isMobileMenuToggled)}>
                        <Close />
                    </IconButton>
                </Box>
                {/* MenuItems */}
                <FlexBetween 
                    display="flex" 
                    flexDirection="column" 
                    gap="2rem"
                    justifyContent="center"
                    alignItems="center"
                    >
                    <IconButton onClick={() => dispatch(setMode())}>
                        {
                            theme.palette.mode === "dark" ? (
                                <DarkMode sx={{fontSize:"25px"}} />
                            ) : (
                                <LightMode sx={{ color:darkTheme, fontSize:"25px" }} />
                            )
                        }
                    </IconButton>
                    <Message sx={{fontSize:"25px"}} />
                    <Notifications sx={{fontSize:"25px"}} />
                    <Help sx={{fontSize:"25px"}} />

                    {/* dropdown menu */}
                    <FormControl variant="standard" value={fullName}>
                        <Select
                         value={fullName}
                         sx={{
                            backgroundColor: neutralLightTheme,
                            width: "150px",
                            borderRadius: "5px",
                            p: "0.25rem 1rem",
                            "& .MuiSvgIcon-root": {
                                pr:"0.25rem",
                                width:"3rem"
                            },
                            "& .MuiSelect-select:focus" : {
                                backgroundColor:neutralLightTheme
                            }
                         }}
                         input={InputBase}
                        >
                            <MenuItem value={fullName}>
                                <Typography>
                                    {fullName}
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={() => dispatch(setLogout)}>
                                <Typography>
                                    Logout
                                </Typography>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </FlexBetween>
            </Box>
        )
        </FlexBetween>
    )
};

export default Navbar;