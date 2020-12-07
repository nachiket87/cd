import React from "react";

const contactInfoLister = (info, object, type) => {
  const listedInfo = info.map((detail, i) => {
    switch (type) {
      case "contact":
        return (
          <li key={i}>
            {detail}: {object[detail]}
          </li>
        );
      default:
        return <li key={i}>{object[detail]}</li>;
    }
  });

  return listedInfo;
};
export default contactInfoLister;
