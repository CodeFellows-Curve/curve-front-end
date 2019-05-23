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
  // Joseph's action -----------------------------------
  /*
  const competencies = {}

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const { category } = node.frontmatter
    if (competencies[category]) {
      const { proficiency } = node.frontmatter
      if (competencies[category][proficiency]) {
        competencies[category][proficiency].push(node)
      } else {
        competencies[category][proficiency] = [node]
      }
    } else {
      competencies[category] = {}
      const { proficiency } = node.frontmatter
      competencies[category][proficiency] = [node]
    }
  })

  return {
    data: competencies,
    type: 'PULL_COMPETENCIES',
  }
*/
  // New action -----------------------------------

  return {
    type: 'PULL_COMPETENCIES',
    payload: data
  }
}
