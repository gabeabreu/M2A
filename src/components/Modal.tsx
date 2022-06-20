import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

interface Props {
  showModal: boolean;
  onCloseModal?: () => void;
  children?: ReactNode;
  closeButton?: boolean;
  size?: string;
}

const Modal: React.FC<Props> = ({
  showModal,
  onCloseModal = () => null,
  children,
  closeButton,
  size = "full",
}: Props) => (
  <Transition.Root show={showModal} as={Fragment}>
    <Dialog as="div" className="relative z-50" onClose={() => onCloseModal()}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-[#000000A6] bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed z-10 inset-0 overflow-y-auto py-20">
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel
              className={`relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all ${
                size === "small" && ""
              }`}
            >
              {closeButton && (
                <div
                  className="absolute cursor-pointer top-[1.3rem] right-[1.3rem]"
                  onClick={() => onCloseModal()}
                >
                  <IoClose className="text-xl text-[#2a2a2a]" />
                </div>
              )}
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);

export default Modal;
