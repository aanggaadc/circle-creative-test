import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useDeleteTodo } from "../hooks";
import { deleteTodo as deleteTodoAction } from "../redux/todoSlice";
import { Modal } from "../components/shared";
import { WarningIcon, InformationIcon } from "./icons";

type DeleteModalProps = Omit<React.ComponentProps<typeof Modal>, "children"> & {
  data: Todo | null;
};

export default function DeleteModal({
  isOpen,
  onClose,
  data,
}: DeleteModalProps) {
  const dispatch = useDispatch();
  const { mutate: deleteTodo } = useDeleteTodo({
    onSuccess: () => {
      toast(() => (
        <div className="flex items-center gap-2 font-poppins font-semibold text-xs md:text-sm lg:text-base">
          <InformationIcon />
          <p>List berhasil dihapus</p>
        </div>
      ));

      dispatch(deleteTodoAction(data?.id as number));
      onClose();
    },
  });

  const handleDelete = () => {
    deleteTodo({ id: data?.id as number });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="max-w-[320px] p-8 rounded-lg font-poppins bg-white">
          <WarningIcon className="block mx-auto mb-7" />

          <p className="text-sm text-center mb-10">
            Apakah anda yakin menghapus List Item"{" "}
            <span className="font-bold">“{data?.title}”?</span>
          </p>

          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => onClose()}
              className="font-poppins text-sm font-semibold text-[#4A4A4A] rounded-3xl px-8 py-3 bg-[#F4F4F4]"
            >
              Batal
            </button>
            <button
              onClick={handleDelete}
              className="font-poppins text-sm font-semibold text-white rounded-3xl px-8 py-3 bg-[#ED4C5C]"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
