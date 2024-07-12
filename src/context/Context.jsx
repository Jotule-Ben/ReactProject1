import React, { createContext, useRef } from "react";
import axios from "axios";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const api = `http://ecommerce.reworkstaging.name.ng/v2`;
  let merchantId;

  // Login to merchant account
  const email = useRef();
  const password = useRef();

  // Create Merchant Account
  const firstName = useRef();
  const lastName = useRef();
  const merchantEmail = useRef();
  const merchantPassword = useRef();
  const phone = useRef();
  const phones = useRef();
  const store = useRef();
  const description = useRef();

  const handleMerchantSubmit = (event) => {
    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const merchantEmailValue = merchantEmail.current.value;
    const merchantPasswordValue = merchantPassword.current.value;
    const phoneValue = phone.current.value;
    const storeValue = store.current.value;
    const descriptionValue = description.current.value;
    const phonesValue = phones.current.value;

    console.log(
      `First Name: ${firstNameValue} \nLast Name: ${lastNameValue} \nmerchantEmail: ${merchantEmailValue} \nmerchantPassword: ${merchantPasswordValue} \nPhone: ${phoneValue}`
    );

    axios
      .post(`${api}/merchants`, {
        first_name: firstNameValue,
        last_name: lastNameValue,
        email: merchantEmailValue,
        phone: phoneValue,
        store_name: storeValue,
        descp: descriptionValue,
        icon: "",
        banner: "",
        phones: phonesValue,
        password: merchantPasswordValue,
      })
      .then(
        (response) => {
          console.log(response, response.id);
          // Clear input fields
          firstName.current.value = "";
          lastName.current.value = "";
          merchantEmail.current.value = "";
          merchantPassword.current.value = "";
          phone.current.value = "";
          store.current.value = "";
          description.current.value = "";
          phones.current.value = "";
          // alert("Successful");
          if (response.statusText === "OK") {
            alert("Merchant successfully created", response.id);
            localStorage.setItem("merchantId", response.id);
            merchantId = localStorage.getItem("merchantId");
          }

          console.log(merchantId);
        },
        (error) => {
          console.log(error);
          alert("Error");
        }
      );
    event.preventDefault();
  };

  // get merchant id from local storage
  // function getmerchantIdFromLocalStorage() {
  //   return localStorage.getItem("merchantId");
  // }
  // merchantId = getmerchantIdFromLocalStorage();
  // console.log(merchantId);

  const handleSubmit = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    axios
      .post(`${api}/users/login`, {
        email: emailValue,
        password: passwordValue,
      })
      .then(
        (response) => {
          console.log(response, response.id);
          // Clear input fields
          email.current.value = "";
          password.current.value = "";
          console.log(merchantId);
          if (response.id === merchantId) {
            alert("Successful");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const value = {
    email,
    password,
    firstName,
    lastName,
    merchantEmail,
    merchantPassword,
    phone,
    phones,
    store,
    description,
    handleSubmit,
    handleMerchantSubmit,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
