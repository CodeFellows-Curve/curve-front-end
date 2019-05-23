// Helper function to convert numbers into capital letters (string)
function toLetters(num) {
  // 1=A, 2=B, ... 26=Z, 27=AA, 28=AB
  let mod = num % 26,
    pow = (num / 26) | 0,
    out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z')
  return pow ? toLetters(pow) + out : out
}

export default function formatGraphQLData(graphQLData) {
  // Creates array of objects with keys of each proficiency name and score
  let allSubcategoriesArray = graphQLData.review[0].category.reduce(
    (acc, category, idx) => {
      return (acc = [...acc, ...category.subcategory])
    },
    []
  )

  // Creates obj with key/value of each proficiency/score and calculates total points
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

  // Creates an array of objects (1 for each competency) with the comptency name & total points for that competency
  let categoryPoints = graphQLData.review[0].category.reduce(
    (acc, category, idx) => {
      let categoryId = toLetters(idx + 1)

      let points = category.subcategory.reduce((acc, subcat, idx) => {
        return (acc += subcat.score)
      }, 0)
      return (acc = [...acc, { categoryId, points }])
    },
    []
  )

  // OUTPUT -- Same shape as initial state in 'reducers/graph-reducer.js'
  let formattedData = {
    name: graphQLData.name,
    title: 'Hard-coded Title',
    milestoneByTrack: milestones.milestoneByTrack,
    focusedTrackId: Object.keys(milestones.milestoneByTrack)[0],
    totalPoints: milestones.totalPoints,
    categoryPoints,
    eligibleTitles: [
      'Engineer I',
      'Engineer II',
      'Senior Engineer',
      'Group Lead',
      'Staff Engineer',
      'Senior Group Lead',
      'Principal Engineer',
      'Director of Engineering',
    ],
  }

  return formattedData
}

// Example data from graphQL query
/*
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
*/
