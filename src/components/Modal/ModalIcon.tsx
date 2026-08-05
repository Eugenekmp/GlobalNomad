import Image from "next/image";

interface ModalIconProps {
  src: string;
  alt: string;
}

const ModalIcon = ({ src, alt }: ModalIconProps) => (
  <Image
    src={src}
    alt={alt}
    width={88}
    height={88}
    className="w-[49px] h-[49px] md:w-22 md:h-22"
  />
);

export default ModalIcon;
