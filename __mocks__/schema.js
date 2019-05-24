const gql = String.raw;

const typeDefs = gql`

schema {
  query: IndividualQuery
  mutation: Mutation
}

type CategoryCommentType {
  categoryId: Int!
  content: String!
  id: Int!
  subject: String!
  userId: Int!
}

input CategoryInputType {
  categoryname: String!
  overallscore: Int = null
  reviewId: Int = null
}

type CategoryType {
  categorycomment(last: Int = null): [CategoryCommentType]
  categoryName: String!
  id: Int!
  overallScore: Int!
  reviewId: Int!
  subcategory(last: Int = null): [SubCategoryType]
}

scalar Date

scalar DateTime

scalar DateTimeOffset

scalar Decimal

input IndividualInputType {
  email: String = null
  name: String!
  competencyScore: Int = null
  currentLevel: Int = null
  pointsToNext: Int = null
}

type IndividualQuery {
  individual(name: String = null): IndividualType
  individualemail(email: String = null): IndividualType
  individuals: [IndividualType]
}

type IndividualType {
  competencyScore: Int!
  currentLevel: Int!
  email: String!
  id: Int!
  name: String!
  pointsToNext: Int!
  review(last: Int = null): [ReviewType]
}

scalar Milliseconds

type Mutation {
  addCategory(category: CategoryInputType!): CategoryType
  addIndividual(individual: IndividualInputType!): IndividualType
  addReview(review: ReviewInputType!): ReviewType
  addsubcategory(subcategory: SubCategoryInputType!): SubCategoryType
  deleteCategory(id: ID!): CategoryType
  deleteIndividual(id: ID!): IndividualType
  deleteReview(id: ID!): ReviewType
  deletesubcategory(id: ID!): SubCategoryType
  editCategory(category: CategoryInputType!): CategoryType
  editIndividual(individual: IndividualInputType!): IndividualType
  editReview(review: ReviewInputType!): ReviewType
  editsubcategory(subcategory: SubCategoryInputType!): SubCategoryType
}

type ReviewCommentType {
  content: String!
  id: Int!
  reviewId: Int!
  subject: String!
  userId: Int!
}

input ReviewInputType {
  reviewDate: DateTime = null
  individualId: Int = null
  overallScore: Int = null
}

type ReviewType {
  category(last: Int = null): [CategoryType]
  id: Int!
  individualId: Int!
  overallScore: Int!
  reviewcomment(last: Int = null): [ReviewCommentType]
  reviewDate: Date!
}

scalar Seconds

type SubCategoryCommentType {
  content: String!
  id: Int!
  subCategoryId: Int!
  subject: String!
  userId: Int!
}

input SubCategoryInputType {
  subCategoryName: String!
  score: Int = null
  categoryId: Int = null
}

type SubCategoryType {
  categoryId: Int!
  id: Int!
  score: Int!
  subcategorycomment(last: Int = null): [SubCategoryCommentType]
  subCategoryName: String!
}`

 module.exports = typeDefs;