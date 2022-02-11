import React from "react";

interface data {
  email: string;
  name: string;
  phone: string;
  photo: string;
  onError: string;
  locations: string;
}

const style = {
  container: {
    padding: "10px",
  },
  inner: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "18px",
    wrap: "nowrap",
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: "100px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  noimg: {
    display: "none",
    height: "0px",
    width: "0px",
  },
};

const addDefaultSource = (event: any) => {
  event.target.src = "https://via.placeholder.com/150";
};

function Contact({ data }: { data: data }) {
  return (
    <div style={style.container}>
      <div style={style.inner}>
        <div>{data.phone}</div>
        <div>{data.name}</div>
      </div>
    </div>
  );
}

export default Contact;
