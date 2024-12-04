import { Page as BasePage, Locator } from "@playwright/test";

export class Login {
    constructor(private readonly page: BasePage) {

    }

    //#region properties
    get username(): Locator { return this.page.getByLabel('Username'); };
    get password(): Locator { return this.page.getByLabel('Password'); };
    get signInBtn(): Locator { return this.page.getByRole('button', { name: /sign in/i }); };
    //#endregion

    //#region methods
    /**
     * enters the username and password then clicks 'Sign in'
     * @param username username to log in with
     * @param password password to log in with
     */
    async login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signInBtn.click();
    }
    //#endregion
}