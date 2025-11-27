import { PiPlus, PiX } from "react-icons/pi"
import Modal from "../../../components/modal/Modal"
import TextField from "../../../ui/TextField"
import { useEffect, useState } from "react";
import { PiNotePencil } from "react-icons/pi";
import BtnPrimary from "../../../ui/BtnPrimary";
import useCreateTodo from "../useCreateTodo";
import toast from "react-hot-toast";
import useCreateCategory from "../useCreateCategory";
import useDataTodo from "../useDataTodo";
import useUpdateTodo from "../useUpdateTodo";

const MainCreate = ({ setShowModal, idTodo, setIdTodo }) => {
    const { data: dataTodo, isPending: isPendingDataTodo } = useDataTodo(idTodo)
    const [dataCategory, setDataCategory] = useState({
        name: '',
        color: '#fff',
    })
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category_id: '',
        status: 'pending',
        priority: '',
    });

    useEffect(() => {
        if (dataTodo) {
            setFormData(prev => ({
                ...prev,
                title: dataTodo.title ?? '',
                description: dataTodo.description ?? '',
                category_id: dataTodo.category_id ?? '',
                status: dataTodo.status ?? 'pending',
                priority: dataTodo.priority ?? '',
            }))
        }
    }, [dataTodo])


    const { handleCreateCategory, isPending: isPendingCategory, data, isPendingGetCategory } = useCreateCategory(dataCategory)
    const { handleCreateTodo, isPending } = useCreateTodo(formData)
    const { handleUpdateTodo, isPending: isPendingUpdateTodo } = useUpdateTodo(formData, idTodo)


    // Added data to state
    const handleChange = (text) => (e) => {
        setFormData((prev) => ({ ...prev, [text]: e.target.value }))
    }

    // Handle post data
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData?.title || !formData?.description) {
            toast.error("Please fill out field")
            return;
        }
        handleCreateTodo()
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        handleUpdateTodo({
            id: idTodo,
            data: formData
        });
        toast.success("Update Success");
        setIdTodo(null)
        setShowModal(false)
    };

    // Added data to category state
    const handleChangeCategory = (text) => (e) => {
        setDataCategory((prev) => ({ ...prev, [text]: e.target.value }))
    }

    // Handle post category
    const createCategory = () => {
        handleCreateCategory()
    }

    return (
        <Modal>
            <div className="flex flex-col items-center justify-start gap-8 p-5 rounded-lg w-2/3 lg:w-1/2 xl:w-1/3
             bg-linear-to-bl  from-primary-500/30 to-gray-600/30">
                <div className="flex items-center justify-between w-full">
                    <span className="text-3xl text-white font-bold">Create Todo</span>
                    <PiX
                        onClick={() => {
                            setShowModal(false)
                            setIdTodo(null)
                        }}
                        className="text-2xl text-white cursor-pointer"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-8 w-full">
                    <TextField
                        disabled={isPending && (isPendingDataTodo || isPendingCategory || isPendingGetCategory || isPendingUpdateTodo)}
                        value={formData?.title}
                        onChange={handleChange("title")}
                        placeholder={"Title"}
                        classname={"w-full"}
                        icon={<PiNotePencil className="text-2xl text-white" />}
                    />
                    <TextField
                        disabled={isPending && (isPendingDataTodo || isPendingCategory || isPendingGetCategory || isPendingUpdateTodo)}
                        value={formData?.description}
                        onChange={handleChange("description")}
                        placeholder={"Description"}
                        classname={"w-full"}
                        icon={<PiNotePencil className="text-2xl text-white" />}
                    />

                    <div className="flex items-center justify-between w-full gap-3">
                        <div className="w-[40%] flex items-start gap-2 justify-center">
                            <TextField
                                disabled={isPending && (isPendingDataTodo || isPendingCategory || isPendingGetCategory || isPendingUpdateTodo)}
                                value={dataCategory.name}
                                onChange={handleChangeCategory("name")}
                                placeholder={"category"}
                                classname={"w-full"}
                                icon={
                                    <PiPlus
                                        onClick={createCategory}
                                        className="text-2xl text-white hover:text-primary-500 duration-300 cursor-pointer"
                                    />
                                }
                            />
                        </div>

                        <div className="flex items-center justify-end w-[50%] gap-2">
                            <select
                                disabled={isPending && (isPendingDataTodo || isPendingCategory || isPendingGetCategory || isPendingUpdateTodo)}
                                className="bg-gray-600 w-[60%] outline-none rounded-md p-2 text-sm text-white"
                                name="category_id"
                                onChange={handleChange("category_id")}
                                id="category_id"
                                value={formData.category_id}
                            >
                                {data?.map((item) => (
                                    <option
                                        key={item?.id}
                                        value={item?.id}
                                    >
                                        {item?.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div className="flex items-center justify-start w-full gap-2">
                        <select
                            id="status"
                            name="status"
                            disabled={isPending && (isPendingDataTodo || isPendingCategory || isPendingGetCategory || isPendingUpdateTodo)}
                            className="bg-gray-600 outline-none rounded-md p-2 text-sm text-white"
                            onChange={handleChange("status")}
                            value={formData.status}
                        >
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                        </select>
                        <select
                            disabled={isPending && (isPendingDataTodo || isPendingCategory || isPendingGetCategory || isPendingUpdateTodo)}
                            className="bg-gray-600 outline-none rounded-md p-2 text-sm text-white"
                            name="priority"
                            id="priority"
                            value={formData.priority}
                            onChange={handleChange("priority")}
                        >
                            <option value="">None Priority</option>
                            <option value="high">High Priority</option>
                            <option value="medium">Medium Priority</option>
                            <option value="low">Low Priority</option>
                        </select>
                    </div>

                </div>
                <BtnPrimary onClick={idTodo ? handleUpdate : handleSubmit}>
                    {idTodo ? "Update" : "Create"}
                </BtnPrimary>
            </div>
        </Modal>
    )
}

export default MainCreate