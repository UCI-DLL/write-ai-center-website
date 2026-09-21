import type { Metadata } from "next";
import { SiteLink as Link } from "../components/SiteLink";
import { partnerOrganizations } from "../people/data";

export const metadata: Metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <>
      <section className="compact-intro">
        <h1>Partners</h1>
        <p>
          WRITE AI brings together institutions with complementary expertise in
          writing research, postsecondary education, generative AI, educational
          technology, research and evaluation, and institutional leadership.
        </p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Our partners</p>
          <h2>Complementary expertise, shared purpose.</h2>
        </div>

        <div className="partner-grid large-partners">
          {partnerOrganizations.map((partner) => (
            <Link
              className="partner-link"
              href={partner.href}
              key={partner.name}
            >
              {partner.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
