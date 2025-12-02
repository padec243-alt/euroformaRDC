import { Briefcase, School, Code, Megaphone, Gavel, Globe } from "lucide-react";

export const shortCourses = [
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        title: "Management & Stratégie",
        slug: "management-strategie",
    },
    {
        icon: <School className="w-8 h-8 text-primary" />,
        title: "Pédagogie",
        slug: "pedagogie",
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "Technologie & numérique",
        slug: "technologie-numerique",
    },
    {
        icon: <Megaphone className="w-8 h-8 text-primary" />,
        title: "Communication",
        slug: "communication",
    },
    {
        icon: <Gavel className="w-8 h-8 text-primary" />,
        title: "Droit",
        slug: "droit",
    },
    {
        icon: <Globe className="w-8 h-8 text-primary" />,
        title: "Prospective internationale",
        slug: "prospective-internationale",
    },
];

export const longCourses = [
    {
        icon: <Briefcase className="w-8 h-8 text-primary" />,
        title: "Formations longue",
        slug: "formations-longue",
    },
    {
        icon: <School className="w-8 h-8 text-primary" />,
        title: "US CERTIFICATE EXECUTIVE",
        slug: "us-certificate-executive",
    },
    {
        icon: <Code className="w-8 h-8 text-primary" />,
        title: "US CERTIFICATE PROFESSIONAL",
        slug: "us-certificate-professional",
    },
];

