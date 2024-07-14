import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const api = `http://ecommerce.reworkstaging.name.ng/v2`;
  let merchantId;

  const initialValues = {
    oldPassword: "",
    newPassword: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    merchantEmail: "",
    merchantPassword: "",
    phone: "",
    phones: "",
    store: "",
    description: "",
    state: "",
    district: "",
    twitter: "",
    FB: "",
    IG: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values, formType) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

    // if (!values.oldPassword) {
    //   errors.oldPassword = "Old password is required";
    // }
    // if (!values.newPassword) {
    //   errors.newPassword = "New password is required";
    // }
    // if (!values.password) {
    //   errors.password = " Password is required";
    // }
    // if (!values.password > 4) {
    //   errors.password = " Password cannot be less than 4 characters";
    // }
    // if (!values.email) {
    //   errors.email = "Email is required";
    // } else if (!regex.test(values.email)) {
    //   errors.email = " Email is Invalid";
    // }
    // if (!values.firstName) {
    //   errors.firstName = "First Name is required";
    // }
    // if (!values.lastName) {
    //   errors.lastName = "Last Name is required";
    // }
    // if (!values.merchantEmail) {
    //   errors.merchantEmail = "Email is required";
    // }
    // if (!regex.test(values.merchantEmail)) {
    //   errors.merchantEmail = " Email is Invalid";
    // }
    // if (!values.merchantPassword) {
    //   errors.merchantPassword = "Password is required";
    // }
    // if (!values.phone) {
    //   errors.phone = "Phone is required";
    // }
    // if (!values.store) {
    //   errors.store = "Store name is required";
    // }
    // if (!values.description) {
    //   errors.description = "Description is required";
    // }
    // if (!values.phones) {
    //   errors.phones = "Other phones is required";
    // } else if (values.phones !== 11) {
    //   errors.phones = "Not a valid Phone number";
    // }
    // if (!values.phone) {
    //   errors.phone = "Phone number is required";
    // } else if (values.phone !== 11) {
    //   errors.phone = "Not a valid Phone number";
    // }

    if (formType === "login") {
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!regex.test(values.email)) {
        errors.email = "Email is invalid";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
    } else if (formType === "createMerchant") {
      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }
      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      }
      if (!values.merchantEmail) {
        errors.merchantEmail = "Email is required";
      } else if (!regex.test(values.merchantEmail)) {
        errors.merchantEmail = "Email is invalid";
      }
      if (!values.merchantPassword) {
        errors.merchantPassword = "Password is required";
      } else if (!values.merchantPassword > 4) {
        errors.merchantPassword = " Password cannot be less than 4 characters";
      }
      if (!values.phone) {
        errors.phone = "Phone number is required";
      } else if (values.phone !== 11) {
        errors.phone = "Not a valid Phone number";
      }
      if (!values.store) {
        errors.store = "Store name is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (!values.phones) {
        errors.phones = "Other Phone number is required";
      } else if (values.phones !== 11) {
        errors.phones = "Not a valid Phone number";
      }
    } else if (formType === "updateMerchantPassword") {
      if (!values.oldPassword) {
        errors.oldPassword = "Old password is required";
      }
      if (!values.newPassword) {
        errors.newPassword = "New password is required";
      } else if (!values.newPassword > 4) {
        errors.newPassword = "New Password cannot be less than 4 characters";
      }
    } else if (formType === "updateMerchantDetails") {
      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }
      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      }
      if (!values.merchantEmail) {
        errors.merchantEmail = "Email is required";
      } else if (!regex.test(values.merchantEmail)) {
        errors.merchantEmail = "Email is invalid";
      }
      if (!values.phone) {
        errors.phone = "Phone number is required";
      } else if (values.phone !== 11) {
        errors.phone = "Not a valid Phone number";
      }
      if (!values.store) {
        errors.store = "Store name is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (!values.state) {
        errors.state = "State is required";
      }
      if (!values.district) {
        errors.district = "District is required";
      }
      if (!values.twitter) {
        errors.twitter = "X account is required";
      }
      if (!values.IG) {
        errors.IG = "IG account is required";
      }
      if (!values.FB) {
        errors.FB = "FB account is required";
      }
      if (!values.phones) {
        errors.phones = "Other Phone number is required";
      } else if (values.phones !== 11) {
        errors.phones = "Not a valid Phone number";
      }
    }

    return errors;
  };

  const handleSubmit = (e, formType) => {
    // e.preventDefault();
    setFormErrors(validate(formValues, formType));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  // Create Update and Login to merchant account
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [merchantEmail, setMerchantEmail] = useState("");
  // const [merchantPassword, setMerchantPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [phones, setPhones] = useState("");
  // const [store, setStore] = useState("");
  // const [description, setDescription] = useState("");
  // const [state, setState] = useState("");
  // const [district, setDistrict] = useState("");
  // const [twitter, setTwitter] = useState("");
  // const [FB, setFB] = useState("");
  // const [IG, setIG] = useState("");

  const handleCreateMerchant = (e) => {
    e.preventDefault();
    handleSubmit(e, "createMerchant");

    axios
      .post(`${api}/merchants`, {
        first_name: formValues.firstName,
        last_name: formValues.lastName,
        email: formValues.merchantEmail,
        phone: formValues.phone,
        store_name: formValues.store,
        descp: formValues.description,
        icon: "",
        banner: "",
        phones: formValues.phones,
        password: formValues.merchantPassword,
      })
      .then(
        (response) => {
          console.log(response, response.data.id);
          // Clear input fields
          formValues.firstName = "";
          formValues.lastName = "";
          formValues.merchantEmail = "";
          formValues.phone = "";
          formValues.store = "";
          formValues.description = "";
          formValues.phones = "";
          formValues.merchantPassword = "";
          localStorage.setItem("merchantId", response.data.id);
          merchantId = localStorage.getItem("merchantId");
          console.log(merchantId);
          if (response.statusText === "OK") {
            alert("Merchant successfully created", response.data.id);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // get merchant id from local storage
  function getmerchantIdFromLocalStorage() {
    return localStorage.getItem("merchantId");
  }
  merchantId = getmerchantIdFromLocalStorage();
  console.log(merchantId);

  // Log merchant in
  const merchantLogin = (e) => {
    handleSubmit(e, "login");
    e.preventDefault();
    axios
      .post(`${api}/merchants/login`, {
        email: formValues.email,
        password: formValues.password,
      })
      .then(
        (response) => {
          console.log(response, response.data.id);
          // Clear input fields
          formValues.email = "";
          formValues.password = "";
          console.log(merchantId);
          if (response.data.id === merchantId) {
            alert("Successful", formValues.email, formValues.password);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Update merchant Details
  const handleUpdateMerchantDetails = (e) => {
    e.preventDefault();
    handleSubmit(e, "updateMerchantDetails");

    axios
      .put(
        `http://ecommerce.reworkstaging.name.ng/v2/merchants/${merchantId}`,
        {
          first_name: formValues.firstName,
          last_name: formValues.lastName,
          email: formValues.merchantEmail,
          phone: formValues.phone,
          store_name: formValues.store,
          descp: formValues.description,
          icon: "",
          banner: "",
          state: formValues.state,
          district: formValues.district,
          social_media: {
            x: formValues.twitter,
            face_book: formValues.FB,
            instagram: formValues.IG,
          },
          phones: formValues.phones,
        }
      )
      .then(
        (response) => {
          console.log(response, response.id);
          alert("Successful");
          // Clear Input fields
          // setFormValues = initialValues;
        },
        (error) => {
          console.log(error);
          alert("Error");
        }
      );
  };

  // Update Merchant Password
  const updateMerchantPassword = (e) => {
    e.preventDefault();
    handleSubmit(e, "updateMerchantPassword");
    axios
      .put(`${api}/merchants/${merchantId}/change-passwd`, {
        old_password: formValues.oldPassword,
        new_password: formValues.newPassword,
      })
      .then(
        (response) => {
          console.log(response, response.data.id);
          // Clear input fields
          formValues.oldPassword = "";
          formValues.newPassword = "";
          console.log(merchantId);
          if (response.data.id === merchantId) {
            alert("Successful", formValues.oldPassword, formValues.newPassword);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const value = {
    merchantLogin,
    handleCreateMerchant,
    updateMerchantPassword,
    handleUpdateMerchantDetails,
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
