//empy array file to keep track of our data

const notes = new Array(15)
  .fill(1)
  .map((_, i) => ({
    id: Date.now() + i,
    title: `Note ${i}`
  }))

module.exports = notes;