let administrationPage = function () {

  let navigationUtil = require('../utilities/navigation.util.js')
  this.notificationassistantSettingsMenuButton = element(by.id('notificationassistant-settings'))



  this.selectConfigureNotificationsSettings = async () => {
    navigationUtil.waitTillElementToBeClickable(this.notificationassistantSettingsMenuButton)
    await this.notificationassistantSettingsMenuButton.click()
  }


  this.logOut = () => {

  }



}

module.exports = new administrationPage()