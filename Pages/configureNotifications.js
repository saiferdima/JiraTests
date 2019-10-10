let configureNotifications = function () {

  let navigationUtil = require('../utilities/navigation.util.js')
  this.addNotificationButton = element(by.xpath(`//button[@onclick='document.location="NAAddNotification.jspa"']`))



  this.clickAddNotificationButton = async () => {
    navigationUtil.waitTillElementToBeClickable(this.addNotificationButton)
    await this.addNotificationButton.click()
  }

  this.validateElementsOnConfigurationPage = async () => {
    expect(this.addNotificationButton.isDisplayed()).toBe(false,"addNotificationButton not displayed")

  }






}

module.exports = new configureNotifications()