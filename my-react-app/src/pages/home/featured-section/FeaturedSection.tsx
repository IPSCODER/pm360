import React from "react";
import Button from "../../../ui/button/Button";
import classes from "./featured.module.css";

const featuredPosts = [
  {
    id: 1,
    title: "Overcoming Anxiety: A Guide to Calmness",
    excerpt: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
    link: "/articles/overcoming-anxiety",
  },
  {
    id: 2,
    title: "The Power of Positive Thinking",
    excerpt: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
    link: "/articles/positive-thinking",
  },
  {
    id: 3,
    title: "Building Stronger Relationships",
    excerpt: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.",
    link: "/articles/stronger-relationships",
  },
];

const Featured = () => {
  return (
    <React.Fragment>
      <section className={classes.featured}>
    <h2>Featured Article Posts</h2>
    <div className={classes.postContainer}>
      {featuredPosts.map((post) => (
        <div key={post.id} className={classes.postCard}>
          <div className={classes.postContent}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Button variant="secondary" className={classes.btn} >Read More →</Button>
          </div>
        </div>
      ))}
    </div>
  </section>
    </React.Fragment>
  );
};

export default Featured;
