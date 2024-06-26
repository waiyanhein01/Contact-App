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
    const res = await api.post("/contact", formData);
    if (res.data) {
      return res.data.success;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const getSingleContact = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    if (res.data) {
      return res.data.contact;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const editContact = async (id, formData) => {
  try {
    const res = await api.put(`/contact/${id}`, formData);
    if (res.data) {
      return true;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const deleteContact = async (id) => {
  try {
    const res = await api.delete(`/contact/${id}`);
    if (res.data) {
      return true;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};
