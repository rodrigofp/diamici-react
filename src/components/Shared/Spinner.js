import Loader from "react-loader-spinner";
import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default class Spinner extends React.Component {
  //other logic
  render() {
    return (
        <Loader
            type="Triangle"
            color="White"
            secondaryColor="Grey"
            height={100}
            width={100}
        />
    );
  }
};