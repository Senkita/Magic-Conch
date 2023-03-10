import { JSX } from "preact";
import { IModalProps } from "../intf/props.ts";
import Card from "./Card.tsx";

/**
 * Modal模态框
 *
 * @param {IModalProps} props
 * @return {*}  {JSX.Element}
 * 
 * @example
   <Modal open>模态框</Modal>
 */
const Modal: (props: IModalProps) => JSX.Element = (
    props: IModalProps
): JSX.Element => {
    const { open, children } = props;

    return (
        <div
            class={`z-50 fixed w-screen h-screen flex-center ${
                open ? "" : "hidden"
            }`}
            style={{
                backgroundColor: "#e0e0e075",
            }}
        >
            <Card
                style={{
                    background: "#e0e0e0",
                }}
            >
                {children}
            </Card>
        </div>
    );
};

export default Modal;
