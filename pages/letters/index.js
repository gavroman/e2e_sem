import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters', '.dataset-letters')
	}

	get locators () {
		return {
			container: this.container,
			letter: '.llc',
			letterContent: '.layout__letter-content',
		}
	}

	clickLetter () {
		this.page.waitForVisible(this.locators.letter);
		this.page.click(this.locators.letter);
	}

	checkLetterContent () {
		this.page.waitForVisible(this.locators.letterContent);
	}
}

export default new LettersPage();
