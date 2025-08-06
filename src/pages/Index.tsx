import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [investment, setInvestment] = useState(100000);
  const [period, setPeriod] = useState(12);
  const [rate, setRate] = useState(8.5);

  const calculateReturn = () => {
    return investment * Math.pow(1 + rate / 100, period / 12);
  };

  const profit = calculateReturn() - investment;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">InvestPro</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolios" className="text-foreground hover:text-primary transition-colors">Портфели</a>
              <a href="#analytics" className="text-foreground hover:text-primary transition-colors">Аналитика</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
              <Button className="investment-button">Начать инвестировать</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="investment-gradient text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональное
                <br />управление капиталом
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Доверьте свои инвестиции экспертам. Мы создаем персональные стратегии 
                для максимизации доходности при контролируемых рисках.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  Получить консультацию
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Изучить портфели
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/e63bfbbb-2687-45ad-a13f-094c2030082f.jpg" 
                alt="Профессиональные инвестиции" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр инвестиционных решений для частных и корпоративных клиентов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="investment-card group">
              <CardHeader>
                <Icon name="Shield" size={48} className="text-primary mb-4" />
                <CardTitle>Управление рисками</CardTitle>
                <CardDescription>
                  Защищаем ваш капитал от волатильности рынка с помощью диверсификации
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="investment-card group">
              <CardHeader>
                <Icon name="BarChart3" size={48} className="text-primary mb-4" />
                <CardTitle>Портфельное управление</CardTitle>
                <CardDescription>
                  Индивидуальные стратегии инвестирования под ваши цели и горизонт
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="investment-card group">
              <CardHeader>
                <Icon name="Users" size={48} className="text-primary mb-4" />
                <CardTitle>Консультации экспертов</CardTitle>
                <CardDescription>
                  Персональное сопровождение от сертифицированных финансовых консультантов
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Portfolios */}
      <section id="portfolios" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Инвестиционные портфели</h2>
            <p className="text-xl text-muted-foreground">
              Готовые решения для разных инвестиционных профилей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="investment-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary">Консервативный</Badge>
                  <span className="text-2xl font-bold text-accent">4-6%</span>
                </div>
                <CardTitle>Стабильный доход</CardTitle>
                <CardDescription>
                  Облигации государства и крупных корпораций. Минимальный риск, стабильная доходность.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Государственные облигации</span>
                    <span>60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Корпоративные облигации</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Денежный рынок</span>
                    <span>10%</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>

            <Card className="investment-card border-primary">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge>Сбалансированный</Badge>
                  <span className="text-2xl font-bold text-accent">8-12%</span>
                </div>
                <CardTitle>Рост и доходность</CardTitle>
                <CardDescription>
                  Оптимальное соотношение акций и облигаций. Умеренный риск, хорошая доходность.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Российские акции</span>
                    <span>40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Зарубежные акции</span>
                    <span>25%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Облигации</span>
                    <span>35%</span>
                  </div>
                </div>
                <Button className="w-full investment-button">Выбрать портфель</Button>
              </CardContent>
            </Card>

            <Card className="investment-card">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="destructive">Агрессивный</Badge>
                  <span className="text-2xl font-bold text-accent">15-25%</span>
                </div>
                <CardTitle>Максимальный рост</CardTitle>
                <CardDescription>
                  Акции растущих компаний и развивающихся рынков. Высокий риск, высокая доходность.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between">
                    <span>Акции роста</span>
                    <span>50%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Развивающиеся рынки</span>
                    <span>30%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Технологические акции</span>
                    <span>20%</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">Подробнее</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Калькулятор доходности</h2>
            <p className="text-xl text-muted-foreground">
              Рассчитайте потенциальную прибыль от ваших инвестиций
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="investment-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="investment">Сумма инвестиций (₽)</Label>
                      <Input
                        id="investment"
                        type="number"
                        value={investment}
                        onChange={(e) => setInvestment(Number(e.target.value))}
                        className="mt-2 text-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="period">Срок инвестирования (месяцев)</Label>
                      <Input
                        id="period"
                        type="number"
                        value={period}
                        onChange={(e) => setPeriod(Number(e.target.value))}
                        className="mt-2 text-lg"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rate">Ожидаемая доходность (% годовых)</Label>
                      <Input
                        id="rate"
                        type="number"
                        step="0.1"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="mt-2 text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Результат расчета</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Сумма инвестиций:</span>
                          <span className="font-semibold">{investment.toLocaleString()} ₽</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Прибыль:</span>
                          <span className="font-semibold text-accent">+{profit.toLocaleString()} ₽</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between text-lg">
                          <span>Итого к получению:</span>
                          <span className="font-bold text-primary">{calculateReturn().toLocaleString()} ₽</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-6 rounded-lg">
                      <Icon name="Info" size={20} className="text-primary mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Расчет носит ознакомительный характер. Реальная доходность может отличаться 
                        в зависимости от рыночных условий.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Analytics */}
      <section id="analytics" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Рыночная аналитика</h2>
            <p className="text-xl text-muted-foreground">
              Актуальная информация о состоянии финансовых рынков
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="TrendingUp" size={32} className="text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">ММВБ Индекс</h3>
                <p className="text-2xl font-bold text-accent">2,847</p>
                <p className="text-sm text-accent">+1.2%</p>
              </CardContent>
            </Card>
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="DollarSign" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">USD/RUB</h3>
                <p className="text-2xl font-bold">89.45</p>
                <p className="text-sm text-destructive">-0.8%</p>
              </CardContent>
            </Card>
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="Euro" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">EUR/RUB</h3>
                <p className="text-2xl font-bold">96.73</p>
                <p className="text-sm text-accent">+0.3%</p>
              </CardContent>
            </Card>
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="Fuel" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">Нефть Brent</h3>
                <p className="text-2xl font-bold">$84.2</p>
                <p className="text-sm text-accent">+2.1%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании InvestPro</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Мы — команда профессиональных управляющих с более чем 15-летним опытом работы 
                на российском и международных финансовых рынках. Наша миссия — помочь клиентам 
                достичь финансовых целей через грамотное инвестирование.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">лет опыта</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">5000+</p>
                  <p className="text-sm text-muted-foreground">клиентов</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50млрд</p>
                  <p className="text-sm text-muted-foreground">активов под управлением</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">12.5%</p>
                  <p className="text-sm text-muted-foreground">средняя доходность</p>
                </div>
              </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Наши преимущества</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <p>Лицензия на управление активами</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <p>Страхование депозитов до 1,4 млн рублей</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <p>Прозрачная отчетность в реальном времени</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Check" size={20} className="text-accent mt-1" />
                  <p>Персональный менеджер для каждого клиента</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для получения персональной консультации
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="Phone" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p>+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно 9:00-21:00</p>
              </CardContent>
            </Card>
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="Mail" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p>info@investpro.ru</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="investment-card text-center">
              <CardContent className="p-6">
                <Icon name="MapPin" size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Офис</h3>
                <p>Москва, ул. Тверская, 15</p>
                <p className="text-sm text-muted-foreground mt-2">Московский Сити, 25 этаж</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Icon name="TrendingUp" size={32} />
              <h3 className="text-2xl font-bold">InvestPro</h3>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Профессиональное управление инвестициями. Ваши финансовые цели — наш приоритет.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">Пользовательское соглашение</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary-foreground/80 transition-colors">Раскрытие информации</a>
            </div>
            <Separator className="my-8 bg-primary-foreground/20" />
            <p className="text-primary-foreground/60 text-sm">
              © 2024 InvestPro. Все права защищены. Лицензия ЦБ РФ №123456
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;