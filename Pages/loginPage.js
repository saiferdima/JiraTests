let loginPage = function () {

  let navigationUtil = require('../utilities/navigation.util.js')
  this.loginEmailInput = element(by.id('login-form-username'))
  this.loginPasswordInput = element(by.id('login-form-password'))
  this.submitButton = element(by.id('login'))

  let baseUrl = browser.baseUrl

  this.get = async () => {
    await browser.get(baseUrl)

  }

  this.fillCredential = async (login, password) => {
    navigationUtil.waitTillElementToBeClickable(this.loginEmailInput)
    await this.loginEmailInput.clear()
    await this.loginEmailInput.sendKeys(login)
    await this.loginPasswordInput.clear()
    await this.loginPasswordInput.sendKeys(password)
  }

  this.clickSubmitButton = async () => {
   return  this.submitButton.click()
  }

  this.logIn = async (login, password) => {
    await this.fillCredential(login, password)
    await this.submitButton.click()

  }





}

module.exports = new loginPage()