"use client";
import { useEffect } from "react";

const WatiWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?49907";

    script.onload = () => {
      const options = {
        enabled: true,
        chatButtonSetting: {
          backgroundColor: "#FF007C",
          ctaText: "Chat with us",
          borderRadius: "25",
          marginLeft: "20",
          marginRight: "20",
          marginBottom: "20",
          ctaIconWATI: false,
          position: "left",
        },
        brandSetting: {
          brandName: "College Rivals",
          brandSubTitle: "undefined",
          brandImg:
            "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
          welcomeText: "Hi there!\nHow can I help you?",
          messageText: "Hello, %0A I have a question about {{page_link}}",
          backgroundColor: "#FF007C",
          ctaText: "Chat with us",
          borderRadius: "25",
          autoShow: false,
          phoneNumber: "919999567476",
        },
      };
      (window as any).CreateWhatsappChatWidget(options);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default WatiWidget;
