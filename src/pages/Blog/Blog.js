import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-area container my-5 ">
      <h2 className="text-center pt-5 text-uppercase">Some blog Feature </h2>
      <div className="faq-area">
        <div className="question-group">
          <div className="question my-2 fw-bold">
            ১. Authorization ও Authentication এর পার্থক্য কি ?
          </div>
          <p className="answer">
            উত্তর : Authentication : কাউকে কোনো কিছু বা কারো কোনো act ( যা সঠিক
            বলে দাবি করা হইসে ) প্রকৃত পক্ষে তা সঠিক কিনা সেইটা check করার
            প্রক্রিয়া হলো Authentication. কিছু জনপ্রিয় Authentication সার্ভিস
            প্রোভাইডার হলো google Firebase, Okta , Autho ইত্যাদি। Authorization
            : কাউকে কোনো কাজ করার জন্য বা resource ব্যবহার করতে পরার permission
            দেবার প্রক্রিয়া হলো Authorization . যেমন ফেসবুক গ্রুপ এর admin ,
            moderator .
          </p>
        </div>
        <div className="question-group">
          <div className="question my-2 fw-bold">
            ২. কেন তুমি Firebase ব্যবহার করবে ? Authentication করার জন্য আর কি
            কি option রয়েছে ?
          </div>
          <p className="answer">
            উত্তর : Firebase ব্যবহার করার অনেক গুলা কারণ রয়েছে ১.Firebase
            ব্যবহার করার জন্য কোনো টাকা পয়সা লাগে না ২.Firebase application
            তৈরির জন্য প্রোগ্রামার দের backend কোনো কাজ করতে হয় না ৩.Firebase
            খুব ই fast এবং trusted . Authentication করার জন্য firebase ছাড়া আরো
            অনেক সার্ভিস প্রোভাইডার রয়েছে যেমন Okta , Microsoft Azure Active
            Directory,Auth0 ইত্যাদি।
          </p>
        </div>
        <div className="question-group">
          <div className="question my-2 fw-bold">
            ৩. Authentication ছাড়া Firebase এ আর কি কি করা যায় ?
          </div>
          <p className="answer">
            উত্তর : Firebase অনেক সার্ভিস provide করে থাকে। ১. cloud Firebase{" "}
            <br /> ২. Cloud Functions <br /> ৩.Authentication <br /> ৪. Hoising{" "}
            <br /> ৫.Google Analysis <br /> ৬. Cloud Storage <br /> ৭. Cloud
            Messaging
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
