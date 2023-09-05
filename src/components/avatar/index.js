import React from "react"

const { TYPES } = require("./AvatarTypes")

const Avatar = ({ url, name, className, variant }) => {

  const AvatarType = TYPES[variant]

  return(
    <AvatarType
      variant={variant}
      url={url}
      name={name}
      className={className}
    />
  )
}

export default Avatar;