import Link from "next/link"
import MenuItemIcon from "../../assets/icons/MenuItem.svg"

export default function MenuItem({context} : {context: MenuContext }) {

    return(
        context.route ? (
            <Link href={context.route} className="relative w-fit h-full transition duration-100 hover:-translate-x-0.5">
                  <MenuItemIcon className="text-foreground scale-70" />
                  <span className="absolute inset-0 flex text-[8px] font-salma text-background items-center justify-center">{context.name}</span>
            </Link> ) : (
            <button onClick={context.action} className="relative w-fit h-full transition duration-100 hover:-translate-x-0.5">
                  <MenuItemIcon className="text-foreground scale-70" />
                  <span className="absolute inset-0 flex text-[8px] font-salma text-background items-center justify-center">{context.name}</span>
            </button>)
    )
}
