import { Particles } from "@/components/particles";
import ReactWrapBalancer from "react-wrap-balancer";
import Link from "next/link";
import { ArrowRight, Github, LucideGithub, Twitter } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10 " />

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0 ">
                <Link
                  className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
                  href="mailto:widecrewofficial@gmail.com"
                >
                  <span className="relative inline-flex items-center">
                    Contact Us!{" "}
                    <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <h1
              className="pb-4 font-bold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
              data-aos="fade-down"
            >
              <ReactWrapBalancer>Coming soon.</ReactWrapBalancer>
            </h1>
            <p
              className="mb-8 text-lg text-zinc-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Build cool stuff :)
            </p>
{/*             <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link
                className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                href=""
                target="_blank"
              >
                Twitter{" "}
                <Twitter className="w-4 h-4 ml-2 text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
