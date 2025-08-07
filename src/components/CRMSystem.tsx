import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const CRMSystem = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const clients = [
    {
      id: 1,
      name: "Иван Петров",
      email: "ivan@example.com",
      phone: "+7 (999) 123-45-67",
      company: "ООО \"Рога и копыта\"",
      status: "active",
      lastContact: "2024-08-05",
      totalOrders: 5,
      totalSpent: 125000,
      source: "Сайт",
      notes: "Постоянный клиент, интересуется premium услугами"
    },
    {
      id: 2,
      name: "Мария Сидорова",
      email: "maria@company.ru",
      phone: "+7 (999) 234-56-78",
      company: "ИП Сидорова М.А.",
      status: "lead",
      lastContact: "2024-08-06",
      totalOrders: 0,
      totalSpent: 0,
      source: "Реклама",
      notes: "Потенциальный клиент, запросила коммерческое предложение"
    },
    {
      id: 3,
      name: "Александр Иванов",
      email: "alex@business.com",
      phone: "+7 (999) 345-67-89",
      company: "Бизнес-Центр",
      status: "inactive",
      lastContact: "2024-07-15",
      totalOrders: 2,
      totalSpent: 45000,
      source: "Рекомендация",
      notes: "Не отвечает на звонки последние 2 недели"
    },
    {
      id: 4,
      name: "Елена Козлова",
      email: "elena@shop.ru",
      phone: "+7 (999) 456-78-90",
      company: "Интернет-магазин SHOP",
      status: "active",
      lastContact: "2024-08-07",
      totalOrders: 8,
      totalSpent: 275000,
      source: "Сайт",
      notes: "VIP-клиент, всегда платит вовремя"
    }
  ];

  const deals = [
    {
      id: 1,
      clientId: 2,
      title: "Создание корпоративного сайта",
      amount: 150000,
      stage: "Переговоры",
      probability: 70,
      expectedDate: "2024-08-15",
      description: "Разработка сайта с CMS и интеграцией с 1С"
    },
    {
      id: 2,
      clientId: 1,
      title: "SEO-продвижение",
      amount: 35000,
      stage: "Предложение",
      probability: 90,
      expectedDate: "2024-08-10",
      description: "Комплексное SEO на 6 месяцев"
    },
    {
      id: 3,
      clientId: 4,
      title: "Редизайн интернет-магазина",
      amount: 200000,
      stage: "Согласование",
      probability: 85,
      expectedDate: "2024-08-20",
      description: "Полный редизайн с улучшением UX"
    }
  ];

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'lead': return 'bg-blue-100 text-blue-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Активный';
      case 'lead': return 'Лид';
      case 'inactive': return 'Неактивный';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">CRM Система</h1>
          <p className="text-muted-foreground">Управление клиентами и сделками</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Icon name="Plus" className="mr-2" size={16} />
              Добавить клиента
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Новый клиент</DialogTitle>
              <DialogDescription>
                Добавьте информацию о новом клиенте в систему
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Введите имя" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="email@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div>
                  <Label htmlFor="company">Компания</Label>
                  <Input id="company" placeholder="Название компании" />
                </div>
              </div>
              <div>
                <Label htmlFor="source">Источник</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите источник" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Сайт</SelectItem>
                    <SelectItem value="ads">Реклама</SelectItem>
                    <SelectItem value="referral">Рекомендация</SelectItem>
                    <SelectItem value="social">Соцсети</SelectItem>
                    <SelectItem value="cold-call">Холодный звонок</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="notes">Заметки</Label>
                <Textarea id="notes" placeholder="Дополнительная информация о клиенте" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <DialogTrigger asChild>
                <Button variant="outline">Отмена</Button>
              </DialogTrigger>
              <Button>Сохранить</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="clients" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="clients">Клиенты</TabsTrigger>
          <TabsTrigger value="deals">Сделки</TabsTrigger>
          <TabsTrigger value="analytics">Аналитика</TabsTrigger>
        </TabsList>

        <TabsContent value="clients" className="space-y-6">
          {/* Search and Filters */}
          <Card>
            <CardHeader>
              <CardTitle>Поиск клиентов</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Поиск по имени, email или компании..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Select>
                  <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Статус" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все статусы</SelectItem>
                    <SelectItem value="active">Активные</SelectItem>
                    <SelectItem value="lead">Лиды</SelectItem>
                    <SelectItem value="inactive">Неактивные</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Clients List */}
          <div className="grid gap-4">
            {filteredClients.map((client) => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {client.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-lg">{client.name}</h3>
                          <Badge className={getStatusColor(client.status)}>
                            {getStatusText(client.status)}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground">{client.company}</p>
                        <p className="text-sm text-muted-foreground">{client.email} • {client.phone}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">₽{client.totalSpent.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">{client.totalOrders} заказов</div>
                      <div className="text-xs text-muted-foreground">
                        Последний контакт: {new Date(client.lastContact).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Phone" size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Mail" size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="MessageCircle" size={14} />
                      </Button>
                    </div>
                  </div>
                  {client.notes && (
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <p className="text-sm">{client.notes}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="deals" className="space-y-6">
          <div className="grid gap-4">
            {deals.map((deal) => {
              const client = clients.find(c => c.id === deal.clientId);
              return (
                <Card key={deal.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-lg">{deal.title}</h3>
                          <Badge variant="outline">{deal.stage}</Badge>
                        </div>
                        <p className="text-muted-foreground mb-1">
                          Клиент: {client?.name} ({client?.company})
                        </p>
                        <p className="text-sm text-muted-foreground">{deal.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-600">₽{deal.amount.toLocaleString()}</div>
                        <div className="text-sm text-muted-foreground">
                          Вероятность: {deal.probability}%
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Закрытие: {new Date(deal.expectedDate).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button variant="outline" size="sm">Редактировать</Button>
                        <Button size="sm">Обновить</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Всего клиентов</CardTitle>
                <Icon name="Users" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{clients.length}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+12%</span> за месяц
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Активных сделок</CardTitle>
                <Icon name="TrendingUp" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{deals.length}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+3</span> новых на неделе
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Средний чек</CardTitle>
                <Icon name="DollarSign" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₽128,333</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">+8%</span> к прошлому месяцу
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Конверсия</CardTitle>
                <Icon name="Target" className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-600">-2%</span> к прошлому месяцу
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Воронка продаж</CardTitle>
              <CardDescription>Распределение сделок по этапам</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { stage: 'Первичный контакт', count: 24, color: 'bg-blue-500' },
                  { stage: 'Квалификация', count: 18, color: 'bg-yellow-500' },
                  { stage: 'Предложение', count: 12, color: 'bg-orange-500' },
                  { stage: 'Переговоры', count: 8, color: 'bg-red-500' },
                  { stage: 'Закрытие', count: 5, color: 'bg-green-500' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-24 text-sm font-medium">{item.stage}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                      <div 
                        className={`${item.color} h-6 rounded-full flex items-center justify-end pr-2`}
                        style={{ width: `${(item.count / 24) * 100}%` }}
                      >
                        <span className="text-white text-xs font-medium">{item.count}</span>
                      </div>
                    </div>
                    <div className="w-16 text-right text-sm text-muted-foreground">
                      {Math.round((item.count / 24) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CRMSystem;