describe('Home page  Tests  -----> ',  () => {

  let loginPage = require('../../Pages/loginPage.js')
  let basicPage = require('../../Pages/basicPage.js')
  let adminPage = require('../../Pages/administrationPage.js')
  let configNotificationPage = require('../../Pages/configureNotifications.js')
  let login = browser.params.testUserLogin
  let password = browser.params.testUserPassword


  beforeEach(async () => {

    await loginPage.get()
  })

  afterEach(function () {
    // loginPage.logOut()
  })

  it('Test Case - 1 SandBox', async () => {
    await loginPage.logIn(login, password)
    await basicPage.clickManagePluginMenu()
    await basicPage.confirmAdminAccess(password)
    await adminPage.selectConfigureNotificationsSettings(password)
    // await configNotificationPage.clickAddNotificationButton()
    await configNotificationPage.validateElementsOnConfigurationPage()
    browser.sleep(5000)
  })



})