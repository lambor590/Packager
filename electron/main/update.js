import { autoUpdater } from 'electron-updater'

export function update() {

  autoUpdater.autoDownload = true
  autoUpdater.allowDowngrade = false
  autoUpdater.disableWebInstaller = true
  autoUpdater.autoInstallOnAppQuit = true

  autoUpdater.on('update-downloaded', () => {
    autoUpdater.quitAndInstall(true, true)
  });

  autoUpdater.checkForUpdates()
}