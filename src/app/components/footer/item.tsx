import Image from "next/image";
import {useRouter} from "next/navigation";

type FooterItemProps = {
  label: string;
  url: string;
};

export const FooterItem = ({label, url}: FooterItemProps) => {
  const router = useRouter();

  return (
    <div
      className="w-full py-4 flex justify-between cursor-pointer"
      onClick={() => {
        if (url === "contact-us") {
          window.open("mailto:will@cardtothefuture.com", "noopener-noreferrer");
        } else {
          router.push(url);
        }
      }}
    >
      <p className="underline">{label}</p>
      <Image src="/arrow-top-right.svg" width={20} height={20} alt="logo" />
    </div>
  );
};
