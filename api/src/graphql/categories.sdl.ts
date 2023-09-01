export const schema = gql`
  type Category {
    id: String!
    name: String!
    entries: [Entry]!
    Table: Table
    tableId: String
  }

  type Query {
    categories: [Category!]! @requireAuth
    category(id: String!): Category @requireAuth
  }

  input CreateCategoryInput {
    name: String!
    tableId: String
  }

  input UpdateCategoryInput {
    name: String
    tableId: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: String!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: String!): Category! @requireAuth
  }
`
