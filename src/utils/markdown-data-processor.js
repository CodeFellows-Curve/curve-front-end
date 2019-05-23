// Example markdown data to process
import exDataJSON from './ex-mardown-data'
// exDataJSON.data.allMarkdownRemark.edges[0] //?
// exDataJSON.data.allMarkdownRemark.edges[0].node.milestones //?

// exDataJSON.data.allMarkdownRemark.edges[0] //?

// Helper function to get a capital letter from each competency ("category" or group of proficiencies/subcategories)
const letterFromCompetency = competency => {
  switch (competency) {
    case 'Business Acumen':
      return 'A'

    case 'Growth Mindset':
      return 'B'

    case 'Leadership':
      return 'C'

    case 'Craft':
      return 'D'

    case 'Quality':
      return 'E'

    case 'Communication':
      return 'F'

    case 'Teamwork':
      return 'G'

    case 'Results':
      return 'H'

    default:
      return 'not found-----------------------------------------'
  }
}

// Helper function to parse through raw markdown
const milestonesArrMaker = (milestoneNum, node) => {
  let milestonesArr = []
  // node

  // let summaryMd = milestoneMd.indexOf('###'); //?

  for (let i = 0; i < 5; i++) {
    // let start = milestoneMd.indexOf('###');
    // let end = milestoneMd.indexOf('####');
    // let summary = milestoneMd.substring(start, end);
    // milestonesArr.push({summary, signals: [], examples:[]})
  }

  return milestonesArr
}

export default function formatMarkdownData(mdData) {
  let milestonesData = {}

  let formattedData = mdData.data.allMarkdownRemark.edges.reduce(
    (acc, curr, idx) => {
      let displayName = curr.node.frontmatter.displayName
      let category = letterFromCompetency(curr.node.frontmatter.category)
      let proficiencyAllCaps = curr.node.frontmatter.displayName
        .toUpperCase()
        .replace(/ /g, '_')
      let description = curr.node.frontmatter.summary // description of proficiency

      let milestones = milestonesArrMaker(
        curr.node.frontmatter.milestone,
        curr.node
      )
    
      !milestonesData.hasOwnProperty(proficiencyAllCaps)
        ? milestonesData[proficiencyAllCaps] = [curr.node.milestones]
        : console.log('GETTIN IT --- ')
        
      // console.log('already has it')
      // milestonesData[proficiencyAllCaps] = 'push(curr.node.milestones)'
      // console.log(milestonesData)

      acc[proficiencyAllCaps] = {
        displayName,
        category,
        description,
        milestones,
      }
      return acc
    },
    {}
  )

  return formattedData
}

// formatMarkdownData(exDataJSON) //?
let results = formatMarkdownData(exDataJSON).JUDGEMENT //?
Object.keys(results).length //?
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
