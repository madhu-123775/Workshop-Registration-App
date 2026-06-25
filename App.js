import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    workshop: "",
  });

  const [participants, setParticipants] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const duplicate = participants.find(
      (p) => p.email === formData.email
    );

    if (duplicate) {
      setMessage("Participant already registered!");
      return;
    }

    setParticipants([...participants, formData]);

    setMessage("Registration Successful!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      college: "",
      workshop: "",
    });
  };

  return (
    <div className="container">
      <h1>Workshop Registration App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="college"
          placeholder="Enter College Name"
          value={formData.college}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="workshop"
          placeholder="Workshop Name"
          value={formData.workshop}
          onChange={handleChange}
          required
        />

        <button type="submit">Register</button>
      </form>

      {message && <h3>{message}</h3>}

      <h2>Participant List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>College</th>
            <th>Workshop</th>
          </tr>
        </thead>

        <tbody>
          {participants.map((participant, index) => (
            <tr key={index}>
              <td>{participant.name}</td>
              <td>{participant.email}</td>
              <td>{participant.phone}</td>
              <td>{participant.college}</td>
              <td>{participant.workshop}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
