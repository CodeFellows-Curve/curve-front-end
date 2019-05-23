// Example markdown data to process
import exDataJSON from './ex-mardown-data'

// exDataJSON.data.allMarkdownRemark.edges[0] //?

export default function formatMarkdownData(mdData) {
  let formattedData = mdData.data.allMarkdownRemark.edges.reduce(
    (acc, curr, idx) => {
      let competency = curr.node.frontmatter.category
      let proficiency = curr.node.frontmatter.displayName.toUpperCase().replace(/ /g, '_')
      let milestone = curr.node.frontmatter.milestone
      let description = curr.node.frontmatter.summary

      acc[proficiency] = {}
      // acc[competency]= {}

      return acc;
      
    },
    {}
  )

  return formattedData
}

// formatMarkdownData(exDataJSON) //?
let results =  formatMarkdownData(exDataJSON)//?
Object.keys(results).length; //?
// Shape of output
const tracks = {
  // BUSINESS ACUMEN COMPETENCY --------------------
  MISSION_AND_VISION: {
    displayName: 'Mission and Vision',
    category: 'A',
    description:
      'Makes decisions that align work to support the company’s and product’s vision and goals, along with the team KPIs.',
    milestones: [
      {
        summary:
          'Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
    ],
  },

  CUSTOMER_ORIENTATION: {
    displayName: 'Customer Orientation',
    category: 'A',
    description:
      'Seeks customer interaction opportunities, as a customer advocate, to anticipate and discover their needs. Uses detailed information and data about the customer to deliver high quality results and add value. Views features as part of an integrated customer experience.',
    milestones: [
      {
        summary:
          'Milestone 1 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 2 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 3 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 4 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
      {
        summary:
          'Milestone 5 summary. Wonderwall tommy hilfiger mr. jones and me tell each other fairy tales berry lips, track jackets flannel shirts tom hanks.',
        signals: [
          'Signal 1. Super mario world ripped jeans paper fortune teller.',
          'Signal 2. Super mario world ripped jeans paper fortune teller.',
          'Signal 3. Super mario world ripped jeans paper fortune teller.',
        ],
        examples: [
          'Example 1. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 2. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
          'Example 3. Sports utility vehicles cut-off jean shorts armageddon george michael renting movies at a store.',
        ],
      },
    ],
  },
}
