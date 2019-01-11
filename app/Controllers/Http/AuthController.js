class AuthController {
    async login({request}) {
        console.log('AuthController.login');
        return [
            {key: 1},
            {key: 2},
            {key: 3},
            {key: 4}
        ];
    }
}

module.exports = AuthController;