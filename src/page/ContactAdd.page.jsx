import React, { useState } from "react";
import { ButtonComponent, FormComponent } from "../components";
import { createContactData } from "../service/Contact.service";

const ContactAddPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleFormChange = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const res = await createContactData(formData)
    console.log(res)
  }
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

              <ButtonComponent type="submit">Create</ButtonComponent>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddPage;
