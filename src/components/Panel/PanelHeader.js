import Button from "../button"

export const PanelHeader = ({ title, urlRedirect, label, className }) => {
  return(
    <header className="panel-header">
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