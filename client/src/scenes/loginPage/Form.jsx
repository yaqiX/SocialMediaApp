import { useState } from "react";
import { 
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone";
import FlexBetween from "components/FlexBetween";
import { paste } from "@testing-library/user-event/dist/paste";


/* Schema */
const registerSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string("Invalid Email").required("required"),
    password: yup.string().required("required"),
    location: yup.string().required("required"),
    occupation: yup.string().required("required"),
    picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string("Invalid Email").required("required"),
    password: yup.string().required("required")
});

const initialValuesRegister = {
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    location:"",
    occupation:"",
    picture:""
};

const initialValuesLogin = {
    email:"",
    password:"",
};

/* Component */
const Form = () => {
    const [pageType, setPageType] = useState("login");
    const { palette } = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isNonMobile = useMediaQuery("(min-width:600px)")
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";

    const handleFormSubmit = async(values, onSubmitProps) => {};
    
    return(
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {
                ({
                    values, 
                    errors, 
                    touched, 
                    handleBlur, 
                    handleChange, 
                    handleSubmit, 
                    setFieldValue,
                    resetForm,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="grid"
                            gap="30px"
                            gridTemplateColumns="repeat(2,minmax(0,1fr))"
                            sx={{
                                "&>div":{gridColumn: isNonMobile ? undefined : "span 2"}
                            }}
                        >
                            {isRegister && (
                                <>
                                    <TextField
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{gridColumn:"span 1"}}
                                    />
                                     <TextField
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{gridColumn:"span 1"}}
                                    />
                                     <TextField
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{gridColumn:"span 1"}}
                                    />
                                     <TextField
                                        label="Location"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.location}
                                        name="location"
                                        error={Boolean(touched.location) && Boolean(errors.location)}
                                        helperText={touched.location && errors.location}
                                        sx={{gridColumn:"span 1"}}
                                    />
                                    <TextField
                                        label="Occupation"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.occupation}
                                        name="occupation"
                                        error={Boolean(touched.occupation) && Boolean(errors.occupation)}
                                        helperText={touched.occupation && errors.occupation}
                                        sx={{gridColumn:"span 1"}}
                                    />
                                    <Box
                                        gridColumn="span 2"
                                        border={`1px solid ${palette.neutral.medium}`}
                                        borderRadius="5px"
                                    >
                                        <Dropzone
                                            acceptedFiles=".jpg, .jpeg, .png"
                                            multiple={false}
                                            onDrop={
                                                (acceptedFiles) => {
                                                    setFieldValue("picture", acceptedFiles[0])
                                                }
                                            }
                                        >
                                            {
                                                ({
                                                    getRootProps, getInputProps
                                                }) => (
                                                    <Box
                                                        {...getRootProps()}
                                                        border={`2px dashed ${palette.primary.main}`}
                                                        sx={{"&:hover":{cursor:"pointer"}}}
                                                    >
                                                        <input {...getInputProps}/>
                                                        {!values.picture ? (
                                                            <p>add your profile picture</p>
                                                        ):(
                                                            <FlexBetween>
                                                                <Typography>{values.picture.name}</Typography>
                                                                <EditOutlinedIcon />
                                                            </FlexBetween>
                                                        )}
                                                    </Box>
                                                )
                                            }
                                        </Dropzone>
                                    </Box>
                                </>
                            )}
                        </Box>
                    </form>
                )
            }
        </Formik>
    )


};  

export default Form;







