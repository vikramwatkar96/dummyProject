
import React from 'react';
import styles from '../../css_style/customButton.module.css'

function CustomButton ({  onClick,title }){
  return (
    <button className={`${styles.customButton_title} ${styles.customButton_Margin}`} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
