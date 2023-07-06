import axios from "axios";
import { useState, useEffect } from "react";

export const RandomImage = ({ className }) => {

  const [ imageUrl, setImageUrl ] = useState('')

  useEffect(() => {
    fetchRandomImage()
  },[])

  const fetchRandomImage = async () => {
    try{
      const response = await axios.get(
        'https://api.unsplash.com/photos/random',
        {
          params: {
            client_id: 'qLOZncchR4_O-9-YaLlNlzpCkvelQrIMvNxhxAHRs_o',
          },
        }
      );

      const randomImageUrl = response.data.urls.regular;
      setImageUrl(randomImageUrl)
    } catch (error) {
      console.error('Error fetching random image:', error)
    }
  }

  return <img src={imageUrl} alt="Moontrip" className={className} />

}