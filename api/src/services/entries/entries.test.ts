import type { Entry } from '@prisma/client'

import {
  entries,
  entry,
  createEntry,
  updateEntry,
  deleteEntry,
} from './entries'
import type { StandardScenario } from './entries.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('entries', () => {
  scenario('returns all entries', async (scenario: StandardScenario) => {
    const result = await entries()

    expect(result.length).toEqual(Object.keys(scenario.entry).length)
  })

  scenario('returns a single entry', async (scenario: StandardScenario) => {
    const result = await entry({ id: scenario.entry.one.id })

    expect(result).toEqual(scenario.entry.one)
  })

  scenario('creates a entry', async (scenario: StandardScenario) => {
    const result = await createEntry({
      input: {
        categoryId: scenario.entry.two.categoryId,
        tableId: scenario.entry.two.tableId,
      },
    })

    expect(result.categoryId).toEqual(scenario.entry.two.categoryId)
    expect(result.tableId).toEqual(scenario.entry.two.tableId)
  })

  scenario('updates a entry', async (scenario: StandardScenario) => {
    const original = (await entry({ id: scenario.entry.one.id })) as Entry
    const result = await updateEntry({
      id: original.id,
      input: { categoryId: scenario.entry.two.categoryId },
    })

    expect(result.categoryId).toEqual(scenario.entry.two.categoryId)
  })

  scenario('deletes a entry', async (scenario: StandardScenario) => {
    const original = (await deleteEntry({ id: scenario.entry.one.id })) as Entry
    const result = await entry({ id: original.id })

    expect(result).toEqual(null)
  })
})
