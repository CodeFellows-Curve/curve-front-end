export default function formatGraphQLData(graphQLData) {
  let allSubcategoriesArray = graphQLData.review[0].category.reduce(
    (acc, category, idx) => {
      return (acc = [...acc, ...category.subcategory])
    },
    []
  )

  let milestones = allSubcategoriesArray.reduce(
    (acc, subCategory) => {
      let name = subCategory.subCategoryName.toUpperCase().replace(/ /g, '_')
      let score = subCategory.score
      let milestoneByTrack = { ...acc.milestoneByTrack, [name]: score }
      let totalPoints = acc.totalPoints + score
      return (acc = { ...acc, milestoneByTrack, totalPoints })
    },
    { milestoneByTrack: {}, totalPoints: 0 }
  )
  // let categoryPoints = graphQLData.review[0].category
  let categoryPoints = graphQLData.review[0].category.reduce(
    (acc, category, idx) => {
      // let points = category.subCategory.reduce((acc, sub))
      // category.categoryName; //?
      category.subcategory.reduce((acc, subcat, idx) => {
        subcat //?
      }) //?
      return (acc = [...acc, { categoryId: category.categoryName, points: 0 }])
    },
    []
  )

  /*
  categoryPoints: [
    { categoryId: 'A', points: 2 },
    { categoryId: 'B', points: 7 },
    { categoryId: 'C', points: 9 },
    { categoryId: 'D', points: 4 },
    { categoryId: 'E', points: 2 },
    { categoryId: 'F', points: 4 },
    { categoryId: 'G', points: 1 },
    { categoryId: 'H', points: 12 },
  ],
  */

  // OUTPUT --------------------------------------------------------------------------------
  let formattedData = {
    // name: graphQLData.name,
    // title: 'Hard-coded Title',
    // milestoneByTrack: milestones.milestoneByTrack,
    // focusedTrackId: Object.keys(milestones.milestoneByTrack)[0],
    // totalPoints: milestones.totalPoints,
    categoryPoints,
  }

  return formattedData
}

let exData = {
  name: 'Nate',
  review: [
    {
      category: [
        {
          categoryName: 'Business Acumen',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Mission and Vision',
              score: 1,
            },
            {
              subCategoryName: 'Customer Orientation',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Growth Mindset',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Adaptability',
              score: 1,
            },
            {
              subCategoryName: 'Curiousity',
              score: 1,
            },
            {
              subCategoryName: 'Constant Improvement',
              score: 1,
            },
            {
              subCategoryName: 'Handling Ambiguity',
              score: 1,
            },
            {
              subCategoryName: 'Inclusivity',
              score: 1,
            },
            {
              subCategoryName: 'Openness',
              score: 1,
            },
            {
              subCategoryName: 'Ambition and Initiative',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Leadership',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Accountability',
              score: 1,
            },
            {
              subCategoryName: 'Integrity',
              score: 1,
            },
            {
              subCategoryName: 'Ownership',
              score: 1,
            },
            {
              subCategoryName: 'Mentorship',
              score: 1,
            },
            {
              subCategoryName: 'Networking',
              score: 1,
            },
            {
              subCategoryName: 'Succession',
              score: 1,
            },
            {
              subCategoryName: 'Health and Safety',
              score: 1,
            },
            {
              subCategoryName: 'Confidence',
              score: 1,
            },
            {
              subCategoryName: 'Credibility',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Craft',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Technical',
              score: 1,
            },
            {
              subCategoryName: 'Process',
              score: 1,
            },
            {
              subCategoryName: 'Innovation',
              score: 1,
            },
            {
              subCategoryName: 'Tool Proficiency',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Quality',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Judgement',
              score: 1,
            },
            {
              subCategoryName: 'Root Cause Resolution',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Communication',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Writing',
              score: 1,
            },
            {
              subCategoryName: 'Reading',
              score: 1,
            },
            {
              subCategoryName: 'Speaking',
              score: 1,
            },
            {
              subCategoryName: 'Listening',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Teamwork',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Collaboration',
              score: 1,
            },
          ],
        },
        {
          categoryName: 'Results',
          overallScore: 1,
          subcategory: [
            {
              subCategoryName: 'Agile',
              score: 1,
            },
            {
              subCategoryName: 'Organizational',
              score: 1,
            },
            {
              subCategoryName: 'Creative',
              score: 1,
            },
            {
              subCategoryName: 'Project Execution',
              score: 1,
            },
            {
              subCategoryName: 'Analytical Thinking',
              score: 1,
            },
            {
              subCategoryName: 'Prioritization',
              score: 1,
            },
            {
              subCategoryName: 'Problem Solving',
              score: 1,
            },
            {
              subCategoryName: 'Incremental Delivery',
              score: 1,
            },
            {
              subCategoryName: 'Decision Making',
              score: 1,
            },
            {
              subCategoryName: 'Appropriate Autonomy',
              score: 1,
            },
            {
              subCategoryName: 'Planning and Estimating',
              score: 1,
            },
            {
              subCategoryName: 'Dependability and Reliability',
              score: 1,
            },
          ],
        },
      ],
    },
  ],
}

