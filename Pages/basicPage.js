let basicPage = function () {

  let navigationUtil = require('../utilities/navigation.util.js')
  this.adminMenu = element(by.id('admin_menu'))
  this.managePluginMenuIttem = element(by.id('admin_plugins_menu'))
  this.confirmPassword = element(by.id('login-form-authenticatePassword'))
  this.confirmAccessButton = element(by.id('login-form-submit'))

  this.openAdminMenu = async () => {
    navigationUtil.waitTillElementToBeClickable(this.adminMenu)
    await this.adminMenu.click()
  }

  this.clickManagePluginMenu = async (login, password) => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.managePluginMenuIttem)
    await this.managePluginMenuIttem.click()
  }

  this.confirmAdminAccess = async (password) => {
    navigationUtil.waitTillElementToBeClickable(this.confirmPassword)
    await this.confirmPassword.clear()
    await this.confirmPassword.sendKeys(password)
    await this.confirmAccessButton.click()
  }

}

module.exports = new basicPage()