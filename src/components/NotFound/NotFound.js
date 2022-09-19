import { Message, ToHome } from "./NotFound-styled";

export default function NotFound() {
    return (
        <>
            <Message>Page not found</Message>
            <ToHome to="/">Go to HomePage</ToHome>
        </>)
}