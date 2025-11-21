import { PiPlus, PiX } from "react-icons/pi"
import Modal from "../../../components/modal/Modal"
import TextField from "../../../ui/TextField"
import { useState } from "react";
import { PiNotePencil } from "react-icons/pi";
import BtnPrimary from "../../../ui/BtnPrimary";
import useCreateTodo from "../useCreateTodo";
import toast from "react-hot-toast";

const MainCreate = ({ setShowModal }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        // category: '',
        status: '',
        priority: '',
    });
    const { handleCreateTodo, isPending } = useCreateTodo(formData)

    const [categortText, setCategortText] = useState("")

    // Added data to state
    const handleChange = (text) => (e) => {
        setFormData((prev) => ({ ...prev, [text]: e.target.value }))
    }

    // Added categort List
    // const handleListcategort = (category) => {
    //     setCategort((prev) => ([...prev, category]))
    //     setCategortText("")
    // }

    // //Delete category
    // const handleDelete = (index) => {
    //     setCategort(categort.filter(item => item !== index))
    // }

    // Handle post data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData?.title || !formData?.description) {
            toast.error("Please fill out field")
        }
        handleCreateTodo()
    }



    return (
        <Modal>
            <div className="flex flex-col items-center justify-start gap-8 p-5 rounded-lg w-2/3 lg:w-1/2 xl:w-1/3
             bg-linear-to-bl  from-primary-500/30 to-gray-600/30">
                <div className="flex items-center justify-between w-full">
                    <span className="text-3xl text-white font-bold">Create Todo</span>
                    <PiX
                        onClick={() => setShowModal(false)}
                        className="text-2xl text-white cursor-pointer" />
                </div>
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <TextField
                        disabled={isPending}
                        value={formData?.title}
                        onChange={handleChange("title")}
                        placeholder={"Title"}
                        classname={"w-full"}
                        icon={<PiNotePencil className="text-2xl text-white" />}
                    />
                    <TextField
                        disabled={isPending}
                        value={formData?.description}
                        onChange={handleChange("description")}
                        placeholder={"Description"}
                        classname={"w-full"}
                        icon={<PiNotePencil className="text-2xl text-white" />}
                    />

                    <div className="flex items-center justify-between w-full gap-3">
                        <div className="w-[40%] flex flex-col items-start gap-2 justify-center">
                            <TextField
                                disabled={isPending}
                                value={categortText}
                                onChange={(e) => setCategortText(e.target.value)}
                                placeholder={"categort"}
                                classname={"w-full"}
                                icon={
                                    <PiPlus
                                        // onClick={() => categortText !== "" && handleListcategort(categortText)}
                                        className="text-2xl text-white hover:text-primary-500 duration-300 cursor-pointer"
                                    />
                                }
                            />
                            {/* <div className="flex items-start w-full gap-2 flex-wrap">
                                {categort?.map((item, index) => (
                                    <span

                                        key={index}
                                        onClick={() => !isPending  && handleDelete(item)}
                                        className="flex items-center cursor-pointer justify-center w-fit px-2 py-1 rounded-md text-xs text-white bg-[#F5F5F5]/22 hover:bg-gray-800 duration-500 hover:text-gray-400"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div> */}
                        </div>

                        <div className="flex items-center justify-between w-[50%] gap-2">
                            <select
                                disabled={isPending}
                                className="bg-gray-600 outline-none rounded-md p-2 text-sm text-white"
                                name="status"
                                onChange={handleChange("status")}
                                id="status"
                                value={formData.status}
                            >
                                <option value="pending">Pending</option>
                                <option value="done">Done</option>
                            </select>
                            <select
                                disabled={isPending}
                                className="bg-gray-600 outline-none rounded-md p-2 text-sm text-white"
                                name="priority"
                                id="priority"
                                value={formData.priority}
                                onChange={handleChange("priority")}
                            >
                                <option value="high">High Priority</option>
                                <option value="medium">Medium Priority</option>
                                <option value="low">Low Priority</option>
                            </select>
                        </div>

                    </div>
                </div>
                <BtnPrimary onClick={handleSubmit}>
                    Create
                </BtnPrimary>
            </div>
        </Modal>
    )
}

export default MainCreate