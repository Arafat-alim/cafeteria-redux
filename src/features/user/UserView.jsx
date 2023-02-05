import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h2>List of Customers</h2>
      {users.loading && <div>Loading...</div>}
      {!users.loading && users.error ? <p>`Error: ${users.error}`</p> : null}
      {!users.loading && users.data.length ? (
        <div>
          <ul>
            {users.data.map((user) => (
              <li key={user.id}>Active Users - {user.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default UserView;
