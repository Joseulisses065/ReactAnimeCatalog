import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
export default function NewAnime() {
  const [id, setId] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [whereToWatch, setWhereToWatch] = useState("");

  const { animeId } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    if (animeId === "0") {
      return;
    } else {
      loadAnime();
    }
  }, [animeId]);


  async function loadAnime() {
    try {
      const response = await api.get(`/animes/${animeId}`)
      setId(response.data.id)
      setCategory(response.data.category)
      setDescription(response.data.description)
      setName(response.data.name)
      setReleaseDate(response.data.releaseDate)
      setWhereToWatch(response.data.whereToWatch)
    } catch (error) {
      alert("Error recovering Anime! Try again");
      navigate('/animes')
    }
   
  }
  async function saveOrUpdate(e) {
    e.preventDefault();
    const data = {
      category,
      description,
      name,
      releaseDate,
      whereToWatch,
    };
    try {
      if(animeId === '0'){
        await api.post("/animes", data);
        alert("passou");
        navigate("/animes");
      }else{
        await api.put(`/animes/${animeId}`, data);
      alert("passou");
      navigate("/animes");   
      }
       
    } catch (err) {
      alert("Insert failed! Try again!");
    }
  }

  return (
    <div className=" d-flex">
      <div className="form-container ">
        <form className="form" onSubmit={saveOrUpdate}>
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
