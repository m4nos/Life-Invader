import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import EditDetails from "./EditDetails";
import MyButton from "../../util/MyButton";
//MUI
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import { Paper, Typography } from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";

//import Typography from "@material-ui/core/Typography";

//Redux
import { connect } from "react-redux";
import { logoutUser, uploadImage } from "../../redux/actions/userActions";

// Icons
import LocationOn from "@material-ui/icons/LocationOn";
import LinkIcon from "@material-ui/icons/Link";
import CalendarToday from "@material-ui/icons/CalendarToday";
import EditIcon from "@material-ui/icons/Edit";
import KeyboardReturn from "@material-ui/icons/KeyboardReturn";

const styles = theme => ({
  paper: {
    padding: 20,
    maxWidth: 300
  },
  spinnerDiv: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%"
      }
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%"
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle"
      },
      "& a": {
        color: theme.palette.primary.main
      }
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0"
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer"
      }
    }
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px"
    }
  }
});

class Profile extends Component {
  handleImageChange = event => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    this.props.uploadImage(formData);
    // send to server
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById("imageInput");
    fileInput.click();
  };
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      classes,
      user: {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
      }
    } = this.props;
    let profileMarkup = !loading ? (
      authenticated ? (
        <Paper className={classes.paper}>
          <div className={classes.profile}>
            <div className='image-wrapper'>
              <img src={imageUrl} alt='profile' className='profile-image' />
              <input
                type='file'
                id='imageInput'
                hidden='hidden'
                onChange={this.handleImageChange}
              />
              <MyButton
                tip='Edit profile picture'
                onClick={this.handleEditPicture}
                btnClassName='button'>
                <EditIcon color='primary' />
              </MyButton>
            </div>
            <hr />
            <div className='profile-details'>
              <MuiLink component={Link} to={`/users/${handle}`} variant='h5'>
                @{handle}
              </MuiLink>
              <hr />
              {bio && <Typography variant='body2'>{bio}</Typography>}
              <hr />
              {location && (
                <Fragment>
                  <LocationOn color='primary' /> <span>{location}</span>
                  <hr />
                </Fragment>
              )}
              {website && (
                <Fragment>
                  <LinkIcon color='primary' />
                  <a href={website} target='_blank' rel='noopener noreferrer'>
                    {" "}
                    {website}
                  </a>
                  <hr />
                </Fragment>
              )}
              <CalendarToday color='primary' />{" "}
              <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
            </div>
            <MyButton tip='Logout' onClick={this.handleLogout}>
              <KeyboardReturn color='primary' />
            </MyButton>
            <EditDetails />
          </div>
        </Paper>
      ) : (
        <Paper className={classes.paper}>
          <Typography varian='body2' align='center'>
            No profile found, please login or sign up.
            <div className={classes.buttons}>
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/login'>
                Login
              </Button>
              <Button
                variant='contained'
                color='secondary'
                component={Link}
                to='/signup'>
                Signup
              </Button>
            </div>
          </Typography>
        </Paper>
      )
    ) : (
      <div className={classes.spinnerDiv}>
        <CircularProgress size={80} thickness={2} />
      </div>
    );

    return profileMarkup;
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = { logoutUser, uploadImage };

Profile.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Profile));
