import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Award, BookOpen, Phone, Mail, MapPin, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-blue-600 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <GraduationCap className="h-8 w-8 text-white" />
          <span className="ml-2 text-xl font-bold text-white">Colégio Barbosa Ferraz</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#sobre" className="text-sm font-medium text-white hover:text-blue-200 transition-colors">
            Sobre
          </Link>
          <Link href="#diferenciais" className="text-sm font-medium text-white hover:text-blue-200 transition-colors">
            Diferenciais
          </Link>
          <Link href="#depoimentos" className="text-sm font-medium text-white hover:text-blue-200 transition-colors">
            Depoimentos
          </Link>
          <Link href="#contato" className="text-sm font-medium text-white hover:text-blue-200 transition-colors">
            Contato
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1a1a1c] to-gray-900">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Educação de Excelência</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Colégio Barbosa Ferraz
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Formando cidadãos conscientes e preparados para o futuro há mais de 30 anos. Uma educação que vai
                    além da sala de aula, desenvolvendo valores e competências para a vida.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Agende uma Visita
                  </Button>
                  <Button variant="outline" size="lg">
                    Conheça Nossos Cursos
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Mais de 1.200 alunos</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>30+ anos de tradição</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Estudantes do Colégio Barbosa Ferraz"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1c]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Sobre o Colégio Barbosa Ferraz
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fundado em 1993, o Colégio Barbosa Ferraz é uma instituição de ensino comprometida com a formação
                  integral de seus alunos, oferecendo educação de qualidade desde a Educação Infantil até o Ensino
                  Médio.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="Instalações do colégio"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Nossa Missão</h3>
                  <p className="text-gray-300">
                    Proporcionar uma educação transformadora que desenvolva o potencial de cada aluno, formando cidadãos
                    éticos, críticos e preparados para os desafios do século XXI.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Nossos Valores</h3>
                  <ul className="grid gap-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-300">Excelência acadêmica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-300">Formação de valores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-300">Inovação pedagógica</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-gray-300">Responsabilidade social</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section id="diferenciais" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Nossos Diferenciais</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O que torna o Colégio Barbosa Ferraz único na formação de nossos alunos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-blue-600" />
                  <CardTitle>Metodologia Inovadora</CardTitle>
                  <CardDescription>
                    Utilizamos metodologias ativas que colocam o aluno no centro do processo de aprendizagem
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Aprendizagem baseada em projetos</li>
                    <li>• Tecnologia integrada ao ensino</li>
                    <li>• Aulas práticas e experimentais</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600" />
                  <CardTitle>Corpo Docente Qualificado</CardTitle>
                  <CardDescription>Professores especializados e em constante atualização pedagógica</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 95% com pós-graduação</li>
                    <li>• Formação continuada</li>
                    <li>• Acompanhamento individualizado</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <Award className="h-10 w-10 text-purple-600" />
                  <CardTitle>Infraestrutura Completa</CardTitle>
                  <CardDescription>
                    Espaços modernos e equipados para o melhor desenvolvimento dos alunos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Laboratórios de ciências</li>
                    <li>• Biblioteca moderna</li>
                    <li>• Quadras esportivas</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section id="depoimentos" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1c]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">O que dizem sobre nós</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Depoimentos de pais, alunos e ex-alunos que fazem parte da nossa família
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">Maria Silva</CardTitle>
                  <CardDescription>Mãe de aluno do 9º ano</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "O Colégio Barbosa Ferraz transformou a vida do meu filho. O acompanhamento individualizado e a
                    qualidade do ensino são excepcionais. Recomendo para todas as famílias."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <CardTitle className="text-lg">João Santos</CardTitle>
                  <CardDescription>Ex-aluno, hoje universitário</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Estudei no Barbosa Ferraz durante todo o Ensino Médio. A base que recebi foi fundamental para meu
                    sucesso no vestibular e na universidade. Sou grato por tudo!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Faça parte da nossa família
                </h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Agende uma visita e conheça de perto tudo o que o Colégio Barbosa Ferraz pode oferecer para o futuro
                  do seu filho.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex gap-2">
                  <Input type="email" placeholder="Seu melhor e-mail" className="max-w-lg flex-1 bg-white" />
                  <Button type="submit" variant="secondary">
                    Agendar Visita
                  </Button>
                </form>
                <p className="text-xs text-blue-100">Entraremos em contato em até 24 horas para agendar sua visita.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contato Section */}
        <section id="contato" className="w-full py-12 md:py-24 lg:py-32 bg-[#1a1a1c]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Entre em Contato</h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para atendê-lo e esclarecer todas as suas dúvidas
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-white shadow-lg">
                <CardHeader className="text-center">
                  <Phone className="h-10 w-10 text-blue-600 mx-auto" />
                  <CardTitle>Telefone</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">(11) 3456-7890</p>
                  <p className="text-gray-600">(11) 98765-4321</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader className="text-center">
                  <Mail className="h-10 w-10 text-green-600 mx-auto" />
                  <CardTitle>E-mail</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">contato@barbosaferraz.edu.br</p>
                  <p className="text-gray-600">secretaria@barbosaferraz.edu.br</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader className="text-center">
                  <MapPin className="h-10 w-10 text-purple-600 mx-auto" />
                  <CardTitle>Endereço</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">Rua das Flores, 123</p>
                  <p className="text-gray-600">Centro - São Paulo/SP</p>
                  <p className="text-gray-600">CEP: 01234-567</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} Colégio Barbosa Ferraz. Todos os direitos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Política de Privacidade
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Termos de Uso
          </Link>
        </nav>
      </footer>
    </div>
  )
}
