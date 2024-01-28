import { expect, test } from 'vitest'
import { dataProvider, assetUrl, filterProvider } from './'

test('assetUrl: return null if mode does not exist', () => {
  expect(assetUrl('does not exists', null)).toBe(null)
})

test('assetUrl: return string if mode exist', () => {
  stubInputs().forEach(input => {
    expect(assetUrl(input.mode, input.item)).toBeTypeOf('string')
  })
})

test('filterProvider: return hash of categories for specific mode', () => {
  expect(filterProvider('pokemon')).toMatchSnapshot()
})

test('filterProvider: return empty array for no-existent mode', () => {
  expect(filterProvider('nothing')).toMatchObject([])
  expect(filterProvider()).toMatchObject([])
})

function stubInputs() {
  return [
    {
      mode: 'flags',
      item: {
        code: "de",
      }
    },
    {
      mode: 'outlines',
      item: {
        continent: "Afrika",
        code: "zm",
      }
    },
    {
      mode: 'pokemon',
      item: {
        generation: 1,
        id: 25,
      }
    },
    {
      mode: 'pokemon_type',
      item: 'grass'
    }
  ]
}
