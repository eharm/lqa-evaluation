import { test as base } from '@playwright/test';
import { Login } from './pages/login.fixture';
import { Board } from './pages/board.fixture';

type Fixture = {
    login: Login,
    board: Board
}

export const test = base.extend<Fixture>({
    login: async ({ page }, use) => {
        await use(new Login(page));
    },
    board: async ({ page }, use) => {
        await use(new Board(page));
    }
})

export { expect, type Page } from '@playwright/test';