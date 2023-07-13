import AlertDanger from './Alerts/AlertDanger'
import AlertInfo from './Alerts/AlertInfo'
import AlertSuccess from './Alerts/AlertSuccess'
import AlertWarning from './Alerts/AlertWarning'

export const TYPES = {
  success: AlertSuccess,
  warning: AlertWarning,
  danger: AlertDanger,
  info: AlertInfo
}