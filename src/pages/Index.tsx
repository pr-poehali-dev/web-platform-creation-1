import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import AdminPanel from "@/components/AdminPanel";

const Index = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  if (showAdmin) {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-primary font-poiret">
                BusinessPlatform
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#main" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
                <a href="#constructor" className="text-muted-foreground hover:text-primary transition-colors">Конструктор</a>
                <a href="#templates" className="text-muted-foreground hover:text-primary transition-colors">Шаблоны</a>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Тарифы</a>
                <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">Поддержка</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Войти</Button>
              <Button size="sm" onClick={() => setShowAdmin(true)}>Начать</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="main" className="pt-20 pb-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 animate-fade-in" variant="secondary">
              Комплексное решение для бизнеса
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in font-poiret">
              Платформа для создания и управления
              <span className="text-primary block">интернет-присутствием</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in font-inter">
              Создавайте сайты, управляйте продажами и маркетингом в одном месте. 
              Без технических знаний, с интеграцией CRM-систем.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="px-8 py-3 text-lg"
                onClick={() => setShowAdmin(true)}
              >
                <Icon name="Rocket" className="mr-2" />
                Создать сайт бесплатно
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                <Icon name="Play" className="mr-2" />
                Посмотреть демо
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poiret">Всё для вашего бизнеса</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-inter">
              Комплексные инструменты для создания и развития онлайн-присутствия
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Layout" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-poiret">Конструктор сайтов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter">
                  Drag & drop интерфейс для создания профессиональных сайтов без кода
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShoppingCart" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-poiret">Онлайн-продажи</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter">
                  Интегрированная система управления товарами и заказами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-poiret">CRM интеграция</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter">
                  Подключение к популярным CRM-системам для управления клиентами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="BarChart" className="text-primary" size={24} />
                </div>
                <CardTitle className="font-poiret">Аналитика</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter">
                  Подробная статистика посещений и конверсий для роста бизнеса
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Builder Demo */}
      <section id="constructor" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poiret">
                Конструктор сайтов нового поколения
              </h2>
              <p className="text-lg text-muted-foreground font-inter">
                Создавайте профессиональные сайты за минуты, не за недели
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground font-poiret">Website Builder</div>
              </div>
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="h-40 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <Icon name="Image" size={32} className="text-primary mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground font-inter">Hero блок</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-24 bg-muted rounded-lg flex items-center justify-center">
                        <Icon name="Type" className="text-muted-foreground" />
                      </div>
                      <div className="h-24 bg-muted rounded-lg flex items-center justify-center">
                        <Icon name="Image" className="text-muted-foreground" />
                      </div>
                      <div className="h-24 bg-muted rounded-lg flex items-center justify-center">
                        <Icon name="Layout" className="text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2 font-poiret">Настройки блока</h3>
                      <div className="space-y-2">
                        <div className="h-6 bg-muted rounded"></div>
                        <div className="h-6 bg-muted rounded w-3/4"></div>
                        <div className="h-6 bg-muted rounded w-1/2"></div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h3 className="font-semibold mb-2 font-poiret">Стили</h3>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="w-8 h-8 bg-primary rounded"></div>
                        <div className="w-8 h-8 bg-secondary rounded"></div>
                        <div className="w-8 h-8 bg-accent rounded"></div>
                        <div className="w-8 h-8 bg-muted rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poiret">Прозрачные тарифы</h2>
            <p className="text-lg text-muted-foreground font-inter">
              Выберите план, который подходит для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center font-poiret">Базовый</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold">₽990</div>
                  <div className="text-muted-foreground">/месяц</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">1 сайт</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Базовые шаблоны</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">SSL сертификат</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Email поддержка</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative border-primary shadow-lg scale-105">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2" variant="default">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-center font-poiret">Бизнес</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold">₽2990</div>
                  <div className="text-muted-foreground">/месяц</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">5 сайтов</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Все шаблоны</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">CRM интеграция</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Онлайн-магазин</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Аналитика</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Приоритетная поддержка</span>
                </div>
                <Button className="w-full mt-6">Выбрать план</Button>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader>
                <CardTitle className="text-center font-poiret">Корпоративный</CardTitle>
                <div className="text-center">
                  <div className="text-3xl font-bold">₽9990</div>
                  <div className="text-muted-foreground">/месяц</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Безлимитные сайты</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Белые лейблы</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">API интеграции</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">Персональный менеджер</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Check" size={16} className="text-green-500" />
                  <span className="font-inter">SLA 99.9%</span>
                </div>
                <Button className="w-full mt-6" variant="outline">Связаться с нами</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poiret">Готовые шаблоны</h2>
            <p className="text-lg text-muted-foreground font-inter">
              Профессиональные дизайны для любой отрасли
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Ресторан", category: "Общепит", color: "bg-orange-100" },
              { name: "Салон красоты", category: "Услуги", color: "bg-pink-100" },
              { name: "Интернет-магазин", category: "E-commerce", color: "bg-blue-100" },
              { name: "Медицинский центр", category: "Медицина", color: "bg-green-100" },
              { name: "Юридическая фирма", category: "Консалтинг", color: "bg-purple-100" },
              { name: "Строительная компания", category: "Строительство", color: "bg-yellow-100" }
            ].map((template, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all cursor-pointer">
                <div className={`h-48 ${template.color} rounded-t-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
                  <div className="text-center">
                    <Icon name="Monitor" size={48} className="text-muted-foreground mx-auto mb-2" />
                    <div className="text-sm font-medium font-poiret">{template.name}</div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-poiret">{template.name}</CardTitle>
                    <Badge variant="secondary" className="text-xs">{template.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full">
                    Предпросмотр
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poiret">Поддержка 24/7</h2>
              <p className="text-lg text-muted-foreground font-inter">
                Наша команда всегда готова помочь вам добиться успеха
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-poiret">Онлайн-чат</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 font-inter">
                    Мгновенные ответы на ваши вопросы в режиме реального времени
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Начать чат
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-poiret">Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 font-inter">
                    Прямая линия поддержки для срочных вопросов и консультаций
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    8 800 123-45-67
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="BookOpen" className="text-primary" size={24} />
                  </div>
                  <CardTitle className="font-poiret">База знаний</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 font-inter">
                    Подробные руководства и ответы на частые вопросы
                  </CardDescription>
                  <Button variant="outline" className="w-full">
                    Открыть справку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4 font-poiret">BusinessPlatform</div>
              <p className="text-gray-400 mb-4 font-inter">
                Комплексная платформа для создания и управления интернет-присутствием бизнеса.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Twitter" className="text-gray-400 hover:text-white cursor-pointer" />
                <Icon name="Linkedin" className="text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-poiret">Продукт</h3>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-white">Конструктор сайтов</a></li>
                <li><a href="#" className="hover:text-white">Шаблоны</a></li>
                <li><a href="#" className="hover:text-white">Интеграции</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-poiret">Поддержка</h3>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-white">Справочный центр</a></li>
                <li><a href="#" className="hover:text-white">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-white">Статус системы</a></li>
                <li><a href="#" className="hover:text-white">Обновления</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 font-poiret">Компания</h3>
              <ul className="space-y-2 text-gray-400 font-inter">
                <li><a href="#" className="hover:text-white">О нас</a></li>
                <li><a href="#" className="hover:text-white">Вакансии</a></li>
                <li><a href="#" className="hover:text-white">Пресс-центр</a></li>
                <li><a href="#" className="hover:text-white">Партнёры</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 font-inter">
              © 2024 BusinessPlatform. Все права защищены.
            </div>
            <div className="flex space-x-6 text-gray-400 mt-4 md:mt-0 font-inter">
              <a href="#" className="hover:text-white">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;