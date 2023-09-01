export const schema = gql`
  type Table {
    id: String!
    name: String!
    entries: [Entry]!
    categories: [Category]!
  }

  type Query {
    tables: [Table!]! @requireAuth
    table(id: String!): Table @requireAuth
  }

  input CreateTableInput {
    name: String!
  }

  input UpdateTableInput {
    name: String
  }

  type Mutation {
    createTable(input: CreateTableInput!): Table! @requireAuth
    updateTable(id: String!, input: UpdateTableInput!): Table! @requireAuth
    deleteTable(id: String!): Table! @requireAuth
  }
`
