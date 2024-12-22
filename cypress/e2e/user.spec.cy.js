import userData from '../fixtures/user/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  
    it('User info Update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashBoardPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string(), ),
    myInfoPage.fillEmployeeDetails('32124456', '123456', chance.integer(), '2024-13-12', '2024-12-05' ),
    myInfoPage.fillStatus()
    myInfoPage.saveform()
    
    })
 
})