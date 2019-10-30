import DefaultSteps from '../default';
import page from '../../pages/letters';

class LettersSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	waitForList() {
		this.page.waitForDatasetLetters();
	}
}

export default new LettersSteps();
