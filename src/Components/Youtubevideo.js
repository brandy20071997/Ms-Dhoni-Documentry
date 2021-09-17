import React from "react";
import PropTypes from "prop-types"
import styles from "./Youtube.module.css"

const Youtubevideo = ({ embedId }) => (
  <div className={styles.video_responsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Youtubevideo.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Youtubevideo;