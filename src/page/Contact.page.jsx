import React, { useEffect, useState } from "react";
import { getContactData } from "../service/Contact.service";
import { CardContactComponent, LoadingComponent } from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    (async () => {
      setItems((pre) => ({ ...pre, loading: true }));
      const res = await getContactData();
      if (res.error) {
        setItems((pre) => ({ ...pre, loading: false, error: res.msg }));
      } else {
        setItems((pre) => ({ ...pre, loading: false, data: res }));
      }
    })();
  }, []);

  return (
    <div className=" w-full h-screen flex flex-col mt-5">
      {items.loading ? (
        <LoadingComponent />
      ) : (
        <>
          {items.error ? (
            <h1>{items.error}</h1>
          ) : (
            items.data.map((el) => 
              <CardContactComponent key={el.id} data={el} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
