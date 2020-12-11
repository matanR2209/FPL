import * as React from "react";
import withStyles, {WithStyles} from "@material-ui/core/styles/withStyles";
import {createStyles, FormHelperText, Theme} from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Paper from "@material-ui/core/Paper";
interface IProps {
    classes: any
    onSignUp: (firstName: string, lastName: string, username: string, password: string) => void
    changeToSignIn: () => void;
    errorMessage?: string;
}

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://pbs.twimg.com/media/EM-pzRMX0AU1zZF?format=jpg&name=large)',
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

interface ILocalState {
 firstName: string
 lastName: string
 username: string
 password: string
}


class SignUpContainer extends React.Component<IProps & Partial<WithStyles<any>>> {

    public state: ILocalState = {
        firstName: 'Test',
        lastName: 'Test',
        username: 'sdvsdv@sdv.co',
        password: '123456'
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
                            Sign up
                        </Typography>
                        <div className={classes.form} >
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        label="First Name"
                                        fullWidth
                                        required
                                        value={this.state.firstName}
                                        onChange={this.onFirstNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        variant="outlined"
                                        label="Last Name"
                                        fullWidth
                                        required
                                        value={this.state.lastName}
                                        onChange={this.onLastNameChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        label="Username"
                                        fullWidth
                                        required
                                        value={this.state.username}
                                        onChange={this.onUsernameChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        label="Password"
                                        fullWidth
                                        required
                                        type="password"
                                        value={this.state.password}
                                        onChange={this.onPassChange}
                                    />
                                </Grid>
                                {this.props.errorMessage? <Grid item xs={12}>
                                    <FormHelperText error={true}>{this.props.errorMessage}</FormHelperText>
                                </Grid> : null}
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={this.onSignUpClick}
                            >
                                Sign Up
                            </Button>
                            <Grid container >
                                <Grid item>
                                    <Link href="#" variant="body2" onClick={this.props.changeToSignIn}>
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
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

    private onFirstNameChange = (textInputValue: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            firstName: textInputValue.target.value,
        })
    }

    private onLastNameChange = (textInputValue: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            lastName: textInputValue.target.value,
        })
    }

    private onUsernameChange = (textInputValue: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            username: textInputValue.target.value,
        })
    }

    private onPassChange = (textInputValue: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            ...this.state,
            password: textInputValue.target.value,
        })
    }

    private onSignUpClick = () => {
        const { firstName, lastName, username, password } = this.state;
        this.props.onSignUp(firstName, lastName, username, password);
    }
}

export default withStyles(styles)(SignUpContainer)