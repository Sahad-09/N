import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import { MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <main className="font-urbanist mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col sm:flex-row justify-between py-8 sm:py-12">
            <div className="text-start sm:text-left mb-8 sm:mb-0 sm:w-1/2">
              <div className=" text-[56px] sm:text-[64px] font-normal leading-tight">
                <p>Innovate.</p>
                <p>Create.</p>
                <p>Elevate.</p>
              </div>
            </div>
            <div className="text-left sm:self-center sm:text-left sm:w-[32%]">
              <div className=" text-[16px] sm:text-[24px] font-normal leading-relaxed mb-4">
                <p >From Cool Ideas to Awesome Apps- <br /> 
                  Level Up with Us!</p>
              </div>
              <Button className="mt-2">Know more <MdArrowForward /></Button>
            </div>
          </section>

          <section className="flex justify-center items-center py-6  sm:py-10">
            <Image
              src="/1.png"
              width={1280}
              height={400}
              alt="Picture of the author"
              className="rounded-lg"
            />
          </section>





          <section className='mt-[80px]'>
            <h1 className='text-[32px] md:text-[48px] lg:text-[56px] font-normal leading-[40px] md:leading-[56px] lg:leading-[67.2px] text-left'>
              Products
            </h1>
            <p className='text-[14px] md:text-[16px] font-normal mt-[8px] leading-[20px] md:leading-[28.8px] text-left'>
              Discover Fun and Rewarding Apps – <br className='md:hidden' />Elevate Your Experience!
            </p>
          </section>
          




          <section className='flex flex-col md:flex-row mt-10'>
            <div className='md:w-1/2'>
              <Image
                src="/4.png"
                width={640}
                height={640}
                alt="Picture of the author"
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className='md:w-1/2 md:pl-10'>
              <h1 className='text-[20px] md:text-[24px] mt-[24px] font-semibold leading-[32px] md:leading-[36px] lg:leading-[40px] text-left'>
                CashTriv
              </h1>
              <p className='text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[28.8px] mt-4 text-left'>
                Lorem ipsum dolor sit amet consectetur. Arcu vitae viverra amet auctor libero. Suspendisse purus platea donec risus tincidunt varius ut egestas aliquam. Pharetra gravida sollicitudin proin tristique et odio. Eu cum diam vestibulum lectus condimentum.
              </p>
              <Button className='mt-[24px]'>Get the app <MdArrowOutward /></Button>
            </div>
          </section>
          
          

          
          <section className='flex flex-col md:flex-row mt-10'>
            <div className='md:w-1/2'>
              <Image
                src="/4.png"
                width={640}
                height={640}
                alt="Picture of the author"
                className="rounded-lg w-full h-auto"
              />
            </div>
          
            <div className='md:w-1/2 md:pl-10'>
              <h1 className='text-[20px] md:text-[24px] mt-[24px] font-semibold leading-[32px] md:leading-[36px] lg:leading-[40px] text-left'>
              Hand Cricket
              </h1>
              <p className='text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[28.8px] mt-4 text-left'>
                Lorem ipsum dolor sit amet consectetur. Arcu vitae viverra amet auctor libero. Suspendisse purus platea donec risus tincidunt varius ut egestas aliquam. Pharetra gravida sollicitudin proin tristique et odio. Eu cum diam vestibulum lectus condimentum.
              </p>
              <Button className='mt-[24px]'>Coming Soon</Button>
            </div>
          </section>


<div className="max-w-md mt-10 p-6">
      <h1 className="text-2xl font-semibold mb-6">Connect with us</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="block text-sm font-medium ">First name</Label>
            <Input
              type="text"
              className="mt-1 block w-full"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium ">Last name</Label>
            <Input
              type="text"
              className="mt-1 block w-full"
            />
          </div>
        </div>
        <div className="mt-4">
          <Label className="block text-sm font-medium ">Email address</Label>
          <Input
            type="email"
            className="mt-1 block w-full"
          />
        </div>
        <div className="mt-4">
          <Label className="block text-sm font-medium ">Your message</Label>
          <Textarea
            className="mt-1 block w-full"
          ></Textarea>
        </div>
        <div className="mt-4">
          <Button
            type="submit"
            className="bg-black text-white px-4 py-2"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>

      </main>

    </>
  );
}