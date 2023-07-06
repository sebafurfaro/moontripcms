import Link from "next/link";

export const Button = (props) => {

  const {variant, label, onChange, onClick, url, className} = props;

  switch(variant) {
    case 'success':
      return <button className={`btn btn-success ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
    case 'warning':
      return <button className={`btn btn-warning ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
    case 'danger':
      return <button className={`btn btn-danger ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
    case 'info':
      return <button className={`btn btn-info ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
    case 'default':
      return <button className={`btn btn-default ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
    case 'link':
      return <Link className={`btn btn-link ${className}`} href={url}>{label}</Link>
  }

}