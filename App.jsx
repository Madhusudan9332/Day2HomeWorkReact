const topicsData = [
  {
    topic: "HTML",
    explanation:
      "HTML (HyperText Markup Language) is the standard markup language used for creating web pages. It defines the structure and content of a web page using a variety of elements and attributes.",
  },
  {
    topic: "CSS",
    explanation:
      "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. It controls the layout, colors, fonts, and other visual aspects of a web page.",
  },
  {
    topic: "JavaScript",
    explanation:
      "JavaScript is a high-level programming language that is commonly used for creating interactive and dynamic content on web pages. It can manipulate the HTML and CSS of a web page to create rich user experiences.",
  },
  {
    topic: "Web APIs",
    explanation:
      "Web APIs (Application Programming Interfaces) are a set of tools and protocols that allow different software applications to communicate with each other over the web. They provide functionality such as accessing and manipulating web features like the DOM, fetching resources from servers, and enabling real-time communication.",
  },
  {
    topic: "Accessibility",
    explanation:
      "Accessibility in web development refers to the practice of designing and developing websites and applications that can be used by people with disabilities. This includes ensuring that content is perceivable, operable, and understandable to all users, regardless of their abilities.",
  },
  {
    topic: "Responsive Design",
    explanation:
      "Responsive Design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that a website can adapt to different devices, such as desktops, laptops, tablets, and smartphones, without sacrificing usability or functionality.",
  },
  {
    topic: "Web Performance",
    explanation:
      "Web Performance refers to the speed and efficiency with which web pages are loaded and displayed in a web browser. It involves optimizing various aspects of a website, such as code, images, and server response times, to improve user experience and reduce bounce rates.",
  },
  {
    topic: "Security",
    explanation:
      "Security in web development involves implementing measures to protect websites and web applications from security threats and vulnerabilities. This includes securing sensitive data, preventing unauthorized access, and mitigating common attacks such as cross-site scripting (XSS) and SQL injection.",
  },
  {
    topic: "Tools and Workflow",
    explanation:
      "Tools and Workflow in web development refer to the software tools and processes used by developers to create, debug, and deploy web applications. This includes text editors, version control systems, build tools, testing frameworks, and deployment platforms.",
  },
  {
    topic: "Server-side Development",
    explanation:
      "Server-side Development involves writing code that runs on the server and generates dynamic content that is then sent to the client's web browser. This includes server-side languages like Node.js, Python, Ruby, and PHP, as well as frameworks and libraries for building web applications.",
  },
];

class App extends React.Component {
  render() {
    return (
      <>
      <div className="container">
        <h1>
          The MDN Web Docs learning area covers a wide range of topics related
          to web development. Some of the key topics covered include:
        </h1>
        <ul>
          {topicsData.map((topic) => {
            return (
              <li>
                <h3>{topic.topic}</h3>
                <p>{topic.explanation}</p>
              </li>
            );
          })}
        </ul>
      </div>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
