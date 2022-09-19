import { NavMenu, NavItem } from "./menu-styled";



export default function Menu() {
    return (
        <NavMenu>
            <NavItem  to="/" end >Home</NavItem>
            <NavItem  to="movies">Movies</NavItem>
        </NavMenu>
    )
} 