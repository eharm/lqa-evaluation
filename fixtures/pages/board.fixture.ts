import { Page as BasePage, Locator } from "@playwright/test";

export class Board {
    constructor(private readonly page: BasePage) {

    }

    /**
     * Finds a ticket based on the column and name of the ticket
     * @param column the name of the column to search in
     * @param ticket the name of the ticket
     * @returns the locator of the specified ticket
     */
    public findTicket(column: string, ticket: string): Locator {
        return this.page.getByRole('heading', { name: column })
            .locator('..')
            .getByText(ticket)
            .locator('..');
    }

    /**
     * Selects the project board to display
     * @param project name of the projec to select
     */
    async selectProject(project: string) {
        await this.page.getByRole('button', { name: new RegExp(`^${project}`)}).click();
    }

}