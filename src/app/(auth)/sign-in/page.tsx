import Image from "next/image";
import SignInForm from "@/components/views/SignIn/SignInForm";

export default function SignIn() {
  return (
    <section className="flex items-center justify-end">
      <div className="pl-[232px] pt-20 pb-[135px]">
        <h1 className="text-lg font-bold uppercase text-black mb-4 mr-[8px]">
          welcome to
          <br /> right cars
        </h1>
        <p className="uppercase font-bold text-blue text-l mb-16">
          admin panel
        </p>
        <SignInForm />
      </div>
      <div className="h-screen w-auto max-w-[50%]">
        <Image
          src="/image/hero.png"
          alt="road"
          width={800}
          height={900}
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
