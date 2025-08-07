import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SocialMedia = () => {
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
    <div className="space-y-6">
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
    </div>
  );
};

export default SocialMedia;