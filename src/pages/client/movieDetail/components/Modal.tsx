import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Modal({
   title,
   description,
   onClick,
   isOpen,
   closeModal,
   openModal,
   error,
}: {
   title: string;
   description: string;
   error: string;
   onClick: () => void;
   isOpen: boolean;
   openModal: () => void;
   closeModal: () => void;
}) {
   return (
      <>
         <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-black/25" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-bgPrimaryBar border border-borderColor p-6 text-left align-middle shadow-xl transition-all">
                           <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-white/90"
                           >
                              {title}
                           </Dialog.Title>
                           <div className="mt-2">
                              <p className="text-sm text-white/70">
                                 {description}
                              </p>
                           </div>

                           <div className="mt-4">
                              {error === "login" ? (
                                 <Link to="/auth" className="">
                                    <button
                                       type="button"
                                       className="inline-flex justify-center rounded-md border border-transparent bg-highlight px-4 py-2 text-sm font-medium text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                       onClick={() => {
                                          closeModal();
                                          onClick();
                                       }}
                                    >
                                       Đăng nhập
                                    </button>
                                 </Link>
                              ) : (
                                 <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-transparent bg-highlight px-4 py-2 text-sm font-medium text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                    onClick={() => {
                                       closeModal();
                                       onClick();
                                    }}
                                 >
                                    Đã hiểu
                                 </button>
                              )}
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
}
