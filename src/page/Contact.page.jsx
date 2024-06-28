import React, { useEffect, useState } from "react";
import { deleteContact, getContactData } from "../service/Contact.service";
import { CardContactComponent, LoadingComponent } from "../components";

const ContactPage = () => {
  const [items, setItems] = useState({
    loading: true,
    data: null,
    error: null,
  });

  const [deleteItems,setDeleteItems] = useState(false)

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
  }, [deleteItems]);

  const handleDelete = async (id) => {
    await deleteContact(id)
    setDeleteItems((pre) => !pre)
  };

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
              <CardContactComponent handleDelete={handleDelete}  key={el.id} data={el} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
