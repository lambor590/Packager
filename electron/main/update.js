import { autoUpdater } from 'electron-updater'

export function update(event) {

  autoUpdater.autoDownload = true
  autoUpdater.allowDowngrade = false
  autoUpdater.disableWebInstaller = true
  autoUpdater.autoInstallOnAppQuit = true
  autoUpdater.forceDevUpdateConfig = true

  autoUpdater.on('update-available', (_event) => {
    event.sender.send('update-available', _event)
  })

  autoUpdater.on('download-progress', (_event, progressInfo) => {
    event.sender.send('download-progress', _event, progressInfo)
  })

  autoUpdater.on('update-downloaded', () => {
    autoUpdater.quitAndInstall(true, true)
  });

  autoUpdater.checkForUpdates()
}