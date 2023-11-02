import Image from "next/image";
import Link from "next/link";

const navigation = {
  resources: [
    { name: "Blog", href: "#" },
    { name: "Releases", href: "#" },
  ],
  turborepo: [
    { name: "Documentation", href: "#" },  
    { name: "API Reference", href: "#" },  
    { name: "FAQ", href: "#" },  
  ],
  turbopack: [
    { name: "Documentation", href: "#" },    
    { name: "Features", href: "#" },

  ],
  company: [
    { name: "Vercel", href: "#" },
    { name: "Open Source Software", href: "#" },
    { name: "Contact Sales", href: "#" },
    { name: "X", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  support: [
    { name: "GitHub", href: "#" },
    { name: "Discord", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="bg-white98 border-white92 border overflow-hidden m-0"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="flex flex-col justify-start items-start max-w-7xl px-4 sm:px-6 lg:py-14 lg:px-8">
        <div className="footer-grid items-start justify-start grid grid-cols-4 gap-4 w-full">
          <div>
            <h3 className="text-sm text-black dark:text-white">
              Resources
            </h3>
            <ul role="list" className="mt-4 space-y-1.5">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-black dark:text-white">Turborepo</h3>
            <ul role="list" className="mt-4 space-y-1.5">
              {navigation.turborepo.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-black dark:text-white">
              Turbopack
            </h3>
            <ul role="list" className="mt-4 space-y-1.5">
              {navigation.turbopack.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-black dark:text-white">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-1.5">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-black dark:text-white">Legal</h3>
            <ul role="list" className="mt-4 space-y-1.5">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-textgray hover:text-black"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-black dark:text-white">Support</h3>
            <ul role="list" className="mt-4 space-y-1.5">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm no-underline  hover:text-black dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start mt-7 pt-8 gap-4">
            <Image src="/vercel.svg" alt="" width={100} height={24} />
          <p className="text-xs text-textgray">Copyright &copy; 2020 Vercel, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
