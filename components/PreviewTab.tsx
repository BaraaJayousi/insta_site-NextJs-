import clsx from 'clsx'
type Props = {
  children: React.ReactNode;
  active: boolean
  handleTabChange: (tabName: "preview" | "code") => void
}
export default function PreviewTab({children, active, handleTabChange} : Props){

  return(
    <button onClick={(e) => handleTabChange(children.toLowerCase())} className={clsx(
      active?"text-white bg-blue-500":"text-blue-500 bg-transparent",
      "px-4 py-2 text-sm rounded-lg font-medium focus:ring focus:outline-none"
      )}
      >
      {children}
    </button>
  )
}