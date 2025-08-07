import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const SEOTools = () => {
  return (
    <div className="space-y-6">
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
    </div>
  );
};

export default SEOTools;