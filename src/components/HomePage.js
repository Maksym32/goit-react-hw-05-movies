import Menu from "./Menu/menu";
import { Outlet } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Menu />
            <Outlet/>
        </>
    )
}