import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { 
  Menu, 
  X, 
  Code, 
  Globe, 
  Zap, 
  BarChart3, 
  Lightbulb, 
  Shield,
  Star,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Send,
  CheckCircle,
  ChevronUp,
  ExternalLink
} from 'lucide-react'
import ymsLogo from './assets/yms-logo.png'
import techInnovation from './assets/tech-innovation.jpg'
import innovationTech from './assets/innovation-tech.jpg'
import softwareDevelopment from './assets/software-development.jpg'
import dashboardBi from './assets/dashboard-bi.png'
import siteCorporativo from './assets/site-corporativo.jpg'
import sistemaCrmErp from './assets/sistema-crm-erp.png'
import nossaMissao from './assets/nossa-missao.jpg'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    {
      icon: Globe,
      title: "Sites para Empresas",
      description: "Desenvolvemos sites corporativos modernos e responsivos que fortalecem a presença digital da sua empresa e atraem novos clientes."
    },
    {
      icon: Code,
      title: "Sistemas Customizados",
      description: "Criamos sistemas sob medida para automatizar processos específicos do seu negócio, aumentando eficiência e produtividade."
    },
    {
      icon: Zap,
      title: "SaaS Customizável",
      description: "Desenvolvemos plataformas SaaS personalizáveis que se adaptam às necessidades únicas da sua empresa e escalam com seu crescimento."
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Dashboards inteligentes e relatórios personalizados que transformam seus dados em insights estratégicos para decisões assertivas."
    },
    {
      icon: Lightbulb,
      title: "Consultoria Digital",
      description: "Orientamos sua empresa na jornada de transformação digital, identificando oportunidades e implementando as melhores soluções."
    },
    {
      icon: Shield,
      title: "Suporte Especializado",
      description: "Oferecemos suporte técnico contínuo e manutenção preventiva para garantir que suas soluções funcionem sempre com máxima performance."
    }
  ]

  const portfolioItems = [
    {
      title: "Sistema de Gestão Empresarial",
      description: "Plataforma integrada para controle completo de estoque, vendas e finanças corporativas.",
      image: sistemaCrmErp,
      tags: ["Sistema", "CRM", "ERP", "Gestão"]
    },
    {
      title: "Dashboard de BI",
      description: "Central de comando visual para monitoramento de KPIs e análise de performance em tempo real.",
      image: dashboardBi,
      tags: ["BI", "Dashboard", "Analytics"]
    },
    {
      title: "Site Corporativo",
      description: "Portal institucional moderno e responsivo para empresas de base tecnológica.",
      image: siteCorporativo,
      tags: ["Website", "Responsivo", "Corporativo"]
    },
    {
      title: "Vallu Engenharia e Topografia",
      description: "Portal institucional especializado em serviços de engenharia e topografia, com foco em contato direto.",
      image: null,
      tags: ["Website", "Engenharia", "Topografia"],
      link: "https://valluengenhariaetopografia.com.br/",
      gradient: "from-blue-600 to-purple-700",
      logoText: "Vallu",
      logoSubtext: "Engenharia & Topografia"
    },
    {
      title: "Abel Futsal Brusque",
      description: "Plataforma digital para projeto social esportivo, conectando comunidade e promovendo inclusão através do futsal.",
      image: null,
      tags: ["Website", "Esporte", "Social"],
      link: "https://abelfutsalbrusque.vercel.app/",
      gradient: "from-green-500 to-blue-600",
      logoText: "ABEL",
      logoSubtext: "Futsal Brusque"
    }
  ]

  const testimonials = [
    {
      name: "João Silva",
      company: "TechCorp",
      text: "A YMS Soluções transformou nossos processos com um sistema incrível. Recomendo!",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Inovação Digital",
      text: "Excelente trabalho no desenvolvimento do nosso site. Superou expectativas!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      company: "DataTech",
      text: "O dashboard de BI desenvolvido pela equipe nos ajudou muito nas decisões estratégicas.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img 
                src={ymsLogo} 
                alt="YMS Soluções" 
                className="h-10 w-auto bg-white p-1 rounded"
              />
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-red-500 transition-colors">Home</button>
              <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-red-500 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('servicos')} className="text-white hover:text-red-500 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-white hover:text-red-500 transition-colors">Portfólio</button>
              <button onClick={() => scrollToSection('contato')} className="text-white hover:text-red-500 transition-colors">Contato</button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Home</button>
                <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Sobre</button>
                <button onClick={() => scrollToSection('servicos')} className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Serviços</button>
                <button onClick={() => scrollToSection('portfolio')} className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Portfólio</button>
                <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-white hover:text-red-500 transition-colors">Contato</button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white text-black py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Tecnologia que 
                <span className="text-red-500"> impulsiona</span> 
                <br />seu negócio
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Criamos soluções digitais inteligentes que simplificam processos, 
                otimizam resultados e aceleram o crescimento da sua empresa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" onClick={() => scrollToSection('servicos')}>
                  Conheça nossas soluções
                </Button>
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50" onClick={() => scrollToSection('contato')}>
                  Fale conosco
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src={ymsLogo} 
                alt="YMS Soluções" 
                className="max-w-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Sobre a YMS Soluções</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Especialistas em converter desafios tecnológicos em oportunidades de crescimento para sua empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={nossaMissao} 
                alt="Facilidade para seu negócio" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Nossa Missão</h3>
              <p className="text-lg text-gray-700 mb-6">
                Facilitamos a jornada digital das empresas através de soluções inovadoras, 
                design intuitivo e tecnologia de ponta, criando experiências que geram 
                valor real para nossos clientes.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">4</div>
                  <div className="text-gray-600">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Novo</div>
                  <div className="text-gray-600">Empresa Inovadora</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Soluções personalizadas e eficientes</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Suporte técnico especializado</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>Foco em resultados e ROI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvemos ferramentas digitais personalizadas que potencializam a eficiência do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nosso Portfólio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos projetos que desenvolvemos para nossos clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {item.image ? (
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className={`w-full h-48 bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center text-white`}>
                    <div className="text-2xl font-bold">{item.logoText}</div>
                    <div className="text-sm">{item.logoSubtext}</div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {item.link && (
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                    >
                      Ver projeto <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja os depoimentos de quem já trabalhou conosco.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pronto para transformar seu negócio? Vamos conversar!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-600 mr-4" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-600">contato@ymssolucoes.com.br</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-600 mr-4" />
                  <div>
                    <div className="font-medium">Telefone</div>
                    <div className="text-gray-600">(11) 99110-5517</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-4" />
                  <div>
                    <div className="font-medium">Endereço</div>
                    <div className="text-gray-600">São Paulo, SP - Brasil</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Conte-nos sobre seu projeto..."
                  ></textarea>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src={ymsLogo} 
                alt="YMS Soluções" 
                className="h-12 w-auto mb-4 bg-white p-2 rounded"
              />
              <p className="text-gray-400">
                Tecnologia que impulsiona o seu negócio.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('home')} className="block text-gray-400 hover:text-white transition-colors">Home</button>
                <button onClick={() => scrollToSection('sobre')} className="block text-gray-400 hover:text-white transition-colors">Sobre</button>
                <button onClick={() => scrollToSection('servicos')} className="block text-gray-400 hover:text-white transition-colors">Serviços</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-white transition-colors">Portfólio</button>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div>contato@ymssolucoes.com.br</div>
                <div>(11) 99110-5517</div>
                <div>São Paulo, SP</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 YMS Soluções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
      )}
    </div>
  )
}

export default App

