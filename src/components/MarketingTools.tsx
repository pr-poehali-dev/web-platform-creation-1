import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const MarketingTools = () => {
  const [activeTab, setActiveTab] = useState('email');

  const emailCampaigns = [
    {
      id: 1,
      name: 'Весенняя распродажа',
      status: 'active',
      sent: 12540,
      opened: 8432,
      clicked: 1234,
      date: '2024-08-01'
    },
    {
      id: 2,
      name: 'Новинки августа',
      status: 'draft',
      sent: 0,
      opened: 0,
      clicked: 0,
      date: '2024-08-07'
    },
    {
      id: 3,
      name: 'Возвращение клиентов',
      status: 'completed',
      sent: 8765,
      opened: 5432,
      clicked: 876,
      date: '2024-07-25'
    }
  ];

  const promoOffers = [
    {
      id: 1,
      name: 'Скидка 20% новым клиентам',
      code: 'NEW20',
      discount: 20,
      type: 'percentage',
      used: 245,
      limit: 500,
      expires: '2024-12-31'
    },
    {
      id: 2,
      name: 'Бесплатная доставка',
      code: 'FREESHIP',
      discount: 0,
      type: 'shipping',
      used: 156,
      limit: 1000,
      expires: '2024-09-30'
    }
  ];

  const socialPosts = [
    {
      id: 1,
      platform: 'Instagram',
      content: 'Новая коллекция уже в продаже! 🛍️',
      scheduled: '2024-08-08 10:00',
      status: 'scheduled'
    },
    {
      id: 2,
      platform: 'VK',
      content: 'Скидки до 50% на летние товары',
      scheduled: '2024-08-08 15:00',
      status: 'scheduled'
    }
  ];

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

        <TabsContent value="email" className="space-y-6">
          {/* Email маркетинг статистика */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Подписчики', value: '15,432', icon: 'Users', color: 'text-blue-600' },
              { title: 'Отправлено', value: '21,305', icon: 'Send', color: 'text-green-600' },
              { title: 'Открыто', value: '13,864', icon: 'Eye', color: 'text-purple-600' },
              { title: 'Переходы', value: '2,110', icon: 'MousePointer', color: 'text-orange-600' }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-inter">{stat.title}</p>
                      <p className="text-2xl font-bold font-poiret">{stat.value}</p>
                    </div>
                    <Icon name={stat.icon as any} className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Email кампании */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-poiret">Email кампании</CardTitle>
                  <CardDescription>Управление рассылками и их эффективность</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" className="mr-2" size={16} />
                  Новая рассылка
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Название</TableHead>
                    <TableHead>Статус</TableHead>
                    <TableHead>Отправлено</TableHead>
                    <TableHead>Открыто</TableHead>
                    <TableHead>Переходы</TableHead>
                    <TableHead>Дата</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {emailCampaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell className="font-medium font-inter">{campaign.name}</TableCell>
                      <TableCell>
                        <Badge variant={
                          campaign.status === 'active' ? 'default' :
                          campaign.status === 'completed' ? 'secondary' : 'outline'
                        }>
                          {campaign.status === 'active' && 'Активна'}
                          {campaign.status === 'completed' && 'Завершена'}
                          {campaign.status === 'draft' && 'Черновик'}
                        </Badge>
                      </TableCell>
                      <TableCell>{campaign.sent.toLocaleString()}</TableCell>
                      <TableCell>{campaign.opened.toLocaleString()}</TableCell>
                      <TableCell>{campaign.clicked.toLocaleString()}</TableCell>
                      <TableCell>{new Date(campaign.date).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Edit" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Создание письма */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Быстрое создание письма</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Тема письма</Label>
                  <Input placeholder="Введите тему письма" />
                </div>
                <div>
                  <Label>Получатели</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите аудиторию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все подписчики</SelectItem>
                      <SelectItem value="new">Новые клиенты</SelectItem>
                      <SelectItem value="active">Активные покупатели</SelectItem>
                      <SelectItem value="inactive">Неактивные клиенты</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Содержание письма</Label>
                <Textarea 
                  placeholder="Напишите текст письма или выберите шаблон..." 
                  rows={4}
                />
              </div>
              <div className="flex justify-between">
                <Button variant="outline">Предпросмотр</Button>
                <div className="space-x-2">
                  <Button variant="outline">Сохранить как черновик</Button>
                  <Button>Отправить сейчас</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="promo" className="space-y-6">
          {/* Статистика промокодов */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Активных промокодов', value: '12', icon: 'Ticket' },
              { title: 'Использований', value: '1,543', icon: 'ShoppingCart' },
              { title: 'Экономия клиентов', value: '₽85,600', icon: 'DollarSign' }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-inter">{stat.title}</p>
                      <p className="text-2xl font-bold font-poiret">{stat.value}</p>
                    </div>
                    <Icon name={stat.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Активные промокоды */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-poiret">Промокоды</CardTitle>
                  <CardDescription>Скидки и специальные предложения</CardDescription>
                </div>
                <Button>
                  <Icon name="Plus" className="mr-2" size={16} />
                  Создать промокод
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {promoOffers.map((offer) => (
                <div key={offer.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold font-poiret">{offer.name}</h3>
                      <p className="text-sm text-muted-foreground font-inter">Код: {offer.code}</p>
                    </div>
                    <Badge variant="outline">
                      {offer.type === 'percentage' && `${offer.discount}% скидка`}
                      {offer.type === 'shipping' && 'Бесплатная доставка'}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-inter">Использований: {offer.used} из {offer.limit}</span>
                      <span className="font-inter">Действует до: {new Date(offer.expires).toLocaleDateString()}</span>
                    </div>
                    <Progress value={(offer.used / offer.limit) * 100} className="h-2" />
                  </div>
                  <div className="flex justify-end space-x-2 mt-3">
                    <Button variant="outline" size="sm">
                      <Icon name="Copy" size={14} className="mr-1" />
                      Копировать код
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Edit" size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Создание промокода */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Создать новый промокод</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Название акции</Label>
                  <Input placeholder="Например: Летняя распродажа" />
                </div>
                <div>
                  <Label>Промокод</Label>
                  <div className="flex space-x-2">
                    <Input placeholder="SALE2024" />
                    <Button variant="outline">
                      <Icon name="Shuffle" size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label>Тип скидки</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="percentage">Процент</SelectItem>
                      <SelectItem value="fixed">Фиксированная сумма</SelectItem>
                      <SelectItem value="shipping">Бесплатная доставка</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Размер скидки</Label>
                  <Input type="number" placeholder="20" />
                </div>
                <div>
                  <Label>Лимит использований</Label>
                  <Input type="number" placeholder="100" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Дата начала</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Дата окончания</Label>
                  <Input type="date" />
                </div>
              </div>
              <Button className="w-full">Создать промокод</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="social" className="space-y-6">
          {/* Соцсети */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Подключенные аккаунты */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poiret">Подключенные аккаунты</CardTitle>
                <CardDescription>Управление социальными сетями</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: 'Instagram', connected: true, followers: '12.5K' },
                  { name: 'VK', connected: true, followers: '8.2K' },
                  { name: 'Telegram', connected: false, followers: '—' },
                  { name: 'YouTube', connected: false, followers: '—' }
                ].map((social, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Icon name="Globe" className="text-primary" />
                      <div>
                        <div className="font-medium font-inter">{social.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {social.connected ? `${social.followers} подписчиков` : 'Не подключено'}
                        </div>
                      </div>
                    </div>
                    <Button variant={social.connected ? "outline" : "default"} size="sm">
                      {social.connected ? 'Настроить' : 'Подключить'}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Запланированные посты */}
            <Card>
              <CardHeader>
                <CardTitle className="font-poiret">Запланированные посты</CardTitle>
                <CardDescription>Автоматическая публикация контента</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialPosts.map((post) => (
                  <div key={post.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="outline">{post.platform}</Badge>
                      <Button variant="ghost" size="sm">
                        <Icon name="MoreHorizontal" size={16} />
                      </Button>
                    </div>
                    <p className="text-sm mb-2 font-inter">{post.content}</p>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Публикация: {post.scheduled}</span>
                      <Badge variant="outline" className="text-xs">Запланировано</Badge>
                    </div>
                  </div>
                ))}
                <Button className="w-full" variant="outline">
                  <Icon name="Plus" className="mr-2" size={16} />
                  Запланировать пост
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Создание поста */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Создать пост</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Выберите платформы</Label>
                <div className="flex space-x-2 mt-2">
                  {['Instagram', 'VK', 'Telegram'].map((platform) => (
                    <Badge key={platform} variant="outline" className="cursor-pointer">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <Label>Текст поста</Label>
                <Textarea 
                  placeholder="Напишите текст поста..." 
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Дата публикации</Label>
                  <Input type="datetime-local" />
                </div>
                <div>
                  <Label>Изображение</Label>
                  <Button variant="outline" className="w-full">
                    <Icon name="Image" className="mr-2" size={16} />
                    Загрузить изображение
                  </Button>
                </div>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline">Сохранить как черновик</Button>
                <Button>Запланировать публикацию</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          {/* SEO метрики */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Позиции в поиске', value: '45', icon: 'TrendingUp' },
              { title: 'Органический трафик', value: '8,432', icon: 'Users' },
              { title: 'Индексация', value: '92%', icon: 'Search' },
              { title: 'Скорость сайта', value: '85', icon: 'Zap' }
            ].map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-inter">{metric.title}</p>
                      <p className="text-2xl font-bold font-poiret">{metric.value}</p>
                    </div>
                    <Icon name={metric.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SEO рекомендации */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">SEO рекомендации</CardTitle>
              <CardDescription>Улучшите позиции в поисковых системах</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { task: 'Добавить мета-описания для 15 страниц', priority: 'high', status: 'pending' },
                { task: 'Оптимизировать изображения (сжать 23 файла)', priority: 'medium', status: 'in_progress' },
                { task: 'Исправить 8 внутренних ссылок', priority: 'low', status: 'completed' },
                { task: 'Создать sitemap.xml', priority: 'high', status: 'pending' }
              ].map((task, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={task.status === 'completed' ? 'CheckCircle' : 'Circle'} 
                      className={task.status === 'completed' ? 'text-green-500' : 'text-muted-foreground'} 
                      size={16} 
                    />
                    <span className="font-inter">{task.task}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={
                      task.priority === 'high' ? 'destructive' :
                      task.priority === 'medium' ? 'default' : 'secondary'
                    }>
                      {task.priority === 'high' && 'Высокий'}
                      {task.priority === 'medium' && 'Средний'}  
                      {task.priority === 'low' && 'Низкий'}
                    </Badge>
                    <Button variant="outline" size="sm">
                      <Icon name="ArrowRight" size={14} />
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MarketingTools;