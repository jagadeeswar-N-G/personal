import Link from "next/link";
import clsx from "clsx";
import {
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { TfiInstagram } from "react-icons/tfi";

export const SocialMediaProfiles = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/jagadeeswaar/",
    icon: TfiInstagram,
  },
  { title: "GitHub", href: "https://github.com/jagadeeswar-N-G", icon: BsGithub },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/jagadeeswar-n-g-0a2b6b202/",
    icon: BsLinkedin,
  },
];

const SocialMedia = ({ className, invert = false }: any) => {
  return (
    <ul
      role="list"
      className={clsx(
        "flex gap-x-10",
        invert ? "text-white" : "text-neutral-950",
        className
      )}
    >
      {SocialMediaProfiles.map((item) => (
        <li key={item.title}>
          <Link
            href={item.href}
            aria-label={item.title}
            className={clsx(
              "transition",
              invert ? "hover:text-neutral-200" : "hover:text-neutral-700"
            )}
          >
            <item.icon className="h-6 w-6 fill-current" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
