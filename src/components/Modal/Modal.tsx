import React, { JSX, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface MyModalProps {
    modalIsShown: boolean;
    children: React.ReactElement;
    setModalIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}
function Modal({
                     children,
                     modalIsShown,
                     setModalIsShown,
                 }: MyModalProps): JSX.Element {
    const backdropRef = useRef<HTMLDivElement>(null);

    function handleClickOutside(e: React.MouseEvent<HTMLDivElement>): void {
        e.stopPropagation();
        if (
            backdropRef.current &&
            !backdropRef.current.contains(e.target as Element)
        ) {
            setModalIsShown(false);
        }
    }


    return ReactDOM.createPortal(
        <>
            {modalIsShown && (
                <div onClick={handleClickOutside} className='fixed z-100 inset-0 bg-black/50'>
                    <div ref={backdropRef} className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <div className='relative bg-white text-black p-8 rounded'>{children}</div>
                    </div>
                </div>
            )}
        </>,
        document.body,
    );
}

export default Modal;
