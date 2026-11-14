import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactInformation from "@/components/contact/ContactInformation";
import ContactMap from "@/components/contact/ContactMap";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact | Tasmyaa",
  description:
    "Registered office information and enquiry updates for Tasmyaa Skill Development Private Limited in Ranchi, Jharkhand.",
};

export default function ContactPage() {
  return (
    <>
      <a className="tasmyaa-contact-skip" href="#contact-main">
        Skip to contact information
      </a>
      <Header />
      <main className="tasmyaa-contact-page" id="contact-main">
        <h1 className="tasmyaa-contact-sr-only">Contact Tasmyaa</h1>
        <div className="tasmyaa-contact-container">
          <ContactInformation />
          <ContactMap />
        </div>
      </main>
      <Footer />
    </>
  );
}
