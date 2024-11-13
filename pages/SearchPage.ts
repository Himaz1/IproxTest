import { Locator, Page } from '@playwright/test';

export class SearchPage
{
    readonly page: Page;
    readonly lbl_pageHeading;
    readonly lbl_searchHeading;
    readonly tf_searchFeild;
    readonly btn_searchButton;
    readonly searchResultText;


    constructor (page: Page)
    {
        this.page = page;
        this.lbl_pageHeading = page.getByRole('heading', { name: 'Woo-verzoeken' });
        this.lbl_searchHeading = page.getByText('Zoekterm');
        this.tf_searchFeild = page.getByLabel('Zoekterm');
        this.btn_searchButton = page.getByRole('button', { name: 'Zoeken' });
        this.searchResultText = page.getByRole('link', { name: 'Dossier Woo-besluit' }).first();
    }

    async goto()
    {
        await this.page.goto("https://portaal.iprox-open.nl/woo-verzoeken");
    }

    async enterSearchTerm(searchTerm:string)
    {
        await this.tf_searchFeild.fill(searchTerm);
    }

    async clickSearchButton()
    {
        await this.btn_searchButton.click();
    }
}