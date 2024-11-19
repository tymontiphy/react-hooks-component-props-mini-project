import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
    const posts = [
      { id: 1, title: "First Post", date: "March 5, 2023", preview: "This is a preview of the first post." },
      { id: 2, title: "Second Post", preview: "This is a preview of the second post." }, // No date provided
      { id: 3, title: "Third Post", date: "April 10, 2023", preview: "This is a preview of the third post." },
    ];
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name="Blog Title" />
      <About 
        image="https://via.placeholder.com/215"
        about="This blog shares insights and stories about various topics."
      />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
