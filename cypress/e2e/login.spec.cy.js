describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitField : "[type='submit']",
    sectionTitleTopBar: ".oxd-text--h6.oxd-topbar-header-breadcrumb-module",
    wrontCredentialAlert : "[role='alert']"
    
  }

  it('Login with Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.submitField).type('click')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')
  })
  it('Login with Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('test')
    cy.get(selectorsList.passwordField).type('test')
    cy.get(selectorsList.submitField).type('click')
    cy.get(selectorsList.wrontCredentialAlert)
    
  })
})