document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      title: "5 JavaScript Tricks You Didn't Know",
      image: "post1.jpg",
      content: "Discover some lesser-known but useful tricks you can use in JavaScript to improve your code efficiency."
    },
    {
      title: "CSS Grid vs Flexbox",
      image: "post2.jpg",
      content: "Both CSS Grid and Flexbox are powerful layout tools. This post compares their strengths and use-cases."
    }
  ];

  const postContainer = document.getElementById("blog-posts");

  posts.forEach(post => {
    const postEl = document.createElement("article");
    postEl.className = "post";
    postEl.innerHTML = `
      <img src="${post.image}" alt="${post.title}" loading="lazy">
      <div class="post-content">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
      </div>
    `;
    postContainer.appendChild(postEl);
  });
});
