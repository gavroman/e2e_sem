import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators () {
		const container = '.dataset-letters';

		return {
			container
		}
	}

	waitForDatasetLetters() {
		this.page.waitForVisible(this.locators.container);
	}
}

export default new LettersPage();
