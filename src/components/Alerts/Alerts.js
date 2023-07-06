import { CheckCircleIcon, ExclamationCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export const Alerts = (props) => {

  const {severity, content} = props;

  switch(severity) {
    case 'success':
      return <div className="alert alert-success"><CheckCircleIcon className="h-5 w-5" /><span>{content}</span></div>
    case 'warning':
      return <div className="alert alert-warning"><ExclamationCircleIcon className="h-5 w-5" /><span>{content}</span></div>
    case 'danger':
      return <div className="alert alert-danger"><ExclamationTriangleIcon className="h-5 w-5" /><span>{content}</span></div>
    case 'info':
      return <div className="alert alert-info"><InformationCircleIcon className="h-5 w-5" /><span>{content}</span></div>
  }

}