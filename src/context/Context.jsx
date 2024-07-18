import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const GlobalProvider = ({ children }) => {
  const api = `http://ecommerce.reworkstaging.name.ng/v2`;
  let merchantId;
  let merchantName;
  let userId;
  let userName;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    categoryName: "",
    productTitle: "",
    productDescription: "",
    productPrice: "",
    productBrand: "",
    productQuantity: "",
    productCurrency: "",
    productMinQuantity: "",
    productMaxQuantity: "",
    productDiscount: "",
    productDiscountExpiration: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      [name]: value !== undefined ? value : "",
    }));
  };

  const [categories, setCategories] = useState([]);
  const [createProduct, setCreateproducts] = useState([]);

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
    UserfirstName: "",
    UserlastName: "",
    Useremail: "",
    Userphone: "",
    Userpassword: "",
    oldUserPassword: "",
    newUserPassword: "",
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
    } else if (formType === "createUser") {
      if (!values.UserfirstName) {
        errors.UserfirstName = "First Name is required";
      }
      if (!values.UserlastName) {
        errors.UserlastName = "Last Name is required";
      }
      if (!values.Useremail) {
        errors.Useremail = "Email is required";
      } else if (!regex.test(values.Useremail)) {
        errors.Useremail = "Email is invalid";
      }
      if (!values.Userpassword) {
        errors.merchantPassword = "Password is required";
      } else if (!values.merchantPassword > 4) {
        errors.Userpassword = " Password cannot be less than 4 characters";
      }
      if (!values.Userphone) {
        errors.Userphone = "Phone number is required";
      }
    } else if (formType === "userLogin") {
      if (!values.Useremail) {
        errors.Useremail = "Email is required";
      } else if (!regex.test(values.Useremail)) {
        errors.Useremail = "Email is invalid";
      }
      if (!values.Userpassword) {
        errors.Userpassword = "Password is required";
      }
    } else if (formType === "updateUserPassword") {
      if (!values.oldUserPassword) {
        errors.oldUserPassword = "Old password is required";
      }
      if (!values.newUserPassword) {
        errors.newUserPassword = "New password is required";
      } else if (!values.newUserPassword > 4) {
        errors.newUserPassword =
          "New Password cannot be less than 4 characters";
      }
    } else if (formType === "updateUserDetails") {
      if (!values.UserfirstName) {
        errors.UserfirstName = "First Name is required";
      }
      if (!values.UserlastName) {
        errors.UserlastName = "Last Name is required";
      }
      if (!values.Useremail) {
        errors.Useremail = "Email is required";
      } else if (!regex.test(values.Useremail)) {
        errors.Useremail = "Email is invalid";
      }
      if (!values.Userphone) {
        errors.Userphone = "Phone number is required";
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
      // console.log(formValues);
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
          // Clear input fields
          setFormValues(initialValues);
          localStorage.setItem("merchantId", response.data.id);
          merchantId = localStorage.getItem("merchantId");
          localStorage.setItem("merchantName", response.data.first_name);
          merchantName = localStorage.getItem("merchantName");
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
  // console.log(merchantId);

  // get merchant name from local storage
  function getmerchantNameFromLocalStorage() {
    return localStorage.getItem("merchantName");
  }
  merchantName = getmerchantNameFromLocalStorage();
  // console.log(merchantName);

  // let firstLetterOfMerchantName = merchantName[0];

  // Log merchant in
  const merchantLogin = (e) => {
    if (!handleSubmit(e, "login")) return;
    e.preventDefault();
    axios
      .post(`${api}/merchants/login`, {
        email: formValues.email,
        password: formValues.password,
      })
      .then(
        (response) => {
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
    if (!handleSubmit(e, "updateMerchantDetails")) return;

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
          if (response.statusText === "ok") {
            // Clear Input fields
            setFormValues(initialValues);
            alert("Details Successfully Updated");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Update Merchant Password
  const updateMerchantPassword = (e) => {
    e.preventDefault();
    if (!handleSubmit(e, "updateMerchantPassword")) return;

    axios
      .put(`${api}/merchants/${merchantId}/change-passwd`, {
        old_password: formValues.oldPassword,
        new_password: formValues.newPassword,
      })
      .then(
        (response) => {
          if (response.statusText === "OK") {
            // Clear Input fields
            setFormValues(initialValues);
            alert("Password Successfully Updated");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Create User
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!handleSubmit(e, "createUser")) return;

    axios
      .post(`${api}/users`, {
        first_name: formValues.UserfirstName,
        last_name: formValues.UserlastName,
        email: formValues.Useremail,
        phone: formValues.Userphone,
        password: formValues.Userpassword,
      })
      .then(
        (response) => {
          localStorage.setItem("userId", response.data.id);
          userId = localStorage.getItem("userId");
          localStorage.setItem("userName", response.data.first_name);
          userName = localStorage.getItem("userName");
          if (response.statusText === "OK") {
            // Clear Input fields
            setFormValues(initialValues);
            alert("User Successfully Created! \nLogin");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // get user id from local storage
  function getUserIdFromLocalStorage() {
    return localStorage.getItem("userId");
  }
  userId = getUserIdFromLocalStorage();
  // console.log(userId);

  // get user name from local storage
  function getUserNameFromLocalStorage() {
    return localStorage.getItem("userName");
  }
  userName = getUserNameFromLocalStorage();
  // console.log(userName);

  // let firstLetterOfUserName = userName[0];

  const ShowUserLoggedIn = () => {
    useEffect(() => {
      if (userName !== "" || userName !== undefined) {
        return userName;
      } else {
        return "SignUp / Register";
      }
    }, []);
  };

  // Log User in
  const handleUserLogin = (e) => {
    if (!handleSubmit(e, "userLogin")) return;
    e.preventDefault();
    axios
      .post(`${api}/users/login`, {
        email: formValues.Useremail,
        password: formValues.Userpassword,
      })
      .then(
        (response) => {
          if (response.data.id === userId) {
            alert("Successful", formValues.Useremail, formValues.Userpassword);
            navigate("/");
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

  // Update user details
  const handleUpdateUserDetails = (e) => {
    e.preventDefault();
    if (!handleSubmit(e, "updateUserDetails")) return;

    axios
      .put(`http://ecommerce.reworkstaging.name.ng/v2/users/${userId}`, {
        first_name: formValues.UserfirstName,
        last_name: formValues.UserlastName,
        email: formValues.Useremail,
        phone: formValues.Userphone,
      })
      .then(
        (response) => {
          if (response.statusText === "OK") {
            alert("Details Successfully Updated");
            // Clear Input fields
            setFormValues(initialValues);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Update user Password
  const handleUpdateUserPassword = (e) => {
    e.preventDefault();
    if (!handleSubmit(e, "updateUserPassword")) return;

    axios
      .put(`${api}/users/${userId}/change-passwd`, {
        old_password: formValues.oldUserPassword,
        new_password: formValues.newUserPassword,
      })
      .then(
        (response) => {
          if (response.statusText === "OK") {
            // Clear Input fields
            setFormValues(initialValues);
            alert("Password Successfully Updated");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Create Category
  const handleCreateCategory = (e) => {
    e.preventDefault();

    axios
      .post(`${api}/categories`, {
        merchant_id: merchantId,
        name: formData.categoryName,
        image:
          "https://s.alicdn.com/@img/imgextra/i3/O1CN01gRUkNN1sW5HWJb8Me_!!6000000005773-2-tps-200-200.png",
      })
      .then(
        (response) => {
          if (response.statusText === "OK") {
            // Clear Input fields
            setFormData({ categoryName: "" });

            // Show newly created category immediately
            setCategories((prevCategories) => [
              ...prevCategories,
              response.data,
            ]);
            alert("Category Successfully Created");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Get categories
  useEffect(() => {
    axios
      .get(`${api}/categories?merchant_id=${merchantId}`)
      .then(
        (response) => {
          setCategories(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, [merchantId]);

  // Handle Delete Category
  const handleDeleteCategory = async (id) => {
    axios.delete(`${api}/categories/${id}`).then(
      (response) => {
        // setCategories(response.filter((category) => category.id !== id));
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
      },
      (error) => {
        console.log(error);
      }
    );
  };

  // Create product

  const getInitialState = () => {
    const value = "";
    return value;
  };

  const [selectValue, setselectValue] = useState(getInitialState);
  const [selectCategoryValue, setselectCategoryValue] =
    useState(getInitialState);
  const [selectCountryValue, setselectCountryValue] = useState(getInitialState);

  const handleSelectChange = (e) => {
    setselectValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectLocationChange = (e) => {
    setselectCountryValue(e.target.value);
    console.log(e.target.value);
  };

  const handleSelectCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    setselectCategoryValue(selectedCategoryId);
    console.log("Selected Category ID:", selectedCategoryId);
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `
    http://bucket.reworkstaging.name.ng/resources`,
        {
          id: 231050054,
          image: file,
        }
      )
      .then(
        (response) => {
          if (response.statusText === "OK") {
            alert("succesfully Uploaded", response);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    if (file) {
      alert(
        `File name: ${file.name}\nFile size: ${file.size}\nFile type: ${file.type}`
      );
    } else {
      alert("No file selected");
    }
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();

    axios
      .post(`${api}/products`, {
        title: formData.productTitle,
        descp: formData.productDescription,
        price: formData.productPrice,
        brand: formData.productBrand,
        quantity: formData.productQuantity,
        images: "",
        currency: formData.productCurrency,
        min_qty: formData.productMinQuantity,
        max_qty: formData.productMaxQuantity,
        discount: formData.productDiscount,
        discount_expiration: formData.productDiscountExpiration,
        has_refund_policy: selectValue,
        has_discount: selectValue,
        has_shipment: selectValue,
        has_variation: selectValue,
        shipping_locations: [selectCountryValue],
        attrib: [
          {
            type: "",
            content: [
              {
                name: "",
                value: "",
              },
              {
                name: "",
                value: "",
              },
              {
                name: "",
                value: "",
              },
              {
                name: "",
                value: "",
              },
              {
                name: "",
                value: "",
              },
            ],
          },
          {
            type: "",
            content: [
              {
                name: "",
                value: "",
              },
            ],
          },
        ],
        category_id: selectCategoryValue,
        merchant_id: merchantId,
      })
      .then(
        (response) => {
          console.log(selectValue, response);
          if (response.statusText === "OK") {
            console.log(selectValue);
            // Clear Input fields
            setFormData({
              productTitle: "",
              productDescription: "",
              productPrice: "",
              productBrand: "",
              productQuantity: "",
              productCurrency: "",
              productMinQuantity: "",
              productMaxQuantity: "",
              productDiscount: "",
              productDiscountExpiration: "",
            });

            // Show newly created products immediately
            // setCreateproducts((prevProducts) => [
            //   ...prevProducts,
            //   response.data,
            // ]);
            alert("Product Successfully Created");
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  // Get products
  useEffect(() => {
    axios
      .get(`${api}/products?merchant_id=${merchantId}`)
      .then(
        (response) => {
          setCreateproducts(response.data);
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  }, [merchantId]);

  const value = {
    merchantLogin,
    handleCreateMerchant,
    updateMerchantPassword,
    handleUpdateMerchantDetails,
    formValues,
    formErrors,
    handleChange,
    handleSubmit,
    handleCreateUser,
    handleUserLogin,
    handleUpdateUserDetails,
    handleUpdateUserPassword,
    ShowUserLoggedIn,
    handleCreateCategory,
    formData,
    handleInputChange,
    categories,
    setCategories,
    // handleGetCategoryId,
    handleDeleteCategory,
    getInitialState,
    handleSelectChange,
    handleCreateProduct,
    handleSelectCategoryChange,
    handleFileChange,
    handleFileSubmit,
    createProduct,
    handleSelectLocationChange,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
