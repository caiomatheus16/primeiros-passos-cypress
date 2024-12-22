import userData from '../fixtures/user/user-data.json';
import LoginPage from '../pages/loginPage.js';
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

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
    myInfoPage.fillPersonalDetails('First name', 'Last name', 'nickname'),
    myInfoPage.fillEmployeeDetails('EmployeeID', 'OtherId'),
    myInfoPage.fillStatus()
    
    })
 
})