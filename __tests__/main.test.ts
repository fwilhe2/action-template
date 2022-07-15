import {greeting} from '../src/main'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

test('dummy test', async () => {
  const foo = await greeting('Max')
  await expect(foo).toEqual('Hello, Max!')
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', async () => {
  process.env['INPUT_GUEST_NAME'] = 'Michael'
  const nodePath = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  const stdout = cp.execFileSync(nodePath, [ip], options).toString()

  await expect(stdout).toStrictEqual('Hello, Michael!\n')
})
