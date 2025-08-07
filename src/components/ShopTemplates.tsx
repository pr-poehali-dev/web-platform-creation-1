import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const ShopTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [previewMode, setPreviewMode] = useState('desktop');

  const templates = [
    {
      id: 1,
      name: 'Модный Бутик',
      category: 'Одежда и аксессуары',
      description: 'Элегантный дизайн для магазинов модной одежды с акцентом на визуальную привлекательность',
      colors: { primary: '#FFE0E6', secondary: '#B8D4E3', bg: '#FEF9E7' },
      features: ['Галерея товаров', 'Фильтры размеров', 'Lookbook', 'Программа лояльности'],
      layout: 'fashion',
      products: [
        { name: 'Летнее платье', price: 4500, image: 'dress.jpg', category: 'Платья' },
        { name: 'Кожаная сумка', price: 8900, image: 'bag.jpg', category: 'Аксессуары' },
        { name: 'Солнечные очки', price: 2300, image: 'glasses.jpg', category: 'Аксессуары' }
      ]
    },
    {
      id: 2,
      name: 'Техно Маркет',
      category: 'Электроника',
      description: 'Современный дизайн для продажи электроники и гаджетов с техническими характеристиками',
      colors: { primary: '#B8D4E3', secondary: '#E8F4FD', bg: '#F8FAFB' },
      features: ['Сравнение товаров', 'Технические характеристики', 'Гарантия', 'Рассрочка'],
      layout: 'tech',
      products: [
        { name: 'Смартфон Pro Max', price: 89900, image: 'phone.jpg', category: 'Телефоны' },
        { name: 'Беспроводные наушники', price: 15900, image: 'headphones.jpg', category: 'Аудио' },
        { name: 'Умные часы', price: 25900, image: 'watch.jpg', category: 'Гаджеты' }
      ]
    },
    {
      id: 3,
      name: 'Eco Store',
      category: 'Экотовары',
      description: 'Натуральный дизайн для продажи эко-товаров с акцентом на экологичность',
      colors: { primary: '#E8F5E8', secondary: '#F0F8F0', bg: '#FEFFFE' },
      features: ['Эко-сертификаты', 'Происхождение товаров', 'Углеродный след', 'Подписка на доставку'],
      layout: 'eco',
      products: [
        { name: 'Органическое масло', price: 1200, image: 'oil.jpg', category: 'Косметика' },
        { name: 'Эко-сумка из джута', price: 890, image: 'eco-bag.jpg', category: 'Аксессуары' },
        { name: 'Бамбуковая зубная щетка', price: 350, image: 'toothbrush.jpg', category: 'Гигиена' }
      ]
    }
  ];

  const getCurrentTemplate = () => templates.find(t => t.id === selectedTemplate);

  const renderTemplatePreview = (template) => {
    const isSelected = selectedTemplate === template.id;
    
    return (
      <div 
        className={`transition-all duration-300 ${previewMode === 'mobile' ? 'max-w-sm mx-auto' : 'w-full'}`}
        style={{ 
          backgroundColor: template.colors.bg,
          minHeight: previewMode === 'mobile' ? '600px' : '500px'
        }}
      >
        {/* Header */}
        <div 
          className="p-4 border-b"
          style={{ backgroundColor: template.colors.primary }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-sm font-bold font-poiret">M</span>
              </div>
              <span className="font-poiret text-lg">{template.name}</span>
            </div>
            {previewMode === 'desktop' && (
              <div className="flex space-x-4 text-sm">
                <span>Каталог</span>
                <span>О нас</span>
                <span>Доставка</span>
                <span>Контакты</span>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Icon name="Search" size={16} />
              <Icon name="ShoppingCart" size={16} />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div 
          className="p-6 text-center"
          style={{ backgroundColor: template.colors.secondary }}
        >
          <h2 className="text-xl font-poiret mb-2">
            {template.layout === 'fashion' && 'Новая коллекция лето 2024'}
            {template.layout === 'tech' && 'Последние новинки техники'}
            {template.layout === 'eco' && 'Натуральные товары для здоровья'}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
          <Button size="sm">Смотреть каталог</Button>
        </div>

        {/* Products Grid */}
        <div className="p-4">
          <h3 className="font-poiret text-lg mb-4">Популярные товары</h3>
          <div className={`grid ${previewMode === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'} gap-3`}>
            {template.products.map((product, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 border hover:shadow-md transition-shadow">
                <div className="aspect-square bg-muted rounded mb-2 flex items-center justify-center">
                  <Icon 
                    name={
                      template.layout === 'fashion' ? 'Shirt' :
                      template.layout === 'tech' ? 'Smartphone' : 'Leaf'
                    } 
                    className="text-muted-foreground" 
                    size={24}
                  />
                </div>
                <div className="text-sm font-medium">{product.name}</div>
                <div className="text-xs text-muted-foreground">{product.category}</div>
                <div className="font-bold mt-1">{product.price.toLocaleString()} ₽</div>
                <Button size="sm" className="w-full mt-2" variant="outline">
                  В корзину
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="p-4 border-t bg-muted/20">
          <div className={`grid ${previewMode === 'mobile' ? 'grid-cols-2' : 'grid-cols-4'} gap-2 text-xs`}>
            {template.features.map((feature, idx) => (
              <div key={idx} className="flex items-center space-x-1">
                <Icon name="Check" size={12} className="text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-gray-100 text-xs text-center border-t">
          <div className="flex items-center justify-center space-x-4">
            <span>© 2024 {template.name}</span>
            <span>•</span>
            <span>Политика конфиденциальности</span>
            <span>•</span>
            <span>Доставка и оплата</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Шаблоны интернет-магазинов</h1>
          <p className="text-muted-foreground">Выберите готовый дизайн для вашего магазина</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select value={previewMode} onValueChange={setPreviewMode}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desktop">
                <div className="flex items-center">
                  <Icon name="Monitor" className="mr-2" size={14} />
                  Desktop
                </div>
              </SelectItem>
              <SelectItem value="mobile">
                <div className="flex items-center">
                  <Icon name="Smartphone" className="mr-2" size={14} />
                  Mobile
                </div>
              </SelectItem>
            </SelectContent>
          </Select>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Icon name="Palette" className="mr-2" size={16} />
                Настроить
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="font-poiret">Настройка шаблона</DialogTitle>
                <DialogDescription>
                  Персонализируйте выбранный шаблон под ваш бренд
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-6 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Название магазина</label>
                    <Input placeholder="Мой магазин" defaultValue={getCurrentTemplate()?.name} />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Категория</label>
                    <Input placeholder="Товары для дома" defaultValue={getCurrentTemplate()?.category} />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Цветовая схема</label>
                  <div className="flex space-x-2">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-8 h-8 rounded border"
                        style={{ backgroundColor: getCurrentTemplate()?.colors.primary }}
                      />
                      <Input type="color" className="w-16 h-8 p-0 border-0" defaultValue={getCurrentTemplate()?.colors.primary} />
                      <span className="text-xs">Основной</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-8 h-8 rounded border"
                        style={{ backgroundColor: getCurrentTemplate()?.colors.secondary }}
                      />
                      <Input type="color" className="w-16 h-8 p-0 border-0" defaultValue={getCurrentTemplate()?.colors.secondary} />
                      <span className="text-xs">Акцент</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Логотип</label>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center border-2 border-dashed">
                      <Icon name="Upload" className="text-muted-foreground" size={20} />
                    </div>
                    <div>
                      <Button variant="outline" size="sm">
                        <Icon name="Upload" className="mr-2" size={14} />
                        Загрузить логотип
                      </Button>
                      <p className="text-xs text-muted-foreground mt-1">PNG, JPG до 2MB</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">Отмена</Button>
                  <Button>Применить</Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Templates List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="font-poiret">Доступные шаблоны</CardTitle>
            <CardDescription>Все шаблоны адаптивны и оптимизированы</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedTemplate === template.id 
                    ? 'border-primary bg-primary/5 shadow-sm' 
                    : 'hover:border-muted-foreground/25'
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: template.colors.primary }}
                  />
                  <span className="font-medium font-poiret text-sm">{template.name}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">{template.category}</div>
                <div className="flex flex-wrap gap-1">
                  {template.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs px-1 py-0">
                      {feature}
                    </Badge>
                  ))}
                  {template.features.length > 2 && (
                    <Badge variant="outline" className="text-xs px-1 py-0">
                      +{template.features.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Preview Area */}
        <Card className="lg:col-span-3">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="font-poiret">{getCurrentTemplate()?.name}</CardTitle>
                <CardDescription>{getCurrentTemplate()?.description}</CardDescription>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary">{getCurrentTemplate()?.category}</Badge>
                <Button size="sm">
                  <Icon name="ExternalLink" className="mr-2" size={14} />
                  Полный просмотр
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              {getCurrentTemplate() && renderTemplatePreview(getCurrentTemplate())}
            </div>
            
            <div className="mt-6 p-4 bg-muted/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium font-poiret mb-1">Возможности шаблона</h4>
                  <div className="flex flex-wrap gap-2">
                    {getCurrentTemplate()?.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Icon name="Check" className="mr-1" size={12} />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button>
                  <Icon name="Palette" className="mr-2" size={16} />
                  Использовать шаблон
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Template Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="font-poiret">Сравнение шаблонов</CardTitle>
          <CardDescription>Выберите наиболее подходящий для вашего бизнеса</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Функция</th>
                  {templates.map((template) => (
                    <th key={template.id} className="text-center p-2 font-poiret">
                      {template.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  'Адаптивный дизайн',
                  'SEO оптимизация',
                  'Социальные сети',
                  'Множественные фото товаров',
                  'Отзывы клиентов',
                  'Программа лояльности',
                  'Многоязычность',
                  'Интеграция с платежами'
                ].map((feature, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2 font-medium">{feature}</td>
                    {templates.map((template) => (
                      <td key={template.id} className="text-center p-2">
                        <Icon 
                          name="Check" 
                          size={16} 
                          className="text-green-500 mx-auto" 
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShopTemplates;