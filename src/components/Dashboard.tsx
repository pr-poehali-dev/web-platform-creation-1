import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: "Посетители", value: "12,486", change: "+15%", icon: "Users" as const },
    { title: "Конверсия", value: "3.2%", change: "+0.8%", icon: "TrendingUp" as const },
    { title: "Продажи", value: "₽128,420", change: "+22%", icon: "ShoppingCart" as const },
    { title: "Активные сайты", value: "3", change: "0", icon: "Globe" as const }
  ];

  const recentActivity = [
    { action: "Новый заказ", details: "№1234 - ₽2,500", time: "2 мин назад", status: "success" },
    { action: "Новый клиент", details: "Иван Петров зарегистрировался", time: "15 мин назад", status: "info" },
    { action: "Обновление сайта", details: "Главная страница изменена", time: "1 час назад", status: "warning" },
    { action: "Отправка рассылки", details: "Акция \"Скидка 20%\" отправлена", time: "3 часа назад", status: "success" }
  ];

  const quickActions = [
    { title: "Создать сайт", desc: "Запустить новый проект", icon: "Plus", color: "bg-blue-500" },
    { title: "Добавить товар", desc: "В интернет-магазин", icon: "Package", color: "bg-green-500" },
    { title: "Настроить SEO", desc: "Улучшить видимость", icon: "Search", color: "bg-purple-500" },
    { title: "Создать рассылку", desc: "Email маркетинг", icon: "Mail", color: "bg-orange-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-primary">BusinessPlatform</div>
              <nav className="hidden md:flex space-x-6">
                <Button 
                  variant={activeTab === 'overview' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('overview')}
                >
                  Обзор
                </Button>
                <Button 
                  variant={activeTab === 'websites' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('websites')}
                >
                  Сайты
                </Button>
                <Button 
                  variant={activeTab === 'crm' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('crm')}
                >
                  CRM
                </Button>
                <Button 
                  variant={activeTab === 'analytics' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('analytics')}
                >
                  Аналитика
                </Button>
                <Button 
                  variant={activeTab === 'marketing' ? 'default' : 'ghost'} 
                  onClick={() => setActiveTab('marketing')}
                >
                  Маркетинг
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="Bell" className="mr-2" size={16} />
                Уведомления
              </Button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                А
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Добро пожаловать, Анна!</h1>
                <p className="text-muted-foreground mt-1">Вот что происходит с вашим бизнесом сегодня</p>
              </div>
              <Button className="px-6 py-2">
                <Icon name="Plus" className="mr-2" size={16} />
                Создать сайт
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon name={stat.icon} className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground flex items-center">
                      {stat.change !== "0" && (
                        <Icon 
                          name={stat.change.startsWith('+') ? 'TrendingUp' : 'TrendingDown'} 
                          className="w-3 h-3 mr-1" 
                        />
                      )}
                      <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                        {stat.change}
                      </span>
                      <span className="ml-1">за последний месяц</span>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Быстрые действия</CardTitle>
                <CardDescription>Самые популярные функции для управления бизнесом</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      className="h-auto p-4 flex-col items-start space-y-2 hover:shadow-md transition-all"
                    >
                      <div className={`w-8 h-8 rounded-md ${action.color} flex items-center justify-center mb-2`}>
                        <Icon name={action.icon as any} className="text-white" size={16} />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold">{action.title}</div>
                        <div className="text-xs text-muted-foreground">{action.desc}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Последние события</CardTitle>
                  <CardDescription>Активность в вашем аккаунте</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center space-x-4 p-3 rounded-lg border">
                        <div className={`w-2 h-2 rounded-full ${
                          activity.status === 'success' ? 'bg-green-500' : 
                          activity.status === 'info' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}></div>
                        <div className="flex-1">
                          <div className="font-medium">{activity.action}</div>
                          <div className="text-sm text-muted-foreground">{activity.details}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Производительность сайтов</CardTitle>
                  <CardDescription>Основные метрики ваших проектов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">mycompany.ru</span>
                      <Badge variant="secondary">Активен</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Скорость загрузки</span>
                        <span>92/100</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Посетители: 1,284</span>
                      <span>Конверсия: 3.8%</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">shop.mycompany.ru</span>
                      <Badge variant="secondary">Активен</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Скорость загрузки</span>
                        <span>87/100</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                      <span>Посетители: 856</span>
                      <span>Продажи: ₽45,200</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">landing.mycompany.ru</span>
                      <Badge variant="outline">В разработке</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span>Готовность</span>
                        <span>65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Other tabs placeholder */}
        {activeTab !== 'overview' && (
          <div className="text-center py-20">
            <Icon name="Settings" className="mx-auto mb-4 text-muted-foreground" size={48} />
            <h2 className="text-2xl font-bold mb-2">Раздел "{activeTab}" в разработке</h2>
            <p className="text-muted-foreground">Этот функционал будет доступен в ближайшее время</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;