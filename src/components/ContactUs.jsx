import Card from "./Card";
import Phone from "./SvgComponents/Phone";
import Email from "./SvgComponents/Email";
import Location from "./SvgComponents/Location";

const ContactUs = () => {
  return (
    <Card>
      <p className="font-bold">Contact Us</p>
      <h2 className="text-[#1B1725] text-[2rem] font-medium ">
        Connect with Us
      </h2>
      <p>
        For inquiries or assistance, please use the contact information provided
        below.
      </p>

      <div className="content2">
        <div className="flex gap-3 items-center">
          <Phone />

          <div className="">
            <p className="font-bold pb-[0.5rem]">Phone Number</p>
            <p className="text-[0.9rem]">0203 576 6918 </p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Email />

          <div>
            <p className="font-bold pb-[0.5rem]">Email</p>
            <p className="text-[0.8rem]">management@northenby.com</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Location />

          <div>
            <p className="font-bold pb-[0.5rem]">Location</p>
            <p className="text-[0.8rem]">
              536 Etruria Road, Newcastle, Staffordshire, ST5 0SX
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ContactUs;
