import orc1 from "../../assets/caseStudies/orchard1.jpg";
import orc1X2 from "../../assets/caseStudies/orchard1X2.jpg";
import orc1X3 from "../../assets/caseStudies/orchard1X3.jpg";
import orc2 from "../../assets/caseStudies/orchard2.jpg";
import orc2X2 from "../../assets/caseStudies/orchard2X2.jpg";
import orc2X3 from "../../assets/caseStudies/orchard2X3.jpg";
import orc3 from "../../assets/caseStudies/orchard3.jpg";
import orc3X2 from "../../assets/caseStudies/orchard3X2.jpg";
import orc3X3 from "../../assets/caseStudies/orchard3X3.jpg";
import ser1 from "../../assets/caseStudies/serkles1.jpg";
import ser1X2 from "../../assets/caseStudies/serkles1X2.jpg";
import ser1X3 from "../../assets/caseStudies/serkles1X3.jpg";
import ser2 from "../../assets/caseStudies/serkles2.jpg";
import ser2X2 from "../../assets/caseStudies/serkles2X2.jpg";
import ser2X3 from "../../assets/caseStudies/serkles2X3.jpg";
import ser3 from "../../assets/caseStudies/serkles3.jpg";
import ser3X2 from "../../assets/caseStudies/serkles3X2.jpg";
import ser3X3 from "../../assets/caseStudies/serkles3X3.jpg";
import tal1 from "../../assets/caseStudies/tal1.jpg";
import tal1X2 from "../../assets/caseStudies/tal1X2.jpg";
import tal1X3 from "../../assets/caseStudies/tal1X3.jpg";
import tal2 from "../../assets/caseStudies/tal2.jpg";
import tal2X2 from "../../assets/caseStudies/tal2X2.jpg";
import tal2X3 from "../../assets/caseStudies/tal2X3.jpg";
import tal3 from "../../assets/caseStudies/tal3.jpg";
import tal3X2 from "../../assets/caseStudies/tal3X2.jpg";
import tal3X3 from "../../assets/caseStudies/tal3X3.jpg";
import varu1 from "../../assets/caseStudies/varu1.jpg";
import varu1X2 from "../../assets/caseStudies/varu1X2.jpg";
import varu1X3 from "../../assets/caseStudies/varu1X3.jpg";
import varu2 from "../../assets/caseStudies/varu2.jpg";
import varu2X2 from "../../assets/caseStudies/varu2X2.jpg";
import varu2X3 from "../../assets/caseStudies/varu2X3.jpg";
import varu3 from "../../assets/caseStudies/varu3.jpg";
import varu3X2 from "../../assets/caseStudies/varu3X2.jpg";
import varu3X3 from "../../assets/caseStudies/varu3X3.jpg";
import vic1 from "../../assets/caseStudies/vic1.jpg";
import vic1X2 from "../../assets/caseStudies/vic1X2.jpg";
import vic1X3 from "../../assets/caseStudies/vic1X3.jpg";
import vic2 from "../../assets/caseStudies/vic2.jpg";
import vic2X2 from "../../assets/caseStudies/vic2X2.jpg";
import vic2X3 from "../../assets/caseStudies/vic2X3.jpg";
import vic3 from "../../assets/caseStudies/vic3.jpg";
import vic3X2 from "../../assets/caseStudies/vic3X2.jpg";
import vic3X3 from "../../assets/caseStudies/vic3X3.jpg";

