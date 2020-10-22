import account from '../../steps/account';

describe('test id', () => {
	it('Авторизоваться', () => {
		account.open('https://drello.works');
		account.login();
	});
});
