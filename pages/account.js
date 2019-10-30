import DefaultPage from './default';

class MainPage extends DefaultPage {
	constructor() {
		super('account')
	}

	get locators() {
		return {
			login: 'input[name="Login"]',
			password: 'input[name="Password"]',
			nextButton: '[data-test-id="next-button"]',
			submitButton: '[data-test-id="submit-button"]',
		}
	}

	fillLoginForm (username) {
		this.page.waitForVisible(this.locators.login);
		this.page.click(this.locators.login);
		this.page.setValue(this.locators.login, username);
	}

	fillPasswordForm (password) {
		this.page.waitForVisible(this.locators.password);
		this.page.click(this.locators.password);
		this.page.setValue(this.locators.password, password);
	}

	next() {
		this.page.waitForVisible(this.locators.nextButton);
		this.page.click(this.locators.nextButton)
	}

	submit() {
		this.page.waitForVisible(this.locators.submitButton);
		this.page.click(this.locators.submitButton)
	}

}

export default new MainPage();
