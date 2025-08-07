import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const PromoCodes = () => {
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

  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default PromoCodes;