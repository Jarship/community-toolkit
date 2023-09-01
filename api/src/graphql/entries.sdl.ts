export const schema = gql`
  type Entry {
    id: String!
    category: Category!
    table: Table!
    categoryId: String!
    tableId: String!
  }

  type Query {
    entries: [Entry!]! @requireAuth
    entry(id: String!): Entry @requireAuth
  }

  input CreateEntryInput {
    categoryId: String!
    tableId: String!
  }

  input UpdateEntryInput {
    categoryId: String
    tableId: String
  }

  type Mutation {
    createEntry(input: CreateEntryInput!): Entry! @requireAuth
    updateEntry(id: String!, input: UpdateEntryInput!): Entry! @requireAuth
    deleteEntry(id: String!): Entry! @requireAuth
  }
`
