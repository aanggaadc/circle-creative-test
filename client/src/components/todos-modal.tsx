import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useCreateTodo, useUpdateTodo } from "../hooks";
import { addTodo, updateTodo as updateTodoAction } from "../redux/todoSlice";
import { RootState } from "../redux/store";
import { Modal } from "./shared";
import { CloseIcon, InformationIcon } from "./icons";
import Select from "react-select";

type TodoModalProps = Omit<React.ComponentProps<typeof Modal>, "children"> & {
  data?: Todo | null;
  refetchData?: () => void;
};

export default function TodoModal({ isOpen, onClose, data }: TodoModalProps) {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);

  const options = users.map((user) => ({
    value: user.id.toString(),
    label: user.name,
  }));

  const initialForm = {
    title: "",
    user_ids: {
      value: "",
      label: "",
    },
  };

  const [form, setForm] = useState(initialForm);
  const { mutate: createTodo, loading: loadingCreate } = useCreateTodo({
    onSuccess: (newTodo) => {
      dispatch(addTodo(newTodo));
      setForm(initialForm);
      toast(() => (
        <div className="flex items-center gap-2 font-poppins font-semibold text-xs md:text-sm lg:text-base">
          <InformationIcon />
          <p>List berhasil ditambakan</p>
        </div>
      ));
      onClose();
    },
  });

  const { mutate: updateTodo, loading: loadingUpdate } = useUpdateTodo({
    onSuccess: (updatedTodo) => {
      dispatch(updateTodoAction(updatedTodo));
      setForm(initialForm);
      toast(() => (
        <div className="flex items-center gap-2 font-poppins font-semibold text-xs md:text-sm lg:text-base">
          <InformationIcon />
          <p>List berhasil diupdate</p>
        </div>
      ));
      onClose();
    },
  });

  const handleSaveModal = () => {
    if (data) {
      updateTodo({
        id: data.id,
        completed: false,
        title: form.title,
        user_ids: [parseInt(form.user_ids.value)],
      });
    } else {
      createTodo({
        title: form.title,
        user_ids: [parseInt(form.user_ids.value)],
      });
    }
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      setForm({
        title: data.title,
        user_ids: {
          value: data?.users[0]?.id.toString(),
          label: data?.users[0]?.name,
        },
      });
    } else {
      setForm(initialForm);
    }
  }, [data]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[320px] lg:w-[830px] rounded-lg font-poppins bg-white">
        <div className="py-4 px-5 border-b flex items-center justify-between">
          <h3 className="text-base font-semibold lg:text-lg">
            {data ? "Edit List Item" : "Tambah List Item"}
          </h3>
          <button onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="px-4 py-7 border-b">
          <div className="mb-4">
            <label
              htmlFor="title"
              className="font-semibold text-[10px] mb-3 lg:text-xs"
            >
              NAMA LIST ITEM
            </label>

            <input
              type="text"
              className="w-full rounded-lg p-4 text-[14px] border border-neutral-200 border-solid"
              placeholder="Tambahkan nama list item"
              name="title"
              id="title"
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              value={form.title}
            />
          </div>

          <label
            htmlFor="title"
            className="font-semibold text-[10px] mb-3 lg:text-xs"
          >
            ASSIGNED TO
          </label>

          <Select
            defaultValue={options[0]}
            formatOptionLabel={formatOptionLabel}
            options={options}
            className="select-priority"
            onChange={(e) => setForm({ ...form, user_ids: e || options[0] })}
            value={form.user_ids}
            id="UpdateFormPriority"
            components={{ DropdownIndicator }}
          />
        </div>

        <div className="py-4 px-6 flex justify-end">
          <button
            onClick={handleSaveModal}
            disabled={
              !form.title ||
              !form.user_ids.value ||
              loadingCreate ||
              loadingUpdate
            }
            className="rounded-3xl px-10 py-3 bg-primary disabled:bg-[#67ccff] text-white font-semibold"
          >
            Simpan
          </button>
        </div>
      </div>
    </Modal>
  );
}

const DropdownIndicator = () => {
  return (
    <div className="mr-2 w-6 h-6 bg-[url('/icons/ic-dropdown.svg')] bg-no-repeat bg-[100%] inline-block align-middle cursor-pointer"></div>
  );
};

const formatOptionLabel = ({ label }: { label: string }) => (
  <div className="flex items-center">
    <div>{label}</div>
  </div>
);