const cases = [
  {
    id: "01",
    title: "The Orchard",
    subTitle: "Bar & Restaurant",
    text: "The Orchard Bar in Cannomills, Edinburgh is one of my long-standing clients, and I still manage and update their website. They originally reached out to me to revamp their website to give it a more polished and refined look. Specifically, they were interested in incorporating a gallery feature and a booking system that would enable patrons to reserve a table directly through the website.",
    img1: {
      src: orc1,
      srcSet: `${orc1X2} 2x, ${orc1X3} 3x`,
      alt: "Screenshot from one of the case studies, The Orchard Bar",
    },
    img2: {
      src: orc2,
      srcSet: `${orc2X2} 2x, ${orc2X3} 3x`,
      alt: "Screenshot from one of the case studies, The Orchard Bar Gallery",
    },
    img3: {
      src: orc3,
      srcSet: `${orc3X2} 2x, ${orc3X3} 3x`,
      alt: "Screenshot from one of the case studies, The Orchard Bar Art section",
    },
    skill1: "Web Design",
    skill2: "UX/UI",
    skill3: "ReactJs",
    link: "https://theorchardbar.co.uk",
  },
  {
    id: "05",
    title: "Talento",
    subTitle: "Consulting",
    text: "Talento Consultancy is one of my newest clients. They were looking for a cost effective, custom website, to present their company, and their services, include a contact form for customer inquiries, and set up an event page with an admin login. The admin panel allows them to easily update event information on the database containing the data, essentially functioning as a mini content management system (CMS).",
    img1: {
      src: tal1,
      srcSet: `${tal1X2} 2x, ${tal1X3} 3x`,
      alt: "Screenshot from one of the case studies, Talento Consultancy",
    },
    img2: {
      src: tal2,
      srcSet: `${tal2X2} 2x, ${tal2X3} 3x`,
      alt: "Screenshot from one of the case studies, Talento Consultancy, events page",
    },
    img3: {
      src: tal3,
      srcSet: `${tal3X2} 2x, ${tal3X3} 3x`,
      alt: "Screenshot from one of the case studies, Talento Consultancy, contact form",
    },
    skill1: "Web Design",
    skill2: "Back End",
    skill3: "ReactJs",
    link: "https://talentoconsulting.org/",
  },
  {
    id: "02",
    title: "Varuna Brull",
    subTitle: "Photography",
    text: "Varuna is a skilled freelance photographer from our local community who reached out for help in revamping and structuring her photography portfolio. The main requirements were a user-friendly website with a sleek and refined appearance, ensuring simple maintenance, alongside the inclusion of a contact form and a blog section.",
    img1: {
      src: varu1,
      srcSet: `${varu1X2} 2x, ${varu1X3} 3x`,
      alt: "Screenshot from one of the case studies, varuuna Brull",
    },
    img2: {
      src: varu2,
      srcSet: `${varu2X2} 2x, ${varu2X3} 3x`,
      alt: "Screenshot from one of the case studies, varuuna Brull Real State",
    },
    img3: {
      src: varu3,
      srcSet: `${varu3X2} 2x, ${varu3X3} 3x`,
      alt: "Screenshot from one of the case studies, varuuna Brull Portraits",
    },
    skill1: "Web Design",
    skill2: "Maintenance",
    skill3: "Wix",
    link: "https://www.varuunabrull.com",
  },
  {
    id: "03",
    title: "Serkles",
    subTitle: "Circular Fashion",
    text: "Serkles is a circular fashion company. They had initially been working with an external agency to create their online store, but they encountered issues with performance, missed deadlines, and contractual matters. They reached out to me for assistance in launching their e-commerce platform, and through effective teamwork and hard work, we successfully launched their online store on time.",
    img1: {
      src: ser1,
      srcSet: `${ser1X2} 2x, ${ser1X3} 3x`,
      alt: "Screenshot from one of the case studies, Serkles",
    },
    img2: {
      src: ser2,
      srcSet: `${ser2X2} 2x, ${ser2X3} 3x`,
      alt: "Screenshot from one of the case studies, Serkles Shop",
    },
    img3: {
      src: ser3,
      srcSet: `${ser3X2} 2x, ${ser3X3} 3x`,
      alt: "Screenshot from one of the case studies, Serkles circular economy",
    },
    skill1: "Upgrade",
    skill2: "Maintenance",
    skill3: "Wordpress",
    link: "https://www.serkles.com",
  },
  {
    id: "04",
    title: "Victor Blanco",
    subTitle: "Tree Ring Prints",
    text: "This is something I'm truly passionate about. I create tree ring prints by hand, employing time-honoured techniques. The website I envisioned was relatively straightforward, primarily intended to showcase my creations, share a brief bio, and provide a way for visitors to get in touch. Interestingly, it's also my longest-running project, as it was my very first website and has undergone numerous transformations over the years.",
    img1: {
      src: vic1,
      srcSet: `${vic1X2} 2x, ${vic1X3} 3x`,
      alt: "Screenshot from one of the case studies, Victor Blanco Prints",
    },
    img2: {
      src: vic2,
      srcSet: `${vic2X2} 2x, ${vic2X3} 3x`,
      alt: "Screenshot from one of the case studies, Victor Blanco Prints, Bio",
    },
    img3: {
      src: vic3,
      srcSet: `${vic3X2} 2x, ${vic3X3} 3x`,
      alt: "Screenshot from one of the case studies, Victor Blanco Prints, Contact",
    },
    skill1: "Web Design",
    skill2: "UX/UI",
    skill3: "ReactJs",
    link: "https://www.victorblanco.co.uk",
  },
];

export default cases;
