/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useEffect } from "react";

const Facebook2 = () => {
  useEffect(() => {
    fbq('track', 'PageView');
    fbq('track', 'Contact');
  }, []);

  return null;
};

export default Facebook2;