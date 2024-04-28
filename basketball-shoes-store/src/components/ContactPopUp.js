import React from 'react';

const ContactPopUp = ({ closeContact }) => {
  return (
    <div className="popup">
      {/* Contact Form UI goes here */}
      <form>
        {/* Form fields */}
      </form>
      <button onClick={closeContact}>Close Contact Form</button>
    </div>
  );
};

export default ContactPopUp;
