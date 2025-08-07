import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Icon from "@/components/ui/icon";

const SEOTools = () => {
  const [autoOptimization, setAutoOptimization] = useState({
    metaTags: true,
    imageOptimization: true,
    sitemapGeneration: true,
    schemaMarkup: false,
    robotsTxt: true,
    internalLinking: false
  });

  const [seoTasks, setSeoTasks] = useState([
    { id: 1, task: 'Добавить мета-описания для 15 страниц', priority: 'high', status: 'in_progress', progress: 60 },
    { id: 2, task: 'Оптимизировать изображения (сжать 23 файла)', priority: 'medium', status: 'completed', progress: 100 },
    { id: 3, task: 'Исправить 8 внутренних ссылок', priority: 'low', status: 'completed', progress: 100 },
    { id: 4, task: 'Создать sitemap.xml', priority: 'high', status: 'pending', progress: 0 },
    { id: 5, task: 'Настроить Schema.org разметку', priority: 'medium', status: 'in_progress', progress: 30 }
  ]);

  const keywordData = [
    { keyword: 'интернет магазин', position: 12, volume: 18100, difficulty: 67, trend: 'up' },
    { keyword: 'купить одежду онлайн', position: 8, volume: 9900, difficulty: 54, trend: 'stable' },
    { keyword: 'женская одежда', position: 23, volume: 27300, difficulty: 78, trend: 'down' },
    { keyword: 'модная одежда 2024', position: 5, volume: 6600, difficulty: 43, trend: 'up' },
    { keyword: 'доставка одежды', position: 15, volume: 4400, difficulty: 35, trend: 'up' }
  ];

  const competitorData = [
    { name: 'competitor1.ru', traffic: 45600, keywords: 1250, backlinks: 890 },
    { name: 'competitor2.ru', traffic: 38200, keywords: 980, backlinks: 650 },
    { name: 'competitor3.ru', traffic: 52100, keywords: 1450, backlinks: 1200 }
  ];

  const runAutoTask = (taskId: number) => {
    setSeoTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, status: 'in_progress', progress: 10 }
          : task
      )
    );

    // Симуляция выполнения задачи
    const interval = setInterval(() => {
      setSeoTasks(prev => 
        prev.map(task => {
          if (task.id === taskId && task.status === 'in_progress') {
            const newProgress = Math.min(task.progress + 20, 100);
            return {
              ...task,
              progress: newProgress,
              status: newProgress === 100 ? 'completed' : 'in_progress'
            };
          }
          return task;
        })
      );
    }, 1000);

    setTimeout(() => clearInterval(interval), 5000);
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview" className="font-poiret">Обзор</TabsTrigger>
          <TabsTrigger value="automation" className="font-poiret">Автоматизация</TabsTrigger>
          <TabsTrigger value="keywords" className="font-poiret">Ключевые слова</TabsTrigger>
          <TabsTrigger value="competitors" className="font-poiret">Конкуренты</TabsTrigger>
          <TabsTrigger value="audit" className="font-poiret">Аудит</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* SEO метрики */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Позиции в поиске', value: '45', icon: 'TrendingUp', change: '+8' },
              { title: 'Органический трафик', value: '8,432', icon: 'Users', change: '+12%' },
              { title: 'Индексация', value: '92%', icon: 'Search', change: '+5%' },
              { title: 'Скорость сайта', value: '85', icon: 'Zap', change: '+3' }
            ].map((metric, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground font-inter">{metric.title}</p>
                      <p className="text-2xl font-bold font-poiret">{metric.value}</p>
                      <p className="text-xs text-green-600 font-inter">{metric.change} за неделю</p>
                    </div>
                    <Icon name={metric.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SEO задачи с прогрессом */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-poiret">Активные SEO задачи</CardTitle>
                  <CardDescription>Автоматическая оптимизация в режиме реального времени</CardDescription>
                </div>
                <Button>
                  <Icon name="Play" className="mr-2" size={16} />
                  Запустить все задачи
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {seoTasks.map((task) => (
                <div key={task.id} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Icon 
                        name={
                          task.status === 'completed' ? 'CheckCircle' :
                          task.status === 'in_progress' ? 'Clock' : 'Circle'
                        } 
                        className={
                          task.status === 'completed' ? 'text-green-500' :
                          task.status === 'in_progress' ? 'text-blue-500' : 'text-muted-foreground'
                        } 
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
                      {task.status === 'pending' && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => runAutoTask(task.id)}
                        >
                          <Icon name="Play" size={14} className="mr-1" />
                          Запустить
                        </Button>
                      )}
                    </div>
                  </div>
                  
                  {task.status !== 'pending' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-inter">
                          {task.status === 'completed' ? 'Завершено' : 'В процессе'}
                        </span>
                        <span className="font-inter">{task.progress}%</span>
                      </div>
                      <Progress value={task.progress} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="automation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Настройки автоматизации</CardTitle>
              <CardDescription>Включите автоматические инструменты SEO-оптимизации</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                {
                  key: 'metaTags',
                  title: 'Автогенерация мета-тегов',
                  description: 'Автоматически создает Title и Description для страниц без них'
                },
                {
                  key: 'imageOptimization',
                  title: 'Оптимизация изображений',
                  description: 'Сжимает изображения и добавляет alt-теги автоматически'
                },
                {
                  key: 'sitemapGeneration',
                  title: 'Генерация Sitemap',
                  description: 'Автоматически обновляет sitemap.xml при изменении контента'
                },
                {
                  key: 'schemaMarkup',
                  title: 'Schema.org разметка',
                  description: 'Добавляет структурированные данные для товаров и статей'
                },
                {
                  key: 'robotsTxt',
                  title: 'Оптимизация robots.txt',
                  description: 'Автоматически настраивает правила для поисковых роботов'
                },
                {
                  key: 'internalLinking',
                  title: 'Внутренние ссылки',
                  description: 'Автоматически создает релевантные внутренние ссылки'
                }
              ].map((setting) => (
                <div key={setting.key} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h3 className="font-semibold font-poiret mb-1">{setting.title}</h3>
                    <p className="text-sm text-muted-foreground font-inter">{setting.description}</p>
                  </div>
                  <Switch
                    checked={autoOptimization[setting.key as keyof typeof autoOptimization]}
                    onCheckedChange={(checked) =>
                      setAutoOptimization(prev => ({ ...prev, [setting.key]: checked }))
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Планировщик задач */}
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Планировщик SEO задач</CardTitle>
              <CardDescription>Настройте автоматическое выполнение задач</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Частота аудита сайта</Label>
                  <select className="w-full mt-2 p-2 border rounded">
                    <option>Ежедневно</option>
                    <option>Еженедельно</option>
                    <option>Ежемесячно</option>
                  </select>
                </div>
                <div>
                  <Label>Проверка позиций</Label>
                  <select className="w-full mt-2 p-2 border rounded">
                    <option>Каждые 3 дня</option>
                    <option>Еженедельно</option>
                    <option>Ежемесячно</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="email-reports" />
                <Label htmlFor="email-reports" className="font-inter">
                  Отправлять еженедельные отчеты на email
                </Label>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-poiret">Мониторинг ключевых слов</CardTitle>
                  <CardDescription>Отслеживание позиций и трендов</CardDescription>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Icon name="Plus" className="mr-2" size={16} />
                      Добавить ключевое слово
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle className="font-poiret">Добавить ключевое слово</DialogTitle>
                      <DialogDescription>
                        Введите ключевое слово для отслеживания позиций
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div>
                        <Label>Ключевое слово</Label>
                        <Input placeholder="Введите ключевое слово" />
                      </div>
                      <div>
                        <Label>Регион</Label>
                        <select className="w-full mt-2 p-2 border rounded">
                          <option>Россия</option>
                          <option>Москва</option>
                          <option>Санкт-Петербург</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2">
                      <DialogTrigger asChild>
                        <Button variant="outline">Отмена</Button>
                      </DialogTrigger>
                      <Button>Добавить</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ключевое слово</TableHead>
                    <TableHead>Позиция</TableHead>
                    <TableHead>Объем поиска</TableHead>
                    <TableHead>Сложность</TableHead>
                    <TableHead>Тренд</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {keywordData.map((keyword, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium font-inter">{keyword.keyword}</TableCell>
                      <TableCell>
                        <Badge variant={keyword.position <= 10 ? 'default' : 'secondary'}>
                          #{keyword.position}
                        </Badge>
                      </TableCell>
                      <TableCell>{keyword.volume.toLocaleString()}/мес</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Progress value={keyword.difficulty} className="w-16 h-2" />
                          <span className="text-sm">{keyword.difficulty}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Icon 
                          name={
                            keyword.trend === 'up' ? 'TrendingUp' :
                            keyword.trend === 'down' ? 'TrendingDown' : 'Minus'
                          }
                          className={
                            keyword.trend === 'up' ? 'text-green-500' :
                            keyword.trend === 'down' ? 'text-red-500' : 'text-gray-500'
                          }
                          size={16}
                        />
                      </TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          <Icon name="BarChart" size={14} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-poiret">Анализ конкурентов</CardTitle>
              <CardDescription>Мониторинг позиций и стратегий конкурентов</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Конкурент</TableHead>
                    <TableHead>Трафик/мес</TableHead>
                    <TableHead>Ключевые слова</TableHead>
                    <TableHead>Обратные ссылки</TableHead>
                    <TableHead>Действия</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {competitorData.map((competitor, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium font-inter">{competitor.name}</TableCell>
                      <TableCell>{competitor.traffic.toLocaleString()}</TableCell>
                      <TableCell>{competitor.keywords.toLocaleString()}</TableCell>
                      <TableCell>{competitor.backlinks.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <Icon name="Eye" size={14} />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" size={14} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="font-poiret">Автоматический аудит сайта</CardTitle>
                  <CardDescription>Комплексная проверка SEO показателей</CardDescription>
                </div>
                <Button>
                  <Icon name="RefreshCw" className="mr-2" size={16} />
                  Запустить аудит
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { category: 'Техническое SEO', score: 85, issues: 3, status: 'good' },
                { category: 'Контент', score: 72, issues: 7, status: 'warning' },
                { category: 'Ссылочная масса', score: 91, issues: 1, status: 'good' },
                { category: 'Мобильная версия', score: 68, issues: 5, status: 'warning' },
                { category: 'Скорость загрузки', score: 94, issues: 2, status: 'good' }
              ].map((audit, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold font-poiret">{audit.category}</h3>
                    <Badge variant={
                      audit.status === 'good' ? 'default' : 'secondary'
                    }>
                      {audit.score}/100
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <Progress value={audit.score} className="h-3" />
                    <p className="text-sm text-muted-foreground font-inter">
                      {audit.issues > 0 ? `${audit.issues} проблем найдено` : 'Все проверки пройдены'}
                    </p>
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

export default SEOTools;