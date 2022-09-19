import { NavMenu, NavItem  } from "./menu-styled";


export default function Menu() {
    return (
        <NavMenu>
            <NavItem  to="/">Home</NavItem>
            <NavItem  to="movies">Movies</NavItem>
        </NavMenu>
    )
} 