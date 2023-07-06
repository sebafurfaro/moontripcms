export const Avatar = (props) => {

  const { variant, url, name } = props;

  switch(variant) {
    case 'circle':
      return <img src={url} alt={name} className="avatar avatar-rounded" />
    case 'square':
      return <img src={url} alt={name} className="avatar avatar-square" />
  }

}