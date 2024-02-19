import { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  openDialog: () => void;
  closeDialog: () => void;
};

const Dialog = forwardRef<HTMLDialogElement, Props>(
  ({ children, openDialog, closeDialog }, ref) => {
    return (
      <dialog
        className="bg-white rounded-lg"
        ref={ref}
        onClick={(e) => {
          if (e.currentTarget === e.target) {
           closeDialog();
          }
        }}
      >
        <div className="  ">
          <button onClick={ closeDialog}>
            <img src="/close.svg" />
          </button>
          {children}
        </div>
      </dialog>
    );
  }
);
export default Dialog;
