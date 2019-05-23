// Helper function to convert numbers into capital letters (string)
function toLetters(num) {
  // 1=A, 2=B, ... 26=Z, 27=AA, 28=AB
  let mod = num % 26,
    pow = (num / 26) | 0,
    out = mod ? String.fromCharCode(64 + mod) : (--pow, 'Z')
  return pow ? toLetters(pow) + out : out
}

export default function formatGraphQLData(graphQLData) {
  let categoryPoints = []

  // Reducer that goes over every Competency ("category")
  return graphQLData.review[0].category.reduce(
    (acc, competency, idx) => {
      // Start the "total competency points" at 0
      categoryPoints[idx] = { points: 0 }

      // Reducer that goes over every Proficiency ("subcategory") within a Competency
      let currMilestones = competency.subcategory.reduce(
        (milestones, proficiency) => {
          // Set the "milestoneByTrack" obj key for this Competency (proficiency group) to all caps & snake case
          acc.milestoneByTrack[
            proficiency.subCategoryName.toUpperCase().replace(/ /g, '_')
          ] = proficiency.score

          // Add to the "grand total" of points across all proficiencies
          acc.totalPoints += proficiency.score

          categoryPoints[idx] = {
            // Add a letter key for the Competency (A, B, C, etc...)
            categoryId: toLetters(idx + 1),
            // Add to the total points for this Competency
            points: proficiency.score + categoryPoints[idx].points,
          }

          return milestones
        },
        {}
      )

      // Accumulate the milestoneByTrack object
      acc.milestoneByTrack = { ...acc.milestoneByTrack, ...currMilestones }

      // Set the focusedTrackId with the first "track" (Competency) in the milestoneByTrack obj
      acc.focusedTrackId = Object.keys(acc.milestoneByTrack)[0]

      // Accumulate the categoryPoints array
      acc.categoryPoints = [...acc.categoryPoints, categoryPoints[idx]]

      return acc
    },

    // Initial accumulator shape -- see initial state in src/reducers/graph-reducer.js
    {
      name: graphQLData.name,
      title: 'Hard-coded Title',
      milestoneByTrack: {},
      focusedTrackId: '',
      totalPoints: 0,
      categoryPoints: [],
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
  )
}

// Example data from graphQL query
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

// console.log(formatGraphQLData(exData))
