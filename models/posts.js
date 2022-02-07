module.exports = {
  getPost() {
    return posts
  },

  savePost(date, description) {
    posts.push({ id: generatorId(), date, description })
  },

  removePost(id) {
    posts.forEach((element, index) => {
      element.id == id ? posts.splice(index, 1) : 0
    })
  }
}

var posts = [{}]

function generatorId() {
  return Math.random().toString(32).substring(2)
}
