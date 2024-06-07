import React from 'react';

const GoogleMapEmbed = () => {
  return (
    <div className="map-container">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.670108979457!2d137.09486127476413!3d36.70646447227399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff785028a70360b%3A0x400c9acd2246a0fa!2z5a-M5bGx55yM56uL5aSn5a2m5bCE5rC044Kt44Oj44Oz44OR44K577yI5bel5a2m6YOo77yJ!5e0!3m2!1sja!2sjp!4v1705589364833!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapEmbed;