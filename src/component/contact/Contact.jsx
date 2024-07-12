import React, { useEffect, useState } from "react";
import '../contact/css/contact.css';
import { useDispatch, useSelector } from "react-redux";
import { dataActions } from "../../store/data-Slice";

const Contact = () => {
  const data = useSelector(state => state.data.dataList)
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid = () => {
    // Check if all fields in formData have values
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    });
  };

  const onsubmit = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => {
      dispatch(dataActions.addData({
        ...prevData, [name]: value
      }));

      return {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    });
  }

  useEffect(() => {
    const getData = async () => {
      const res = await fetch('https://portfolio-af747-default-rtdb.firebaseio.com/user.json', {
        method: "PUT",
        body: JSON.stringify(data)
      })
    }
    getData();
  }, [formData, dispatch, data])

  console.log(data);

  const cardItem = [
    {
      id: 1,
      icon: "fa-solid fa-code",
      name: "website development",
      detail: "1.5+ years commercial experience within small, medium and enterprise level businesses."
    },
    {
      id: 2,
      icon: "fa-solid fa-code",
      name: "website development",
      detail: "1.5+ years commercial experience within small, medium and enterprise level businesses."
    },
  ]

  const resetForm = () => {
    setFormData(()=> {
      return {
        name: "",
        email: "",
        subject: "",
        message: "",
      }
    })
  }
  return (
    <>
      {/* contact-banner-section start */}
      <section className="banner-section">
        <div className="container">
          <div className="row">
            <div className="main-heading">
              <h3>contact</h3>
              <span>lets chat ☕</span>
            </div>
          </div>
        </div>
      </section>
      {/* contact-banner-section end */}

      {/* contact-from section start */}
      <section className="form-section">
        <div className="container">
          <div className="row">
            <div className="main-box flex justify-between">
              <div className="box-1">
                {
                  cardItem.map((val) => {
                    const { id, icon, name, detail } = val;
                    return (
                      <>
                        <div className="card" key={id}>
                          <div className="content">
                            <div className="icon">
                              <i className={icon}></i>
                            </div>
                            <div className="detail">
                              <h3>{name}</h3>
                              <p>{detail}</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
              <div className="box-2">
                <div className="content">
                  <div className="main-heading">
                    <h2>how can i help you?</h2>
                  </div>
                  <form action="" onSubmit={onsubmit}>
                    <div className="card">
                      <div className="input-box">
                        <input type="text" placeholder="Full Name" name="name" onChange={inputChange} value={formData.name} />
                      </div>
                      <div className="input-box">
                        <input type="email" placeholder="Email Address" name="email" onChange={inputChange} value={formData.email} />
                      </div>
                      <div className="input-box">
                        <input type="text" placeholder="Subject" name="subject" onChange={inputChange} value={formData.subject} />
                      </div>
                    </div>
                    <div className="card">
                      <div className="message-box">
                        <textarea placeholder="Message" name="message" onChange={inputChange} value={formData.message} />
                      </div>
                    </div>
                    <div className="radio-btn">
                      <input type="checkbox" />
                      <span>I understand that FormSpree will securely hold my data in accordance with their privacy policy.</span>
                    </div>
                    <div className="btn">
                      <button type="submit" disabled={!isFormValid()}>send message</button>
                      <p onClick={resetForm}>clear form</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact-from section end */}
    </>
  )
}

export default Contact;