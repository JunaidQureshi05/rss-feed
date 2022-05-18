import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPost = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json();
      setPosts(data);
    };
    getPost();
  }, []);
  return (
    <div>
      <h1>Latest posts</h1>
      <div>
        {posts.map((post, idx) => (
          <div key={idx}>
            <h3>{post.title}</h3>
            <Link href="#">
              <a className="link" href="">
                see post
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="#">
          <a href="" className="link">
            breaking news post
          </a>
        </Link>
      </div>
      <div>
        <a className="link" href="">
          This is updates by me after making rss feed
        </a>
      </div>
    </div>
  );
};

export default Posts;
