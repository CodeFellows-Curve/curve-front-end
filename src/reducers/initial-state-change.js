// Initial state with all categories ------ OLD MODEL

// let initialState = {
//   userData:{
//     name: 'Hannah Ingham',
//     email: 'HannahTA@cf.com',
//     date: 20190521,
//     title: 'TA',

//     coreCompetencies: [
//       {BUSINESS_ACUMEN: {
//         title: 'Business Acumen',
//         proficiencies: {
//           MISSION_AND_VISION:{
//             title: 'Mission and Vision Alignment',
//             score: 4,
//           },
//           CUSTOMER_ORIENTATION:{
//             title: 'Customer Orientation',
//             score: 4,
//           }
//         }
//       }},
//       {GROWTH_MINDSET:{
//         title: 'Growth Mindset',
//         proficiencies: {
//           ADAPTABILITY: {
//             title: 'Adaptability',
//             score: 4,
//           },
//           CURIOSITY: {
//             title: 'Curiosity',
//             score: 4,
//           },
//           CONSTANT_IMPROVEMENT: {
//             title: 'Constant Improvement',
//             score: 4,
//           },
//           HANDLING_AMBIGUITY: {
//             title: 'Handling Ambiguity',
//             score: 4,
//           },
//           INCLUSIVITY: {
//             title: 'Inclusivity',
//             score: 4,
//           },
//           OPENNESS: {
//             title: 'Adaptability',
//             score: 4,
//           },
//           AMBITION_AND_INITIATIVE: {
//             title: 'Ambition and Initiative',
//             score: 4,
//           },
//         }
//       }},
//       {LEADERSHIP:{
//         title: 'Leadership',
//         proficiencies: {
//           ACCOUNTABILITY: {
//             title: 'Accountability',
//             score: 4,
//           },
//           INTEGRITY: {
//             title: 'Integrity',
//             score: 4,
//           },
//           OWNERSHIP: {
//             title: 'Ownership',
//             score: 4,
//           },
//           MENTORSHIP: {
//             title: 'Mentorship',
//             score: 4,
//           },
//           NETWORKING: {
//             title: 'Networking',
//             score: 4,
//           },
//           SUCCESSION: {
//             title: 'Succession',
//             score: 4,
//           },
//           HEALTH_AND_SAFETY: {
//             title: 'Health and Safety',
//             score: 4,
//           },
//           CONFIDENCE: {
//             title: 'Confidence',
//             score: 4,
//           },
//           CREDIBILITY: {
//             title: 'Credibility',
//             score: 4,
//           },
//         },
//       }},
//       {CRAFT:{
//         title: 'Craft',
//         proficiencies: {
//           TECHNICAL: {
//             title: 'Technical',
//             score: 4,
//           },
//           PROCESS: {
//             title: 'Process',
//             score: 4,
//           },
//           INNOVATION: {
//             title: 'Innovation',
//             score: 4,
//           },
//           TOOL_PROFICIENCY: {
//             title: 'Tool Proficiency',
//             score: 4,
//           },
//         },
//       }},
//       {QUALITY:{
//         title: 'Quality',
//         proficiencies: {
//           JUDGEMENT: {
//             title: 'Judgement',
//             score: 4,
//           },
//           ROOT_CAUSE_RESOLUTION: {
//             title: 'Root Cause Resolution',
//             score: 4,
//           },
//         },
//       }},
//       {COMMUNICATION:{
//         title: 'Communication',
//         proficiencies: {
//           WRITING: {
//             title: 'Writing',
//             score: 4,
//           },
//           READING: {
//             title: 'Reading',
//             score: 4,
//           },
//           SPEAKING: {
//             title: 'Speaking',
//             score: 4,
//           },
//           LISTENING: {
//             title: 'Listening',
//             score: 4,
//           },
//         },
//       }},
//       {TEAMWORK:{
//         title: 'Teamwork',
//         proficiencies: {
//           COLLABORATION: {
//             title: 'Collaboration',
//             score: 4,
//           },
//         },
//       }},
//       {RESULTS:{
//         title: 'Results',
//         proficiencies: {
//           AGILE: {
//             title: 'Agile',
//             score: 4,
//           },
//           ORGANIZATIONAL: {
//             title: 'Organizational',
//             score: 4,
//           },
//           CREATIVE: {
//             title: 'Creative',
//             score: 4,
//           },
//           PROJECT_EXECUTION: {
//             title: 'Project Execution',
//             score: 4,
//           },
//           ANALYTICAL_THINKING: {
//             title: 'Analytical Thinking',
//             score: 4,
//           },
//           PRIORITIZATION: {
//             title: 'Prioritization',
//             score: 4,
//           },
//           PROBLEM_SOLVING: {
//             title: 'Problem Solving',
//             score: 4,
//           },
//           INCREMENTAL_DELIVERY: {
//             title: 'Incremental Delivery',
//             score: 4,
//           },
//           DECISION_MAKING: {
//             title: 'Decision Making',
//             score: 4,
//           },
//           APPROPRIATE_AUTONOMY: {
//             title: 'Appropriate Autonomy',
//             score: 4,
//           },
//           PLANNING_AND_ESTIMATING: {
//             title: 'Planning and Estimating',
//             score: 4,
//           },
//           DEPENDABILITY_AND_RELIABILITY: {
//             title: 'Dependability and Reliability',
//             score: 4,
//           },
//         },
//       }},
//     ]
//   }
// }

let initialState = {
    "data": {
      "individual": {
        "name": "Nate",
        "review": [
          {
            "category": [
              {
                "categoryName": "Business Acumen",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Mission and Vision",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Customer Orientation",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Growth Mindset",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Adaptability",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Curiousity",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Constant Improvement",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Handling Ambiguity",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Inclusivity",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Openness",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Ambition and Initiative",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Leadership",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Accountability",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Integrity",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Ownership",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Mentorship",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Networking",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Succession",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Health and Safety",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Confidence",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Credibility",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Craft",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Technical",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Process",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Innovation",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Tool Proficiency",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Quality",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Judgement",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Root Cause Resolution",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Communication",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Writing",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Reading",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Speaking",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Listening",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Teamwork",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Collaboration",
                    "score": 1
                  }
                ]
              },
              {
                "categoryName": "Results",
                "overallScore": 1,
                "subcategory": [
                  {
                    "subCategoryName": "Agile",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Organizational",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Creative",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Project Execution",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Analytical Thinking",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Prioritization",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Problem Solving",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Incremental Delivery",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Decision Making",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Appropriate Autonomy",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Planning and Estimating",
                    "score": 1
                  },
                  {
                    "subCategoryName": "Dependability and Reliability",
                    "score": 1
                  }
                ]
              }
            ]
          }
        ]
      }
    },
  focusedProficiencyId: 'Mission and Vision',
}

export default initialState;