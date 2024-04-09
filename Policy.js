import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title= {"Our Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>This Privacy Policy outlines the information practices for Shopping Stop concerning the collection, use, and disclosure of personal information when you use our website and the choices you have associated with that data. By using our website, you agree to the collection and use of information in accordance with this policy. If you disagree with any aspect of this policy, please refrain from using our website.</p>
          <h4>Types of Data Collected</h4>
          <p>Personal Data: While using our website, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.</p>
          <h4>Retention of Data </h4>
          <p>We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations </p>
          
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
