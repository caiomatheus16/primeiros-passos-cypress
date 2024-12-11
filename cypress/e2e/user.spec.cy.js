import userData from '../fixtures/user/user-data.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    submitField : "[type='submit']",
    dashboardGrid :".orangehrm-dashboard-grid",
    wrongCredentialAlert : "[role='alert']",
    myInfoButton : '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField : "[name='firstName']",
    lastNameField : "[name='lastName']",
    genericNameField : ".oxd-input--active",
    middleNameField : "[name='middleName']"
}

  it.only('User info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.submitField).type('click')
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get (selectorsList.myInfoButton).type('click')
    cy.get (selectorsList.firstNameField).type('FirstNameTest')
    cy.get (selectorsList.lastNameField).type('LastNameField')
    cy.get (selectorsList.middleNameField).type('MiddleNameField')
    cy.get (selectorsList.genericNameField).eq(4).type('otherIdTest')
    cy.get (selectorsList.genericNameField).eq(5).type ('DriverLicenseTest')
   })
  it('Login with Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitField).type('click')
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})