export const Badges = (props) => {

  const {variant} = props;

  switch(variant) {
    case 'success':
      return <div className="badge badge-success">Completado</div>
    case 'pending':
      return <div className="badge badge-warning">Pendiente</div>
    case 'reject':
      return <div className="badge badge-danger">Rechazada</div>
    case 'publish':
      return <div className="badge badge-info">Publicada</div>
  }

}