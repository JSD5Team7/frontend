import React, { useState, useEffect } from "react";
import useAPI from "../Hook/useAPI";

import Layout from "../Layout/Layout";
import Trainerlist from "../Components/Trainerlist";
import LoadingScreen from "../Components/LoadingScreen";

import TennisIcon from "../assets/icons/icons8-tennis-100 (1).png";
import BadmintonIcon from "../assets/icons/icons8-badminton-100.png";
import TableTennisIcone from "../assets/icons/icons8-table-tennis-64.png";
import YogaIcon from "../assets/icons/icons8-yoga-100.png";
import AerobicIcon from "../assets/icons/icons8-dancing-100.png";

const TrainerDetails = () => {
  const { trainers } = useAPI();

  const [filterActivity, setFilterActivity] = useState("");
  const [sortName, setSortName] = useState("");

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Layout>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="trainers-container text-center flex-col pb-20 justify-center">
          <h1 className="text-6xl font-bold my-5 pt-10">Coach</h1>

          <div className="activity-list flex flex-wrap gap-3 justify-center py-5 min-w-full">
            <button
              className="activity-tennis w-[250px] h-[100px] font-bold p-5 rounded-xl drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              onClick={() => setFilterActivity("tennis")}
            >
              <div className="flex justify-center items-center gap-3">
                <img src={TennisIcon} alt="TennisIcon" className="w-[50px]" />
                <p>Tennis</p>
              </div>
            </button>

            <button
              className="activity-badminton w-[250px] h-[100px] font-bold p-5 rounded-xl drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              onClick={() => setFilterActivity("badminton")}
            >
              <div className="flex justify-center items-center gap-3">
                <img
                  src={BadmintonIcon}
                  alt="BadmintonIcon"
                  className="w-[50px]"
                />
                <p>Badminton</p>
              </div>
            </button>

            <button
              className="activity-tabletennis w-[250px] h-[100px] font-bold p-5 rounded-xl drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              onClick={() => setFilterActivity("table_tennis")}
            >
              <div className="flex justify-center items-center gap-3">
                <img
                  src={TableTennisIcone}
                  alt="TableTennisIcone"
                  className="w-[50px]"
                />
                <p>Table Tennis</p>
              </div>
            </button>

            <button
              className="activity-yoga w-[250px] h-[100px] font-bold p-5 rounded-xl drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              onClick={() => setFilterActivity("yoga")}
            >
              <div className="flex justify-center items-center gap-3">
                <img src={YogaIcon} alt="YogaIcon" className="w-[50px]" />
                <p>Yoga</p>
              </div>
            </button>

            <button
              className="activity-aerobicdance w-[250px] h-[100px] font-bold p-5 rounded-xl drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              onClick={() => setFilterActivity("aerobic_dance")}
            >
              {" "}
              <div className="flex justify-center items-center gap-3">
                <img src={AerobicIcon} alt="AerobicIcon" className="w-[50px]" />
                <p>Aerobic Dance</p>
              </div>
            </button>

            <button
              className="activity-all w-[250px] h-[100px] font-bold p-5 rounded-xl drop-shadow-md border-solid border-2 bg-lime-300 hover:bg-lime-400 hover:text-slate-900"
              onClick={() => setFilterActivity("")}
            >
              All
            </button>
          </div>

          <div className="active-btn flex justify-end mr-10">
            <select
              className="w-15 border-solid border-2 border-sky-500"
              value={sortName}
              onChange={(e) => setSortName(e.target.value)}
            >
              <option value=""> </option>
              <option value="nameAZ">A-Z</option>
              <option value="nameZA">Z-A</option>
            </select>
          </div>
          <Trainerlist
            trainers={trainers}
            filterActivity={filterActivity}
            sortName={sortName}
          />
        </div>
      )}
    </Layout>
  );
};

export default TrainerDetails;
