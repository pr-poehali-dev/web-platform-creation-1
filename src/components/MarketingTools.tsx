import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import EmailMarketing from './marketing/EmailMarketing';
import PromoCodes from './marketing/PromoCodes';
import SocialMedia from './marketing/SocialMedia';
import SEOTools from './marketing/SEOTools';

const MarketingTools = () => {
  const [activeTab, setActiveTab] = useState('email');

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Маркетинговые инструменты</h1>
          <p className="text-muted-foreground font-inter">Email-кампании, промокоды и социальные сети</p>
        </div>
        <Button>
          <Icon name="Plus" className="mr-2" size={16} />
          Создать кампанию
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="email" className="font-poiret">Email-маркетинг</TabsTrigger>
          <TabsTrigger value="promo" className="font-poiret">Промокоды</TabsTrigger>
          <TabsTrigger value="social" className="font-poiret">Соцсети</TabsTrigger>
          <TabsTrigger value="seo" className="font-poiret">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <EmailMarketing />
        </TabsContent>

        <TabsContent value="promo">
          <PromoCodes />
        </TabsContent>

        <TabsContent value="social">
          <SocialMedia />
        </TabsContent>

        <TabsContent value="seo">
          <SEOTools />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingTools;