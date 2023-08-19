export const ClientGrid = () => {

  const images = [
    {id: 1, url: '../logos/accenture.svg', alt: 'Accenture'},
    {id: 2, url: '../logos/delibery.svg', alt: 'Delivery Hero'},
    {id: 3, url: '../logos/ebay.svg', alt: 'eBay'},
    {id: 4, url: '../logos/walmart.svg', alt: 'Walmart'},
    {id: 5, url: '../logos/nasa.svg', alt: 'NASA'},
    {id: 6, url: '../logos/toyota.svg', alt: 'Toyota Motors'}
  ]

  return(
    <section className="text-white py-28">
      <div className="flex items-center space-x-4 max-w-5xl mx-auto">
        <p className="text-lg max-w-xs">Used by the best developers and teams around de world</p>
        <div className="grid grid-cols-6 gap-x-5 items-center">
        {images.map((image) => (
            <img key={image.id} src={image.url} alt={image.alt} className="w-full" />
        ))}
        </div>
      </div>
    </section>
  )
}