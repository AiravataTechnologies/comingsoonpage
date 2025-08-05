import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";

export const ComingSoonPage = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscriptionMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          recipientEmail: "raneaniket23@gmail.com"
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to subscribe");
      }

      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing! We'll notify you when we launch.",
      });
      setEmail("");
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = () => {
    if (!email.trim()) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    subscriptionMutation.mutate(email);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="bg-neutral-50 flex justify-center items-center w-full min-h-screen p-4">
      <div className="relative w-full max-w-[1440px] overflow-hidden">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center px-0 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-6 md:py-8 lg:py-16 gap-4 sm:gap-6 lg:gap-8 min-h-[calc(100vh-2rem)] lg:min-h-[810px]">
          {/* Content Section */}
          <div className="flex flex-col w-full lg:max-w-[533px] space-y-6 sm:space-y-8 z-10 text-center lg:text-left">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="flex flex-col space-y-2 sm:space-y-3">
                <p className="font-['Kantumruy',Helvetica] font-bold text-[#595959] text-sm sm:text-base lg:text-lg tracking-[0.18px] leading-6 sm:leading-8 lg:leading-9">
                  Hello 👋, We&#39;re working on something exciting!
                </p>
                <h1 className="font-['Kanit',Helvetica] font-bold text-black text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] tracking-[0.8px] sm:tracking-[1.2px] lg:tracking-[1.92px] leading-[36px] sm:leading-[44px] md:leading-[60px] lg:leading-[80px]">
                  Coming Soon, Stay tuned...
                </h1>
              </div>
              <p className="font-['Kantumruy',Helvetica] font-normal text-[#595959] text-sm sm:text-base leading-5 sm:leading-6 lg:leading-[27px] max-w-md mx-auto lg:mx-0">
                Our website is currently undergoing maintenance to bring you new
                features and improvements. We apologize for any inconvenience.
              </p>
            </div>

            {/* Email Subscription Section */}
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-4 w-full max-w-md mx-auto lg:mx-0">
              <Card className="flex-grow w-full sm:w-auto rounded-full border border-[#bdbdbd] backdrop-blur-[2px] bg-transparent">
                <CardContent className="p-0">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="border-0 bg-transparent h-12 sm:h-14 px-4 sm:px-6 lg:px-8 font-['Kantumruy',Helvetica] text-[#999999] text-sm sm:text-base placeholder:text-xs sm:placeholder:text-sm"
                    placeholder="Enter your email for notifications"
                    required
                    disabled={subscriptionMutation.isPending}
                  />
                </CardContent>
              </Card>
              <Button
                onClick={handleSubmit}
                size="icon"
                className="w-12 h-12 sm:w-[56px] sm:h-[56px] lg:w-[60px] lg:h-[60px] rounded-full bg-[#ffc700] hover:bg-[#e6b400] text-black flex-shrink-0 transition-all duration-200"
                disabled={subscriptionMutation.isPending}
              >
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
              </Button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative mt-4 sm:mt-6 lg:mt-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <img
              className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px] xl:w-[732px] h-auto object-cover"
              alt="Vora logo"
              src="/figmaAssets/2676-080625-vora-hp-png-01-2.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};