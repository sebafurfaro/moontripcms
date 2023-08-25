export const MockVerticalGraphDash = () => {

  const posts = [
    {id: 'ene', balance: 20},
    {id: 'feb', balance: 30},
    {id: 'mar', balance: 40},
    {id: 'abr', balance: 50},
    {id: 'may', balance: 50},
    {id: 'jun', balance: 70},
    {id: 'jul', balance: 80},
    {id: 'ago', balance: 60},
    {id: 'sep', balance: 30},
    {id: 'oct', balance: 40},
    {id: 'nov', balance: 60},
    {id: 'dic', balance: 100}
  ]

  return(
    <div className="card h-full max-h-[500px]">
      <h2 className="font-light text-xl mb-2">Balance anual</h2>
      <div className="grid grid-cols-12 gap-4 h-full">
        {posts.map((p, index) => (
          <div className="flex flex-col space-y-2 h-full justify-end items-center" key={index}>
            <div style={{ height: `${p.balance}%` }} className="rounded-full bg-orange-600 w-3"></div>
            <span className="text-xs text-center uppercase">{p.id}</span>
          </div>
        ))}
      </div>
    </div>
  )
}