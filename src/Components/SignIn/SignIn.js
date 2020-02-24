import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { signInUser, setCurrentUser } from '../../Actions/Course';
import { connect } from 'react-redux';

 class SignIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      taiKhoan : '',
      matKhau : '',
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  onSignIn = () => {
    signInUser(this.state , (result) => {
      this.props.setCurrentUser(result);
      // console.log(result, "signIn")
      if (result.maLoaiNguoiDung === "HV") {
        this.props.history.push("/")
      } else {
        this.props.history.push("/admin")
      }
    })
  }
  render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="paper">
            <Typography component="h1" variant="h5">
              Sign in
        </Typography>
            <form className="form" noValidate>
              <TextField onChange = {this.onChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="taiKhoan"
                label="User"
                name="taiKhoan"
                autoComplete="taiKhoan"
                autoFocus
              />
              <TextField onChange = {this.onChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="matKhau"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick = {this.onSignIn}
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Sign In
          </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
              </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (dataUser) => {
      dispatch(setCurrentUser(dataUser))
    }
  }
}
export default connect(null, mapDispatchToProps) (SignIn)