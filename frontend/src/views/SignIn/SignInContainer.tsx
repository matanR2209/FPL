import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, Theme} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';

interface IProps {
    classes: any
    onSignIn: (email: string, password: string) => void
    changeToSignUp: () => void;
    errorMessage?: string;
}

interface ILocalState {
    username: string
    password: string
}

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://www.wallpaperflare.com/static/95/567/792/jamie-vardy-footballer-leicester-city-jamie-wallpaper-preview.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class SignInContainer extends React.Component<IProps & Partial<WithStyles<any>>> {

    public state: ILocalState = {
        username: 'sdvsdv@sdv.co',
        password: '123456',
    }

    public render() {
        const {classes} = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline />
                <Grid item xs={false} sm={4} md={7} className={classes.image} />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <div className={classes.form}>
                            <TextField
                                value={this.state.username}
                                variant="outlined"
                                margin="normal"
                                fullWidth={true}
                                label="Email Address"
                                onChange={this.onEmailChange}
                            />
                            <TextField
                                value={this.state.password}
                                variant="outlined"
                                margin="normal"
                                fullWidth={true}
                                type="password"
                                label="Password"
                                onChange={this.passChange}
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.onSignInClick}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={this.props.changeToSignUp}>
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Box mt={5}>
                                {this.copyright()}
                            </Box>
                        </div>
                    </div>
                </Grid>
            </Grid>
        );
    }

    private copyright = () => {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    private onSignInClick = () => {
        this.props.onSignIn(this.state.username, this.state.password);
    }

    private passChange = (textInputValue: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            password: textInputValue.target.value,
        })
    }

    private onEmailChange = (textInputValue: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            username: textInputValue.target.value,
        })
    }
}

export default withStyles(styles)(SignInContainer)