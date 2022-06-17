import {greeting} from '../src/main'
import {expect, test} from '@jest/globals'

test('dummy test', async () => {
  const foo = await greeting('Max')
  await expect(foo).toEqual('Hello, Max!')
})
