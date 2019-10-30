import main from '../../steps/account';
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters/index';
import {foldersHref} from '../../store/index';

const FOLDER = foldersHref.sent;

// пример теста
describe('test id', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		main.open('https://account.mail.ru');
		main.login();

		letters.waitForList();
		folders.clickFolderByName(FOLDER);
	});
});
