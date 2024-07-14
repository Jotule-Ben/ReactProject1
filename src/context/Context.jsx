import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const api = `http://ecommerce.reworkstaging.name.ng/v2`;
  let merchantId;
  const navigate = useNavigate();

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
      }
      if (!values.store) {
        errors.store = "Store name is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (!values.phones) {
        errors.phones = "Other Phone number is required";
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
      }
    }

    return errors;
  };

  const handleSubmit = (e, formType) => {
    const errors = validate(formValues, formType);
    setFormErrors(errors);
    setIsSubmit(true);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  // Create merchant account
  const handleCreateMerchant = (e) => {
    e.preventDefault();
    if (!handleSubmit(e, "createMerchant")) return;

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
          setFormValues(initialValues);
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
          console.log(merchantId);
          if (response.data.id === merchantId) {
            alert("Successful", formValues.email, formValues.password);
            navigate("/merchantDashboard");
          } else {
            alert("Invalid email or password");
          }
          // Clear input fields
          setFormValues(initialValues);
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
          // Clear Input fields
          // setFormValues = initialValues;
        },
        (error) => {
          console.log(error);
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
