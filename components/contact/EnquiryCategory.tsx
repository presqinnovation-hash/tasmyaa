import { ChevronDown } from "lucide-react";

type Enquiry = { id: string; title: string; description: string };
export default function EnquiryCategory({ enquiry }: { enquiry: Enquiry }) {
  return (
    <details className="tasmyaa-contact-enquiry">
      <summary>
        {enquiry.title}
        <ChevronDown size={14} aria-hidden="true" />
      </summary>
      <p>{enquiry.description}</p>
    </details>
  );
}
