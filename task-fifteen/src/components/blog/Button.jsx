import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaTwitter,
    FaWhatsapp,
} from "react-icons/fa";

const socialMedia = [
  {
    name: "facebook",
    icon: FaFacebookF,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    name: "twitter",
    icon: FaTwitter,
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
  },
  {
    name: "linkedin",
    icon: FaLinkedinIn,
    color: "bg-blue-800",
    hoverColor: "hover:bg-blue-900",
  },
  {
    name: "whatsapp",
    icon: FaWhatsapp,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
];

const Button = () => {
  const shareLinks = {
    facebook: `https://www.facebook.com/evatril.in/`,
    twitter: `https://x.com/evatril`,
    linkedin: `https://www.linkedin.com/company/evatril/?originalSubdomain=in`,
    whatsapp: `https://wa.me/+918249558989`,
  };

  return (
    <>
      <div className="flex space-x-20 py-3">
        {socialMedia.map(({ name, icon: Icon, color, hoverColor }) => (
          <button
            key={name}
            onClick={() => window.open(shareLinks[name], "_blank")}
            className={`px-8 flex items-center space-x-2 ${color} text-white p-2 rounded-sm ${hoverColor} focus:outline-none`}
            aria-label={`Share on ${name.charAt(0).toUpperCase() + name.slice(1)}`}
          >
            <Icon /> <span>{name}</span> 
          </button>
        ))}
      </div>
    </>
  );
};

export default Button;
