import { CardBody } from "./cards/CardBody"
import { CardFooter } from "./cards/CardFooter"
import { CardImage } from "./cards/CardImage"

export const Card = ({
  className,
  rounded,
  shadow,
  cardImage,
  imgPosition,
  imgUrl,
  imgAlt,
  title,
  summary,
  linkLabel,
  urlRedirect }
  ) => {
  return(
    <div className={`card ${className} ${rounded && 'rounded-md'} ${shadow && 'shadow-md'}`}>
      {cardImage && 
        <CardImage position={imgPosition} url={imgUrl} alt={imgAlt} />
      }
      <CardBody className={`card-body`} title={title} summary={summary} />
      <CardFooter linkLabel={linkLabel} urlRedirect={urlRedirect} />
    </div>
  )
}