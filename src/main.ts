import * as core from '@actions/core'

export async function greeting(name: string): Promise<string> {
  return `Hello, ${name}!`
}

async function run(): Promise<void> {
  try {
    const guestName = core.getInput('guest_name')
    core.info(await greeting(guestName))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
