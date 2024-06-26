import { api } from "./Api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const createContactData = async (formData) => {
    try {
      const res = await api.post("/contact",formData);
      console.log(res)
    //   if (res.data) {
    //     const contactData = res.data.contacts.data;
    //     return contactData;
    //   }
    } catch (e) {
      return { error: true, msg: e.message };
    }
  };
