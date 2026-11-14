import { MessageCircle } from "lucide-react";
import { contactInformation } from "@/data/contact";
import EnquiryCategory from "./EnquiryCategory";

export default function ContactInformation() {
  return (
    <div className="tasmyaa-contact-information">
      <section aria-labelledby="address-heading">
        <h2 id="address-heading">Address</h2>
        <address>
          <strong>{contactInformation.legalName}</strong>
          {contactInformation.address.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </address>
      </section>
      <section aria-labelledby="queries-heading">
        <h2 id="queries-heading">General Queries</h2>
        <div className="tasmyaa-contact-pending">
          <MessageCircle size={19} aria-hidden="true" />
          <p>{contactInformation.generalQueries}</p>
        </div>
      </section>
      <section aria-labelledby="enquiries-heading">
        <h2 id="enquiries-heading">Other Enquiries</h2>
        {contactInformation.enquiries.map((enquiry) => (
          <EnquiryCategory key={enquiry.id} enquiry={enquiry} />
        ))}
      </section>
    </div>
  );
}
