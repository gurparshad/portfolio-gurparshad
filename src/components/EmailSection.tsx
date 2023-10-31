import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative" id="contact">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-4xl font-bold text-white my-2">Let&lsquo;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&lsquo;m currently looking for new opportunities, my inbox is always open. Whether you have a question or
          just want to say hi, I&lsquo;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-col gap-2">
          <Link className="flex items-center gap-3" href="https://github.com/gurparshad" target="_blank">
            <Image alt="git" src="/images/github-icon.svg" width={40} height={40} />
            <p>Github</p>
          </Link>
          <Link
            className="flex items-center gap-3"
            href="https://www.linkedin.com/in/gurparshad-sharma-58a44912b/"
            target="_blank"
          >
            <Image alt="linkedin" src="/images/linkedin-icon.svg" width={40} height={40} />
            <p>Linkedin</p>
          </Link>
          <div className="flex items-center gap-3">
            <Image alt="email" src="/images/email-icon.png" width={40} height={40} />
            <p>gurparshadsharma97@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
