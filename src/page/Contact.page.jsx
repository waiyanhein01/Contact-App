import React, { useState } from "react";
import { deleteContact } from "../service/Contact.service";
import { CardContactComponent, LoadingComponent } from "../components";
import { useGetContactQuery } from "../store/service/endpoints/contact.endpoints";

const ContactPage = () => {
  const {isLoading,isError,data,isSuccess} = useGetContactQuery()

  const [deleteItems,setDeleteItems] = useState(false)


  const handleDelete = async (id) => {
    await deleteContact(id)
    setDeleteItems((pre) => !pre)
  };

  return (
    <div className=" w-full h-screen flex flex-col mt-5">
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <>
          {isError ? (
            <h1>{isError.message}</h1>
          ) : (
            data.contacts.data.map((el) => 
              <CardContactComponent handleDelete={handleDelete}  key={el.id} data={el} />
            )
          )}
        </>
      )}
    </div>
  );
};

export default ContactPage;
