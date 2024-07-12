import React, { createContext, useRef } from "react";
import axios from "axios";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const api = `http://ecommerce.reworkstaging.name.ng/v2`;
  let merchantId;

  // Create Update and Login to merchant account
  const email = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const merchantEmail = useRef();
  const merchantPassword = useRef();
  const phone = useRef();
  const phones = useRef();
  const store = useRef();
  const description = useRef();
  const state = useRef();
  const district = useRef();
  const twitter = useRef();
  const FB = useRef();
  const IG = useRef();

  const handleCreateMerchant = (event) => {
    event.preventDefault();

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
          console.log(response, response.data.id);
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
          localStorage.setItem("merchantId", response.data.id);
          merchantId = localStorage.getItem("merchantId");
          console.log(merchantId);
          if (response.statusText === "OK") {
            alert("Merchant successfully created", response.data.id);
          }
        },
        (error) => {
          console.log(error);
          alert("Error");
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
  const merchantLogin = (event) => {
    event.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    axios
      .post(`${api}/merchants/login`, {
        email: emailValue,
        password: passwordValue,
      })
      .then(
        (response) => {
          console.log(response, response.data.id);
          // Clear input fields
          email.current.value = "";
          password.current.value = "";
          console.log(merchantId);
          if (response.data.id === merchantId) {
            alert("Successful", emailValue, passwordValue);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleUpdateMerchantDetails = (event) => {
    event.preventDefault();

    const firstNameValue = firstName.current.value;
    const lastNameValue = lastName.current.value;
    const merchantEmailValue = merchantEmail.current.value;
    const phoneValue = phone.current.value;
    const storeValue = store.current.value;
    const descriptionValue = description.current.value;
    const phonesValue = phones.current.value;
    const stateValue = state.current.value;
    const districtValue = district.current.value;
    const XValue = twitter.current.value;
    const FBValue = FB.current.value;
    const IGValue = IG.current.value;
    console.log(
      `First Name: ${firstNameValue} \nLast Name: ${lastNameValue} \nmerchantEmail: ${merchantEmailValue}  \nPhone: ${phoneValue}`
    );

    axios
      .put(
        `http://ecommerce.reworkstaging.name.ng/v2/merchants/${merchantId}`,
        {
          first_name: firstNameValue,
          last_name: lastNameValue,
          email: merchantEmailValue,
          phone: phoneValue,
          store_name: storeValue,
          descp: descriptionValue,
          icon: "",
          banner: "",
          state: stateValue,
          district: districtValue,
          social_media: {
            x: XValue,
            face_book: FBValue,
            instagram: IGValue,
          },
          phones: phonesValue,
        }
      )
      .then(
        (response) => {
          console.log(response, response.id);
          alert("Successful");
        },
        (error) => {
          console.log(error);
          alert("Error");
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
    merchantLogin,
    handleCreateMerchant,
    state,
    district,
    twitter,
    FB,
    IG,
    handleUpdateMerchantDetails,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
