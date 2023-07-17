export const Avatar = (props) => {

  const { variant, url, name, className } = props;

  switch(variant) {
    case 'circle':
      return <img src={url} alt={name} className={`avatar avatar-rounded ${className}`} />
    case 'square':
      return <img src={url} alt={name} className={`avatar avatar-square ${className}`} />
  }

}