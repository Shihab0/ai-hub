/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SingleData from "../singleData/SingleData";
import Modal from "../Modal/Modal";

const Card = () => {
  const [data, setData] = useState([]);
  const [uniqueId, setUniqueId] = useState(null);
  const [modalData, setModalData] = useState([]);

  useEffect(() => {
    const loadModalData = async () => {
      const res = await fetch(
        `https://openapi.programming-hero.com/api/ai/tool/${uniqueId}`
      );
      const data = await res.json();

      setModalData(data.data);
    };
    loadModalData();
  }, [uniqueId]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/ai/tools"
      );
      const data = await res.json();
      setData(data.data.tools);
    };
    loadData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 gap-6">
        {data.slice().map((singleData) => (
          <SingleData
            singleData={singleData}
            key={singleData.id}
            setUniqueId={setUniqueId}
          />
        ))}
      </div>
      <Modal modalData={modalData}></Modal>
    </>
  );
};
export default Card;
