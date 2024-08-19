import Checkbox from '@mui/material/Checkbox';
import './App.css';
import {useNavigate} from "react-router-dom";
import {useForm, Controller} from 'react-hook-form';
import {Box, Button, FormControlLabel, TextField, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {setFormData} from "./counterSlice.ts";


interface IHookForms {
    name: string;
    email: string;
    username: string;
    password: string;
    accept: boolean;
}


function Form() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { control, handleSubmit } = useForm<IHookForms>();

    const onSubmit = (data: IHookForms) => {
        console.log('data', data)
        dispatch(setFormData(data))
        navigate('/success');
    }
    return (
        <Box className="head">
            <Typography variant="h3">
                Admission Form
            </Typography>

            <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Name is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="text"
                                label="Name"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />


                </div>
                <div className="form-group">

                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Username is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="text"
                                label="Username"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </div>
                <div className="form-group">

                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Email is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="email"
                                label="Email"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </div>
                <div className="form-group">

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Password is required' }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="password"
                                label="Password"
                                variant="outlined"
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </div>
                <Controller
                    name="accept"
                    control={control}
                    defaultValue={false}
                    rules={{ required: 'Please accept the terms' }}
                    render={({ field, fieldState: { error } }) => (
                        // <Checkbox
                        //     {...field}
                        //     label="Accept"
                        //     error={!!error}
                        // />
                        <FormControlLabel required control={<Checkbox {...field} />} label="Required" />
                    )}
                />

                <Button variant="contained" type="submit">Submit</Button>
            </Box>
        </Box>
    );
}

export default Form;
