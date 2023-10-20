import React from "react";
import Layout from "../Layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FormContact } from "../Components/FormContact";


const ContactUs = () => {
  return (
    <Layout>
      <div className="contact-container mt-16 p-10 w-full flex justify-center items-stretch">
        <div className="contact-content flex bg-blue-100 bg-opacity-20 backdrop-blur-md m-0 p-0 rounded-md shadow-xl">
          <div
            className="get-intouch w-3/4 rounded-md text-gray-900 m-0 p-10 flex flex-col justify-center items-start bg-center bg-no-repeat bg-cover "
            style={{
              backgroundImage: "url(/src/assets/images/bg-contact.jpeg)",
            }}
          >
            <div className="content-contact w-full h-full m-0 p-10 bg-blue-200 bg-opacity-70">
              <h2 className="title font-san font-semibold text-4xl text-gray-900 ">
                Get in Touch with Us!
              </h2>
              <h3 className="text-lg mt-6">Hello,</h3>
              <p className="text-light text-lg">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We appreciate your interest in our
                website and are excited to hear from you. Whether you have
                questions, suggestions, or just want to connect, we encourage
                you to reach out. Your input and engagement are essential to us.
              </p>
              <p className="text-light text-lg">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please feel free to send us a
                message through this platform or reach out via email at
                sportclub@example.com.{" "}
              </p>
              <p className="text-light text-lg">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We're looking forward to hearing
                from you and engaging in meaningful discussions. Your
                involvement is highly valued.
              </p>
              <br />
              <p className="text-light text-lg">Best regards,</p>
              <br />
              <p className="text-light text-lg">
                Sportclub Adminstration Team
              </p>
              <div className="address flex mt-5 items-center ">
                <FontAwesomeIcon icon={faBuilding} size="lg" className="mr-4" />
                <div className="address-info">
                  <p>4 Privet Drive, Little Whinging,</p>
                  <p>Surrey, England</p>
                </div>
              </div>
              <div className="contact-call flex mt-5 items-center ">
                <FontAwesomeIcon icon={faPhone} size="lg" className="mr-4" />
                <a
                  href="tel:+66812345678"
                  className="call text-gray-900 hover:text-emerald-400"
                >
                  Call : +66 8 1234 5678
                </a>
              </div>
              <div className="contact-email flex mt-6 mb-20 items-center">
                <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-4" />
                <a
                  href="mailto:sportclub@example.com"
                  className="call text-gray-900 hover:text-emerald-400"
                >
                  sportclub@example.com
                </a>
              </div>
            </div>
          </div>
          <FormContact/>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
