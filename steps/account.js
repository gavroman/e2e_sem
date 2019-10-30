import DefaultSteps from './default';
import page from '../pages/account';

class MainPageSteps extends DefaultSteps {
	constructor() {
		super(page);
	}

	login() {
		this.page.fillLoginForm(process.env.LOGIN);
		this.page.next();
		this.page.fillPasswordForm(process.env.PASSWORD);
		this.page.submit();
		this.page.waitForUrl('https://e.mail.ru/inbox/?afterReload=1');
	}
}

export default new MainPageSteps();
