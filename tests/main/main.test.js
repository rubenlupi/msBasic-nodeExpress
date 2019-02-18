jest.setTimeout(120000);

describe('main.test', () => {
    beforeAll( async () => {
        try {
            console.log('before all Main');
        } catch (e) {
            console.log(e);
            throw e;
        }
    });

    afterAll( async () => {
        try {
            console.log('before all Main');
        } catch (e) {
            console.log(e);
            throw e;
        }
    });

    test('main - first test', async () => {
        try {
            console.log('first Test');
        } catch (e) {
            console.log(e);
            throw e;
        }
    });
});