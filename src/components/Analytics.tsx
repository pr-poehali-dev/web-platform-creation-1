import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Analytics = () => {
  const [period, setPeriod] = useState('week');

  const analyticsData = {
    visitors: { value: '12,847', change: '+23%', trend: 'up' },
    pageviews: { value: '45,621', change: '+12%', trend: 'up' },
    bounceRate: { value: '34.2%', change: '-8%', trend: 'down' },
    avgSession: { value: '3:42', change: '+15%', trend: 'up' }
  };

  const topPages = [
    { page: '/home', views: 8432, percentage: 85 },
    { page: '/products', views: 6234, percentage: 63 },
    { page: '/about', views: 3421, percentage: 35 },
    { page: '/contact', views: 2156, percentage: 22 },
    { page: '/blog', views: 1543, percentage: 16 }
  ];

  const trafficSources = [
    { source: 'Поисковые системы', visits: 45, color: 'bg-blue-500' },
    { source: 'Социальные сети', visits: 28, color: 'bg-pink-500' },
    { source: 'Прямые переходы', visits: 18, color: 'bg-green-500' },
    { source: 'Реферальные ссылки', visits: 9, color: 'bg-purple-500' }
  ];

  const devices = [
    { device: 'Десктоп', percentage: 52, color: 'bg-primary' },
    { device: 'Мобильные', percentage: 38, color: 'bg-secondary' },
    { device: 'Планшеты', percentage: 10, color: 'bg-accent' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Аналитика</h1>
          <p className="text-muted-foreground font-inter">Детальная статистика вашего сайта</p>
        </div>
        <div className="flex items-center space-x-4">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="day">Сегодня</SelectItem>
              <SelectItem value="week">Неделя</SelectItem>
              <SelectItem value="month">Месяц</SelectItem>
              <SelectItem value="year">Год</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <Icon name="Download" className="mr-2" size={16} />
            Экспорт отчета
          </Button>
        </div>
      </div>

      {/* Основные метрики */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: 'Посетители', ...analyticsData.visitors, icon: 'Users' },
          { title: 'Просмотры', ...analyticsData.pageviews, icon: 'Eye' },
          { title: 'Отказы', ...analyticsData.bounceRate, icon: 'TrendingDown' },
          { title: 'Сессия', ...analyticsData.avgSession, icon: 'Clock' }
        ].map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground font-inter">{metric.title}</p>
                  <p className="text-2xl font-bold font-poiret">{metric.value}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Icon 
                      name={metric.trend === 'up' ? 'TrendingUp' : 'TrendingDown'} 
                      size={12}
                      className={metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}
                    />
                    <span className={`text-sm ${metric.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <Icon name={metric.icon as any} className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Популярные страницы */}
        <Card>
          <CardHeader>
            <CardTitle className="font-poiret">Популярные страницы</CardTitle>
            <CardDescription>Страницы с наибольшим количеством просмотров</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topPages.map((page, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium font-inter">{page.page}</span>
                    <span className="text-sm text-muted-foreground">{page.views.toLocaleString()}</span>
                  </div>
                  <Progress value={page.percentage} className="h-2" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Источники трафика */}
        <Card>
          <CardHeader>
            <CardTitle className="font-poiret">Источники трафика</CardTitle>
            <CardDescription>Откуда приходят ваши посетители</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${source.color}`}></div>
                  <span className="text-sm font-medium font-inter">{source.source}</span>
                </div>
                <Badge variant="outline">{source.visits}%</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Устройства */}
        <Card>
          <CardHeader>
            <CardTitle className="font-poiret">Устройства</CardTitle>
            <CardDescription>Распределение по типам устройств</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {devices.map((device, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium font-inter">{device.device}</span>
                    <span className="text-sm font-bold">{device.percentage}%</span>
                  </div>
                  <Progress value={device.percentage} className="h-3" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* География */}
        <Card>
          <CardHeader>
            <CardTitle className="font-poiret">География посетителей</CardTitle>
            <CardDescription>Топ-5 стран по посещениям</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { country: 'Россия', flag: '🇷🇺', visits: 8432, percentage: 67 },
              { country: 'Украина', flag: '🇺🇦', visits: 2156, percentage: 17 },
              { country: 'Беларусь', flag: '🇧🇾', visits: 1234, percentage: 10 },
              { country: 'Казахстан', flag: '🇰🇿', visits: 543, percentage: 4 },
              { country: 'США', flag: '🇺🇸', visits: 234, percentage: 2 }
            ].map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{country.flag}</span>
                  <span className="text-sm font-medium font-inter">{country.country}</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">{country.visits.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">{country.percentage}%</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* График конверсий */}
      <Card>
        <CardHeader>
          <CardTitle className="font-poiret">Воронка конверсий</CardTitle>
          <CardDescription>Путь пользователей от посещения до покупки</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { stage: 'Посетители сайта', count: 12847, conversion: 100 },
              { stage: 'Просмотры товаров', count: 8432, conversion: 66 },
              { stage: 'Добавления в корзину', count: 2156, conversion: 17 },
              { stage: 'Оформления заказов', count: 543, conversion: 4 },
              { stage: 'Оплаченные заказы', count: 432, conversion: 3 }
            ].map((stage, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium font-inter">{stage.stage}</span>
                  <div className="text-right">
                    <div className="text-sm font-bold">{stage.count.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{stage.conversion}%</div>
                  </div>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div 
                    className="bg-primary h-3 rounded-full transition-all duration-500"
                    style={{ width: `${stage.conversion}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;