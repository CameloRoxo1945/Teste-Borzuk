// Smooth scrolling para links de navegação
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const nav = document.querySelector(".nav")

mobileMenuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

// Form de agendamento de visita
const visitaForm = document.getElementById("visitaForm")

visitaForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const email = this.querySelector('input[type="email"]').value

  if (email) {
    // Simular envio do formulário
    alert(`Obrigado! Entraremos em contato no e-mail ${email} em até 24 horas para agendar sua visita.`)
    this.reset()
  }
})

// Animação de entrada dos elementos quando aparecem na tela
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observar elementos para animação
document.querySelectorAll(".card, .depoimento-card, .contato-card").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  observer.observe(el)
})

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(37, 99, 235, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.backgroundColor = "#2563eb"
    header.style.backdropFilter = "none"
  }
})

// Adicionar funcionalidade ao menu mobile
const style = document.createElement("style")
style.textContent = `
    @media (max-width: 768px) {
        .nav.active {
            display: flex;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #2563eb;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .nav.active a {
            padding: 0.75rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .nav.active a:last-child {
            border-bottom: none;
        }
    }
`
document.head.appendChild(style)

// Contador animado para estatísticas
function animateCounter(element, target, duration = 2000) {
  let start = 0
  const increment = target / (duration / 16)

  function updateCounter() {
    start += increment
    if (start < target) {
      element.textContent = Math.floor(start)
      requestAnimationFrame(updateCounter)
    } else {
      element.textContent = target
    }
  }

  updateCounter()
}

// Ativar contador quando a seção hero aparecer
const heroObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animar números se houver elementos com classe 'counter'
        const counters = entry.target.querySelectorAll(".counter")
        counters.forEach((counter) => {
          const target = Number.parseInt(counter.getAttribute("data-target"))
          animateCounter(counter, target)
        })
      }
    })
  },
  { threshold: 0.5 },
)

const heroSection = document.querySelector(".hero")
if (heroSection) {
  heroObserver.observe(heroSection)
}

// Validação de formulário aprimorada
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

// Melhorar validação do formulário
visitaForm.addEventListener("submit", function (e) {
  e.preventDefault()

  const emailInput = this.querySelector('input[type="email"]')
  const email = emailInput.value.trim()

  if (!email) {
    alert("Por favor, insira seu e-mail.")
    emailInput.focus()
    return
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um e-mail válido.")
    emailInput.focus()
    return
  }

  // Simular loading
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.textContent
  submitBtn.textContent = "Enviando..."
  submitBtn.disabled = true

  setTimeout(() => {
    alert(`Obrigado! Entraremos em contato no e-mail ${email} em até 24 horas para agendar sua visita.`)
    this.reset()
    submitBtn.textContent = originalText
    submitBtn.disabled = false
  }, 1500)
})

console.log("🎓 Site do Colégio Barbosa Ferraz carregado com sucesso!")
