export const Badges = (props) => {

  const {variant, title} = props;

  switch(variant) {
    case 'success':
      return <div className="badge badge-success">{title}</div>
    case 'pending':
      return <div className="badge badge-warning">{title}</div>
    case 'reject':
      return <div className="badge badge-danger">{title}</div>
    case 'publish':
      return <div className="badge badge-info">{title}</div>
  }

}