import { test as base } from '@playwright/test';
import { Login } from './pages/login.fixture';

type Fixture = {
    login: Login
}

export const test = base.extend<Fixture>({
    login: async ({ page }, use) => {
        await use(new Login(page));
    }
})

export { expect, type Page } from '@playwright/test';