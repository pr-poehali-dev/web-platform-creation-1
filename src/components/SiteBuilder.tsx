import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColorPicker } from "@/components/ui/color-picker";
import Icon from "@/components/ui/icon";

const SiteBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const fileInputRef = useRef(null);
  
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Мой Интернет-Магазин',
    primaryColor: '#B8D4E3',
    secondaryColor: '#FFE0E6',
    backgroundColor: '#FEF9E7',
    logoUrl: '',
    description: 'Лучшие товары для вашего дома',
    currency: '₽'
  });

  const templates = [
    {
      id: 1,
      name: 'Модный Бутик',
      category: 'Одежда',
      preview: '/api/placeholder/300/200',
      description: 'Элегантный дизайн для магазинов одежды и аксессуаров',
      features: ['Галерея товаров', 'Фильтры', 'Корзина', 'Wishlist'],
      colors: { primary: '#FFE0E6', secondary: '#B8D4E3' }
    },
    {
      id: 2,
      name: 'Техно Маркет',
      category: 'Электроника',
      preview: '/api/placeholder/300/200',
      description: 'Современный дизайн для магазинов электроники',
      features: ['Сравнение товаров', 'Спецификации', 'Отзывы', 'Гарантия'],
      colors: { primary: '#B8D4E3', secondary: '#E8F4FD' }
    },
    {
      id: 3,
      name: 'Eco Store',
      category: 'Экотовары',
      preview: '/api/placeholder/300/200',
      description: 'Натуральный дизайн для эко-товаров и органической продукции',
      features: ['Сертификаты', 'Происхождение', 'Экодоставка', 'Подписка'],
      colors: { primary: '#E8F5E8', secondary: '#F0F8F0' }
    }
  ];

  const editableElements = [
    { id: 'header', name: 'Шапка сайта', type: 'component' },
    { id: 'banner', name: 'Главный баннер', type: 'image' },
    { id: 'catalog', name: 'Каталог товаров', type: 'component' },
    { id: 'footer', name: 'Подвал сайта', type: 'component' },
    { id: 'colors', name: 'Цветовая схема', type: 'style' },
    { id: 'fonts', name: 'Шрифты', type: 'style' },
    { id: 'layout', name: 'Макет страницы', type: 'layout' }
  ];

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setLogoFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setSiteSettings(prev => ({
          ...prev,
          logoUrl: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (colorType, color) => {
    setSiteSettings(prev => ({
      ...prev,
      [colorType]: color
    }));
  };

  const applyLogoToProducts = () => {
    // Функция для нанесения логотипа на все изображения товаров
    console.log('Применение логотипа к товарам...', logoFile);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold font-poiret">Конструктор Сайтов</h1>
            <p className="text-muted-foreground mt-2">Создайте профессиональный интернет-магазин за несколько минут</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline">
              <Icon name="Eye" className="mr-2" size={16} />
              Предпросмотр
            </Button>
            <Button>
              <Icon name="Save" className="mr-2" size={16} />
              Сохранить
            </Button>
          </div>
        </div>

        <Tabs defaultValue="templates" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="templates" className="font-poiret">Шаблоны</TabsTrigger>
            <TabsTrigger value="editor" className="font-poiret">Редактор</TabsTrigger>
            <TabsTrigger value="settings" className="font-poiret">Настройки</TabsTrigger>
            <TabsTrigger value="modules" className="font-poiret">Модули</TabsTrigger>
          </TabsList>

          <TabsContent value="templates" className="space-y-6 mt-6">
            <div>
              <h2 className="text-2xl font-bold font-poiret mb-4">Выберите шаблон</h2>
              <p className="text-muted-foreground mb-6">Все шаблоны бесплатны и адаптивны. Вы можете изменить дизайн в любое время.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <Card 
                  key={template.id} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    selectedTemplate === template.id ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-t-lg flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="ShoppingBag" size={48} className="mx-auto mb-2" />
                      <div className="text-lg font-poiret">{template.name}</div>
                    </div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-poiret">{template.name}</CardTitle>
                      <Badge variant="secondary">{template.category}</Badge>
                    </div>
                    <CardDescription>{template.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium mb-2">Особенности:</div>
                        <div className="flex flex-wrap gap-1">
                          {template.features.map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button 
                        className="w-full" 
                        variant={selectedTemplate === template.id ? 'default' : 'outline'}
                      >
                        {selectedTemplate === template.id ? 'Выбран' : 'Выбрать'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="editor" className="space-y-6 mt-6">
            <div className="grid lg:grid-cols-4 gap-6">
              {/* Панель элементов */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="font-poiret">Элементы сайта</CardTitle>
                  <CardDescription>Выберите элемент для редактирования</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {editableElements.map((element) => (
                    <Button
                      key={element.id}
                      variant={selectedElement === element.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setSelectedElement(element.id)}
                    >
                      <Icon 
                        name={
                          element.type === 'component' ? 'Layout' :
                          element.type === 'image' ? 'Image' :
                          element.type === 'style' ? 'Palette' : 'Settings'
                        } 
                        className="mr-2" 
                        size={16} 
                      />
                      {element.name}
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Область предпросмотра */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="font-poiret">Предпросмотр</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-6 min-h-[500px] border-2 border-dashed border-muted-foreground/25">
                    {selectedTemplate ? (
                      <div className="space-y-6">
                        {/* Шапка */}
                        <div className="flex items-center justify-between p-4 bg-primary/10 rounded">
                          <div className="flex items-center space-x-2">
                            {siteSettings.logoUrl && (
                              <img src={siteSettings.logoUrl} alt="Logo" className="w-8 h-8 rounded" />
                            )}
                            <span className="font-poiret text-lg">{siteSettings.siteName}</span>
                          </div>
                          <div className="flex space-x-4 text-sm">
                            <span>Каталог</span>
                            <span>О нас</span>
                            <span>Контакты</span>
                          </div>
                        </div>
                        
                        {/* Главный баннер */}
                        <div className="bg-secondary/20 rounded-lg p-8 text-center">
                          <h2 className="text-2xl font-poiret mb-2">Добро пожаловать в {siteSettings.siteName}</h2>
                          <p className="text-muted-foreground">{siteSettings.description}</p>
                        </div>

                        {/* Товары */}
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3].map((i) => (
                            <div key={i} className="bg-card rounded-lg p-3 border">
                              <div className="aspect-square bg-muted rounded mb-2 flex items-center justify-center">
                                <Icon name="Package" className="text-muted-foreground" />
                              </div>
                              <div className="text-sm">Товар {i}</div>
                              <div className="font-semibold">1000 {siteSettings.currency}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        <div className="text-center">
                          <Icon name="MousePointer2" size={48} className="mx-auto mb-4" />
                          <p>Выберите шаблон для начала редактирования</p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Панель свойств */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="font-poiret">Свойства</CardTitle>
                  <CardDescription>
                    {selectedElement ? `Настройки: ${editableElements.find(e => e.id === selectedElement)?.name}` : 'Выберите элемент'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {selectedElement === 'colors' && (
                    <div className="space-y-4">
                      <div>
                        <Label>Основной цвет</Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <div 
                            className="w-8 h-8 rounded border border-input cursor-pointer"
                            style={{ backgroundColor: siteSettings.primaryColor }}
                            onClick={() => document.getElementById('primary-color').click()}
                          />
                          <Input
                            id="primary-color"
                            type="color"
                            value={siteSettings.primaryColor}
                            onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                            className="sr-only"
                          />
                          <Input
                            value={siteSettings.primaryColor}
                            onChange={(e) => handleColorChange('primaryColor', e.target.value)}
                            placeholder="#B8D4E3"
                          />
                        </div>
                      </div>
                      <div>
                        <Label>Вторичный цвет</Label>
                        <div className="flex items-center space-x-2 mt-1">
                          <div 
                            className="w-8 h-8 rounded border border-input cursor-pointer"
                            style={{ backgroundColor: siteSettings.secondaryColor }}
                            onClick={() => document.getElementById('secondary-color').click()}
                          />
                          <Input
                            id="secondary-color"
                            type="color"
                            value={siteSettings.secondaryColor}
                            onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                            className="sr-only"
                          />
                          <Input
                            value={siteSettings.secondaryColor}
                            onChange={(e) => handleColorChange('secondaryColor', e.target.value)}
                            placeholder="#FFE0E6"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedElement === 'header' && (
                    <div className="space-y-4">
                      <div>
                        <Label>Название сайта</Label>
                        <Input
                          value={siteSettings.siteName}
                          onChange={(e) => setSiteSettings(prev => ({ ...prev, siteName: e.target.value }))}
                          placeholder="Название вашего магазина"
                        />
                      </div>
                      <div>
                        <Label>Логотип</Label>
                        <div className="space-y-2">
                          <Button
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full"
                          >
                            <Icon name="Upload" className="mr-2" size={16} />
                            Загрузить логотип
                          </Button>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleLogoUpload}
                            className="hidden"
                          />
                          {siteSettings.logoUrl && (
                            <div className="flex items-center space-x-2">
                              <img src={siteSettings.logoUrl} alt="Logo preview" className="w-10 h-10 rounded border" />
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={applyLogoToProducts}
                              >
                                <Icon name="Stamp" className="mr-1" size={14} />
                                Нанести на товары
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {!selectedElement && (
                    <div className="text-center text-muted-foreground py-8">
                      <Icon name="Settings" size={48} className="mx-auto mb-4" />
                      <p>Выберите элемент из списка для настройки его свойств</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-poiret">Основные настройки</CardTitle>
                <CardDescription>Общие параметры вашего интернет-магазина</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label>Название магазина</Label>
                      <Input
                        value={siteSettings.siteName}
                        onChange={(e) => setSiteSettings(prev => ({ ...prev, siteName: e.target.value }))}
                        placeholder="Мой Интернет-Магазин"
                      />
                    </div>
                    <div>
                      <Label>Описание</Label>
                      <Textarea
                        value={siteSettings.description}
                        onChange={(e) => setSiteSettings(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Краткое описание вашего магазина"
                      />
                    </div>
                    <div>
                      <Label>Валюта</Label>
                      <Select value={siteSettings.currency} onValueChange={(value) => setSiteSettings(prev => ({ ...prev, currency: value }))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="₽">Рубль (₽)</SelectItem>
                          <SelectItem value="$">Доллар ($)</SelectItem>
                          <SelectItem value="€">Евро (€)</SelectItem>
                          <SelectItem value="₴">Гривна (₴)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Домен</Label>
                      <div className="flex space-x-2">
                        <Input placeholder="myshop" />
                        <Select>
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder=".poehali.store" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value=".poehali.store">.poehali.store</SelectItem>
                            <SelectItem value=".poehali.shop">.poehali.shop</SelectItem>
                            <SelectItem value="custom">Свой домен</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label>Язык сайта</Label>
                      <Select defaultValue="ru">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ru">Русский</SelectItem>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="ua">Українська</SelectItem>
                          <SelectItem value="multi">Мультиязычность</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Часовой пояс</Label>
                      <Select defaultValue="moscow">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moscow">Москва (UTC+3)</SelectItem>
                          <SelectItem value="spb">Санкт-Петербург (UTC+3)</SelectItem>
                          <SelectItem value="ekb">Екатеринбург (UTC+5)</SelectItem>
                          <SelectItem value="nsk">Новосибирск (UTC+7)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6 mt-6">
            <div>
              <h2 className="text-2xl font-bold font-poiret mb-4">Дополнительные модули</h2>
              <p className="text-muted-foreground mb-6">Расширьте функциональность вашего интернет-магазина</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Лента новостей', desc: 'Публикация новостей и акций', icon: 'Newspaper', enabled: true },
                { name: 'Каталог статей', desc: 'База знаний и полезные материалы', icon: 'BookOpen', enabled: false },
                { name: 'Поиск', desc: 'Быстрый поиск по товарам', icon: 'Search', enabled: true },
                { name: 'Формы обратной связи', desc: 'Заявки и обращения клиентов', icon: 'MessageSquare', enabled: true },
                { name: 'Система пользователей', desc: 'Регистрация и личные кабинеты', icon: 'Users', enabled: true },
                { name: 'Опросы', desc: 'Анкеты и голосования', icon: 'BarChart3', enabled: false },
                { name: 'Фотогалерея', desc: 'Красивые галереи изображений', icon: 'Images', enabled: false },
                { name: 'Онлайн-консультант', desc: 'Чат с посетителями сайта', icon: 'MessageCircle', enabled: true },
                { name: 'Магазин в Telegram', desc: 'Продажи через Telegram-бот', icon: 'Send', enabled: false },
                { name: 'Мобильное приложение', desc: 'Нативное приложение для iOS/Android', icon: 'Smartphone', enabled: false },
                { name: 'Магазины на поддоменах', desc: 'Мульти-магазин система', icon: 'Globe', enabled: false },
                { name: 'Мультиязычность', desc: 'Поддержка нескольких языков', icon: 'Languages', enabled: false }
              ].map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon name={module.icon as any} className="text-primary" size={16} />
                        </div>
                        <CardTitle className="text-lg font-poiret">{module.name}</CardTitle>
                      </div>
                      <Badge variant={module.enabled ? 'default' : 'secondary'}>
                        {module.enabled ? 'Включен' : 'Отключен'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4">{module.desc}</CardDescription>
                    <Button 
                      variant={module.enabled ? 'outline' : 'default'} 
                      className="w-full"
                    >
                      {module.enabled ? 'Настроить' : 'Подключить'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SiteBuilder;