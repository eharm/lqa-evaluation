import { test, expect } from '../fixtures/test';
import fs from 'fs';
import { TestData } from '../data/project-board-type';

const testCases = JSON.parse(fs.readFileSync('./data/project-board-tests.json', { encoding: 'utf-8'})).Tests as TestData[]

for (const tc of testCases) {
    test(`Project: ${tc.project} - Ticket: ${tc.ticket}`, async ({ login, board, page }) => {
        await page.goto('/');
        await login.login('not-a-user', 'not-a-password');
        await board.selectProject(tc.project);
        await expect(page.locator('css=header').getByRole('heading')).toContainText(tc.project);
        const ticket = board.findTicket(tc.column, tc.ticket);
        await expect(ticket).toHaveCount(1);
        // Verify count of labels
        const labels = ticket.locator('css=.rounded-full');
        await expect(labels).toHaveCount(tc.tags.length);
        for (const tag of tc.tags) {
            await expect(labels.filter({ hasText: tag })).toBeVisible();
        }
    })
}
