import type { Table } from '@prisma/client'

import { tables, table, createTable, updateTable, deleteTable } from './tables'
import type { StandardScenario } from './tables.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('tables', () => {
  scenario('returns all tables', async (scenario: StandardScenario) => {
    const result = await tables()

    expect(result.length).toEqual(Object.keys(scenario.table).length)
  })

  scenario('returns a single table', async (scenario: StandardScenario) => {
    const result = await table({ id: scenario.table.one.id })

    expect(result).toEqual(scenario.table.one)
  })

  scenario('creates a table', async () => {
    const result = await createTable({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a table', async (scenario: StandardScenario) => {
    const original = (await table({ id: scenario.table.one.id })) as Table
    const result = await updateTable({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a table', async (scenario: StandardScenario) => {
    const original = (await deleteTable({ id: scenario.table.one.id })) as Table
    const result = await table({ id: original.id })

    expect(result).toEqual(null)
  })
})
