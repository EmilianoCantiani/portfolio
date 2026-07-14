import React from 'react';
import './style.css';

export default function Portfolio() {
  return (
    <div>
      
      {/* 1. NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-container">
         
          <div className="nav-links">
          <a href="#chi-sono">Chi sono</a>
            <a href="#competenzeC">Comptenze chiave</a>
            <a href="#competenzeT">Competenze tecniche</a>
            <a href="#esperienza">Esperienze professionali</a>
            <a href="#formazione">Formazione</a>
            <a href="#contatti">Contatti</a>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION CON FOTO */}
      <section id="chi-sono" className="container hero">
        <div className="hero-grid">
          
          {/* Testi (Sinistra) */}
          <div className="hero-info">
            <p className="hero-tag">Benvenuto nel mio portfolio</p>
            <h1 className="hero-title">Emiliano Cantiani</h1>
            <h2 className="hero-subtitle">ERP Consultant & Business Analyst | Senior Software Developer</h2>
            {/*<p className="hero-text">
              Con oltre vent'anni di esperienza nel mondo IT, ho visto l'evoluzione delle tecnologie da una prospettiva privilegiata. 
              Oggi mi dedico a fare da ponte tra i processi di business e le soluzioni tecnologiche, specializzandomi nell'analisi 
              funzionale e nella gestione e configurazione di sistemi ERP complessi. Ottimizzo i flussi aziendali per trasformare le 
              necessità operative in soluzioni concrete.
            </p>*/}
            <p className="hero-text">
            Oltre 20 anni di esperienza in analisi e ottimizzazione dei processi aziendali, nella raccolta e traduzione dei requisiti di business e nell’implementazione/gestione di soluzioni ERP enterprise. Esperienza consolidata nella collaborazione con stakeholder aziendali (Finance, Marketing, Customer Care, Network) e partner/fornitori, nella gestione di progetti di integrazione e digitalizzazione e nella definizione e realizzazione di soluzioni tecniche scalabili ed efficienti. Forte orientamento al miglioramento dei processi, all’efficienza operativa e alla qualità del dato. Competenza nella progettazione, sviluppo e manutenzione di soluzioni software full-stack. Esperienza nell'automazione dei processi tramite Google Apps Script, con integrazione dei servizi Google Workspace (Forms, Sheets, Docs, Drive e Gmail), nello sviluppo di pipeline per la generazione automatica di documenti e nell'integrazione di API esterne (incluse soluzioni di AI generativa basate su OpenAI API).
            </p>
          </div>

          {/* Foto (Destra) */}
          <div className="hero-image-container">
            <div className="image-glow-wrapper">
              <img 
                src="foto_modificata.png" 
                alt="Emiliano Cantiani" 
                className="profile-img"
              />
            </div>
          </div>

        </div>
      </section>

      <hr />

      {/* 3. COMPETENZE CHIAVE */}
      <section id="competenzeC" className="container section">
        <h3 className="section-title">Competenze Chiave</h3>
        <div className="skills-grid">
          
        <div className="skill-card">
            <h4>Integrazione, Configurazione & Gestione ERP</h4>
            <p>Esperienza in ottimizzazione, personalizzazione e manutenzione dei sistemi gestionali aziendali per orientarli agli obiettivi del business.
               Gestisco l'estrazione e l'analisi dei dati strutturando la reportistica aziendale tramite strumenti dedicati.
            </p>
          </div>

          <div className="skill-card">
            <h4>Analisi Funzionale & Business Analysis</h4>
            <p>Specializzato nella mappatura e nell'analisi dei processi aziendali. Gestisco l'intero ciclo dei requisiti, dalla raccolta all'analisi funzionale, traducendo le necessità operative in documentazione tecnica chiara per guidare lo sviluppo software.</p>
          </div>

          <div className="skill-card">
            <h4>Digital Transformation & Stakeholder Management</h4>
            <p>Essendo una figura ibrida tecnico-funzionale sono in grado di facilitare la trasformazione digitale all'interno delle organizzazioni,  
              facendo da collante tra i diversi dipartimenti aziendali grazie a comprovata esperienza in Stakeholder Management e Team Collaboration, 
              garantendo che le soluzioni IT siano sempre allineate con gli obiettivi di business.
            </p>
          </div>

          <div className="skill-card">
            <h4>Problem Solving & Affidabilità di Processo</h4>
            <p>
              Un approccio analitico unito all'orientamento al problem solving mi consentono di lavorare su progetti e sistemi di lungo periodo, garantendo risoluzione delle criticità, stabilità strutturale e crescita tecnologica sostenibile.</p>
          </div>

        </div>
      </section>

      <hr />

      {/* 5. COMPETENZE TECNICHE */}
      <section id="competenzeT" className="container section">
        <h3 className="section-title">Competenze Tecniche</h3>
        <div className="tech-grid">
          
          {/* PM & Collaboration */}
          <div className="tech-card">
            <h4>Project Management & Collaboration</h4>
            <div className="tech-tags">
              <span className="tech-tag">Jira</span>
              <span className="tech-tag">Confluence</span>
              <span className="tech-tag">Slack</span>
              <span className="tech-tag">Metodologia Agile/Scrum</span>
            </div>
          </div>

          {/* ERP */}
          <div className="tech-card">
            <h4>ERP & Soluzioni Business</h4>
            <div className="tech-tags">
              <span className="tech-tag">SAP Business One</span>
              <span className="tech-tag">Microsoft Dynamics Finance & Operations</span>
            </div>
          </div>

          {/* Cloud e DevOps */}
          <div className="tech-card">
            <h4>Sistemi Cloud e DevOps</h4>
            <div className="tech-tags">
              <span className="tech-tag">Azure Storage Accounts</span>
              <span className="tech-tag">Azure DevOps</span>
              <span className="tech-tag">Git</span>
              <span className="tech-tag">TFS</span>
              <span className="tech-tag">Google Apps Script</span>
            </div>
          </div>

          {/* DBMS & Accesso Dati */}
          <div className="tech-card">
            <h4>DBMS & Accesso Dati</h4>
            <div className="tech-tags">
              <span className="tech-tag">SQL Server</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">SQL</span>
              <span className="tech-tag">LINQ</span>
              <span className="tech-tag">Entity Framework</span>
            </div>
          </div>

          {/* Linguaggi e Framework */}
          <div className="tech-card">
            <h4>Linguaggi e Framework di Sviluppo</h4>
            <div className="tech-tags">
              <span className="tech-tag">C#</span>
              <span className="tech-tag">VB.NET</span>
              <span className="tech-tag">JavaScript / JQuery</span>
              <span className="tech-tag">ASP.Net MVC</span>
              <span className="tech-tag">DevExpress</span>
            </div>
          </div>

          {/* Tool di Sviluppo */}
          <div className="tech-card">
            <h4>Tool di Sviluppo e Gestione</h4>
            <div className="tech-tags">
              <span className="tech-tag">Visual Studio (2003-2022)</span>
              <span className="tech-tag">Visual Studio Code</span>
              <span className="tech-tag">Postman</span>
            </div>
          </div>

          {/* Architetture Web */}
          <div className="tech-card">
            <h4>Architetture e Servizi Web</h4>
            <div className="tech-tags">
              <span className="tech-tag">Web API</span>
              <span className="tech-tag">WCF</span>
              <span className="tech-tag">Web Services</span>
              <span className="tech-tag">REST</span>
              <span className="tech-tag">JSON</span>
              <span className="tech-tag">Ajax</span>
              <span className="tech-tag">SOAP</span>
              <span className="tech-tag">XML</span>
            </div>
          </div>

          {/* Piattaforme Integrate */}
          <div className="tech-card">
            <h4>Piattaforme Integrate</h4>
            <div className="tech-tags">
              <span className="tech-tag">PayPal</span>
              <span className="tech-tag">Axerve/Fabrick</span>
              <span className="tech-tag">Checkout</span>
              <span className="tech-tag">Arxivar</span>
              <span className="tech-tag">Qaplà</span>
            </div>
          </div>

        </div>
      </section>

      <hr />   

      {/* 6. ESPERIENZE PROFESSIONALI */}
      <section id="esperienza" className="container section">
        <h3 className="section-title">Percorso Professionale</h3>
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-badge"></div>
            <span className="timeline-date">2024 — 2026</span>
            <h4 className="timeline-title">Specialist ERP & Analista (Ruolo Ibrido)</h4>
            <p className="timeline-text">
              Attività focalizzata su Analisi Funzionale, configurazione e gestione di sistemi ERP aziendali, combinando lo sviluppo mirato al supporto e all'ottimizzazione dei processi interni.
            </p>
          </div>

          <div className="timeline-item">
            <div className="timeline-badge gray"></div>
            <span className="timeline-date gray">Perfezionamento di Carriera</span>
            <h4 className="timeline-title">14 Anni di Esperienza Consolidata | Interflora</h4>
            <p className="timeline-text">
              Lunga e continuativa collaborazione aziendale che ha permesso di seguire da vicino, gestire e far evolvere l'intera infrastruttura e i sistemi interni, garantendo stabilità e innovazione costante.
            </p>
          </div>

            {/* Exo S.I. / Vega Solution */}
            <div className="timeline-item">
            <div className="timeline-badge gray"></div>
            <span className="timeline-date gray">Marzo 2000 — Febbraio 2010</span>
            <h4 className="timeline-title">Software Developer | Exo S.I. (poi Vega Solution)</h4>
            <p className="timeline-text">
              Attività di sviluppo software in consulenza presso diversi clienti nel settore pubblico e privato, tra cui: 
              <span style={{ color: '#38bdf8', fontWeight: '500' }}> Ministero della Difesa, Ministero dell'Economia e delle Finanze, Banca d'Italia, Italriscossioni, ENI, ScarpaMondo e Nuova Patrimoniale</span>.
            </p>
            <p className="timeline-text">
              Docenze pacchetto Office presso le sedi centrali del <span style={{ color: '#38bdf8', fontWeight: '500' }}> Monte dei Paschi di Siena </span> di Roma e Latina.
            </p>
          </div>

        </div>
      </section>

      <hr />

      {/* 6. FORMAZIONE (NUOVA SEZIONE) */}
      <section id="formazione" className="container section">
        <h3 className="section-title">Formazione</h3>
        <div className="education-list">
          
          <div className="education-item">
            <span className="timeline-date">Roma, 2026</span>
            <h4 className="timeline-title">Attestato di frequenza corso "AI - Deep Learning & Machine Learning"</h4>
            <p className="timeline-text">Istituto G. Meschini</p>
          </div>

          <div className="education-item">
            <span className="timeline-date">Roma, 2023 — 2026</span>
            <h4 className="timeline-title">English classroom 1to1 (liv. B2)</h4>
            <p className="timeline-text">Svolto su piattaforme Fluentify e Voxy</p>
          </div>

          <div className="education-item">
            <span className="timeline-date">Roma, Settembre 2022</span>
            <h4 className="timeline-title">Attestato di frequenza corso 28 ore "Building Cross-Platform Web Apps with ASP.NET CORE"</h4>
            <p className="timeline-text">Formazione specialistica sullo sviluppo web multipiattaforma</p>
          </div>

          <div className="education-item">
            <span className="timeline-date">Roma, 1988 — 1992</span>
            <h4 className="timeline-title">Diploma di maturità classica</h4>
            <p className="timeline-text">Liceo Dante Alighieri di Roma</p>
          </div>

        </div>
      </section>

      <hr />      

      {/* 7. CONTATTI */}
      <section id="contatti" className="container contacts">
        <h3 className="section-title" style={{marginBottom: '16px'}}>Mettiamoci in contatto</h3>
        <p className="contacts-text">
        Hai bisogno di un'analisi per i tuoi processi aziendali o di un supporto nella digitalizzazione delle tue attività o magari vuoi saperne di più su di me? Utilizza i seguenti contatti:
        </p>
        <div className="btn-container">
        <p>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"   stroke-linejoin="round">
              <rect x="6" y="2" width="12" height="20" rx="2" ry="2"/>
              <line x1="11" y1="18" x2="13" y2="18"/>
            </svg>
            <span> +39 392/8926508</span>
		  </p>          
        <p>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M2 6l10 7 10-7"/>
              </svg>&nbsp;&nbsp;
            <span>  
              <a href="mailto:emiliano.cantiani@gmail.com" 
                  className="contacs-href"> 
                emiliano.cantiani@gmail.com
              </a>
            </span>
          </p>
          <p>
            <span>
              <img src="linkedin.png" alt="Logo" width="22" height="auto" object-fit="cover" />&nbsp;
                <a href="https://www.linkedin.com/in/emiliano-cantiani-1311864a/" 
                target="_blank" rel="noreferrer"
                className="contacs-href"> 
                Profilo LinkedIn
              </a>
            </span>
          </p>          
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Emiliano Cantiani. Tutti i diritti riservati.</p>
      </footer>

    </div>
  );
}