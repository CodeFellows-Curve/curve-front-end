export const pullMarkdown = data => {
  /***
   *
   * Dynamically create an object with the following shape
   * from the data in the competencies markdown files:
   *
   * category: {
   *   proficiency: [milestone, milestone, milestone, ...],
   *   proficiency: [milestone, milestone, milestone, ...],
   *   ...
   * }
   *
   ***/
  const competencies = {}

  data.allMarkdownRemark.edges.forEach(num => {
    const { category } = num.node.frontmatter
    if (competencies[category]) {
      const { proficiency } = num.node.frontmatter
      if (competencies[category][proficiency]) {
        competencies[category][proficiency].push(num.node)
      } else {
        competencies[category][proficiency] = [num.node]
      }
    } else {
      competencies[category] = {}
      const { proficiency } = num.node.frontmatter
      competencies[category][proficiency] = [num.node]
    }
  })

  return {
    data,
    type: 'PULL_COMPETENCIES',
  }
}
