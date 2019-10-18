let basicPage = function () {

  let navigationUtil = require('../utilities/navigation.util.js')

  this.headerAdminMenu = element(by.id('admin_menu'))
  this.managePluginMenuIttem = element(by.id('admin_plugins_menu'))

  this.headerUserMenu = element(by.id('user-options'))
  this.userMenuLogOutButton = element(by.id('log_out'))

  this.confirmPassword = element(by.id('login-form-authenticatePassword'))
  this.confirmAccessButton = element(by.id('login-form-submit'))

  this.logOutMessageLoginLink = element(by.xpath('//p/a[@href = \'/login.jsp\']'))

  this.openAdminMenu = async () => {
    navigationUtil.waitTillElementToBeClickable(this.headerAdminMenu)
    await this.headerAdminMenu.click()
  }

  this.clickManagePluginMenu = async (login, password) => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.managePluginMenuIttem, 10000)
    await this.managePluginMenuIttem.click()
  }

  this.confirmAdminAccess = async (password) => {
    navigationUtil.waitTillElementToBeClickable(this.confirmPassword)
    await this.confirmPassword.clear()
    await this.confirmPassword.sendKeys(password)
    await this.confirmAccessButton.click()
  }

  this.logOut = async () => {
    this.headerUserMenu.click()
    navigationUtil.waitTillElementToBeClickable(this.userMenuLogOutButton)
    this.userMenuLogOutButton.click()
  }

  this.validateLogout = async () => {
    await navigationUtil.waitTillElementToBeClickable(this.logOutMessageLoginLink)
    browser.sleep(1000)
    await expect(browser.getCurrentUrl()).toContain('Logout!default', 'User directed not on  a  logout link')
  }

}

module.exports = new basicPage()