import React, { useEffect, useState } from "react";
import { ButtonComponent, FormComponent } from "../components";
import { createContactData, editContact } from "../service/Contact.service";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreateContactMutation, useEditContactMutation } from "../store/service/endpoints/contact.endpoints";

const ContactAddPage = () => {
  const [fun, create] = useCreateContactMutation()

  const [edit,{isLoading,isError,data}] = useEditContactMutation()
  console.log(isLoading,isError,data)

  const nav = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (location.state?.edit) {
      const { name, email, phone, address } = location.state.data;
      setFormData({ name, email, phone, address });
    }
  }, [location]);

  const handleFormChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res;
    // {location.state?.edit ? await editContact(location.state.id, formData) :await createContactData(formData)}
    if (location.state?.edit) {
      res = edit(location.state.id, formData);
    } else {
      res = fun(formData);
    }
    if (res) {
      nav("/");
    }
  };
  return (
    <div>
      <div className="mt-5">
        <div className="Center">
          <div className="lg:w-[400px] w-[400px] border shadow p-7 rounded-lg">
            <h1 className="text-xl text-center">Create Your Contact</h1>

            <form onSubmit={handleSubmit} className=" mt-5">
              <FormComponent
                onChange={handleFormChange}
                value={formData.name}
                name={"name"}
                label={"Username"}
                type={"text"}
              />

              <FormComponent
                onChange={handleFormChange}
                value={formData.phone}
                name={"phone"}
                label={"Phone"}
                type={"text"}
              />

              <FormComponent
                onChange={handleFormChange}
                value={formData.email}
                name={"email"}
                label={"Email"}
                type={"email"}
              />

              <FormComponent
                onChange={handleFormChange}
                value={formData.address}
                name={"address"}
                label={"Address"}
                type={"text"}
              />

              <ButtonComponent type="submit"> {location.state?.edit ? "Edit Contact" : "Create Contact"}
              </ButtonComponent>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddPage;
