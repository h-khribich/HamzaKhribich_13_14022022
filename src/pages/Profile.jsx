import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { EditName } from "../app/features/authentification/auth.actions";

const Profile = () => {
  // Using redux state to get user data
  const dataFirstName = useSelector((state) => state.user.firstName);
  const dataLastName = useSelector((state) => state.user.lastName);
  const [userFirstName, setUserFirstName] = useState(dataFirstName);
  const [userLastName, setUserLastName] = useState(dataLastName);
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  const handleEdit = () => {
    const editedData = {
      firstName: userFirstName,
      lastName: userLastName,
    };

    dispatch(EditName(editedData, token));
    setEditing(false);
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {userFirstName} {userLastName}!
        </h1>
        {editing ? (
          <div className="edit-group">
            <label htmlFor="firstname">Firstname</label>
            <input
              id="firstname"
              defaultValue={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
            ></input>
            <label htmlFor="lastname">Lastname</label>
            <input
              id="lastname"
              defaultValue={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            ></input>
            <button className="edit-button" onClick={() => handleEdit()}>
              Edit
            </button>
          </div>
        ) : (
          <button className="edit-button" onClick={() => setEditing(true)}>
            Edit Name
          </button>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <div className="account-sections-wrapper">
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Profile;
