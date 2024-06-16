import React from "react";
import image1 from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpeg";
import image3 from "../../Assets/image3.jpeg";

const Product = () => {
  const workInfoData = [
    {
      image: image1,
      title: "Product 1",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: image2,
      title: "Product 2",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: image3,
      title: "Product 3",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
    {
        image: image1,
        title: "Product 4",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      },
      {
        image: image2,
        title: "Product 5",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      },
      {
        image: image3,
        title: "Product 6",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      },
      {
        image: image1,
        title: "Product 7",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
      },
      {
        image: image2,
        title: "Product 8",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
      },
      {
        image: image3,
        title: "Product 9",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      },
      {
        image: image3,
        title: "Product 10",
        text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
      },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Products</p>
        <h1 className="primary-heading">Let's see our products</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
