import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Container from "./Container";
import Link from "next/link";
import Logo from "./Logo";
import clsx from "clsx";
import { HiMenuAlt4 } from "react-icons/hi";
import Button from "./Button";
import { ButtonHTMLAttributes, RefObject } from "react";


interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    toggleRef?: RefObject<HTMLButtonElement>;
    expanded: boolean;
    panelId: string;
    invert?: boolean;
  }

interface HeaderT extends CustomButtonProps {
    panelId: string;
    invert?: boolean;
    expanded: boolean;
    onToggle: any;
    toggleRef: any;
}
const Header = ({
    panelId,
    invert = false,
    expanded,
    onToggle,
    toggleRef,
  }:HeaderT) => {
    // Container
    return (
      <Container>
        <div className="flex items-center justify-between ">
          {/* Logo */}
          <Link href={"/"} aria-label="Home">
            <Logo invert={invert}>JR.</Logo>
          </Link>
          <div className="flex items-center gap-x-8">
            <Button invert={invert}>
              <Link href={'https://drive.google.com/file/d/1eAr73LsZnJL8qXq_wwN9T2UJETSeNFxx/view?usp=sharing'}  target="_blank"  rel="noopener noreferrer" locale={false} aria-label="Downlod Resume" download>
              Resume
              </Link>
            </Button>
            <button
              ref={toggleRef}
              type="button"
              onClick={onToggle}
              aria-expanded={expanded.toString() as any}
              aria-controls={panelId}
              className={clsx(
                "group -m-2.5 rounded-full p-2.5 transition",
                invert ? "hover:bg-white/10" : "hover:bg-neutral-950/10"
              )}
              aria-label="Toggle navigation"
            >
              <HiMenuAlt4
                className={clsx(
                  "h-6 w-6",
                  invert
                    ? "fill-white group-hover:fill-neutral-200"
                    : "fill-neutral-950 group-hover:fill-neutral-700"
                )}
              />
            </button>
          </div>
        </div>
      </Container>
    );
  };

  export default Header