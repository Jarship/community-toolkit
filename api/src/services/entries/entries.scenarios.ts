import type { Prisma, Entry } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EntryCreateArgs>({
  entry: {
    one: {
      data: {
        category: { create: { name: 'String' } },
        table: { create: { name: 'String' } },
      },
    },
    two: {
      data: {
        category: { create: { name: 'String' } },
        table: { create: { name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Entry, 'entry'>
