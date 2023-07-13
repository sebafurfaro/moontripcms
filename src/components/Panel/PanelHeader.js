import Button from "../button"

export const PanelHeader = ({ title, urlRedirect, label, className }) => {
  return(
    <header className="flex items-center justify-between w-full border-b border-slate-400 pb-3 mb-3">
      <h1 className="pb-5 pt-3 text-2xl font-semibold">{title}</h1>
      {/* <Button
        url={urlRedirect}
        label={label}
        className={className}
        variant={variantButton}
      /> */}
      <Button variant="link" className={className} urlRedirect={urlRedirect} label={label} />
    </header>
  )
}