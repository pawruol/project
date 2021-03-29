import React from 'react';
import styles from './Register.module.css';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {Button} from "@material-ui/core";
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        fullWidth: {
            width: '100%'
        }
    }),
);

interface State {
    amount: string;
    password: string;
    weight: string;
    weightRange: string;
    showPassword: boolean;
}

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props,
                                                                         ref) => (
    <RouterLink ref={ref} to="/register" {...props} />
));

const Register: React.FC = () => {

    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <div className={styles.Register}>
            <form>

                <FormControl className={clsx(classes.margin, classes.fullWidth)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-login">Name</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-login"
                        type='text'
                        labelWidth={50}
                    />
                </FormControl>




                <FormControl className={clsx(classes.margin, classes.fullWidth)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-login">Your Login</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-login"
                        type='text'
                        labelWidth={80}
                    />
                </FormControl>

                <FormControl className={clsx(classes.margin, classes.fullWidth)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Your Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        labelWidth={110}
                    />
                </FormControl>
                <Button variant="contained" size="large" color="primary" className={clsx(classes.margin,
                    classes.fullWidth)}>
                   Registration
                </Button>

            </form>
            <div className={styles.description}>
                <p> link to
                    <Link component={LinkBehavior}>Without</Link>
                </p>
            </div>
        </div>
    );
}

export default Register;
