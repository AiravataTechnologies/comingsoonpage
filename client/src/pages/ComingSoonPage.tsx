import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export const ComingSoonPage = (): JSX.Element => {
  return (
    <div className="bg-neutral-50 flex justify-center items-start w-screen min-h-screen">
      <div className="relative w-full max-w-[1440px] min-h-[810px] overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-8 md:py-16 max-w-[1676px]">
          <div className="flex flex-col max-w-[533px] space-y-8 z-10">
            <div className="flex flex-col space-y-6">
              <div className="flex flex-col space-y-3">
                <p className="font-['Kantumruy',Helvetica] font-bold text-[#595959] text-lg tracking-[0.18px] leading-9">
                  Hello 👋, We&#39;re working on something exciting!
                </p>
                <h1 className="font-['Kanit',Helvetica] font-bold text-black text-[64px] tracking-[1.92px] leading-[80px]">
                  Coming Soon, Stay tuned...
                </h1>
              </div>
              <p className="font-['Kantumruy',Helvetica] font-normal text-[#595959] text-base leading-[27px]">
                Our website is currently undergoing maintenance to bring you new
                features and improvements. We apologize for any inconvenience.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Card className="flex-grow rounded-full border border-[#bdbdbd] backdrop-blur-[2px] bg-transparent">
                <CardContent className="p-0">
                  <Input
                    className="border-0 bg-transparent h-14 px-8 font-['Kantumruy',Helvetica] text-[#999999]"
                    placeholder="Enter your email For Get Notification"
                  />
                </CardContent>
              </Card>
              <Button
                size="icon"
                className="w-[60px] h-[60px] rounded-full bg-[#ffc700] hover:bg-[#e6b400] text-black"
              >
                <ArrowRightIcon className="h-6 w-6" />
              </Button>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0">
            <img
              className="w-full md:w-[732px] h-auto object-cover"
              alt="Vora logo"
              src="/figmaAssets/2676-080625-vora-hp-png-01-2.png"
            />
          </div>
        </div>

        <div className="absolute w-full h-[35px] bottom-0 left-0 bg-[#c4c4c4]" />
      </div>
    </div>
  );
};
