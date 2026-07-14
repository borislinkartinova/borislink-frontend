export function formatReadingTime(value: unknown): string {
  const minutes = parseInt(String(value ?? ""), 10);
  return Number.isFinite(minutes) ? `${minutes} min` : "5 min";
}

const rawJournalPosts = [

  {
    id: 1,
    slug: "pourquoi-je-lance-boris-link",
    title: "Pourquoi je lance Boris Link (et la construction d’Artinova en public)",
    date: "2026-06-20",
    readingTime: 7,

    content: `
## 1. Introduction

Je m’appelle Boris.

Je suis entrepreneur français, et aujourd’hui je lance Boris Link.

À travers ce journal, je vais documenter publiquement mon parcours entrepreneurial et la construction d’Artinova, un logiciel destiné aux artisans du bâtiment.

Je ne sais pas encore exactement où cette aventure va me mener.

Je n’ai pas toutes les réponses.

Mais c’est justement pour ça que je veux la documenter.

---

## 2. Qui je suis

Depuis plusieurs années, je m’intéresse aux PME, au SaaS, à l’immobilier, aux outils numériques et à la manière dont la technologie peut améliorer les entreprises.

Aujourd’hui, je travaille comme SDR dans une entreprise SaaS.

Je fais de la prospection, de la qualification de leads et des démonstrations produit.

Chaque jour, j’apprends :

- la vente  
- la construction d’un pipeline commercial  
- le fonctionnement d’un logiciel SaaS  

En parallèle, je construis des projets et j’essaie de comprendre comment créer une entreprise durable sur le long terme.

---

## 3. Mon parcours

Quand je regarde mon parcours, je réalise que tout m’a préparé à ce que je fais aujourd’hui.

J’ai commencé dans la vente :

- électroménager  
- cuisine  

C’est là que j’ai appris :

- la relation client  
- la compréhension des besoins  
- la vente terrain  

Pendant mes études, j’ai cofondé une association blockchain.

C’était l’une des premières en France.

J’y ai appris :

- gestion de projet  
- comptabilité  
- recrutement  
- partenariats  
- organisation d’événements  
- anglais technique  

Ensuite, j’ai lancé plusieurs projets entrepreneuriaux.

Certains ont échoué.  
D’autres m’ont énormément appris.

### 🚀 Plateforme football & actifs numériques

- +1000 abonnés newsletter
- +5500 abonnés sur les réseaux sociaux

### 🧾 Startup fiscalité des actifs numériques (SaaS)

- support client
- cycles produit
- acquisition
- partenariats

### 📞 SDR roles

- lead sourcing
- cold calls
- qualification
- vente B2B SaaS

### 📊 Média local (Bourgogne)

- +300 contenus
- +2M vues sur les réseaux sociaux
- automatisations (bases de données, orchestration, IA)

---

## 4. Ce que j’ai compris

Pendant longtemps, j’ai cherché la bonne idée.

Je testais des projets.  
Je passais vite au suivant.

Mais je ne construisais pas sur le long terme.

Ce média local a été un déclic.

Je ne veux pas créer un média.

Je veux construire un logiciel.

Et surtout :

une entreprise durable sur 10 ans.

---

## 5. Pourquoi Artinova

Artinova est un logiciel destiné aux artisans du bâtiment :

- plombiers  
- électriciens  
- chauffagistes  
- couvreurs  
- menuisiers  

Je pense qu’il existe énormément de valeur à créer :

- organisation  
- gestion  
- automatisation  
- IA  

---

## 6. Pourquoi Boris Link

Ce n’est pas une marque personnelle classique.

C’est un journal de construction.

Je documente :

- ce que j’apprends  
- les systèmes que je construis  
- les erreurs  
- les décisions  

---

## 7. Ce que vous verrez ici

- la construction d’Artinova  
- le SaaS  
- la vente  
- l’IA  
- mes réflexions  
- mon quotidien  

---

## 8. Conclusion

Aujourd’hui, je n’ai pas toutes les réponses.

Mais je commence.

Et je pense que ça vaut la peine d’être documenté.

Bienvenue dans l’aventure.
`
  },
  {
    id: 2,
    slug: "pourquoi-autant-de-projets-avant-artinova",
    title: "Pourquoi j’ai eu besoin de tant de projets avant de trouver Artinova",
    date: "2026-07-14",
    category: "JOURNAL",
    readingTime: 21,

    content: `
J’ai 29 ans et je me rapproche doucement de la trentaine.

Depuis plusieurs années, je lance des projets, je travaille dans différentes entreprises, j’apprends de nouveaux métiers et je change régulièrement d’environnement.

Certains projets ont bien fonctionné. D’autres beaucoup moins. Certains m’ont permis de gagner de l’argent. D’autres m’ont surtout coûté du temps, de l’énergie et quelques nuits de sommeil.

Pendant longtemps, j’ai pu donner l’impression de me disperser.

Et, pour être honnête, c’était parfois le cas.

Je voyais une occasion, une technologie ou un marché qui m’intéressait, puis j’avais immédiatement envie de construire quelque chose autour.

Je voulais tout apprendre, tout essayer et tout faire en même temps.

Avec le recul, je comprends pourtant que ces expériences ont progressivement construit le socle dont j’avais besoin pour lancer Artinova.

La vente, le support client, le SaaS, l’événementiel, la création de contenu, l’automatisation, la prospection et la gestion de projet ont fini par se rejoindre.

Ce parcours n’a rien d’un plan parfaitement exécuté.

C’est plutôt une succession de tentatives, de rencontres, d’erreurs et d’apprentissages qui m’ont permis de mieux comprendre ce que je voulais faire pendant les dix prochaines années.

Si une personne de 20 ans tombe un jour sur cet article et peut en tirer une ou deux leçons utiles, ce sera déjà une belle réussite.

---

## Mes premiers emplois n’avaient rien de stratégique

Mes toutes premières expériences professionnelles se sont déroulées en Bourgogne.

J’ai travaillé dans les vignes. Je posais notamment des attaches sur les rangs, j’étiquetais des bouteilles et je participais à des livraisons de vin.

J’ai ensuite été vendeur en électroménager, animateur en centre de loisirs et poseur de panneaux publicitaires sur des feux de circulation.

Des emplois étudiants assez classiques.

À l’époque, je ne me demandais pas si ces expériences allaient être utiles pour ma future carrière.

Je voulais gagner un peu d’argent, découvrir le monde professionnel et commencer à être indépendant.

Pourtant, j’y ai appris des principes qui me servent encore aujourd’hui.

Le premier était de compter mon temps.

Je commençais à raisonner en rémunération horaire : combien est-ce que je gagne réellement pour chaque heure de travail effectuée ?

Cette manière de penser paraît très basique, mais elle oblige à comprendre que le temps est une ressource limitée.

J’ai également appris l’importance d’être ponctuel, poli, fiable et agréable avec les autres.

Ces qualités semblent évidentes. Elles sont pourtant beaucoup moins répandues qu’on pourrait le croire.

Une personne qui arrive à l’heure, respecte ses engagements, connaît son métier et fait correctement son travail possède déjà un avantage considérable.

J’ai aussi eu la chance de ne jamais exercer un emploi que je détestais profondément. Certains étaient fatigants ou répétitifs, mais chacun m’a permis de rencontrer des personnes et de comprendre une nouvelle réalité professionnelle.

---

## Vendre des cuisines et découvrir les systèmes

J’ai ensuite travaillé comme vendeur de cuisines.

Je savais déjà que je voulais évoluer dans la vente et le business, même si je ne savais pas encore sous quelle forme.

Je devais accueillir les clients, comprendre leurs besoins, concevoir des cuisines sur un logiciel, vendre des éviers, des meubles et des plans de travail, puis suivre les projets.

À l’époque, je n’étais pas toujours ravi de me lever pour aller dessiner une cuisine sur un écran.

Avec le recul, c’était pourtant une excellente école.

J’y ai découvert l’importance de la formation, de la standardisation des processus, du suivi des performances et de systèmes informatiques bien conçus.

Lorsqu’une entreprise possède de bons outils et des procédures claires, une personne correctement formée peut devenir rapidement opérationnelle.

J’y ai aussi compris l’importance de la relation client.

Un client n’achète pas simplement des meubles. Il achète une pièce qu’il utilisera tous les jours pendant plusieurs années. Il veut être rassuré, conseillé et accompagné.

Le point qui me frustrait le plus était l’absence de récompense liée à la performance.

Je pouvais m’investir, rester quelques minutes supplémentaires pendant une période chargée et générer davantage de ventes, tout en étant rémunéré exactement comme une personne beaucoup moins impliquée.

Je ne dis pas que toute rémunération doit être entièrement variable.

Mais j’ai compris très tôt que j’aimais les environnements dans lesquels les efforts et les résultats peuvent être reconnus.

C’est probablement l’une des raisons pour lesquelles la vente, puis l’entrepreneuriat, m’ont autant attiré.

---

## Mes premières expériences dans le logiciel

J’ai ensuite rejoint une première startup.

Cette expérience ne m’a pas apporté autant que je l’espérais.

L’entreprise était peu structurée, les responsabilités étaient floues et je n’avais pas encore suffisamment de recul pour comprendre ce qui fonctionnait ou non.

J’y ai néanmoins découvert quelque chose d’important : le logiciel possède une économie très particulière.

Une fois qu’un produit est construit, il peut être distribué à un grand nombre de personnes sans reproduire exactement le même travail pour chaque nouveau client.

Cette idée m’a marqué.

J’ai ensuite travaillé sur un projet logiciel dans le secteur du transport, autour de la digitalisation des bons de livraison et de l’expérience des chauffeurs.

Le problème était réel et le modèle pouvait être pertinent.

Mais ce secteur n’était pas fait pour moi.

J’étais jeune, je n’avais pas la légitimité nécessaire pour recruter et accompagner des chauffeurs expérimentés, et je ne ressentais pas de véritable proximité avec cet univers.

La leçon a été simple :

Une bonne idée ne suffit pas. Il faut également avoir envie de vivre pendant plusieurs années dans le marché que l’on choisit.

Je pouvais comprendre intellectuellement le problème, sans avoir l’énergie nécessaire pour consacrer une décennie à le résoudre.

---

## La création d’une association étudiante autour de la blockchain

En parallèle, j’ai créé en 2017, avec plusieurs amis, l’une des premières associations étudiantes françaises consacrées à la blockchain et aux actifs numériques.

Nous avons été rapidement plongés dans le grand bain.

Il fallait rédiger un business plan, présenter le projet à l’administration de notre école, trouver des partenaires, organiser des événements, créer un site internet, produire du contenu et structurer l’association.

Je touchais à tout et j’adorais ça.

C’était probablement ma première véritable expérience entrepreneuriale.

Je découvrais la sensation de partir d’une idée et de devoir construire progressivement tout ce qui permet de la rendre réelle.

Je ne comprenais cependant pas encore une chose fondamentale : il n’est pas possible de tout faire correctement en même temps.

Même en travaillant tard, en passant certaines nuits sur le projet et en refusant parfois de sortir avec mes camarades, la quantité de travail restait infinie.

Il y avait toujours un nouvel article à rédiger, un partenaire à contacter, un événement à organiser ou une amélioration à apporter au site.

Cette frustration m’a obligé à progresser en gestion de projet.

J’ai appris à préparer des réunions, écrire des comptes rendus, conserver les idées au même endroit, clarifier les responsabilités et choisir les priorités.

J’ai également compris qu’atteindre un résultat satisfaisant à 95 % peut demander relativement peu de temps, alors que chercher les 5 % restants peut doubler la durée du travail.

Le perfectionnisme peut être utile lorsqu’il protège la qualité.

Il devient dangereux lorsqu’il empêche de terminer et de publier.

Cette expérience m’a aussi initié aux partenariats, à la contractualisation, aux relations administratives et à la patience qu’elles nécessitent.

J’y ai surtout découvert la puissance du collectif.

Rendre un projet public attire des personnes qui veulent contribuer, conseiller, partager une compétence ou simplement encourager l’équipe.

J’ai découvert plus tard un livre consacré à cette idée : partager son travail et son processus plutôt que d’attendre d’avoir construit quelque chose de parfait.

J’aurais aimé le lire plus tôt.

---

## Apprendre l’anglais parce que je n’avais pas le choix

À cette époque, il existait encore très peu de contenus francophones de qualité sur la blockchain.

Pour comprendre ce qui se passait, je devais lire des articles et des documents en anglais.

Je traduisais certains contenus pour les rendre accessibles à notre communauté.

Sans vraiment m’en rendre compte, j’apprenais progressivement l’anglais technique.

Je réalisais des interviews, participais à des événements et rencontrais des personnes passionnées.

Certaines étaient brillantes et profondément inspirantes. D’autres avaient une relation au risque, à l’argent ou à la spéculation qui correspondait beaucoup moins à mes valeurs.

J’ai progressivement pris mes distances avec cet univers.

Je ne possède aujourd’hui plus d’actifs numériques à titre personnel et cela me convient très bien.

Mais cette période m’a appris à explorer un marché émergent, à apprendre dans une autre langue et à rencontrer des personnes en dehors de mon environnement habituel.

Elle m’a aussi montré qu’il était possible d’être jeune, inexpérimenté et malgré tout légitime pour poser des questions et créer quelque chose.

---

## Une rencontre qui a compté

Grâce à cette association, j’ai rencontré le fondateur d’une startup spécialisée dans la fiscalité des actifs numériques.

Je suis allé à Paris pour le rencontrer.

Il a accepté de consacrer du temps à des étudiants qui construisaient une association, alors qu’il n’avait aucune obligation de le faire.

Sa simplicité, sa disponibilité et sa vision m’ont marqué.

Cette rencontre m’a montré qu’il était possible de contacter des entrepreneurs expérimentés et d’avoir avec eux de véritables échanges.

Les personnes les plus accessibles ne sont pas toujours celles qui ont le moins de travail.

Certaines comprennent simplement l’importance de transmettre ce qu’elles ont appris.

Nous finirions par travailler ensemble quelques années plus tard.

---

## L’école de commerce et le costume qui ne me correspondait pas

À la sortie de l’école de commerce, j’ai rejoint une entreprise de conseil informatique.

Je pensais probablement que je devais suivre la trajectoire classique d’un diplômé : mettre un costume, rejoindre une entreprise reconnue et travailler de longues journées dans un environnement très structuré.

On m’a demandé de construire une liste d’environ 1 500 contacts, notamment des directeurs des systèmes d’information et des responsables informatiques.

Je passais mes journées à remplir des fichiers de suivi, apprendre un script commercial et réaliser des jeux de rôle.

L’entreprise possédait probablement une véritable machine commerciale.

Mais je n’étais pas prêt à la comprendre.

J’étais encore très concentré sur mes projets liés aux actifs numériques. Je ne comprenais pas le volume de travail nécessaire pour créer un pipeline commercial et je n’avais pas suffisamment de discipline pour reproduire les mêmes actions chaque jour.

Je ne me sentais pas à ma place.

Ce n’était pas forcément la faute de l’entreprise ou de mes collègues.

J’avais simplement essayé de suivre une trajectoire qui ne me correspondait pas.

Je me faisais une certaine image de ce que devait être la réussite professionnelle après une école de commerce.

Il m’a fallu cette expérience pour comprendre que je préférais les environnements entrepreneuriaux, les petites équipes et les projets où je pouvais voir directement l’effet de mon travail.

Et, accessoirement, le costume et les chaussures de ville sous la chaleur n’étaient définitivement pas faits pour moi.

---

## Comprendre que je pouvais vendre mes compétences

Avant cela, j’avais commencé à effectuer quelques missions en freelance.

J’avais notamment travaillé pour une plateforme française mêlant football et actifs numériques.

À l’époque, le produit comptait encore très peu d’utilisateurs.

Comme j’étais passionné de football et que je connaissais cet univers, j’ai immédiatement compris le concept et son potentiel.

Pendant la période du Covid, j’ai notamment traduit une partie du site du français vers le russe, car le championnat russe faisait partie des rares compétitions encore actives.

J’écrivais également des articles pour un média spécialisé et réalisais des missions de community management.

Je répondais aux utilisateurs sur les réseaux sociaux et sur des messageries communautaires pour une plateforme d’échange.

Ces premières missions n’étaient pas toujours parfaitement organisées.

Mais elles m’ont permis de comprendre quelque chose de décisif :

Je pouvais transformer mes connaissances et mon temps en services que des entreprises étaient prêtes à acheter.

Je n’avais pas besoin d’attendre qu’une entreprise publie une offre d’emploi correspondant exactement à mon profil.

Je pouvais identifier un problème, proposer mon aide et facturer le travail réalisé.

Cela a complètement changé ma manière de voir ma carrière.

---

## L’événementiel et la valeur du travail répétable

J’ai également participé à l’organisation d’un grand événement européen consacré aux actifs numériques.

J’y ai observé les premières mécaniques de prospection, de partenariat et de vente de sponsoring.

Je n’étais pas encore suffisamment structuré pour en tirer toutes les leçons.

Le sourcing de contacts et les fichiers de suivi m’ennuyaient toujours autant.

Mais j’ai compris que l’événementiel pouvait devenir une activité très rentable lorsqu’il était bien organisé.

J’ai aussi découvert une tension que je retrouverais plus tard dans mes propres projets : il est parfois plus facile de créer du contenu et d’organiser des événements que de construire le produit ou l’entreprise que l’on voulait initialement développer.

Les activités périphériques peuvent progressivement prendre toute la place.

C’est l’une des raisons pour lesquelles j’ai fini par arrêter un média local que j’avais créé.

Le projet attirait une audience et pouvait générer des opportunités, mais il m’éloignait également de mon ambition principale : construire un logiciel.

---

## Le support client et la découverte d’un SaaS en pleine croissance

Quelques mois plus tard, j’ai repris contact avec le fondateur de la startup spécialisée dans la fiscalité des actifs numériques.

À l’origine, je voulais simplement comprendre comment déclarer correctement certaines opérations.

Il a pris le temps de m’expliquer le fonctionnement du produit.

Il cherchait également de l’aide pour recruter des stagiaires et renforcer le support client.

Je lui ai demandé très simplement en quoi consistait ce travail.

Répondre aux utilisateurs ? Rédiger des articles d’aide ? Comprendre les problèmes et les transmettre à l’équipe produit ?

Je lui ai proposé de me former et de m’en occuper.

C’est ainsi que j’ai signé l’un de mes premiers contrats freelance réellement structurants.

L’entreprise connaissait une croissance très rapide.

Certaines journées commençaient tôt et se terminaient tard. Le nombre de messages explosait, les tickets s’accumulaient et le produit évoluait constamment.

Les articles d’aide que je rédigeais ont fini par cumuler plusieurs centaines de milliers de lectures.

Je découvrais concrètement ce qui se passe lorsqu’un logiciel trouve son marché.

Le nombre d’utilisateurs augmente, les problèmes deviennent plus nombreux et chaque décision produit peut avoir un effet immédiat sur des milliers de personnes.

Cette expérience m’a appris l’obsession du client.

Lorsqu’une demande revenait régulièrement, nous la comptions.

La priorisation ne reposait pas uniquement sur une intuition ou sur l’idée la plus séduisante. Elle reposait sur la fréquence des problèmes rencontrés par les utilisateurs.

J’ai compris que le support client n’était pas un service isolé situé après la vente.

Le support est l’un des endroits où l’on comprend le mieux le produit.

Les tickets révèlent les incompréhensions, les défauts d’interface, les fonctionnalités manquantes et les formulations ambiguës.

Répondre à des centaines de messages peut sembler répétitif.

Mais lorsque l’on prend le temps d’analyser les motifs, chaque message devient une donnée permettant d’améliorer le produit.

Au cours de cette expérience, j’ai également recruté quatre personnes et participé à la formation de deux d’entre elles.

Cela a marqué une nouvelle étape dans mon parcours.

Je ne devais plus seulement savoir faire le travail moi-même.

Je devais être capable de l’expliquer, documenter les processus, transmettre les bonnes pratiques et aider d’autres personnes à devenir rapidement opérationnelles.

J’ai compris qu’un système réellement utile ne doit pas uniquement fonctionner dans la tête de la personne qui l’a construit.

Il doit pouvoir être compris, transmis et reproduit.

Cette expérience m’a aussi montré que recruter ne consiste pas seulement à trouver des personnes compétentes.

Il faut clarifier les attentes, donner du contexte, accompagner les premières semaines et créer un cadre dans lequel chacun peut progresser.

J’ai également observé la manière dont un SaaS réfléchit à son prix, à ses promotions et à la valeur créée.

Un produit utile ne doit pas avoir peur de faire payer son travail.

Si absolument personne ne trouve le prix élevé, cela peut aussi signifier que le produit est sous-évalué.

---

## Pourquoi le customer support a été déterminant

Le support client m’a appris une compétence que je considère aujourd’hui comme essentielle pour un fondateur : savoir écouter sans promettre immédiatement.

Un utilisateur peut demander une fonctionnalité précise alors que son véritable problème se situe ailleurs.

Il faut comprendre son contexte, poser des questions et identifier ce qu’il essaie réellement d’accomplir.

J’ai appris à reformuler, rassurer et expliquer des sujets complexes avec des mots simples.

J’ai également compris la nécessité de documenter.

Lorsqu’une même question revient dix fois, il ne suffit pas d’y répondre dix fois.

Il faut améliorer le produit, rédiger une documentation ou automatiser une partie de la réponse.

Cette logique se retrouve aujourd’hui au cœur d’Artinova.

Je ne veux pas seulement ajouter des fonctionnalités.

Je veux comprendre quelles tâches prennent réellement du temps aux artisans et construire des réponses simples, documentées et répétables.

---

## Pourquoi j’ai choisi la vente

Mes expériences suivantes m’ont ramené vers la vente, mais avec un état d’esprit beaucoup plus mature.

Je travaille encore aujourd’hui comme SDR dans une entreprise SaaS.

Je fais du sourcing, de la prospection, des appels à froid, de la qualification, des démonstrations, de la négociation et des relances.

Et j’aime profondément ce travail.

J’aime l’énergie d’un échange avec une personne qui reconnaît soudainement que la solution présentée peut lui être utile.

J’aime comprendre une objection, adapter un message et progresser grâce à la répétition.

La vente m’a appris la constance.

Il ne suffit pas de passer cinq appels lorsque l’on se sent motivé.

Il faut recommencer le lendemain, puis la semaine suivante, même lorsque les réponses sont négatives.

Elle m’a également appris à mesurer les différentes étapes d’un processus.

Combien de personnes ont été contactées ? Combien ont répondu ? Combien ont accepté un rendez-vous ? Combien ont réellement besoin du produit ?

Les résultats ne dépendent pas uniquement du talent ou de l’inspiration.

Ils dépendent aussi du volume, de la qualité du ciblage, du message, du suivi et de la capacité à apprendre.

Avec le recul, je comprends mieux pourquoi ma première expérience commerciale en conseil avait été si difficile.

Je n’avais pas encore compris la logique de la répétition.

Aujourd’hui, je vois la prospection comme une compétence fondamentale pour un entrepreneur.

Il ne suffit pas de construire un bon produit.

Il faut savoir identifier les bonnes personnes, les contacter et leur expliquer pourquoi ce produit mérite leur attention.

---

## Les projets qui ont précédé Artinova

Entre-temps, j’ai continué à créer.

Un premier projet communautaire m’a appris à développer une newsletter, une audience et des formats éditoriaux récurrents.

Un média local m’a appris à produire des centaines de contenus, atteindre plusieurs millions de vues et construire des automatisations avec des outils de bases de données, d’orchestration et d’intelligence artificielle.

J’ai appris à recruter, déléguer et documenter certains processus.

Mais j’ai également compris les limites de mon fonctionnement.

J’aimais lancer de nouvelles rubriques, imaginer de nouveaux formats et construire les premières automatisations.

J’avais plus de mal à dire non aux nouvelles idées.

Je pouvais facilement passer plusieurs heures à améliorer un système qui n’avait pas encore démontré sa valeur.

J’ai parfois confondu l’activité avec le progrès.

Publier, organiser, automatiser et créer donnent l’impression d’avancer.

Mais ces actions ne sont utiles que lorsqu’elles rapprochent le projet de son objectif principal.

---

## Ce que j’ai mal fait

J’ai lancé certains projets trop vite.

Je me suis parfois intéressé à une idée parce qu’elle était nouvelle, pas parce qu’elle répondait à un problème suffisamment important.

J’ai parfois travaillé sur le design, le nom ou les outils avant d’avoir suffisamment parlé aux futurs utilisateurs.

J’ai aussi sous-estimé le temps nécessaire pour construire une entreprise.

Un projet ne devient pas solide simplement parce que l’idée est bonne et que les premiers retours sont encourageants.

Il faut continuer lorsque la nouveauté disparaît.

Il faut traiter les tâches répétitives, résoudre les détails, suivre les utilisateurs et améliorer la même chose pendant plusieurs années.

Je n’ai pas toujours su le faire.

J’ai parfois abandonné trop tôt.

À d’autres moments, j’ai poursuivi une direction alors que les signaux indiquaient que je devais l’arrêter.

J’ai également voulu mener trop de projets simultanément.

Chaque projet paraissait compatible avec les autres : une newsletter pouvait alimenter une communauté, une communauté pouvait créer des opportunités, une automatisation pouvait gagner du temps.

En pratique, chaque nouveau projet ajoutait une charge mentale, des décisions et des engagements.

La concentration ne consiste pas uniquement à choisir ce que l’on va faire.

Elle consiste surtout à accepter tout ce que l’on ne fera pas.

---

## Ce que je referais

Je referais mes premiers emplois étudiants.

Ils m’ont appris la valeur du travail, de la ponctualité et de la fiabilité.

Je referais la vente de cuisines.

Elle m’a montré la puissance d’une entreprise correctement structurée et l’importance des systèmes.

Je recréerais l’association étudiante.

Même si je ne souhaite plus évoluer dans cet univers, cette expérience m’a appris à construire avec d’autres personnes et à rendre un projet public.

Je referais les missions freelance.

Elles m’ont montré que je pouvais vendre mes compétences sans attendre une autorisation.

Je referais le support client.

C’est probablement l’une des expériences qui m’a le plus appris sur les produits logiciels.

Je referais également la vente SaaS.

Elle m’apporte chaque jour des compétences directement applicables à Artinova.

---

## Ce que je ne referais pas

Je ne choisirais plus une entreprise uniquement parce que sa trajectoire semble logique sur un CV.

Je ne travaillerais pas pendant plusieurs années dans un secteur qui ne m’intéresse pas profondément, même si le modèle économique est séduisant.

Je ne lancerais plus un projet important sans parler suffisamment tôt aux personnes concernées.

Je ne chercherais pas à construire un système parfait avant d’avoir vérifié que le problème mérite réellement d’être résolu.

Je ne multiplierais plus les canaux, les formats et les outils simplement parce qu’ils sont disponibles.

Et je ne confondrais plus aussi facilement être occupé avec avancer.

---

## Pourquoi j’ai choisi le nom Boris Link

Boris Link est un pseudonyme que j’utilise pour rassembler ce que je construis, ce que j’apprends et les personnes que je rencontre.

Le mot « Link » représente le lien.

Le lien entre mes différentes expériences.

Le lien entre la vente, le produit, les systèmes, le contenu et l’entrepreneuriat.

Le lien entre les personnes qui m’ont aidé et celles que je pourrai peut-être aider à mon tour.

Je ne cherche pas à créer un personnage complètement différent de moi.

Boris Link est plutôt une manière de donner un cadre à mon travail public.

Ce site et cette newsletter doivent me permettre de documenter les étapes importantes, de clarifier mes décisions et de conserver une trace de mon évolution.

Créer du contenu m’aide à penser.

Une intuition peut sembler très claire tant qu’elle reste dans ma tête.

Lorsqu’il faut l’écrire, les contradictions apparaissent.

L’écriture oblige à structurer, choisir et expliquer.

Je crée également du contenu parce que de nombreuses ressources partagées par d’autres personnes m’ont aidé.

Des livres, des articles, des podcasts et des témoignages m’ont permis d’éviter certaines erreurs ou de comprendre plus vite une situation.

Je trouve normal d’essayer de transmettre à mon tour ce que j’apprends.

---

## Alors, comment ai-je trouvé Artinova ?

Je ne suis pas certain d’avoir « trouvé » Artinova au cours d’un moment précis.

Le projet semble plutôt être le résultat de toutes les expériences précédentes.

La vente m’a appris à écouter et prospecter.

Le support client m’a appris à transformer des demandes en décisions produit.

Le SaaS m’a appris la puissance d’un logiciel utile.

L’événementiel et les communautés m’ont appris à fédérer des personnes.

Le contenu m’a appris à expliquer et à distribuer.

L’automatisation m’a appris à construire des systèmes.

Mes erreurs m’ont appris à mieux choisir mes priorités.

Artinova est un logiciel vertical destiné aux artisans du bâtiment.

Notre objectif est de construire l’outil le plus utile possible pour les aider à gérer et développer leur entreprise.

Nous travaillons encore à préciser notre cible, notre produit et la meilleure manière de créer de la valeur.

Je ne vais pas publier tous les critères de notre stratégie ou chaque détail de ce que nous découvrons.

Une entreprise doit aussi conserver une partie de sa sauce secrète.

Mais je veux être transparent sur les raisonnements, les doutes et les apprentissages qui accompagnent la construction.

Pour la première fois, toutes les compétences que j’ai développées semblent se rejoindre autour d’un même projet.

---

## Se sentir prêt sans l’être complètement

À 29 ans, bientôt 30, je ne pense pas avoir toutes les réponses.

Je sais que certaines de mes hypothèses seront fausses.

Je ferai probablement de nouvelles erreurs.

Mais je me sens prêt à consacrer les dix prochaines années à construire quelque chose de réellement utile.

Je ne suis pas seul.

Il y a ma famille, mes amis, mon amoureuse, mon associé, les artisans qui acceptent de nous parler, les incubateurs, les mentors et peut-être demain des financeurs et des partenaires.

Tous participent, directement ou indirectement, à cette aventure.

Pendant longtemps, j’ai pensé que mes différents projets prouvaient que je manquais de concentration.

Aujourd’hui, je les vois différemment.

Chacun m’a appris une partie du métier que j’essaie maintenant d’exercer.

Certains projets ont été des réussites.

D’autres ont été des erreurs.

Mais aucun n’a été complètement inutile.

Ils m’ont progressivement conduit vers Artinova.

Et cette fois, je ne cherche pas le prochain projet.

Je veux construire celui-ci.

Pendant longtemps.

La bise,

Boris
`
  }
];

export const journalPosts = [...rawJournalPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);
