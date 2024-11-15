import { expect, test } from '@playwright/test';
import { SearchPage } from './../pages/SearchPage';

test.only('Verify search results', async ({page}) => {
    test.slow();
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await expect(searchPage.lbl_pageHeading).toBeVisible();
    await expect(searchPage.lbl_searchHeading).toBeVisible();
    await expect(searchPage.tf_searchFeild).toBeVisible();
    await searchPage.enterSearchTerm("locatie in Groningen");
    await searchPage.clickSearchButton();

    const element = await searchPage.resultCount;
    const textContent = await element.textContent();
    expect(textContent).not.toContain('0');
    await expect(searchPage.searchResultText).toContainText("locatie in Groningen");
    
})