export const formationsData = [
    {
        slug: 'management-strategie',
        title: 'Management & Stratégie',
        description: 'Devenez un leader et pilotez la performance.',
        details: [
            { heading: 'Objectifs', content: 'Acquérir les compétences pour définir une stratégie, manager une équipe et améliorer les performances de l’entreprise.' },
            { heading: 'Programme', content: 'Analyse stratégique, leadership, gestion de projet, contrôle de gestion, marketing stratégique.' },
            { heading: 'Pour qui ?', content: 'Managers, chefs de projet, cadres et futurs dirigeants.' }
        ],
        modules: [
            {
                slug: "reporting-rse-evaluation-impact",
                title: "Reporting RSE / évaluation de l’impact",
                students: "0 Students",
                duration: "1 Week",
                description: "Cette formation intensive de 2 jours animée par notre cabinet de conseil et centre de formation EL Conseil & Formation permet de structurer un reporting RSE fiable et pertinent, tout...",
                price: "Free",
                category: "Reporting RSE"
            },
            {
                slug: "conduite-du-changement",
                title: "Conduite du changement",
                students: "0 Students",
                duration: "1 Week",
                description: "Cette formation permet d’accompagner les transformations organisationnelles (RSE, numérique, gouvernance…) en prenant en compte les dimensions humaines, culturelles et opérationnelles du changement. Elle fournit des outils pour mobiliser les parties...",
                price: "Free",
                category: "Management & Stratégie"
            },
            {
                slug: "strategie-et-audit-rse",
                title: "Stratégie et audit RSE",
                students: "0 Students",
                duration: "1 Week",
                description: "Cette formation vise à intégrer la RSE comme levier stratégique de performance, de gouvernance et de durabilité. Elle permet de structurer une démarche RSE alignée avec les enjeux sociaux, environnementaux...",
                price: "Free",
                category: "Evaluation / Contrôle"
            },
            {
                slug: "preparer-des-audits",
                title: "Préparer des audits",
                students: "5 Students",
                duration: "7 Hours",
                description: "Cette formation permet d’anticiper et de réussir un audit, qu’il soit interne, externe, financier ou qualité. Elle fournit une méthode rigoureuse et des outils concrets pour organiser les documents, mobiliser...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "management-equipe",
                title: "Management d’équipe",
                students: "274 Students",
                duration: "14 Hours",
                description: "Cette formation permet d’acquérir les compétences essentielles pour piloter et animer une équipe avec efficacité et bienveillance. Elle propose des outils pratiques pour clarifier les rôles, motiver les collaborateurs, gérer...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "prevention-stress-travail",
                title: "Prévention du stress au travail",
                students: "50 Students",
                duration: "7 Hours",
                description: "Cette formation sensibilise aux causes et conséquences du stress professionnel et propose des outils pratiques pour le prévenir. Elle vise à instaurer un environnement de travail sain, favoriser la gestion...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "gestion-de-projet",
                title: "Gestion de projet",
                students: "0 Students",
                duration: "21 Hours",
                description: "Cette formation fournit une méthode structurée et des outils concrets pour concevoir, piloter et évaluer un projet, depuis l’idée jusqu’à sa clôture. Elle permet aux acteurs publics et privés de...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "gestion-des-conflits",
                title: "Gestion des conflits",
                students: "28 Students",
                duration: "7 Hours",
                description: "Cette formation permet d’identifier les causes de conflits en milieu professionnel, d'en prévenir l’escalade et de mettre en place des solutions durables. Elle outille les responsables pour adopter une posture...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "leadership",
                title: "Leadership",
                students: "32 Students",
                duration: "14 Hours",
                description: "Cette formation permet d’acquérir les compétences essentielles aux managers, cadres et responsables en vue d’incarner un leadership adapté aux enjeux actuels. Elle aide à développer une posture d’influence, de vision...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "optimisation-potentiel-performance-mentale",
                title: "Optimisation du potentiel et de la performance mentale",
                students: "27 Students",
                duration: "7 Hours",
                description: "Cette formation vise à développer les ressources mentales nécessaires à la performance durable en contexte professionnel. Elle propose des outils concrets pour mieux gérer le stress, renforcer la concentration et...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "management-equipe-psychologie",
                title: "Management d’équipe par la psychologie",
                students: "12 Students",
                duration: "14 Hours",
                description: "Cette formation explore les apports de la psychologie au service du management d’équipe. Elle outille les encadrants pour mieux comprendre les comportements, gérer les émotions, renforcer la cohésion et mobiliser...",
                price: "€55.00",
                category: "Gestion d'équipe"
            },
            {
                slug: "management-publique-resultats",
                title: "Management publique axé sur les résultats",
                students: "10 Students",
                duration: "14 Hours",
                description: "Cette formation vise à professionnaliser la gestion publique en la recentrant sur les résultats et l’impact. Elle outille les cadres publics pour planifier, piloter, suivre et évaluer les politiques et...",
                price: "€50.00",
                category: "Gestion d'équipe"
            },
            {
                slug: "management-interculturel",
                title: "Management interculturel",
                students: "14 Students",
                duration: "14 Hours",
                description: "Cette formation vise dans un monde de plus en plus connecté, à permettre aux managers de mieux comprendre et gérer les différences culturelles au sein des équipes et projets. Elle...",
                price: "Free",
                category: "Gestion d'équipe"
            },
            {
                slug: "gestion-ressources-humaines",
                title: "Gestion des ressources humaines",
                students: "7 Students",
                duration: "21 Hours",
                description: "Cette formation vise à renforcer les compétences en gestion des ressources humaines dans une perspective moderne, efficace et adaptée. Elle permet de structurer les pratiques RH autour du recrutement, de...",
                price: "€69.00",
                category: "Gestion d'équipe"
            },
            {
                slug: "animer-reunion",
                title: "Animer une réunion",
                students: "16 Students",
                duration: "7 Hours",
                description: "This tutorial will introduce you to PHP, a server-side scripting language you can use to make dynamic websites and web applications.",
                price: "€50.00",
                category: "Management & Stratégie"
            },
            {
                slug: "analyser-besoins-sociaux-economiques",
                title: "Analyser les besoins sociaux et économiques",
                students: "17 Students",
                duration: "14 Hours",
                description: "Cette formation permet d’acquérir une méthodologie rigoureuse pour identifier, hiérarchiser et documenter les besoins d’un territoire, d’un secteur ou d’une population. Elle fournit des outils d’enquête, d’analyse et d’aide à...",
                price: "€39.00",
                category: "Management & Stratégie"
            },
            {
                slug: "innovation-creativite",
                title: "Innovation et créativité",
                students: "20 Students",
                duration: "14 Hours",
                description: "Cette formation permet, dans un environnement en constante mutation, de permettre aux cadres et décideurs de mobiliser la créativité pour innover, repenser leurs pratiques et répondre aux enjeux stratégiques. Elle...",
                price: "€49.00",
                category: "Management & Stratégie"
            },
            {
                slug: "management-strategique",
                title: "Management stratégique",
                students: "15 Students",
                duration: "14 Hours",
                description: "Cette formation permet, aux cadres et décideurs de développer une vision stratégique claire, de structurer un plan d’action et de piloter efficacement la transformation de leur organisation. Elle mobilise des...",
                price: "€59.00",
                category: "Management & Stratégie"
            },
            {
                slug: "gestion-previsionnel-emploi-competences",
                title: "Gestion prévisionnnel emploi et compétences",
                students: "18 Students",
                duration: "14 Hours",
                description: "Cette formation outille les responsables RH et managers pour anticiper les évolutions des métiers, adapter les compétences et structurer une stratégie RH durable. Elle permet de relier les besoins futurs...",
                price: "€75.00",
                category: "Management & Stratégie"
            },
            {
                slug: "gouvernance-entreprises",
                title: "La gouvernance en entreprises",
                students: "15 Students",
                duration: "1 Day",
                description: "Cette formation permet de comprendre les principes fondamentaux de la gouvernance d’entreprise et d’organisation, de clarifier les rôles entre organes de décision, et d’améliorer la transparence, la redevabilité et l’efficacité...",
                price: "€99.00",
                category: "Management & Stratégie"
            },
            {
                slug: "strategie-entreprise-organisation",
                title: "Stratégie d’entreprise / organisation",
                students: "25 Students",
                duration: "10 Weeks",
                description: "Less is a CSS pre-processor, meaning that it extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that...",
                price: "€94.00",
                category: "Evaluation / Contrôle"
            },
            {
                slug: "mettre-en-place-demarche-qualite",
                title: "Mettre en place une démarche qualité",
                students: "10 Students",
                duration: "14 Hours",
                description: "Cette formation permet d’initier ou structurer une démarche qualité adaptée au contexte local. Elle donne les clés pour améliorer en continu les pratiques, renforcer la satisfaction des usagers ou clients,...",
                price: "€159.00€99.00",
                category: "Evaluation / Contrôle"
            },
            {
                slug: "outils-evaluation-controle",
                title: "Les outils d’évaluation / de contrôle",
                students: "20 Students",
                duration: "14 Hours",
                description: "Cette formation propose une boîte à outils concrète pour évaluer les actions, contrôler les résultats et améliorer la performance des activités. Elle s’adresse aux cadres et responsables souhaitant structurer un...",
                price: "€39.00",
                category: "Evaluation / Contrôle"
            }
        ]
    },
    {
        slug: 'pedagogie',
        title: 'Pédagogie',
        description: "Maîtrisez l'art de former et de transmettre.",
        details: [
            { heading: 'Objectifs', content: 'Concevoir et animer des formations efficaces, évaluer les acquis et utiliser des outils pédagogiques innovants.' },
            { heading: 'Programme', content: 'Ingénierie de formation, techniques d’animation, neurosciences et apprentissage, digitalisation de la formation.' },
            { heading: 'Pour qui ?', content: 'Formateurs, responsables pédagogiques, enseignants et toute personne souhaitant transmettre son expertise.' }
        ],
        modules: [
            {
                slug: "formation-de-formateurs",
                title: "Formation de formateurs",
                students: "25 Students",
                duration: "3 Days",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Pédagogie"
            },
            {
                slug: "ingenierie-pedagogique",
                title: "Ingénierie pédagogique",
                students: "25 Students",
                duration: "1 Day",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Pédagogie"
            },
            {
                slug: "analyse-des-besoins-en-formation",
                title: "Analyse des besoins en formation",
                students: "25 Students",
                duration: "1 Day",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Pédagogie"
            }
        ]
    },
    {
        slug: 'technologie-numerique',
        title: 'Technologie & numérique',
        description: 'Surfez sur la vague de la transformation digitale.',
        details: [
            { heading: 'Objectifs', content: 'Comprendre les enjeux de la transformation numérique, maîtriser les outils digitaux et piloter des projets technologiques.' },
            { heading: 'Programme', content: 'Marketing digital, gestion des réseaux sociaux, cybersécurité, intelligence artificielle, big data.' },
            { heading: 'Pour qui ?', content: 'Professionnels du marketing, de la communication, chefs de projet et toute personne souhaitant se digitaliser.' }
        ],
        modules: [
            {
                slug: "utiliser-outils-numeriques-collaboratifs",
                title: "Utiliser les outils numériques collaboratifs",
                students: "16 Students",
                duration: "14 Hours",
                description: "Cette formation initie les participants à l’usage des outils collaboratifs digitaux (Teams, Google Workspace, Slack, etc.) pour faciliter la communication, la coordination et le travail en équipe, même à distance....",
                price: "Free",
                category: "Technologie & numérique"
            },
            {
                slug: "utliser-outils-de-bureautique",
                title: "Utliser les outils de bureautique",
                students: "20 Students",
                duration: "21 Hours",
                description: "Cette formation vise à renforcer les compétences des collaborateurs dans l’utilisation des outils bureautiques essentiels (traitement de texte, tableur, présentation). Elle facilite la production, l’organisation et la communication professionnelle pour...",
                price: "Free",
                category: "Technologie & numérique"
            },
            {
                slug: "deployer-erp-vente-erp",
                title: "Déployer un ERP + vente d’ERP",
                students: "9 Students",
                duration: "36 Hours",
                description: "Cette formation accompagne les participants dans la maîtrise du déploiement d’Odoo, un ERP modulaire et centralisé, pour optimiser la gestion intégrée des ventes, achats, stocks, finances et ressources humaines. Elle...",
                price: "Free",
                category: "Technologie & numérique"
            }
        ]
    },
    {
        slug: 'communication',
        title: 'Communication',
        description: 'Optimisez votre impact et votre influence.',
        details: [
            { heading: 'Objectifs', content: 'Développer une communication percutante, gérer sa e-réputation et maîtriser la communication de crise.' },
            { heading: 'Programme', content: 'Prise de parole en public, communication interpersonnelle, stratégies de communication, relations presse.' },
            { heading: 'Pour qui ?', content: 'Responsables de communication, chargés de relations publiques, managers et commerciaux.' }
        ],
        modules: [
            {
                slug: "utiliser-reseaux-sociaux",
                title: "Utiliser les réseaux sociaux",
                students: "25 Students",
                duration: "2 Days",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Communication"
            },
            {
                slug: "strategie-communication-externe",
                title: "Stratégie de commuication externe",
                students: "25 Students",
                duration: "2 Days",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Communication"
            },
            {
                slug: "communication-en-entreprise",
                title: "Communication en entreprise",
                students: "25 Students",
                duration: "14 Hours",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Communication"
            },
            {
                slug: "marketing-digital",
                title: "Marketing digital",
                students: "25 Students",
                duration: "3 Days",
                description: "JavaScript is an object oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax comes from the Java and C languages, so many structures from those...",
                price: "Free",
                category: "Marketing"
            }
        ]
    },
    {
        slug: 'droit',
        title: 'Droit',
        description: 'Sécurisez vos décisions et vos actions.',
        details: [
            { heading: 'Objectifs', content: 'Comprendre le cadre juridique de l’entreprise, anticiper les risques et rédiger des contrats.' },
            { heading: 'Programme', content: 'Droit des sociétés, droit du travail, droit des contrats, protection des données (RGPD).' },
            { heading: 'Pour qui ?', content: 'Dirigeants, juristes d’entreprise, responsables RH et entrepreneurs.' }
        ],
        modules: [
            {
                slug: "droit-des-affaires",
                title: "Droit des affaires",
                students: "25 Students",
                duration: "14 Hours",
                description: "Cette formation offre une compréhension claire et opérationnelle du droit des affaires appliqué au contexte local. Elle permet de sécuriser les contrats, maîtriser les règles juridiques liées à l’entreprise et...",
                price: "Free",
                category: "Droit"
            },
            {
                slug: "droit-international",
                title: "Droit international",
                students: "25 Students",
                duration: "14 Hours",
                description: "Cette formation initie les cadres, juristes et décideurs aux fondements du droit international public et privé. Elle permet de mieux comprendre les cadres juridiques applicables aux relations entre États, entreprises...",
                price: "Free",
                category: "Droit"
            },
            {
                slug: "droit-du-travail-employeur",
                title: "Droit du travail / employeur",
                students: "25 Students",
                duration: "21 Hours",
                description: "Cette formation apporte aux employeurs et encadrants une compréhension claire des droits et obligations liés au droit du travail congolais. Elle permet de prévenir les litiges, sécuriser les pratiques RH,...",
                price: "Free",
                category: "Droit"
            }
        ]
    },
    {
        slug: 'prospective-internationale',
        title: 'Prospective internationale',
        description: 'Anticipez les enjeux de demain.',
        details: [
            { heading: 'Objectifs', content: 'Analyser les tendances mondiales, comprendre les enjeux géopolitiques et économiques et définir une stratégie à l’international.' },
            { heading: 'Programme', content: 'Analyse géopolitique, intelligence économique, management interculturel, stratégies de développement international.' },
            { heading: 'Pour qui ?', content: 'Dirigeants, responsables export, consultants et analystes.' }
        ],
        modules: [
            {
                slug: "commercialiser-a-linternational",
                title: "Commercialiser à l’international",
                students: "14 Students",
                duration: "14 Hours",
                description: "Cette formation permet de structurer une stratégie de commercialisation à l’international, de l’étude de marché à la prospection jusqu’à la négociation. Elle accompagne les organisations dans le choix des bons...",
                price: "Free",
                category: "Prospective internationale"
            },
            {
                slug: "developper-le-business-avec-les-etats-unis",
                title: "Développer le business avec les états unis",
                students: "5 Students",
                duration: "14 Hours",
                description: "Cette formation permet de comprendre les clés du développement commercial et institutionnel avec les États-Unis. Elle aborde les aspects juridiques, culturels, réglementaires et économiques pour structurer une stratégie d’entrée sur...",
                price: "Free",
                category: "Prospective internationale"
            },
            {
                slug: "analyse-prospective",
                title: "Analyse prospective",
                students: "15 Students",
                duration: "14 Hours",
                description: "Cette formation initie les participants à la démarche prospective pour anticiper les ruptures, analyser les tendances lourdes et explorer des futurs possibles. Elle fournit des outils pour éclairer les décisions...",
                price: "Free",
                category: "Prospective internationale"
            },
            {
                slug: "strategie-de-developpement-internationale",
                title: "Stratégie de développement internationale",
                students: "25 Students",
                duration: "21 Hours",
                description: "Cette formation permet de concevoir une stratégie de développement à l’international, en intégrant les enjeux économiques, politiques, culturels et opérationnels. Elle outille les décideurs pour structurer leur démarche, cibler les...",
                price: "Free",
                category: "Prospective internationale"
            }
        ]
    },
    {
        slug: 'formations-longue',
        title: 'Formations longue',
        description: 'Des programmes complets pour une expertise approfondie.',
        details: [
            { heading: 'Objectifs', content: 'Obtenir une expertise complète dans un domaine et un diplôme reconnu pour booster sa carrière.' },
            { heading: 'Programme', content: 'Nos formations longues couvrent divers domaines et sont conçues en partenariat avec des universités et des entreprises de renom. Le programme est intensif et pratique.' },
            { heading: 'Pour qui ?', content: 'Étudiants, professionnels en reconversion ou souhaitant se spécialiser.' }
        ]
    },
    {
        slug: 'us-certificate-executive',
        title: 'US CERTIFICATE EXECUTIVE',
        description: "Un tremplin pour votre carrière à l'international.",
        details: [
            { heading: 'Objectifs', content: 'Acquérir une vision stratégique et managériale à l’américaine, et obtenir un certificat d’une université partenaire aux États-Unis.' },
            { heading: 'Programme', content: 'Leadership, finance, stratégie d’entreprise, marketing et innovation, avec des études de cas d’entreprises américaines.' },
            { heading: 'Pour qui ?', content: 'Cadres supérieurs et dirigeants visant une carrière internationale.' }
        ],
        modules: [
            {
                slug: "us-certificate-executive-module",
                title: "US CERTIFICATE EXECUTIVE",
                students: "25 Students",
                duration: "60 Hours",
                description: "Cette formation de niveau avancé vise à former des professionnels capables de piloter le changement, de gérer des équipes et des ressources dans des environnements internationaux complexes, et de prendre...",
                price: "€950.00",
                category: "Formation Longue"
            }
        ]
    },
    {
        slug: 'us-certificate-professional',
        title: 'US CERTIFICATE PROFESSIONAL',
        description: 'Validez vos compétences avec une certification américaine.',
        details: [
            { heading: 'Objectifs', content: 'Obtenir une certification professionnelle reconnue aux États-Unis pour valider ses compétences et accéder à de nouvelles opportunités.' },
            { heading: 'Programme', content: 'Formation spécialisée et intensive dans un domaine précis (marketing digital, gestion de projet, etc.) débouchant sur un examen de certification.' },
            { heading: 'Pour qui ?', content: 'Professionnels souhaitant faire reconnaître leur expertise à l’international.' }
        ],
        modules: [
            {
                slug: "us-certificate-professional-module",
                title: "US CERTIFICATE PROFESSIONAL",
                students: "18 Students",
                duration: "60 Hours",
                description: "Cette formation offre une introduction structurée aux fondamentaux du management des organisations et des personnes dans un contexte globalisé. Elle aborde les principes du comportement organisationnel, la gestion des ressources...",
                price: "Free",
                category: "Formation Longue"
            }
        ]
    }
];
