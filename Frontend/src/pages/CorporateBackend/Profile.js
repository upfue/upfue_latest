import React from 'react';
import { useState } from 'react';
import { FormRow, Alert } from '../../components';
import { useAppContext } from '../../context/appContext';
import Wrapper from '../../components/Wrapper/DashboardFormPage';
const Profile = () => {
  const { user, showAlert, displayAlert, updateUser, isLoading } =
    useAppContext();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [lastname, setLastName] = useState(user?.lastname);
  const [password, setPassword] = useState(user?.password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastname || !password) {
      displayAlert();
      return;
    }

    updateUser({ name, email, lastname, password });
  };
  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="text-capitalize">profile </h3>
        {showAlert && <Alert />}

        {/* name */}
        <div className="form-center">
          <FormRow
            icon="user"
            type="text"
            name="name"
            value={name}
            handleChange={(e) => setName(e.target.value)}
          />
          <FormRow
            icon="user"
            type="text"
            name="lastname"
            value={lastname}
            handleChange={(e) => setLastName(e.target.value)}
          />
          <FormRow
            icon="user"
            type="email"
            name="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />

          <FormRow
            icon="user"
            type="password"
            name="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="dashboardbtn btn-block mb-3 ps-5"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default Profile;
