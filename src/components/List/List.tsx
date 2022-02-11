/**
# A simple job-list app:

The use-case is very simple:
    1. User types a URL in the browser
    2. User is presented with a list of jobs
    3. The user can interact with the jobs in the list and follow a link to the actual ads.

The site in question where you should get the jobs from is one of the following:
XML - https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/
JSON - https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json

Non functional requirements:
    * You can use any open source libraries
    * It should work in a modern browser (Chrome or Firefox)
    * Either the app has to be hosted somewhere online or you have to write some instructions on how to get it up an running on Linux (do this in the README file)
    * The code should be hosted in a code repository (Bitbucket, GitHub, GitLab or other)

BONUS:
If you want to impress, feel free to put a special touch on the UI.
**/
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import Action from "./Actions";
import Company from "./Company";
import Contact from "./Contact";
import { IList } from "./interface";

function List() {
  const [listState, setListState] = useState("Laddar Jobb");
  const [jobs, setJobs] = useState<IList[]>([]);
  const primaryColor = useAppSelector((state) => state.theme.primaryColor);

  const fetchData = async () => {
    const response = await fetch(
      "https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json"
    );

    const data = await response.json();
    setListState("Jobylon Job list");
    setJobs(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const style = {
    default: {
      display: "flex",
      flexDirection: "column" as "column",
      background: "linear-gradient(217deg, #475cdb, #6253bc 70.70%)",
      jusifyContent: "center",
      borderRadius: "15px",
      margin: "15px",
      padding: "10px",
    },
  };
  return (
    <>
      <div style={{justifyContent:"center", display:"flex", alignItems:"center"}}>
        <span
          className="material-icons"
          style={{
            color: "white",
            cursor: "pointer",
            border: "none !important",
          }}
        >
          list_alt
        </span>
        {listState}
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {jobs.map((j: IList, index: number) => {
            return (
              <div key={index} style={style.default} className="col-sm-4">
                <Company
                  company={j.company}
                  employment_type={j.employment_type}
                  loc={j.locations}
                />
                <Contact data={j.contact} />
                <Action data={j.urls} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default List;
