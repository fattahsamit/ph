import React from "react";
import Cousin from "../Cousin/Cousin";

const Aunty = ({ ring }) => {
  return (
    <div>
      <h3>Aunty</h3>
      <section className="flex">
        <Cousin ring={ring} hasFriend={true}>
          John
        </Cousin>
        <Cousin>Jane</Cousin>
      </section>
    </div>
  );
};

export default Aunty;
