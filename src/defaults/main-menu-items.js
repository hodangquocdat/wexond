import * as mainMenuActions from '../actions/main-menu'

export default [
  {
    title: 'New window',
    onClick: mainMenuActions.newWindow
  },
  {
    title: 'New incognito window'
  },
  {
    type: 'separator'
  },
  {
    title: 'History',
    onClick: mainMenuActions.history
  },
  {
    title: 'Bookmarks'
  },
  {
    title: 'Downloads'
  },
  {
    type: 'separator'
  },
  {
    title: 'Settings',
    onClick: mainMenuActions.settings
  },
  {
    title: 'Extensions'
  },
  {
    title: 'Privacy'
  },
  {
    type: 'separator'
  },
  {
    title: 'Developer tools',
    onClick: mainMenuActions.developerTools
  }
]
