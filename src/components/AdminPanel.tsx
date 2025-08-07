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
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import Dashboard from './Dashboard';
import CRMSystem from './CRMSystem';
import SiteBuilder from './SiteBuilder';
import ShopTemplates from './ShopTemplates';
import Analytics from './Analytics';
import MarketingTools from './MarketingTools';
import NotificationCenter from './NotificationCenter';

const AdminPanel = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [importProgress, setImportProgress] = useState(0);
  const [isImporting, setIsImporting] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileImport = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setIsImporting(true);
      setImportProgress(0);
      
      // Симуляция импорта
      const interval = setInterval(() => {
        setImportProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsImporting(false);
            return 100;
          }
          return prev + 10;
        });
      }, 200);

      console.log(`Импорт ${fileType} файла:`, file.name);
    }
  };

  const handleExport = (format) => {
    console.log(`Экспорт в формате: ${format}`);
    // Здесь будет логика экспорта
  };

  const sampleProducts = [
    {
      id: 1,
      name: 'Кожаная сумка',
      category: 'Аксессуары',
      price: 8900,
      stock: 15,
      status: 'active',
      image: 'bag.jpg'
    },
    {
      id: 2,
      name: 'Летнее платье',
      category: 'Одежда',
      price: 4500,
      stock: 8,
      status: 'active',
      image: 'dress.jpg'
    },
    {
      id: 3,
      name: 'Солнечные очки',
      category: 'Аксессуары',
      price: 2300,
      stock: 0,
      status: 'out_of_stock',
      image: 'glasses.jpg'
    }
  ];

  const orders = [
    {
      id: '#1001',
      customer: 'Анна Петрова',
      total: 13400,
      status: 'processing',
      date: '2024-08-07',
      items: 2
    },
    {
      id: '#1002',
      customer: 'Михаил Иванов',
      total: 4500,
      status: 'shipped',
      date: '2024-08-06',
      items: 1
    },
    {
      id: '#1003',
      customer: 'Елена Козлова',
      total: 27800,
      status: 'delivered',
      date: '2024-08-05',
      items: 3
    }
  ];

  const renderMainContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'builder':
        return <SiteBuilder />;
      case 'templates':
        return <ShopTemplates />;
      case 'crm':
        return <CRMSystem />;
      case 'analytics':
        return <Analytics />;
      case 'marketing':
        return <MarketingTools />;
      case 'notifications':
        return <NotificationCenter />;
      case 'products':
        return renderProductsSection();
      case 'orders':
        return renderOrdersSection();
      case 'import-export':
        return renderImportExportSection();
      case 'settings':
        return renderSettingsSection();
      default:
        return <Dashboard />;
    }
  };

  const renderProductsSection = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Управление товарами</h1>
          <p className="text-muted-foreground">Добавляйте и редактируйте товары в вашем магазине</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Icon name="Plus" className="mr-2" size={16} />
              Добавить товар
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="font-poiret">Новый товар</DialogTitle>
              <DialogDescription>
                Заполните информацию о товаре
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Название товара</Label>
                  <Input placeholder="Введите название" />
                </div>
                <div>
                  <Label>Цена (₽)</Label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Категория</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите категорию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothes">Одежда</SelectItem>
                      <SelectItem value="accessories">Аксессуары</SelectItem>
                      <SelectItem value="shoes">Обувь</SelectItem>
                      <SelectItem value="electronics">Электроника</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label>Количество на складе</Label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
              <div>
                <Label>Описание</Label>
                <Textarea placeholder="Подробное описание товара" rows={3} />
              </div>
              <div>
                <Label>Изображения товара</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <Icon name="Upload" size={32} className="mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">Перетащите изображения сюда или</p>
                  <Button variant="outline" size="sm">
                    Выберите файлы
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <DialogTrigger asChild>
                <Button variant="outline">Отмена</Button>
              </DialogTrigger>
              <Button>Сохранить товар</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-poiret">Каталог товаров</CardTitle>
          <div className="flex items-center space-x-4">
            <Input placeholder="Поиск товаров..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="clothes">Одежда</SelectItem>
                <SelectItem value="accessories">Аксессуары</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Товар</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead>Цена</TableHead>
                <TableHead>Склад</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sampleProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <Icon name="Package" className="text-muted-foreground" size={16} />
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price.toLocaleString()} ₽</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                      {product.status === 'active' ? 'Активен' : 'Нет в наличии'}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Icon name="Edit" size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Trash" size={14} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderOrdersSection = () => (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poiret">Заказы</h1>
          <p className="text-muted-foreground">Управление заказами и их статусами</p>
        </div>
        <Button>
          <Icon name="Download" className="mr-2" size={16} />
          Экспорт заказов
        </Button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          { title: 'Новые заказы', value: '12', icon: 'ShoppingCart', color: 'text-blue-600' },
          { title: 'В обработке', value: '8', icon: 'Clock', color: 'text-orange-600' },
          { title: 'Отправлены', value: '24', icon: 'Truck', color: 'text-purple-600' },
          { title: 'Выполнены', value: '156', icon: 'CheckCircle', color: 'text-green-600' }
        ].map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <Icon name={stat.icon as any} className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-poiret">Последние заказы</CardTitle>
          <div className="flex items-center space-x-4">
            <Input placeholder="Поиск по номеру заказа..." className="max-w-sm" />
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Статус" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все заказы</SelectItem>
                <SelectItem value="processing">В обработке</SelectItem>
                <SelectItem value="shipped">Отправлены</SelectItem>
                <SelectItem value="delivered">Доставлены</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Заказ</TableHead>
                <TableHead>Клиент</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead>Товары</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
                  <TableCell>{order.items} шт.</TableCell>
                  <TableCell>{order.total.toLocaleString()} ₽</TableCell>
                  <TableCell>
                    <Badge variant={
                      order.status === 'delivered' ? 'default' :
                      order.status === 'shipped' ? 'secondary' : 'outline'
                    }>
                      {order.status === 'processing' && 'В обработке'}
                      {order.status === 'shipped' && 'Отправлен'}
                      {order.status === 'delivered' && 'Доставлен'}
                    </Badge>
                  </TableCell>
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
    </div>
  );

  const renderImportExportSection = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-poiret">Импорт и экспорт товаров</h1>
        <p className="text-muted-foreground">Загружайте товары из Excel/YML файлов или экспортируйте каталог</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-poiret">Импорт товаров</CardTitle>
            <CardDescription>
              Загрузите товары из Excel или YML файла
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label>Формат файла</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите формат" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                    <SelectItem value="yml">YML (.yml)</SelectItem>
                    <SelectItem value="csv">CSV (.csv)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                <Icon name="Upload" size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">
                  Перетащите файл сюда или нажмите для выбора
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".xlsx,.yml,.csv"
                  onChange={(e) => handleFileImport(e, 'товары')}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isImporting}
                >
                  <Icon name="FolderOpen" className="mr-2" size={16} />
                  Выбрать файл
                </Button>
              </div>

              {isImporting && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Загрузка...</span>
                    <span>{importProgress}%</span>
                  </div>
                  <Progress value={importProgress} />
                </div>
              )}

              <div className="space-y-2">
                <Button className="w-full" disabled={isImporting}>
                  <Icon name="Upload" className="mr-2" size={16} />
                  {isImporting ? 'Импортирую...' : 'Начать импорт'}
                </Button>
                <Button variant="outline" className="w-full">
                  <Icon name="Download" className="mr-2" size={16} />
                  Скачать шаблон
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="font-poiret">Экспорт товаров</CardTitle>
            <CardDescription>
              Выгрузите каталог товаров в удобном формате
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <Label>Формат экспорта</Label>
                <Select defaultValue="excel">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                    <SelectItem value="yml">YML (.yml)</SelectItem>
                    <SelectItem value="csv">CSV (.csv)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Включить в экспорт</Label>
                <div className="space-y-2 mt-2">
                  {[
                    'Основная информация',
                    'Цены и остатки',
                    'Изображения',
                    'Описания',
                    'Категории',
                    'Характеристики'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <input type="checkbox" defaultChecked className="rounded" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Button 
                  className="w-full" 
                  onClick={() => handleExport('excel')}
                >
                  <Icon name="Download" className="mr-2" size={16} />
                  Экспортировать
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Будет создан файл с {sampleProducts.length} товарами
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-poiret">История импорта/экспорта</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Дата</TableHead>
                <TableHead>Операция</TableHead>
                <TableHead>Файл</TableHead>
                <TableHead>Записей</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>07.08.2024 14:23</TableCell>
                <TableCell>Импорт</TableCell>
                <TableCell>products.xlsx</TableCell>
                <TableCell>125</TableCell>
                <TableCell>
                  <Badge>Успешно</Badge>
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={14} />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const renderSettingsSection = () => (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-poiret">Настройки системы</h1>
        <p className="text-muted-foreground">Общие параметры и конфигурация платформы</p>
      </div>

      <Tabs defaultValue="general">
        <TabsList>
          <TabsTrigger value="general" className="font-poiret">Общие</TabsTrigger>
          <TabsTrigger value="payments" className="font-poiret">Платежи</TabsTrigger>
          <TabsTrigger value="delivery" className="font-poiret">Доставка</TabsTrigger>
          <TabsTrigger value="notifications" className="font-poiret">Уведомления</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Основные настройки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Название компании</Label>
                  <Input defaultValue="Мой Интернет-Магазин" />
                </div>
                <div>
                  <Label>Email для уведомлений</Label>
                  <Input type="email" defaultValue="admin@myshop.com" />
                </div>
              </div>
              <div>
                <Label>Описание магазина</Label>
                <Textarea defaultValue="Лучшие товары для вашего дома по доступным ценам" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );

  const menuItems = [
    { id: 'dashboard', name: 'Дашборд', icon: 'BarChart3' },
    { id: 'builder', name: 'Конструктор', icon: 'Wrench' },
    { id: 'templates', name: 'Шаблоны', icon: 'Layout' },
    { id: 'products', name: 'Товары', icon: 'Package' },
    { id: 'orders', name: 'Заказы', icon: 'ShoppingCart' },
    { id: 'crm', name: 'CRM', icon: 'Users' },
    { id: 'analytics', name: 'Аналитика', icon: 'TrendingUp' },
    { id: 'marketing', name: 'Маркетинг', icon: 'Megaphone' },
    { id: 'notifications', name: 'Уведомления', icon: 'Bell' },
    { id: 'import-export', name: 'Импорт/Экспорт', icon: 'ArrowUpDown' },
    { id: 'settings', name: 'Настройки', icon: 'Settings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-card border-r min-h-screen">
          <div className="p-6">
            <h2 className="text-xl font-bold font-poiret">Админ-панель</h2>
            <p className="text-sm text-muted-foreground">Управление магазином</p>
          </div>
          <nav className="px-4 space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted'
                }`}
              >
                <Icon name={item.icon as any} size={18} />
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {renderMainContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;