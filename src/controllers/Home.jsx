import { Link } from 'react-router-dom';
import '../styling/Home.css';
import { SiKotlin, SiReact, SiRust, SiNodedotjs, SiJavascript, SiPostgresql } from 'react-icons/si';
import { FaAward, FaMobile, FaServer, FaMicrochip, FaGlobe } from 'react-icons/fa';

export default function Home() {
    const sections = [
        {
            id: 'certs',
            title: 'Certificates',
            description: 'Professional certifications and achievements showcasing continuous learning and expertise in various technologies.',
            icon: <FaAward className="section-icon" />,
            path: '/certs',
            color: 'primary',
            techs: ['Google', 'Coursera', 'Professional Development']
        },
        {
            id: 'apps',
            title: 'Mobile Apps',
            description: 'Native and cross-platform mobile applications built with modern frameworks and best practices.',
            icon: <FaMobile className="section-icon" />,
            path: '/dating-app',
            color: 'secondary',
            techs: [
                { icon: <SiKotlin />, name: 'Kotlin' },
                { icon: <SiReact />, name: 'React Native' }
            ]
        },
        {
            id: 'servers',
            title: 'Backend & APIs',
            description: 'RESTful APIs and server-side applications with robust architecture and comprehensive testing.',
            icon: <FaServer className="section-icon" />,
            path: '/servers',
            color: 'tertiary',
            techs: [
                { icon: <SiNodedotjs />, name: 'Node.js' },
                { icon: <SiPostgresql />, name: 'PostgreSQL' }
            ]
        },
        {
            id: 'firmware',
            title: 'Firmware & Embedded',
            description: 'Low-level embedded systems programming with memory-safe languages and microcontroller development.',
            icon: <FaMicrochip className="section-icon" />,
            path: '/firmware',
            color: 'error',
            techs: [
                { icon: <SiRust />, name: 'Rust' },
                { icon: null, name: 'STM32' }
            ]
        },
        {
            id: 'websites',
            title: 'Web Development',
            description: 'Modern web applications and interactive websites built with cutting-edge frontend technologies.',
            icon: <FaGlobe className="section-icon" />,
            path: '/website',
            color: 'surface',
            techs: [
                { icon: <SiReact />, name: 'React' },
                { icon: <SiJavascript />, name: 'JavaScript' }
            ]
        }
    ];

    return (
        <div className='main home-main'>
            <div className='home-container'>
                <header className='home-header'>
                    <h1>Welcome to My Portfolio</h1>
                    <p className='home-subtitle'>
                        Full-stack developer passionate about building innovative solutions 
                        across mobile, web, embedded systems, and backend technologies.
                    </p>
                </header>

                <div className='sections-grid'>
                    {sections.map((section) => (
                        <Link 
                            key={section.id} 
                            to={section.path} 
                            className={`section-card section-card-${section.color}`}
                        >
                            <div className='section-card-header'>
                                {section.icon}
                                <h2>{section.title}</h2>
                            </div>
                            <p className='section-description'>{section.description}</p>
                            <div className='section-techs'>
                                {Array.isArray(section.techs) && section.techs.map((tech, index) => (
                                    <span key={index} className='tech-pill'>
                                        {typeof tech === 'object' ? (
                                            <>
                                                {tech.icon}
                                                <span>{tech.name}</span>
                                            </>
                                        ) : (
                                            tech
                                        )}
                                    </span>
                                ))}
                            </div>
                            <span className='section-link'>Explore →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
