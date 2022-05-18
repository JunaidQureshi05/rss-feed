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
        {posts.map((post) => (
          <div>
            <h3>{post.title}</h3>
            <Link href="#">
              <a href="">see post</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
