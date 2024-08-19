import {Box, Typography} from "@mui/material";
import { useLocation } from "react-router-dom";
import {useSelector} from "react-redux";

function Success() {
    const location = useLocation();
    // const {formData} = location.state || {};

    const { formData } = useSelector(state => state.form);

    console.log('data', formData)

    return (
        <Box>
            <Typography variant="h4">Form Successfully Submitted</Typography>
            <Typography variant="h6">Name: {formData.name}</Typography>
            <Typography variant="h6">Username: {formData.username}</Typography>
            <Typography variant="h6">Email: {formData.email}</Typography>
            {/*<Typography variant="h6">Password: {formData.password}</Typography>*/}
            <Typography variant="h6">Accepted Terms: {formData.accept ? 'Yes' : 'No'}</Typography>
        </Box>
    );
}

export default Success;