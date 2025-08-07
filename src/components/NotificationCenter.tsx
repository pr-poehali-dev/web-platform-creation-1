import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'order',
      title: 'Новый заказ #1234',
      message: 'Получен заказ на сумму 4,500 ₽',
      time: '5 минут назад',
      read: false,
      priority: 'high'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Оплата получена',
      message: 'Заказ #1232 успешно оплачен',
      time: '15 минут назад',
      read: false,
      priority: 'medium'
    },
    {
      id: 3,
      type: 'inventory',
      title: 'Товар заканчивается',
      message: 'На складе осталось 2 единицы товара "Летнее платье"',
      time: '1 час назад',
      read: true,
      priority: 'medium'
    },
    {
      id: 4,
      type: 'system',
      title: 'Обновление системы',
      message: 'Доступна новая версия платформы',
      time: '2 часа назад',
      read: true,
      priority: 'low'
    }
  ]);

  const [settings, setSettings] = useState({
    orderNotifications: true,
    paymentNotifications: true,
    inventoryNotifications: true,
    systemNotifications: false,
    emailNotifications: true,
    smsNotifications: false,
    browserNotifications: true
  });

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'order': return 'ShoppingCart';
      case 'payment': return 'CreditCard';
      case 'inventory': return 'Package';
      case 'system': return 'Settings';
      default: return 'Bell';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-orange-500';
      case 'low': return 'text-gray-500';
      default: return 'text-gray-500';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Центр уведомлений</h1>
          <p className="text-muted-foreground font-inter">
            Управление уведомлениями и настройками
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Badge variant="secondary">
            {unreadCount} непрочитанных
          </Badge>
          <Button variant="outline" onClick={markAllAsRead}>
            Отметить все как прочитанные
          </Button>
        </div>
      </div>

      <Tabs defaultValue="notifications">
        <TabsList>
          <TabsTrigger value="notifications" className="font-poiret">
            Уведомления
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2 text-xs">
                {unreadCount}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="settings" className="font-poiret">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="font-poiret">Последние уведомления</CardTitle>
                <Button variant="ghost" size="sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтр
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                    notification.read 
                      ? 'bg-muted/50 border-border' 
                      : 'bg-background border-primary/50 hover:bg-muted/30'
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg ${
                      notification.read ? 'bg-muted' : 'bg-primary/10'
                    }`}>
                      <Icon 
                        name={getIcon(notification.type) as any} 
                        className={notification.read ? 'text-muted-foreground' : 'text-primary'}
                        size={20}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-semibold font-poiret ${
                          notification.read ? 'text-muted-foreground' : 'text-foreground'
                        }`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Icon 
                            name="Clock" 
                            size={12} 
                            className={getPriorityColor(notification.priority)}
                          />
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                        </div>
                      </div>
                      <p className={`text-sm font-inter ${
                        notification.read ? 'text-muted-foreground' : 'text-muted-foreground'
                      }`}>
                        {notification.message}
                      </p>
                      {!notification.read && (
                        <div className="flex justify-end mt-2">
                          <Badge variant="outline" className="text-xs">
                            Новое
                          </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Быстрые действия */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Быстрые действия</CardTitle>
              <CardDescription>Настройте автоматические действия</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="ShoppingCart" className="text-primary" />
                    <h3 className="font-semibold font-poiret">Новые заказы</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 font-inter">
                    Автоматически отправлять уведомления о новых заказах
                  </p>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-order" />
                    <Label htmlFor="auto-order" className="font-inter">
                      Включить автоуведомления
                    </Label>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Icon name="Package" className="text-orange-500" />
                    <h3 className="font-semibold font-poiret">Склад</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 font-inter">
                    Уведомления при низких остатках товаров
                  </p>
                  <div className="flex items-center space-x-2">
                    <Switch id="auto-inventory" />
                    <Label htmlFor="auto-inventory" className="font-inter">
                      Контроль остатков
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Типы уведомлений</CardTitle>
              <CardDescription>Выберите, какие уведомления вы хотите получать</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-poiret">Заказы</Label>
                    <p className="text-sm text-muted-foreground font-inter">
                      Уведомления о новых заказах и их статусах
                    </p>
                  </div>
                  <Switch
                    checked={settings.orderNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, orderNotifications: checked }))
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-poiret">Платежи</Label>
                    <p className="text-sm text-muted-foreground font-inter">
                      Уведомления об успешных и неуспешных платежах
                    </p>
                  </div>
                  <Switch
                    checked={settings.paymentNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, paymentNotifications: checked }))
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-poiret">Склад</Label>
                    <p className="text-sm text-muted-foreground font-inter">
                      Уведомления о низких остатках товаров
                    </p>
                  </div>
                  <Switch
                    checked={settings.inventoryNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, inventoryNotifications: checked }))
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label className="font-poiret">Система</Label>
                    <p className="text-sm text-muted-foreground font-inter">
                      Уведомления об обновлениях и техническом обслуживании
                    </p>
                  </div>
                  <Switch
                    checked={settings.systemNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, systemNotifications: checked }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Способы доставки</CardTitle>
              <CardDescription>Как вы хотите получать уведомления</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" className="text-primary" />
                    <div className="space-y-1">
                      <Label className="font-poiret">Email</Label>
                      <p className="text-sm text-muted-foreground font-inter">
                        Уведомления на электронную почту
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, emailNotifications: checked }))
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Smartphone" className="text-green-600" />
                    <div className="space-y-1">
                      <Label className="font-poiret">SMS</Label>
                      <p className="text-sm text-muted-foreground font-inter">
                        Уведомления в виде SMS сообщений
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, smsNotifications: checked }))
                    }
                  />
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Icon name="Globe" className="text-blue-600" />
                    <div className="space-y-1">
                      <Label className="font-poiret">Браузер</Label>
                      <p className="text-sm text-muted-foreground font-inter">
                        Push-уведомления в браузере
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={settings.browserNotifications}
                    onCheckedChange={(checked) =>
                      setSettings(prev => ({ ...prev, browserNotifications: checked }))
                    }
                  />
                </div>
              </div>

              {settings.emailNotifications && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Label className="font-poiret">Email для уведомлений</Label>
                  <Input 
                    type="email" 
                    placeholder="your-email@example.com"
                    className="mt-2"
                  />
                </div>
              )}

              {settings.smsNotifications && (
                <div className="p-4 bg-muted/50 rounded-lg">
                  <Label className="font-poiret">Телефон для SMS</Label>
                  <Input 
                    type="tel" 
                    placeholder="+7 (999) 123-45-67"
                    className="mt-2"
                  />
                </div>
              )}
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button>
              <Icon name="Save" className="mr-2" size={16} />
              Сохранить настройки
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NotificationCenter;