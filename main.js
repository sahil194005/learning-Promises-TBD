function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}

function deletePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post deleted")
    }, 1000)
  })
}

function getAllPosts() {
  // Simulating fetching all posts from a database
  return ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5"]
}

const posts = getAllPosts()

const createPostPromises = posts.map((post) => createPost(post))

Promise.all(createPostPromises)
  .then((createdPosts) => {
    console.log("Posts created:", createdPosts)

    return updateLastUserActivityTime()
  })
  .then((activityTime) => {
    console.log("Last user activity time:", activityTime)

    const lastPost = posts[posts.length - 1]
    return deletePost(lastPost)
  })
  .then((deleteResult) => {
    console.log("Post deletion result:", deleteResult)

    const updatedPosts = getAllPosts()
    console.log("Updated posts:", updatedPosts)
  })
  .catch((error) => {
    console.error("Error:", error)
  })
