import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const homePageCardData = [
  {
    title: "Secure Payment",
    text: "We use the best, most secure pay-out gateway. Every due payment is processed without delay.",
    image: "/dev-images/Secure.png", // Replace with actual image URL or path
  },
  {
    title: "Copyright Protection",
    text: "Suave offers Copyright Protection and Business Promotion to all designers and designs posted.",
    image: "/dev-images/copy.png",
  },
  {
    title: "User Verification",
    text: "Verification in the sign-up and collaboration process to ensure high-quality delivery.",
    image: "/dev-images/user.png",
  },
  {
    title: "Streamlined Collaboration",
    text: "Streamlined process to simplify collaboration and communication.",
    image: "/dev-images/streamed.png",
  },
  {
    title: "Open Dispute Resolution",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi convallis condimentum.",
    image: "/dev-images/justice.png",
  },
  {
    title: "Exclusivity",
    text: "An exclusive market that focuses on African fashion, offering a unique and targeted talent pool.",
    image: "/dev-images/target.png",
  },
];

export const fashionSection = [
  {
    title: "Register",
    text: "Join over 5000 other artists and illustrators by signing up with your email address and through Google. Easy and seamless sign-up.",
    image: "/dev-images/register.png",
  },
  {
    title: "Apply For Jobs",
    text: "Browse job postings from top designers/brands seeking African fashion expertise and apply for projects that match your skills and style.",
    image: "/dev-images/Apply.png",
  },
  {
    title: "Publish Your Designs For Licensing",
    text: "Post your designs for brands/designers to license or buy exclusive right to use in their collections. Earn money.",
    image: "/dev-images/publish.png",
  },
  {
    title: "Get Paid",
    text: "Your payment is automatically processed after a satisfactory work done and when your designs are licensed.",
    image: "/dev-images/Cash.png",
  },
];

export const fashionDsignRightSection = [
  {
    title: "Register",
    text: "Create profile, showcasing your brand identity to explore pool of limitless designs.",
    btnText: "Get Started",
  },
  {
    title: "Post Jobs and Hire Artists",
    text: "Post jobs descriptions outlining your needs. \nConnect with artists tat resonate with your brand.",
    btnText: "Post Jobs",
  },
  {
    title: "Explore and License",
    text: "Browse our gallery of stunning designs.\nAcquire licenses for existing designs that uplifts your brand.\n Seamlessly manage projects and payments within our platform",
    btnText: "Explore",
  },
];
