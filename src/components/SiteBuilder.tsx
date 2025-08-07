import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const SiteBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [uploadedLogo, setUploadedLogo] = useState(null);
  const [activeTab, setActiveTab] = useState('templates');

  const shopTemplates = [
    {
      id: 1,
      name: 'Модный бутик',
      category: 'Одежда и мода',
      description: 'Элегантный дизайн для магазинов одежды и аксессуаров',
      preview: '/api/placeholder/400/300',
      colors: ['#FFB6C1', '#87CEEB', '#F0F8FF'],
      features: ['Каталог товаров', 'Корзина', 'Фильтры', 'Отзывы']
    },
    {
      id: 2,
      name: 'Электроника Pro',
      category: 'Техника',
      description: 'Modern дизайн для магазинов электроники и гаджетов',
      preview: '/api/placeholder/400/300',
      colors: ['#B0E0E6', '#FFB6C1', '#F5F5F5'],
      features: ['Сравнение товаров', 'Рейтинги', 'Техподдержка', 'Гарантия']
    },
    {
      id: 3,
      name: 'Косметика Люкс',
      category: 'Красота',
      description: 'Изящный дизайн для магазинов косметики и парфюмерии',
      preview: '/api/placeholder/400/300',
      colors: ['#FFB6C1', '#DDA0DD', '#F0F8FF'],
      features: ['Виртуальная примерка', 'Подарочные наборы', 'Блог', 'Акции']
    }
  ];

  const additionalModules = [
    { name: 'Лента новостей', icon: 'Newspaper', active: false, description: 'Публикация новостей и статей' },
    { name: 'Каталог статей', icon: 'BookOpen', active: false, description: 'База знаний и полезные статьи' },
    { name: 'Поиск', icon: 'Search', active: true, description: 'Умный поиск по товарам и контенту' },
    { name: 'Формы обратной связи', icon: 'MessageSquare', active: true, description: 'Связь с клиентами' },
    { name: 'Пользователи', icon: 'Users', active: true, description: 'Система регистрации и профилей' },
    { name: 'Опросы', icon: 'BarChart3', active: false, description: 'Опросы и голосования' },
    { name: 'Фотогалерея', icon: 'Image', active: false, description: 'Галерея изображений' },
    { name: 'Онлайн-консультант', icon: 'MessageCircle', active: false, description: 'Чат с поддержкой' },
    { name: 'Магазин в Telegram', icon: 'Send', active: false, description: 'Интеграция с Telegram Bot' },
    { name: 'Мобильное приложение', icon: 'Smartphone', active: false, description: 'PWA приложение' },
    { name: 'Магазины на поддоменах', icon: 'Globe', active: false, description: 'Мультисайтовость' },
    { name: 'Мультиязычность', icon: 'Languages', active: false, description: 'Поддержка нескольких языков' }
  ];

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedLogo(URL.createObjectURL(file));
    }
  };

  const applyLogoToProducts = () => {
    if (uploadedLogo) {
      console.log('Применяем логотип ко всем изображениям товаров');
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Конструктор сайтов</h1>
          <p className="text-muted-foreground font-inter">
            Создайте профессиональный интернет-магазин за несколько минут
          </p>
        </div>
        <Button size="lg">
          <Icon name="Rocket" className="mr-2" size={20} />
          Опубликовать сайт
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="templates" className="font-poiret">Шаблоны</TabsTrigger>
          <TabsTrigger value="editor" className="font-poiret">Редактор</TabsTrigger>
          <TabsTrigger value="modules" className="font-poiret">Модули</TabsTrigger>
          <TabsTrigger value="branding" className="font-poiret">Брендинг</TabsTrigger>
          <TabsTrigger value="settings" className="font-poiret">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Выберите шаблон для вашего магазина</CardTitle>
              <CardDescription className="font-inter">
                Все шаблоны адаптивные и бесплатные. Вы можете поменять дизайн в любое время.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {shopTemplates.map((template) => (
                  <Card 
                    key={template.id} 
                    className={`cursor-pointer transition-all hover:shadow-lg ${
                      selectedTemplate?.id === template.id ? 'ring-2 ring-primary' : ''
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Monitor" size={48} className="text-primary mx-auto mb-2" />
                        <p className="font-poiret text-lg">{template.name}</p>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-poiret">{template.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs">
                          {template.category}
                        </Badge>
                      </div>
                      <CardDescription className="font-inter">
                        {template.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex space-x-2">
                          {template.colors.map((color, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-full border"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {template.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                          {template.features.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{template.features.length - 2} еще
                            </Badge>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            className="flex-1" 
                            size="sm"
                            onClick={() => setActiveTab('editor')}
                          >
                            Выбрать
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" size="sm">
                                <Icon name="Eye" size={14} />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle className="font-poiret">
                                  Предпросмотр: {template.name}
                                </DialogTitle>
                                <DialogDescription className="font-inter">
                                  {template.description}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                                <p className="text-muted-foreground font-inter">
                                  Здесь будет предпросмотр шаблона
                                </p>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="editor" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-poiret">Визуальный редактор</CardTitle>
                  <CardDescription className="font-inter">
                    Редактируйте ваш сайт в режиме реального времени
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Icon name="Smartphone" size={16} className="mr-2" />
                    Мобильная версия
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="Monitor" size={16} className="mr-2" />
                    Десктоп
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold font-poiret mb-3">Элементы</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: 'Текст', icon: 'Type' },
                        { name: 'Изображение', icon: 'Image' },
                        { name: 'Кнопка', icon: 'MousePointer' },
                        { name: 'Товары', icon: 'Package' },
                        { name: 'Форма', icon: 'FileText' },
                        { name: 'Видео', icon: 'Video' }
                      ].map((element, idx) => (
                        <Button
                          key={idx}
                          variant="outline"
                          size="sm"
                          className="h-12 flex-col"
                        >
                          <Icon name={element.icon as any} size={16} />
                          <span className="text-xs mt-1">{element.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-semibold font-poiret mb-3">Стили</h3>
                    <div className="space-y-3">
                      <div>
                        <Label className="text-sm">Цвета темы</Label>
                        <div className="flex space-x-2 mt-2">
                          {['#87CEEB', '#FFB6C1', '#DDA0DD', '#F0F8FF'].map((color, idx) => (
                            <button
                              key={idx}
                              className="w-8 h-8 rounded-full border-2 border-gray-300"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm">Шрифты</Label>
                        <div className="mt-2 space-y-1">
                          <Button variant="outline" size="sm" className="w-full justify-start font-poiret">
                            Poiret One
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start font-inter">
                            Inter
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="aspect-video bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
                    {selectedTemplate ? (
                      <div className="space-y-4">
                        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-6 rounded-lg text-center">
                          <h1 className="text-2xl font-bold font-poiret mb-2">
                            Добро пожаловать в {selectedTemplate.name}
                          </h1>
                          <p className="text-muted-foreground font-inter">
                            Кликните на элемент чтобы начать редактирование
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3].map((item) => (
                            <div key={item} className="border rounded-lg p-4 hover:bg-muted/50 cursor-pointer">
                              <div className="aspect-square bg-muted rounded mb-2"></div>
                              <h3 className="font-semibold font-poiret text-sm">Товар {item}</h3>
                              <p className="text-xs text-muted-foreground font-inter">1,990 ₽</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <Icon name="MousePointer" size={48} className="text-muted-foreground mx-auto mb-4" />
                          <p className="text-muted-foreground font-inter">
                            Выберите шаблон для начала редактирования
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Дополнительные модули</CardTitle>
              <CardDescription className="font-inter">
                Расширьте функциональность вашего сайта
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalModules.map((module, idx) => (
                  <Card key={idx} className="relative">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${
                            module.active ? 'bg-primary/20' : 'bg-muted'
                          }`}>
                            <Icon 
                              name={module.icon as any} 
                              className={module.active ? 'text-primary' : 'text-muted-foreground'}
                              size={20}
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold font-poiret text-sm">{module.name}</h3>
                            <p className="text-xs text-muted-foreground font-inter">
                              {module.description}
                            </p>
                          </div>
                        </div>
                        <Badge variant={module.active ? 'default' : 'outline'} className="text-xs">
                          {module.active ? 'Включен' : 'Выключен'}
                        </Badge>
                      </div>
                      <Button 
                        className="w-full mt-3" 
                        size="sm"
                        variant={module.active ? 'outline' : 'default'}
                      >
                        {module.active ? 'Настроить' : 'Подключить'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="branding" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Загрузка логотипа</CardTitle>
              <CardDescription className="font-inter">
                Загрузите логотип и автоматически примените его ко всем изображениям товаров
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="font-inter">Загрузить логотип</Label>
                  <div className="mt-2 border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center relative">
                    {uploadedLogo ? (
                      <div className="space-y-4">
                        <img 
                          src={uploadedLogo} 
                          alt="Logo" 
                          className="max-h-24 mx-auto"
                        />
                        <p className="text-sm text-muted-foreground font-inter">Логотип загружен</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Icon name="Upload" size={32} className="text-muted-foreground mx-auto" />
                        <p className="text-muted-foreground font-inter">
                          Перетащите логотип сюда или нажмите для выбора
                        </p>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <Label className="font-inter">Настройки нанесения</Label>
                  <div className="mt-2 space-y-3">
                    <div>
                      <Label className="text-sm">Позиция логотипа</Label>
                      <select className="w-full mt-1 p-2 border rounded font-inter">
                        <option>Правый нижний угол</option>
                        <option>Правый верхний угол</option>
                        <option>Левый нижний угол</option>
                        <option>Левый верхний угол</option>
                        <option>По центру</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-sm">Размер логотипа</Label>
                      <select className="w-full mt-1 p-2 border rounded font-inter">
                        <option>Маленький (10%)</option>
                        <option>Средний (15%)</option>
                        <option>Большой (20%)</option>
                      </select>
                    </div>
                    <div>
                      <Label className="text-sm">Прозрачность</Label>
                      <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        defaultValue="80"
                        className="w-full mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-sm text-muted-foreground font-inter">
                  {uploadedLogo ? 'Логотип будет применен ко всем изображениям товаров' : 'Сначала загрузите логотип'}
                </p>
                <Button 
                  onClick={applyLogoToProducts}
                  disabled={!uploadedLogo}
                >
                  <Icon name="Brush" className="mr-2" size={16} />
                  Применить ко всем товарам
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Общие настройки сайта</CardTitle>
              <CardDescription className="font-inter">
                Основные параметры вашего интернет-магазина
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label>Название сайта</Label>
                    <Input placeholder="Мой интернет-магазин" className="font-inter" />
                  </div>
                  <div>
                    <Label>Описание сайта</Label>
                    <Input placeholder="Лучшие товары по доступным ценам" className="font-inter" />
                  </div>
                  <div>
                    <Label>Домен</Label>
                    <div className="flex">
                      <Input placeholder="myshop" className="rounded-r-none font-inter" />
                      <span className="bg-muted px-3 py-2 border border-l-0 rounded-r text-sm font-inter">
                        .poehali.dev
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label>Email для заказов</Label>
                    <Input type="email" placeholder="orders@myshop.com" className="font-inter" />
                  </div>
                  <div>
                    <Label>Телефон поддержки</Label>
                    <Input placeholder="+7 (999) 123-45-67" className="font-inter" />
                  </div>
                  <div>
                    <Label>Валюта магазина</Label>
                    <select className="w-full p-2 border rounded font-inter">
                      <option>Рубль (₽)</option>
                      <option>Доллар ($)</option>
                      <option>Евро (€)</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Публикация сайта</CardTitle>
              <CardDescription className="font-inter">
                Опубликуйте ваш сайт в интернете
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold font-poiret">Тестовый домен</h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    myshop.poehali.dev
                  </p>
                </div>
                <Badge variant="secondary">Активен</Badge>
              </div>
              
              <div className="flex space-x-2">
                <Button className="flex-1">
                  <Icon name="Globe" className="mr-2" size={16} />
                  Подключить свой домен
                </Button>
                <Button variant="outline">
                  <Icon name="Eye" className="mr-2" size={16} />
                  Предпросмотр
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SiteBuilder;