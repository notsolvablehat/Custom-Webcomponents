import { test, expect } from "@playwright/test";

test("Google Page Has Correct Title", async ({ page }) => {
  await page.goto("https://www.google.com");

  await expect(page).toHaveTitle("Google");
});

test("Google Should Be Offered in Other Languages", async ({ page }) => {
  await page.goto("https://www.google.com");

  await expect(page.getByText("Google offered in")).toBeVisible();
});

// Flaky test
test("A Flaky Test", async () => {
  const value = Math.random();

  expect(value).toBeGreaterThan(0.7);
});

// Intentional failure
test("A Failing Test", async () => {
  expect(10).toBe(5);
});
