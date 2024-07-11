import React, { useState, useEffect } from "react";
import "./styles.css";
import Header from "../../components/header";
import { useNavigate } from "react-router-dom";
import { FiEdit, FiTrash } from "react-icons/fi";
import api from "../../services/api";

export default function Animes() {
  const [animes, setAnimes] = useState([]);
  const [pages, setPages] = useState(0);

  const navigate = useNavigate();

  async function fetchMoreAnimes() {
    try {
      const response = await api.get("/animes", {
        params: { page: pages, limit: 4, direction: "asc" }
      });
      setAnimes([...animes, ...response.data.content]);
      setPages(pages + 1);
    } catch (err) {
      console.error("Failed to fetch animes:", err);
    }
  }

  useEffect(() => {
    fetchMoreAnimes();
  }, []); // Empty dependency array ensures this runs only once on mount

  async function remove(id) {
    try {
      await api.delete(`/animes/${id}`);
      setAnimes(animes.filter((anime) => anime.id !== id));
    } catch (err) {
      alert("Error deleting anime");
    }
  }

  async function edit(id) {
    try {
      navigate(`/animes/new/${id}`);
    } catch (err) {
      alert("Edit failed! Try again");
    }
  }

  return (
    <div className="w-100">
      <Header />
      <div className="container-fluid mt-5">
        <h1 className="fs-3">Registered Animes</h1>
        <div className="container-fluid d-flex gap-4 mt-3">
          {animes.map((anime) => (
            <div className="card" key={anime.id}>
              <div className="card-body">
                <h5 className="card-title">{anime.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {anime.category}
                </h6>
                <p className="card-text">{anime.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    Lançamento: {anime.releaseDate}
                  </small>
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Onde Assistir: {anime.whereToWatch}
                  </small>
                </p>
                <div className="d-flex w-50 justify-content-between">
                  <button
                    onClick={() => edit(anime.id)}
                    className="btn btn-primary"
                  >
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => remove(anime.id)}
                    className="btn btn-danger"
                  >
                    <FiTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary m-3" onClick={fetchMoreAnimes}>
        Load More
      </button>
      </div>
      
    </div>
  );
}
