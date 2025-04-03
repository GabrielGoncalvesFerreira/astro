// src/pages/About/About.jsx
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>Sobre Nós</h1>
      <p>
        Somos uma equipe apaixonada por criar soluções inovadoras. Nossa missão é fornecer produtos e serviços de alta qualidade que atendam às necessidades de nossos clientes.
      </p>
      <p>
        Nossa história começou em [ano] e, desde então, temos nos dedicado a [breve descrição da empresa/projeto].
      </p>
      <h2>Nossos Valores</h2>
      <ul>
        <li>Inovação</li>
        <li>Qualidade</li>
        <li>Compromisso</li>
        <li>Transparência</li>
      </ul>
    </div>
  );
}

export default About;