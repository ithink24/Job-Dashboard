export const Modal = ({showModal, children}) => {
    return (
        <div>
            {showModal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white">
                            <div className="flex items-start justify-between border-solid border-gray-300">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};