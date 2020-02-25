import React, { Component } from 'react'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

import Container from '@material-ui/core/Container';
import { signUpUser } from '../../Actions/Course';
import Navbar from '../Header/Navbar';


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      maNhom: "GP03",
      email: ""
    }
  }
  onChange = (e) => {
    
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  onSignUp = () => {
    signUpUser(this.state , () => {
      this.props.history.push("/sign-in")
    })
  }
  render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className="signUp-paper">
            <Typography component="h1" variant="h5">
              Sign up
        </Typography>
            <form className="signUp-paper__form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="taiKhoan"
                    name="taiKhoan"
                    variant="outlined"
                    required
                    fullWidth
                    id="taiKhoan"
                    label="taiKhoan"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="matKhau"
                    label="matKhau"
                    name="matKhau"
                    type="password"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="hoTen"
                    label="hoTen"
                    name="hoTen"
                    onChange={this.onChange}

                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="soDT"
                    label="soDT"
                    type="soDT"
                    id="soDT"
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    label="email"
                    type="email"
                    id="email"
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
              <Button onClick = {this.onSignUp}
                fullWidth
                variant="contained"
                color="primary"
                className="signUp-paper__submit"
              >
                Sign Up
          </Button>

            </form>
          </div>

        </Container>
      </>
    )
  }
}
