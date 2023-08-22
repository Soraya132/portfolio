import { Modal } from "../components"

const NewsModal = (setShowModal, showModal, data) => {
    console.log(data)
    return (
        <Modal setShowProfile={setShowModal} showProfile={showModal}>
            <div className="flex flex-col bg-darkGray rounded-lg lg:w-[55%] px-6 py-14 md:p-12 w-[90%] overflow-y-scroll no-scrollbar lg:h-[90%] mb-10 ">
                <div className="w-full h-[30px] rounded-2xl">
                    <img src={data.image} alt={data.image} className="w-full h-full object-cover rounded-2xl" />
                </div>
                <div>
                    <h2 className="pt-5 text-2xl font-[500]">{data.header}</h2>
                    <h5 className="pt-1 pb-4 text-slate-300 text-lg">{data.brand}</h5>
                    <p className="text-slate-300 text-md">{data.text}</p>
                </div>
            </div>
        </Modal>
    )
}

export default NewsModal
