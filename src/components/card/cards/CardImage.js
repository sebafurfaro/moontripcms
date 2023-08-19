export const CardImage = ({ position, url, alt }) => {

  let imagePos = 'img-pos'

  if (position === 'top') {
    imagePos += 'order-first'
  } else if (position === 'bottom') {
    imagePos += 'order-last'
  }

  return(
    <img
      src={url}
      alt={alt}
      className={`w-full h-[200px] object-cover ${imagePos}`} />
  )
}