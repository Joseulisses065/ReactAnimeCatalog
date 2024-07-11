import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
export default function NewAnime() {
  const [id, setId] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [whereToWatch, setWhereToWatch] = useState("");

  const navigate = useNavigate();
  async function createNewAnime(e) {
    e.preventDefault();
    const data = {
      category,
      description,
      name,
      releaseDate,
      whereToWatch,
    };
    try {
      const response = await api.post("/animes",data);
      alert("passou");
      navigate("/animes");
    } catch (err) {
      alert("Insert failed! Try again!");
    }
  }

  return (
    <div className=" d-flex">
      <div className="form-container ">
        <form className="form" onSubmit={createNewAnime}>
          <div>
            <input
              typeof="text"
              placeholder="name"
              name="user"
              className="form-control mb-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div>
            <input
              tipe="date"
              name="releaseDate"
              className="form-control mb-3"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            ></input>
          </div>

          <select
            className="form-select mb-3"
            name="category"
            aria-label="Default select example"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>category</option>
            <option key="1">ACTION</option>
            <option key="2">SHOUNEN</option>
            <option key="3">ROMANCE</option>
          </select>
          <div>
            <input
              tipeOf="text"
              placeholder="Where To Watch"
              name="whereToWatch"
              className="form-control mb-3"
              value={whereToWatch}
              onChange={(e) => setWhereToWatch(e.target.value)}
            ></input>
          </div>
          <div className="form-floating">
            <textarea
              className="form-control mb-3"
              placeholder="Description"
              id="floatingTextarea"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label for="floatingTextarea">Description</label>
          </div>
          <div>
            <button className="form-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