let initialState = {
  graphQLRawData: null,
  name: 'Daenerys Targaryen',
  title: 'Mother of Dragons',
  milestoneByTrack: {
    // BUSINESS ACUMEN COMPETENCY --------------------
    MISSION_AND_VISION: 1,
    CUSTOMER_ORIENTATION: 1,

    // GROWTH MINDSET COMPETENCY --------------------
    ADAPTABILITY: 1,
    CURIOSITY: 1,
    CONSTANT_IMPROVEMENT: 1,
    HANDLING_AMBIGUITY: 1,
    INCLUSIVITY: 1,
    OPENNESS: 1,
    AMBITION_AND_INITIATIVE: 1,

    // LEADERSHIP COMPETENCY --------------------
    ACCOUNTABILITY: 1,
    INTEGRITY: 1,
    OWNERSHIP: 1,
    MENTORSHIP: 1,
    NETWORKING: 1,
    SUCCESSION: 1,
    HEALTH_AND_SAFETY: 1,
    CONFIDENCE: 1,
    CREDIBILITY: 1,

    // CRAFT COMPETENCY --------------------
    TECHNICAL: 1,
    PROCESS: 1,
    INNOVATION: 1,
    TOOL_PROFICIENCY: 1,

    // QUALITY COMPETENCY --------------------
    JUDGEMENT: 1,
    ROOT_CAUSE_RESOLUTION: 1,

    // COMMUNICATION COMPETENCY --------------------
    WRITING: 1,
    READING: 1,
    SPEAKING: 1,
    LISTENING: 1,

    // TEAMWORK COMPETENCY --------------------
    COLLABORATION: 1,

    // RESULTS COMPETENCY --------------------
    AGILE: 1,
    ORGANIZATIONAL: 1,
    CREATIVE: 1,
    PROJECT_EXECUTION: 1,
    ANALYTICAL_THINKING: 1,
    PRIORITIZATION: 1,
    PROBLEM_SOLVING: 1,
    INCREMENTAL_DELIVERY: 1,
    DECISION_MAKING: 1,
    APPROPRIATE_AUTONOMY: 1,
    PLANNING_AND_ESTIMATING: 1,
    DEPENDABILITY_AND_RELIABILITY: 1,
  },
  focusedTrackId: 'MISSION_AND_VISION',
  totalPoints: 41,
  categoryPoints: [
    { categoryId: 'A', points: 2 },
    { categoryId: 'B', points: 7 },
    { categoryId: 'C', points: 9 },
    { categoryId: 'D', points: 4 },
    { categoryId: 'E', points: 2 },
    { categoryId: 'F', points: 4 },
    { categoryId: 'G', points: 1 },
    { categoryId: 'H', points: 12 },
  ],
  eligibleTitles: [
    'Mother of Dragons',
    'Breaker of Chains',
    'Protector of the Realm',
  ],
  // tracks,
  // trackIds,
}

console.log(formatGraphQLData(exData))
