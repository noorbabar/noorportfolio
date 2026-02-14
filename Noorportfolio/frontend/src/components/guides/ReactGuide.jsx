import React from 'react';
import './ReactGuide.css';

const ReactGuide = () => {
  return (
    <div className="guide-blog">
      <header className="blog-header">
        <div className="blog-meta">
          <span className="blog-date">february 2026</span>
          <span className="blog-readtime">~8 min read</span>
        </div>
        <h1>setting up your first github repo and building a web app</h1>
        <p className="blog-subtitle">a straightforward guide to getting your project online</p>
      </header>

      <article className="blog-content">
        <section className="blog-intro">
          <p>
            so you want to build something and put it on the internet. maybe it's your portfolio, 
            a side project, or just something to learn with. whatever it is, you'll need two things: 
            a place to store your code (github) and a way to turn that code into a working website.
          </p>
          <p>
            this blog covers exactly that, just the practical steps to go from nothing 
            to a live web app. we'll use react because it's what everyone's using, and vite because 
            it's fast and doesn't make you want to throw your laptop out the window.
          </p>
        </section>

        <section className="blog-section">
          <h2>part 1: setting up github</h2>
          
          <p>
            github is basically google drive for code. it keeps track of all your changes, lets you 
            work from different computers, and makes it easy to show your work to others (or potential employers).
          </p>

          <h3>creating your repository</h3>
          <p>
            head to <a href="https://github.com/new" target="_blank" rel="noopener noreferrer">github.com/new</a> 
            {' '}and create a new repository. here's what to do:
          </p>

          <ul className="blog-list">
            <li><strong>repository name:</strong> use lowercase with hyphens (e.g., <code>my-portfolio</code>)</li>
            <li><strong>description:</strong> add a quick one-liner about what this is</li>
            <li><strong>public or private:</strong> public if you want it on your resume, private if it's just for you</li>
            <li><strong>initialize with:</strong> check the README, add a .gitignore (Node), and pick a license (MIT is solid)</li>
          </ul>

          <div className="code-block">
            <code># clone your new repo</code>
            <code>git clone https://github.com/YOUR_USERNAME/your-repo-name.git</code>
            <code>cd your-repo-name</code>
          </div>

          <p className="blog-note">
            <strong>quick tip:</strong> if git gives you authentication errors, you probably need to 
            set up SSH keys or a personal access token. github has <a href="https://docs.github.com/en/authentication" target="_blank" rel="noopener noreferrer">good docs</a> on this.
          </p>
        </section>

        <section className="blog-section">
          <h2>part 2: building your web app with react</h2>
          
          <p>
            alright, you've got your repo. now let's actually build something. we're using vite + react 
            because the setup is fast and the developer experience is smooth.
          </p>

          <h3>initialize the project</h3>
          
          <div className="code-block">
            <code># create react app with vite</code>
            <code>npm create vite@latest . -- --template react</code>
            <code></code>
            <code># install dependencies</code>
            <code>npm install</code>
            <code></code>
            <code># start dev server</code>
            <code>npm run dev</code>
          </div>

          <p>
            your app should now be running at <code>localhost:5173</code>. if you see the spinning vite logo, 
            you're good to go.
          </p>

          <h3>project structure that makes sense</h3>
          
          <p>here's how i organize my projects. it's simple but scales well:</p>

          <div className="folder-tree">
            <pre>{`src/
├── components/       # reusable UI pieces
├── pages/            # different views/routes  
├── styles/           # global CSS
├── utils/            # helper functions
└── App.jsx           # main component`}</pre>
          </div>

          <p>
            don't overthink the structure early on. start simple, refactor when things get messy. 
            that's how you actually learn what works.
          </p>
        </section>

        <section className="blog-section">
          <h2>part 3: making it actually useful</h2>

          <h3>adding routing</h3>
          <p>
            most apps need multiple pages. react router makes this painless:
          </p>

          <div className="code-block">
            <code>npm install react-router-dom</code>
          </div>

          <p>then set up your routes in <code>App.jsx</code>:</p>

          <div className="code-block">
            <code>{`import { BrowserRouter, Routes, Route } from 'react-router-dom';`}</code>
            <code>{`import Home from './pages/Home';`}</code>
            <code>{`import About from './pages/About';`}</code>
            <code></code>
            <code>{`function App() {`}</code>
            <code>{`  return (`}</code>
            <code>{`    <BrowserRouter>`}</code>
            <code>{`      <Routes>`}</code>
            <code>{`        <Route path="/" element={<Home />} />`}</code>
            <code>{`        <Route path="/about" element={<About />} />`}</code>
            <code>{`      </Routes>`}</code>
            <code>{`    </BrowserRouter>`}</code>
            <code>{`  );`}</code>
            <code>{`}`}</code>
          </div>

          <h3>styling without pain</h3>
          <p>
            i usually go with CSS modules. they're scoped to each component, so you don't get weird 
            style conflicts. create a <code>Component.module.css</code> file next to each component:
          </p>

          <div className="code-block">
            <code>{`import styles from './Button.module.css';`}</code>
            <code></code>
            <code>{`function Button({ children }) {`}</code>
            <code>{`  return <button className={styles.btn}>{children}</button>;`}</code>
            <code>{`}`}</code>
          </div>

          <p>
            or use tailwind if you prefer utility classes. honestly, pick whatever lets you move fast 
            and doesn't make you rage quit.
          </p>
        </section>

        <section className="blog-section">
          <h2>part 4: git workflow that works</h2>

          <p>
            here's the basic loop you'll do constantly:
          </p>

          <div className="code-block">
            <code># check what changed</code>
            <code>git status</code>
            <code></code>
            <code># add your changes</code>
            <code>git add .</code>
            <code></code>
            <code># commit with a clear message</code>
            <code>git commit -m "add routing and about page"</code>
            <code></code>
            <code># push to github</code>
            <code>git push origin main</code>
          </div>

          <p className="blog-note">
            <strong>commit message tips:</strong> use present tense ("add feature" not "added feature"), 
            be specific, and don't be like me who commits "fix stuff" at 2am.
          </p>
        </section>

        <section className="blog-section">
          <h2>part 5: deploying (getting it online)</h2>

          <p>
            your app is working locally. cool. now let's put it on the internet so you can actually 
            share it. vercel makes this ridiculously easy:
          </p>

          <ol className="blog-list">
            <li>go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a> and sign up with github</li>
            <li>click "new project" and import your repository</li>
            <li>vercel auto-detects it's a vite app (no config needed)</li>
            <li>click deploy</li>
            <li>wait like 30 seconds</li>
            <li>you're live</li>
          </ol>

          <p>
            seriously, that's it. every time you push to github, vercel automatically redeploys. 
            it's magic.
          </p>

          <p className="blog-note">
            <strong>alternatives:</strong> netlify works the same way. github pages is free but takes 
            more setup. render is solid if you need backend stuff later.
          </p>
        </section>

        <section className="blog-section">
          <h2>stuff i wish i knew starting out</h2>

          <div className="tips-grid">
            <div className="tip-card">
              <h4>don't overengineer</h4>
              <p>
                you don't need redux for a 3-page site. you don't need typescript on day one. 
                start simple, add complexity when you actually need it.
              </p>
            </div>

            <div className="tip-card">
              <h4>read the docs</h4>
              <p>
                <a href="https://react.dev" target="_blank" rel="noopener noreferrer">react.dev</a> is genuinely good. 
                same with <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">vite's docs</a>. 
                they're not boring PDFs, they're actually helpful.
              </p>
            </div>

            <div className="tip-card">
              <h4>commit often</h4>
              <p>
                commit every time something works. future you will thank present you when you need 
                to roll back a broken feature at 11pm.
              </p>
            </div>

            <div className="tip-card">
              <h4>mobile matters</h4>
              <p>
                test your site on your phone early. everyone's on mobile. use chrome devtools 
                device mode or just check it on your actual phone.
              </p>
            </div>
          </div>
        </section>

        <section className="blog-section">
          <h2>next steps</h2>

          <p>
            you now have a working web app on the internet. from here, you can:
          </p>

          <ul className="blog-list">
            <li>add more pages and build out features</li>
            <li>connect to an API (yours or someone else's)</li>
            <li>learn about state management (context api → zustand → redux)</li>
            <li>add animations (framer motion is clean)</li>
            <li>set up a custom domain</li>
            <li>actually finish the project (this is the hard part)</li>
          </ul>

          <p>
            the key is to just start building. you'll make mistakes, you'll google errors, 
            you'll rewrite things. that's how you learn.
          </p>
        </section>

        <footer className="blog-footer">
          <div className="resources-section">
            <h3>useful resources</h3>
            <div className="resources-grid">
              <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="resource-link">
                react docs →
              </a>
              <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer" className="resource-link">
                vite docs →
              </a>
              <a href="https://reactrouter.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                react router →
              </a>
              <a href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer" className="resource-link">
                vercel docs →
              </a>
              <a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer" className="resource-link">
                css tricks →
              </a>
              <a href="https://javascript.info" target="_blank" rel="noopener noreferrer" className="resource-link">
                javascript.info →
              </a>
            </div>
          </div>

          <p className="blog-sign-off">
           hopefully this helps and you can go build something. 
          </p>
        </footer>
      </article>
    </div>
  );
};

export default ReactGuide;