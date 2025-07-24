import { FaTiktok, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Button } from "../ui/Button";

const socialMediaData = [
  {
    icon: FaTiktok,
  },
  {
    icon: FaInstagram,
  },
  {
    icon: FaXTwitter,
  },
  {
    icon: FaYoutube,
  },
  {
    icon: FaFacebookF,
  },
];

const footerButton = [
  { name: "Help" },
  { name: "Site Index" },
  { name: "GGDB Pro" },
  { name: "API" },
  { name: "Press Room" },
  { name: "Advertising" },
  { name: "Jobs" },
  { name: "Conditions of Use" },
  { name: "Privacy Policy" },
  { name: "Your Ads Privacy Choices" },
];

export function Footer() {
  return (
    <div className="mt-auto w-full bg-input text-foreground py-16 px-4 flex flex-col gap-12 items-center justify-center">
      <div className="flex gap-24 items-center flex-wrap justify-center">
        <div className="w-[360px] bg-background border border-border py-6 shadow-lg rounded-2xl flex flex-col items-center gap-4">
          <h4 className="text-xl font-semibold text-foreground">
            Follow GGDB on Social
          </h4>
          <div className="flex items-center gap-4">
            {socialMediaData.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button key={index} color="SecondaryGray" size="onlyIcon_md">
                  <Icon size={20} />
                </Button>
              );
            })}
          </div>
        </div>

        <div className="w-[360px] bg-background border border-border py-6 shadow-lg rounded-2xl flex flex-col items-center gap-4">
          <h4 className="text-xl font-semibold text-foreground">
            Get the GGDB app
          </h4>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer w-[135px] h-10 flex items-center justify-center gap-2 bg-black text-white rounded-md">
              <img src="GooglePlay.png" alt="" className="w-6" />
              <p className="text-lg font-bold">Google Play</p>
            </button>

            <button className="cursor-pointer w-[135px] h-10 flex items-center justify-center gap-2 bg-black text-white rounded-md">
              <img src="Apple.png" alt="" className="w-6" />
              <p className="text-lg font-bold">App Store</p>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-wrap">
        {footerButton.map((item, index) => (
          <Button key={index} color="Transparent">
            {item.name}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-4 items-center justify-center">
        <h1 className="font-black text-2xl">GGDB</h1>
        <span>
          <p className="text-center text-sm font-semibold">
            The Good game database
          </p>
          <p className="text-center text-sm">
            © 2020–2025 by GGDB.com, Inc. All rights reserved.
          </p>
        </span>
      </div>
    </div>
  );
}
