import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleContact } from "../service/Contact.service";
import { LoadingComponent } from "../components";

const DetailContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const res = await getSingleContact(id);
      setItems((pre) => ({ ...pre, loading: true }));
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, [id]);
  console.log(id);
  return (
    <div className=" w-full h-screen flex flex-col mt-5">
      {items.loading ? (
        <LoadingComponent />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            <div className="w-full border shadow flex items-center justify-center rounded-lg mb-3">
              <div className=" p-5 ">
                <h1 className="">
                  <span className=" font-bold font-serif">name:</span>{" "}
                  {items.data.name}
                </h1>
                <h1 className="">
                  <span className=" font-bold font-serif">Phone:</span>{" "}
                  {items.data.phone}
                </h1>
                <h1 className="">
                  <span className=" font-bold font-serif">Email:</span>{" "}
                  {items.data.email}
                </h1>
                <h1 className="">
                  <span className=" font-bold font-serif">Address:</span>{" "}
                  {items.data.address}
                </h1>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailContactPage;
