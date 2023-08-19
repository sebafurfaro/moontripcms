import { CardBody } from "./cards/CardBody"
import { CardFooter } from "./cards/CardFooter"
import { CardImage } from "./cards/CardImage"

export const Card = ({ rounded, shadow, cardImage, imgPosition, imgUrl, imgAlt, title, summary, linkLabel, urlRedirect }) => {
  return(
    <div className={`card ${rounded && 'rounded-md'} ${shadow && 'shadow-md'}`}>
      {cardImage && 
        <CardImage position={imgPosition} url={imgUrl} alt={imgAlt} />
      }
      <CardBody title={title} summary={summary} />
      <CardFooter linkLabel={linkLabel} urlRedirect={urlRedirect} />
    </div>
  )
}