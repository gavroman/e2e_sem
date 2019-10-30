import DefaultPage from '../default';

class FoldersPage extends DefaultPage {
	constructor() {
		super('folders')
	}

	get locators() {
		const container = '.sidebar .nav-folders';
		return {
			container,
			folderByName: (folderName) => container + ` a[href="${folderName}"]`
		}
	}

	/**
	 * Клик по любой папке, если сайдбар не узкий
	 * @param {string} folderName
	 */
	clickFolderByName(folderName) {
		const locator = this.locators.folderByName(folderName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new FoldersPage();
