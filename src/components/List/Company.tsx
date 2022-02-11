import React from "react";
import { IList } from "./interface";

const style = {
  container: {
    margin: "10px",
    padding: "10px",
  },
  inner: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px",
     fontWeight: "400",
    maxHeight: "30px",
  },
  subtitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 10px 5px 10px",
    borderRadius: "20px",
    backgroundColor: "rgba(255,255,255,0.5)",
    fontSize: "18px",
  },
  block: {
    display: "block",
    fontSize: "16px",
  },
};

function Company(props: any) {
  //console.log("-->", props.loc[0]["location"]["city"]);
  return (
    <>
      <div style={style.title}>
        <div>{props.company.name}</div>
        <div style={style.subtitle}>{props.employment_type}</div>
      </div>
    </>
  );
}

export default Company;
