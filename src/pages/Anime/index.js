import React,{useState} from "react";
import "./styles.css";
import Header from "../../components/header";
import { Link } from "react-router-dom";
import { FiEdit,FiTrash } from "react-icons/fi";

export default function Animes() {
  
  return (
    <div className="w-100 ">
      <Header />
      <div className="container-fluid mt-5">
        <h1 className="fs-3">Registred Animes</h1>
        <div className="container-fluid d-flex gap-2 mt-3">
          <div className="card" id="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div className="d-flex w-50 justify-content-between">
              <Link to={"/animes/edit"} className="btn btn-primary"><FiEdit/></Link>
              <Link to={"/animes/delete"} className="btn btn-danger"><FiTrash/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
