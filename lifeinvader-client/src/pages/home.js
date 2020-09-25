import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import Post from "../components/post/Post";
import Profile from "../components/profile/Profile";
import PostSkeleton from "../util/PostSkeleton";

import { connect } from "react-redux";
import { getPosts } from "../redux/actions/dataActions";

class home extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.data;
    let recentPostsMarkup = !loading ? (
      posts.map(post => <Post key={post.postId} post={post} />)
    ) : (
      <PostSkeleton />
    );
    return (
      <Grid container spacing={10}>
        <Grid item xs={12} md={8}>
          {recentPostsMarkup}
        </Grid>
        <Grid item xs={6} md={4}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

home.propTypes = {
  getPosts: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps, { getPosts })(home);
