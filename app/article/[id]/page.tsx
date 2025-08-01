import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const articles = [
  {
    id: "1",
    headline: "The Evolution of Linux Kernel",
    subheadline: "From Linus's bedroom project to powering the world's servers",
    author: "Shayan GeeDook",
    date: "January 15, 2025",
    category: "Operating Systems",
    content: `
      <p>What started as a hobby project by a Finnish computer science student has become the backbone of modern computing. The Linux kernel, first released in 1991, now powers everything from smartphones to supercomputers, embodying the true spirit of open-source collaboration.</p>
      
      <p>Linus Torvalds never imagined that his simple announcement on a Usenet newsgroup would spark a revolution that would challenge the dominance of proprietary operating systems and create the foundation for the modern internet.</p>
      
      <h3>The Birth of a Revolution</h3>
      <p>In August 1991, a 21-year-old computer science student posted a message that would change the world: "I'm doing a (free) operating system (just a hobby, won't be big and professional like gnu) for 386(486) AT clones."</p>
      
      <p>Little did Linus know that this "hobby" would grow into the most successful collaborative software project in history, powering billions of devices and enabling the digital transformation of our world.</p>
      
      <h3>Technical Excellence Through Collaboration</h3>
      <p>The Linux kernel's success lies in its unique development model. Unlike proprietary systems developed behind closed doors, Linux benefits from the scrutiny of thousands of developers worldwide. Every patch, every line of code is reviewed, tested, and refined by a global community of experts.</p>
      
      <p>This collaborative approach has resulted in a kernel that is not only technically superior but also incredibly secure and stable. The "many eyes make all bugs shallow" principle has proven itself time and again in the Linux ecosystem.</p>
      
      <h3>From Servers to Smartphones</h3>
      <p>Today, Linux runs on everything from the smallest embedded systems to the world's most powerful supercomputers. Android, based on the Linux kernel, powers over 2 billion smartphones. The vast majority of web servers, cloud infrastructure, and IoT devices rely on Linux.</p>
      
      <p>Understanding Linux isn't just about learning an operating system—it's about understanding the foundation of modern computing and the power of open-source collaboration.</p>
    `,
  },
  {
    id: "2",
    headline: "Mastering the Command Line",
    subheadline: "Why terminal skills are essential for every developer",
    author: "Shayan GeeDook",
    date: "January 12, 2025",
    category: "Terminal & CLI",
    content: `
      <p>In an age of graphical interfaces and drag-and-drop simplicity, the command line remains the most powerful tool in a developer's arsenal. Understanding bash, zsh, and terminal utilities isn't just about looking cool—it's about efficiency, automation, and true system control.</p>
      
      <p>The terminal is where real work gets done. While GUIs are great for casual users, developers who master the command line can accomplish in seconds what might take minutes through graphical interfaces.</p>
      
      <h3>The Power of Text-Based Interfaces</h3>
      <p>Command-line interfaces might seem archaic, but they offer unparalleled precision and power. Every action is explicit, every command is reproducible, and complex operations can be automated through scripts.</p>
      
      <p>When you understand tools like grep, sed, awk, and find, you can process and manipulate data in ways that would be impossible or extremely time-consuming with graphical tools.</p>
      
      <h3>Essential Skills for Modern Developers</h3>
      <p>Whether you're managing servers, deploying applications, or debugging issues, command-line proficiency is essential. Git, Docker, npm, pip—all the tools that modern developers rely on are primarily command-line based.</p>
      
      <p>Learning to navigate the terminal efficiently, understanding process management, and mastering text processing tools will make you a more effective and confident developer.</p>
    `,
  },
  {
    id: "3",
    headline: "The Art of Clean Code",
    subheadline: "Writing code that humans can read and maintain",
    author: "Shayan GeeDook",
    date: "January 10, 2025",
    category: "Programming",
    content: `
      <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand. Clean code isn't just about following conventions—it's about crafting software that tells a story, expresses intent clearly, and stands the test of time.</p>
      
      <p>In the fast-paced world of software development, it's tempting to prioritize speed over clarity. But technical debt accumulates quickly, and code that seemed clever yesterday becomes a maintenance nightmare tomorrow.</p>
      
      <h3>Principles of Clean Code</h3>
      <p>Clean code is simple, focused, and expressive. It uses meaningful names, keeps functions small and focused, and follows consistent formatting. It's code that reads like well-written prose, where the intent is clear and the logic flows naturally.</p>
      
      <p>Good code is also testable code. When you write clean, modular code with clear interfaces, testing becomes natural and straightforward. This creates a positive feedback loop that improves code quality over time.</p>
      
      <h3>The Long-Term Benefits</h3>
      <p>Investing time in writing clean code pays dividends throughout the software's lifecycle. Clean code is easier to debug, extend, and refactor. It reduces the cognitive load on developers and makes collaboration more effective.</p>
      
      <p>Remember: you're not just writing code for the computer—you're writing it for the next developer who will work on it, including your future self.</p>
    `,
  },
  {
    id: "4",
    headline: "Docker and Containerization",
    subheadline: "Revolutionizing software deployment and development",
    author: "Shayan GeeDook",
    date: "January 8, 2025",
    category: "DevOps",
    content: `
      <p>Containers have fundamentally changed how we think about software deployment. Docker didn't just solve the "it works on my machine" problem—it created an entirely new paradigm for building, shipping, and running applications at scale.</p>
      
      <p>Before containers, deploying applications was a complex, error-prone process involving careful environment setup, dependency management, and configuration. Docker made deployment as simple as shipping a standardized container.</p>
      
      <h3>The Container Revolution</h3>
      <p>Containers package applications with all their dependencies, creating a consistent runtime environment that works the same way across development, testing, and production. This consistency eliminates the "works on my machine" problem and makes deployments predictable and reliable.</p>
      
      <p>Unlike virtual machines, containers share the host OS kernel, making them lightweight and efficient. This efficiency enables new architectural patterns like microservices and makes it practical to run many isolated applications on the same hardware.</p>
      
      <h3>Beyond Docker: The Ecosystem</h3>
      <p>Docker was just the beginning. The container ecosystem now includes orchestration platforms like Kubernetes, service meshes like Istio, and countless tools for monitoring, security, and management.</p>
      
      <p>Understanding containerization is essential for modern software development. Whether you're building web applications, microservices, or distributed systems, containers provide the foundation for scalable, maintainable architecture.</p>
    `,
  },
  {
    id: "5",
    headline: "The Future of AI and Programming",
    subheadline: "How machine learning is reshaping software development",
    author: "Shayan GeeDook",
    date: "January 5, 2025",
    category: "Artificial Intelligence",
    content: `
      <p>As AI tools like GitHub Copilot and ChatGPT become mainstream, the role of programmers is evolving. We're not being replaced—we're being augmented. The future belongs to developers who can effectively collaborate with AI to solve complex problems.</p>
      
      <p>AI-powered coding assistants can generate boilerplate code, suggest optimizations, and even help debug issues. But they're tools, not replacements. The creativity, problem-solving, and domain expertise that human developers bring remain irreplaceable.</p>
      
      <h3>AI as a Coding Partner</h3>
      <p>The best AI coding tools work as intelligent pair programming partners. They can help with syntax, suggest patterns, and even generate entire functions based on comments or specifications. This allows developers to focus on higher-level design and problem-solving.</p>
      
      <p>However, AI-generated code still requires human oversight. Understanding what the AI produces, verifying its correctness, and ensuring it fits the broader system architecture are crucial skills for the AI-augmented developer.</p>
      
      <h3>Skills for the AI Era</h3>
      <p>In an AI-augmented world, developers need to focus on skills that complement AI capabilities: system design, problem decomposition, code review, and understanding business requirements. The ability to effectively prompt and guide AI tools becomes a new core competency.</p>
      
      <p>The future of programming isn't about competing with AI—it's about leveraging AI to become more productive, creative, and effective problem solvers.</p>
    `,
  },
]

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }))
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articles.find((a) => a.id === params.id) || articles[0]

  return (
    <div className="min-h-screen bg-[#f5f2e8] p-4 font-serif">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="border-b-4 border-black mb-6 pb-4">
          <Link href="/" className="inline-flex items-center space-x-2 text-black hover:underline mb-4">
            <ArrowLeft size={20} />
            <span className="font-bold tracking-wider">BACK TO MAIN EDITION</span>
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-black tracking-wider mb-2">THE GEEK CHRONICLE</h1>
            <div className="text-sm uppercase tracking-wider">Full Article • {article.date}</div>
          </div>
        </header>

        {/* Article */}
        <article className="border-2 border-black p-8 bg-[#f5f2e8]">
          <div className="text-sm uppercase tracking-wider mb-2 font-bold">{article.category}</div>

          <h1 className="text-4xl font-black leading-tight mb-3 tracking-wide">{article.headline}</h1>

          <div className="text-xl italic font-light mb-6 leading-relaxed">{article.subheadline}</div>

          <div className="text-sm border-b border-black pb-4 mb-6">
            By <span className="font-bold">{article.author}</span> • {article.date}
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="float-left mr-4 mb-2">
              <span
                className="text-8xl font-black leading-none block"
                style={{
                  fontFamily: "Old English Text MT, serif",
                }}
              >
                {article.headline.charAt(0)}
              </span>
            </div>

            <div
              className="text-base leading-relaxed text-justify"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t-4 border-black mt-8 pt-4 text-center">
          <div className="text-xs uppercase tracking-wider mb-2">
            <span className="font-bold">The Geek Chronicle</span> • Published Weekly
          </div>
          <div className="text-xs space-y-1">
            <div>© 2025 Shayan GeeDook • All Rights Reserved</div>
            <div className="flex justify-center space-x-4">
              <a href="https://x.com/geedook13" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Twitter
              </a>
              <span>•</span>
              <a
                href="https://t.me/shayangeedook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Telegram
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/shayan-kahangi-282abb334"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://github.com/GeeDook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
