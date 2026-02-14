const skills = ["LangGraph", "LangChain", "Agents", "FastMCP", "Kubernetes", "Docker", "Python", "Sklearn", "REST", "Django", "OAuth", "GraphQL", "OpenAPI", "AWS Cloud", "Chainlit"]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <div className="sidebar-header">
          <div className="avatar">A</div>
          <h1>Aakash Tammana</h1>
          <p className="tagline">AI Engineer &amp; Creator</p>
        </div>

        <nav className="nav">
          <a href="#posts">Posts</a>
          <a href="#projects">Projects</a>
        </nav>

        <div className="about">
          <h2>About</h2>
          <p>
            Developed across a variety of tech stacks and domains, including Python, Javascript, Typescript, React.
            Currently, I'm focused on building AI-powered solutions.
          </p>
          <p>
            I like listening to LitRPGs, playing video games, and criticizing my own code.
          </p>
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skill-tags">
            {skills.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
