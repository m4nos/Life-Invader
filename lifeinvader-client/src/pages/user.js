import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Post from "../components/post/Post";
import Grid from "@material-ui/core/Grid";
import StaticProfile from "../components/profile/StaticProfile";
import CircularProgress from "@material-ui/core/CircularProgress";

import { connect } from "react-redux";
import { getUserData } from "../redux/actions/dataActions";
import PostSkeleton from "../util/PostSkeleton";

class user extends Component {
  state = {
    profile: null,
    postIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const postId = this.props.match.params.postId;

    if (postId) this.setState({ postIdParam: postId });
    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then(res => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { posts, loading } = this.props.data;
    const { postIdParam } = this.state;

    const postsMarkup = loading ? (
      <PostSkeleton />
    ) : posts === null ? (
      <p>No posts from this user</p>
    ) : !postIdParam ? (
      posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      posts.map(post => {
        if (post.postId !== postIdParam)
          return <Post key={post.postId} post={post} />;
        else return <Post key={post.postId} post={post} openDialog />;
      })
    );
    return (
      <Grid container spacing={10}>
        <Grid item xs={12} md={8}>
          {postsMarkup}
        </Grid>
        <Grid item xs={6} md={4}>
          {this.state.profile === null ? (
            <div>
              <CircularProgress size={100} thickness={2} />
            </div>
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getUserData })(user);
