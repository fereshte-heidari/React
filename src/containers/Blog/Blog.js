import React, { Component } from "react";
import axios from "axios";
import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: [],
  };
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({ posts: response.data });
      console.log(response);
    });
  }

  render() {
    const post = this.state.posts.map((post) => {
      return <Post title={post.title} key={post.id} />;
    });
    return (
      <div>
        <section className="Posts">{post}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
