let basicPage = function () {

  let navigationUtil = require('../utilities/navigation.util.js')

  this.headerAdminMenu = element(by.id('admin_menu'))
  this.applicationMenuIttem = element(by.id('admin_applications_menu'))
  this.projectsMenuIttem = element(by.id('admin_project_menu'))
  this.issuesMenuIttem = element(by.id('admin_issues_menu'))
  this.manageAppsMenuIttem = element(by.id('admin_plugins_menu'))
  this.usersManagementMenuIttem = element(by.id('admin_users_menu'))
  this.latestUpgradeReportMenuIttem = element(by.id('admin_pulp_menu'))
  this.systemMenuIttem = element(by.id('admin_system_menu'))

  this.headerUserMenu = element(by.id('user-options'))
  this.userMenuLogOutButton = element(by.id('log_out'))

  this.headerProjectsMenu = element(by.id('browse_link'))
  this.currentProjectLink = element(by.id('admin_main_proj_link'))

  this.confirmPassword = element(by.id('login-form-authenticatePassword'))
  this.confirmAccessButton = element(by.id('login-form-submit'))

  this.logOutMessageLoginLink = element(by.xpath('//p/a[@href = \'/login.jsp\']'))

  this.openAdminMenu = async () => {
    navigationUtil.waitTillElementToBeClickable(this.headerAdminMenu)
    await this.headerAdminMenu.click()
  }

  this.openProjectsMenu = async () => {
    navigationUtil.waitTillElementToBeClickable(this.headerProjectsMenu)
    await this.headerProjectsMenu.click()
  }

  this.selectCurrentProject = async() => {
    await this.openProjectsMenu()
    navigationUtil.waitTillElementToBeClickable(this.currentProjectLink)
    await this.currentProjectLink.click()
    browser.sleep(3000)

  }

  this.clickManageAppsMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.manageAppsMenuIttem,)
    await this.manageAppsMenuIttem.click()
  }

  this.clickApplicationsMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.applicationMenuIttem,)
    await this.applicationMenuIttem.click()
  }

  this.clickProjectsMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.projectsMenuIttem,)
    await this.projectsMenuIttem.click()
  }

  this.clickIssuesMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.issuesMenuIttem,)
    await this.issuesMenuIttem.click()
  }

  this.clickUserManagementMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.usersManagementMenuIttem,)
    await this.usersManagementMenuIttem.click()
  }

  this.clickUserLatestUpgradeReportMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.latestUpgradeReportMenuIttem,)
    await this.latestUpgradeReportMenuIttem.click()
  }

  this.clickUserSystemMenuLink = async () => {
    await this.openAdminMenu()
    navigationUtil.waitTillElementToBeClickable(this.systemMenuIttem,)
    await this.systemMenuIttem.click()
  }

  this.selectProjectByShortName = async () => {

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