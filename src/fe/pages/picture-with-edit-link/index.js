/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ link, image }) => {
  return (
    <>
      <div className="background">
        <a className="edit btn btn-outline-primary" href={link.edit} target="_blank">
          Link
        </a>
        <a className="image-link" href={link.image} target="_blank">
          <div className="image" style={{ backgroundImage: `url(${image.src})` }} />
        </a>
      </div>
      <style jsx>
        {`
          .background {
            margin: 50px auto 0;
            width: 60vw;
            height: 60vw;
            position: relative;
          }

          .edit {
            margin: 10px;
            position: absolute;
            right: 0;
            z-index: 1;
          }

          .image-link {
            width: 100%;
            height: 100%;
            opacity: 1;
            display: block;
          }

          .image-link:hover {
            opacity: 0.7;
          }

          .image {
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </>
  );
};

Home.defaultProps = {
  link: {
    edit: 'https://tw.yahoo.com',
    image: 'https://google.com',
  },
  image: {
    src: '/static/placeholder.png',
  },
};

export default Home;
