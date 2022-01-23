import React from "react";
import "../styles/Topdestination.css";
function Topdestination() {
  const topsites = [
    {
      image:
        "https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      town: "Diani",
    },
    {
      image:
        "https://images.unsplash.com/photo-1638178978337-82431bf86fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      town: "Lamu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1618193319734-478296be37ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80",
      town: "Kisumu",
    },
    {
      image:
        "https://media.istockphoto.com/photos/fort-jesus-in-mombasa-kenya-picture-id899926862?s=612x612",
      town: "Mombasa",
    },
    {
      image:
        "https://images.unsplash.com/photo-1481464904474-a575a33b44a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
      town: "Amboseli",
    },
  ];
  const bottomsites = [
    {
      image:
        "https://images.unsplash.com/photo-1633345778967-3760204a4c57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1545&q=80",
      town: "Malindi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532199286643-4b8e3f4a2fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80",
      town: "Masai Mara",
    },
    {
      image:
        "https://images.unsplash.com/photo-1613061445510-e296bfedb73e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
      town: "Kilimanjaro",
    },
    {
      image:
        "https://images.unsplash.com/photo-1486688680290-be46662593bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      town: "Nairobi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
      town: "Samburu",
    },
  ];

  return (
    <div>
      <h2>Top Destinations</h2>
      <div className="countries">
        <p id="kenya">Kenya</p>
        <p>Uganda</p>
        <p>Tanzania</p>
        <p>Rwanda</p>
      </div>
      <div className="tiles">
        <div className="top">
          {topsites.map((site) => (
            <div className="site">
              <div className="sitephoto">
                {" "}
                <img classname="siteimage" src={site.image} />
              </div>
              <p>{site.town}</p>
            </div>
          ))}
        </div>
        <div className="bottom">
          {bottomsites.map((site) => (
            <div className="site">
              <div className="sitephoto">
                {" "}
                <img className="siteimage" src={site.image} />
              </div>
              <p>{site.town}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topdestination;
