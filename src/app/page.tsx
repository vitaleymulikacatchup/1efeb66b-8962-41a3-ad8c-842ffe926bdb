"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import BentoKPIStandard from '@/components/bento/BentoKPIStandard';
import TextboxStandard from '@/components/textbox/TextboxStandard';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';

export default function Home() {
  return (
    <SiteThemeProvider
      theme={{
        styleVariant: 'funAndTrendy',
        colorTemplate: 1,
        textAnimation: 'none',
      }}
    >
      <div id="hero">
        <BillboardHero 
          title="Welcome to Webild"
          subtitle="Transforming your ideas into reality"
        />
      </div>
      <div id="features" className="my-20">
        <BentoKPIStandard
          items={[
            { value: "1000", description: "Users" },
            { value: "200", description: "Projects" },
            { value: "50", description: "Awards" },
          ]}
          className="grid grid-cols-3 gap-6"
        />
      </div>
      <div id="pricing" className="my-20">
        <TextboxStandard
          title={<h2 className="text-3xl font-bold">Our Pricing Plans</h2>}
          description={<p className="text-lg">Choose the plan that fits you best.</p>}
        />
      </div>
      <div id="testimonials" className="my-20">
        <CentralFAQ
          items={[
            { title: "How can I contact you?", content: "You can reach us via email at support@webild.com" },
            { title: "What services do you offer?", content: "We provide a range of SaaS solutions customized for your needs." },
          ]}
        />
      </div>
      <div id="about" className="my-20">
        <TextboxStandard
          title={<h2 className="text-3xl font-bold">About Us</h2>}
          description={<p className="text-lg">Webild is committed to innovation and excellence.</p>}
        />
      </div>
    </SiteThemeProvider>
  );
}
