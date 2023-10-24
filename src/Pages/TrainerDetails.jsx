import React, { useState, useEffect } from "react";
import useAPI from "../Hook/useAPI";

import Layout from "../Layout/Layout";
import Trainerlist from "../Components/Trainerlist";

import LoadingScreen from "../Components/LoadingScreen";

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
              className="activity-tennis font-bold p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
              onClick={() => setFilterActivity("tennis")}
            >
              Tennis
            </button>

            <button
              className="activity-badminton font-bold p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
              onClick={() => setFilterActivity("badminton")}
            >
              Badminton
            </button>

            <button
              className="activity-tabletennis font-bold p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
              onClick={() => setFilterActivity("table_tennis")}
            >
              Table Tennis
            </button>

            <button
              className="activity-yoga font-bold p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
              onClick={() => setFilterActivity("yoga")}
            >
              Yoga
            </button>

            <button
              className="activity-aerobicdance font-bold p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
              onClick={() => setFilterActivity("aerobic_dance")}
            >
              Aerobic Dance
            </button>

            <button
              className="activity-all font-bold p-3 rounded-xl w-40 drop-shadow-md border-solid border-2 bg-lime-400 hover:bg-lime-500 hover:text-slate-900"
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
