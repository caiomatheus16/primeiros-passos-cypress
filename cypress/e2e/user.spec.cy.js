import userData from '../fixtures/user/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
   
   
    firstNameField : "[name='firstName']",
    lastNameField : "[name='lastName']",
    genericNameField : ".oxd-input--active",
    middleNameField : "[name='middleName']",
    updateField:".oxd-select-text-input"
   }

  it.only('User info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashBoardPage()
    menuPage.acessMyInfo()
    cy.get(selectorsList.firstNameField).type('FirstNameTest')
    cy.get(selectorsList.lastNameField).type('LastNameField')
    cy.get(selectorsList.middleNameField).type('MiddleNameField')
    cy.get(selectorsList.genericNameField).eq(4).type('otherIdTest')
    cy.get(selectorsList.genericNameField).eq(5).type ('DriverLicenseTest')
    cy.get(selectorsList.updateField).eq(0).type('click')
    cy.contains('Albanian').click()
    cy.get(selectorsList.updateField).eq(1).type('click')
    cy.contains('Married').click()
    cy.get(selectorsList.updateField).eq(2).type('click')
    cy.contains('B-').click()
    
   })
  it('Login with Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.submitField).type('click')
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})