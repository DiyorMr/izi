import { MailOutlined, PhoneOutlined } from "@ant-design/icons";

import cls from "./Contact.module.scss";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className={cls.contactContainer}>
      <div className={cls.formContainer}>
        <form>
          <div className={cls.inputWrapper}>
            <input
              className={cls.formControl}
              type="text"
              placeholder="Abzal"
            />
          </div>
          <div className={cls.inputWrapper}>
            <input
              className={cls.formControl}
              type="email"
              placeholder="Email"
            />
          </div>
          <div className={cls.inputWrapper}>
            <textarea
              className={cls.formControl}
              placeholder="Message"
            ></textarea>
          </div>
          <Button className="form-btn" path="#" text="Submit" />
        </form>
      </div>
      <div className={cls.contactInfo}>
        <div className={cls.infoItem}>
          <div>
            <img src="/images/email.svg" alt="Email" />
            <input type="email" placeholder="Email" disabled />
          </div>
          <p>support@aimlab.uz</p>
        </div>
        <div className={cls.infoItem}>
          <div>
            <img src="/images/phone.svg" alt="Phone" />
            <input type="tel" placeholder="Phone" disabled />
          </div>
          <p>+998930576472</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
