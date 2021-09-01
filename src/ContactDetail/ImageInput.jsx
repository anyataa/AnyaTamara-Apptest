import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { onUpdateContact } from "../actions/contactAction";
import { API } from "../Util/constant";

const readFileAsDataURL = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      resolve(event.target.result);
    };

    reader.readAsDataURL(file);
  });

const resizeImage = (imageURL, canvas, maxHeight) =>
  new Promise((resolve) => {
    const image = new Image();

    image.onload = () => {
      const context = canvas.getContext("2d");

      if (image.height > maxHeight) {
        image.width *= maxHeight / image.height;
        image.height = maxHeight;
      }

      context.clearRect(0, 0, canvas.width, canvas.height);
      canvas.width = image.width;
      canvas.height = image.height;

      context.drawImage(image, 0, 0, image.width, image.height);

      resolve(canvas.toDataURL("image/jpeg"));
    };

    image.src = imageURL;
  });

class ImageInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    maxHeight: PropTypes.number,
  };

  state = {
    value: "",
  };

  handleFormReset = () => {
    this.setState({ value: "" });
  };

  componentDidMount() {
    this.canvas = document.createElement("canvas");
    this.fileInput.form.addEventListener("reset", this.handleFormReset);
  }

  componentWillUnmount() {
    this.fileInput.form.removeEventListener("reset", this.handleFormReset);
  }

  render() {
    // ==== Handle Change  ====
    const handleFileChange = (event) => {
      const file = event.target.files[0];

      if (file && file.type.match(/^image\//)) {
        readFileAsDataURL(file).then((originalURL) => {
          resizeImage(originalURL, this.canvas, this.props.maxHeight).then(
            (url) => {
              this.setState({ value: url });
            }
          );
        });
        //   Axios handle post
        let formData = new FormData();
        formData.append("file", file);

        axios
          .post(API + ``, formData)
          .then((res) => {
            this.props.onLoginAction({ ...user });
            console.log(user);
          })
          .catch((err) => console.log("Error"));
      } else {
        this.setState({ value: "" });
      }
    };

    // ==== Handle Change End ====
    const { className, name, user } = this.props;
    const { value } = this.state;

    const style = {
      position: "relative",
    };

    if (value) {
      style.backgroundImage = `url("${value}")`;
      style.backgroundRepeat = "no-repeat";
      style.backgroundPosition = "center";
      style.backgroundSize = "cover";
    } else if (user.photo.length > 4) {
      // console.log("N/A not here", user.photo.length);
      style.backgroundImage = `url("${user.photo}")`;
      style.backgroundRepeat = "no-repeat";
      style.backgroundPosition = "center";
      style.backgroundSize = "cover";
      console.log(user.userImage);
    }

    return (
      <div className={className} style={style}>
        {console.log(this.props)}
        <input type="hidden" name={name} value={value} />
        <input
          ref={(node) => (this.fileInput = node)}
          type="file"
          onChange={handleFileChange}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0,
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.contact,
  };
};

export default connect(mapStateToProps, { onUpdateContact })(ImageInput);
