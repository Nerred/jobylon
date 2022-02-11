import React from "react";

interface data {
  apply: string;
  ad: string;
}

const style = {
  containers: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  ad: {
    display: "block",
    minHeight: "20px",
    fontSize: "18px",
    marginLeft: "10px",
    textDecoration: "none",
    backgroundColor: "#ad536d",
    padding: "8px",
    borderRadius: "20px",
  },
  apply: {
    display: "block",
    fontSize: "18px",
    marginLeft: "10px",
    textDecoration: "none",
    backgroundColor: "#4fab6c",
    padding: "8px",
    borderRadius: "20px",
  },
};

function Action({ data }: { data: data }) {
  return (
    <>
      <div style={style.containers} className="row justify-content-center">
        <div className="col">
          <span
            className="material-icons lightbulb"
            style={{
              color: "white",
              cursor: "pointer",
              border: "none !important",
            }}
          >
            help_outline
          </span>
        </div>
        <div className="col">
          <a href={data.ad} target="_blank" style={style.ad} className="ad">
            Go to Ad
          </a>
        </div>
        <div className="col">
          <a
            href={data.apply}
            target="_blank"
            style={style.apply}
            className="apply"
          >
            Apply Now
          </a>
        </div>
      </div>
      <div className="expand"></div>
    </>
  );
}

export default Action;
