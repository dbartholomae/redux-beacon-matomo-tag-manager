import { test, expect } from '@playwright/test'

test('runs the tag on pageview', async ({ page }) => {
  const messages: string[] = []
  page.on('console', message => {
    messages.push(message.text())
  })
  await page.goto('/')
  await expect(messages).toContain('Tag manager loaded')
})

test('runs the tag on custom event', async ({ page }) => {
  const messages: string[] = []
  page.on('console', message => {
    messages.push(message.text())
  })
  await page.goto('/')
  await expect(messages).toContain('Integration test event triggered')
})
