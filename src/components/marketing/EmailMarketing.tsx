import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const EmailMarketing = () => {
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

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default EmailMarketing;