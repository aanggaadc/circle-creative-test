import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../../redux/userSlice";
import useApiQuery from "../useApiQuery";

export const useGetUsers = ({ enabled }: { enabled: boolean }) => {
  const { data, loading, error, refetch } = useApiQuery<
    GeneralResponse<User[]>
  >(`/api/users`, undefined, { enabled });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(loadUser(data.data));
    }
  }, [data, dispatch]);

  return { loading, error, refetch };
};
