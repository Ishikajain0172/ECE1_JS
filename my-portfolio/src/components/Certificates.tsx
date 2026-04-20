import { certificates } from "@/data/certificates";
import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <section id="certificates" className="px-10 py-20">
      
      <h1 className="text-3xl font-bold mb-10 text-center">
        My Certificates 🎓
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} cert={cert} />
        ))}
      </div>

    </section>
  );
}