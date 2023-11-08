import { Box } from "@mui/material";
const baseURL = "https://socialmodapi.onrender.com/"
const UserImage = ({image, size="60px"}) => {
    return(
        <Box
            width={size} height={size}
        >
            <img 
                style={{objectFit:"cover", borderRadius:"50%"}}
                width={size} height={size}
                alt="user image"
                src={`${baseURL}assets/${image}`}
            />
        </Box>
    )
}

export default UserImage;