class LoginPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            submitField : "[type='submit']",
            wrongCredentialAlert : "[role='alert']",
        }

        return selectors;

    }

    acessLoginPage() {
        cy.visit('/auth/login')
    }

    loginWithUser(username,password) {
         cy.get(this.selectorsList().usernameField).type(username)
         cy.get(this.selectorsList().passwordField).type(password)
         cy.get(this.selectorsList().submitField).click()
        }
        checkAcessInvalids() {
            cy.get(this.selectorsList().wrongCredentialAlert)

}
}
export default LoginPage;