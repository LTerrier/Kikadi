 const quiz = [
            /*{
                        texte:,
                        livre: "",
                        episode: "",
                    },*/
            {
                personnage: "Arthur",
                citation: [
                    {
                        texte:"Ah le printemps ! La nature se réveille, les oiseaux reviennent, on crame des mecs… ",
                        livre: "Livre II",
                        episode: "La fete du printemps",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Y a pas à dire, dès qu'il y a du dessert, le repas est tout de suite plus chaleureux !",
                        livre: "Livre I",
                        episode: "La tarte aux myrtilles",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                      {
                        texte: "C’est vrai ce qu’on dit, vous êtes le fils d’un démon et d’une pucelle ? […] Vous avez plus pris de la pucelle.",
                        livre: "Livre I",
                        episode: "Les défis de Merlin",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Nouvelle technique : on passe pour des cons, les autres se marrent, et on frappe. C’est nouveau. […] Ah non, ça c’est que nous. Parce qu’il faut être capable de passer pour des cons en un temps record. Ah non, là-dessus on a une avance considérable.",
                        livre: "Livre I",
                        episode: "La dent de requin",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Il commence à doucement me faire chier celui là aussi!",
                        livre: "Livre I",
                        episode: "La romance de Lancelot",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                      {
                        texte: "Sortez-vous les doigts du cul !",
                        livre: "Livre I",
                        episode: "Codes et stratégies",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Ah, mais des tanches pareilles, on devrait les mettre sous verre, hein !",
                        livre: "Livre I",
                        episode: "Basidiomycètes",
                        
                    },
                      {
                        texte: "Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?",
                        livre: "Livre I",
                        episode: "L'imposteur",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                     {
                        texte: "On se fait couper les deux bras, on revient vous voir et 5 minutes après on retourne se mettre sur la gueule ! Mettez-vous à la place des ennemis, c'est désespérant.",
                        livre: "Livre I",
                        episode: "Le coup d'épée",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Non, moi j'crois qu'il faut qu’vous arrêtiez d'essayer d'dire des trucs. Ça vous fatigue, déjà, et pour les autres, vous vous rendez pas compte de c'que c'est. Moi quand vous faites ça, ça me fout une angoisse... j'pourrais vous tuer, j'crois. De chagrin, hein ! J'vous jure c'est pas bien. Il faut plus que vous parliez avec des gens.",
                        livre: "Livre I",
                        episode: "Tel un chevalier",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "La prochaine fois que vous faites venir un barde, je lui ouvre le bide de là à là, j'lui sors les boyaux et je file sa langue à bouffer aux chiens. C'est clair, ça ?",
                        livre: "Livre I",
                        episode: "A la volette",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Ça vous fait pas mal à la tête de glandouiller vingt-quatre heures sur vingt-quatre ?",
                        livre: "Livre I",
                        episode: "Unagi",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Merlin, i'sait déjà pas monter des blancs en neige, alors préparer une potion de polymorphie… Permettez-moi d'avoir des doutes.",
                        livre: "Livre I",
                        episode: "Polymorphe",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "De toutes façons, c'est ma mère, j'vais pas la faire tabasser par la garde.",
                        livre: "Livre I",
                        episode: "Les fêtes de l'hiver",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Un jour je vais lui fumer sa gueule à ce connard !",
                        livre: "Livre I",
                        episode: "Décibels nocturnes",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Il faut affranchir nos compagnons. Vous vous souviendrez ?",
                        livre: "Livre II",
                        episode: "Le message codé",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Vous, vous devriez arrêter de sourire. J'vous promets; ça devient vraiment malsain.",
                        livre: "Livre II",
                        episode: "Le portrait",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Vil félon, où as-tu dissimulé le Graal Sacré ? Dans ton cul ! Tu paieras pour cet affront !",
                        livre: "Livre II",
                        episode: "Le monde d'Arthur",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "On y voit comme à travers un pelle là-dedans...",
                        livre: "Livre II",
                        episode: "L'ivresse",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Chuis p... chuis pas roi, moi ? C'est p..., c'est pas moi le roi ?! (dégainant Excalibur) Et ça, c'est du nougat ???",
                        livre: "Livre II",
                        episode: "L'ivresse",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Vous savez quelle est la différence entre la chèvre et vous ? La chèvre elle a couiné cinq minutes ; vous, vous râlez depuis trois heures.",
                        livre: "Livre II",
                        episode: "Le cadeau",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Mais vous êtes pas mort, espèce de connard ?",
                        livre: "Livre II",
                        episode: "Always",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Et si je vous dis que vous êtes deux glands, là, vous avez du péremptoire. C’est vous qui voyez.",
                        livre: "Livre II",
                        episode: "Unagi II",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "J'vous dis qu'il faut qu'j'aille chez Dagonet, alors j'attends qu'vous vous pétiez un bras, et j'me casse, alors magnez-vous l'tronc !",
                        livre: "Livre II",
                        episode: "Unagi II",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Mais qu'est-ce que que vous faites là, trou du cul ?",
                        livre: "Livre II",
                        episode: "Stargate",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Bohort, je vous donne l'ordre de vous rendre immédiatement en Andalousie pour y rencontrer le chef wisigoth et lui transmettre le message de paix suivant :... « Coucou »...",
                        livre: "Livre II",
                        episode: "Neiges éternelles",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Alors, à qui qu'elle est morte, la vavache ?",
                        livre: "Livre II",
                        episode: "Feue la vache de Roparzh",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Le Saint-Suaire ? Vous avez foutu en l'air le Saint-Suaire ?",
                        livre: "Livre III",
                        episode: "Les clous de la sainte croix,",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Mais c'est pas vrai mais c'est pas vrai mais c'est pas vraiiiiiiii !",
                        livre: "Livre III",
                        episode: "Les clous de la sainte croix,",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Je pense que vous glandouillez bien assez comme ça dans la réalité pour qu'on puisse se permettre d'optimiser le fictionnel.",
                        livre: "Livre IV",
                        episode: "La Poétique II",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Parce que les fraises, quand on leur fout la paix en fait, elles sont consommables. Là c'est aussi des fraises, probablement les mêmes d'ailleurs, mais par un procédé miraculeux, que j'arrive pas à m'imaginer ... on dirait des gadins.",
                        livre: "Livre IV",
                        episode: "La tarte aux fraises",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Vous vous entrainez à mettre le merdier ?!?",
                        livre: "Livre IV",
                        episode: "Unagi IV",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "Non mais.. Que vous soyez débile c'est une chose, mais là y a de la mauvaise volonté quand même",
                        livre: "Livre IV",
                        episode: "La relève",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },   
                     {
                        texte: "MAIS C'EST PAS POSSIBLE QUE LA DAME DU LAC ELLE SACHE PAS NAGER !!!",
                        livre: "Livre IV",
                        episode: "La dame et le lac",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "J'suis roi de Bretagne, j'ai pas de conseil à recevoir d'une clodo !",
                        livre: "Livre V",
                        episode: "La roche et le fer",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Qu'est-ce que c'est que quelqu'un qui souffre et qui fait couler son sang par terre pour que tout le monde soit coupable ? Tous les suicidés sont le Christ. Toutes les baignoires sont le Graal...",
                        livre: "Livre VI",
                        episode: "Dies Irae",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Je suis le Roi Arthur, je ne désespère pas. Jamais je perds courage. Je suis un exemple pour les enfants.",
                        livre: "Livre VI",
                        episode: "Dies Irae",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Mais qu’est-ce qui se passe !",
                        livre: "Livre II",
                        episode: "La corde",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Mais quoi, quoi ?",
                        livre: "Livre II",
                        episode: "La corde",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    },
                    {
                        texte: "Magnez-vous le fion de vous lever, c’est un ordre !",
                        livre: "Livre II",
                        episode: "La corde",
                        indices: [ "Indice 1 : Personnage très important.", "Indice 2 : Roi.", "Indice 3 : Porte Excalibur." ]
                    }
                ]
            },
            {
                personnage: "Perceval",
                citation:  [
                     {
                        texte:"C'est pas faux !",
                        livre: "Livre I",
                        episode: ["La botte secrète","La botte secrete","la botte secrete","la botte secrète"],
                        
                    },
                     {
                        texte:"Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !",
                        livre: "Livre I",
                        episode: ["Ambidextrie","ambidextrie"],
                        
                    },
                     {
                        texte:"Une fois, à une exécution, je m'approche d'une fille. Pour rigoler, je lui fais : « Vous êtes de la famille du pendu ? »... C'était sa sœur. Bonjour l'approche !",
                        livre: "Livre I",
                        episode: "La Coccinelle de Madenn",
                        
                    },
                     {
                        texte:"Faut faire comme avec les scorpions, qui se suicident quand ils sont entourés par le feu. Faut faire un feu en forme de cercle, autour d'eux, comme ça ils se suicident, pendant que nous on fait le tour, et on lance de la caillasse de l'autre côté pour brouiller !",
                        livre: "Livre I",
                        episode: "Heat",
                        
                    },
                     {
                        texte:"Après demain, à partir d'aujourd'hui ?",
                        livre: "Livre II",
                        episode: "Sept cent quarante-quatre",
                        
                    },
                     {
                        texte: "J'voudrais pas faire ma raclette, mais la soirée s'annonce pas super.",
                        livre: "Livre II",
                        episode: "Un roi à la taverne",
                        
                    },
                    {
                        texte: "C’qui compte, c’est les valeurs !",
                        livre: "Livre II",
                        episode: "Perceval et le contre sirop",
                        
                    }, 
                    {
                        texte: "Et toc ! Remonte ton slibard, Lothard !",
                        livre: "Livre II",
                        episode: "L'absent",
                        
                    },  
                    {
                        texte: "A l'époque quand je le disais, tout le monde oubliait de me le souhaiter. Ça me faisait pleurer. Ça m'a gonflé, j'ai arrêté.",
                        livre: "Livre II",
                        episode: "Le tourment II",
                        
                    },  
                    {
                        texte: "Dans la vie, j’avais deux ennemis : le vocabulaire et les épinards. Maintenant j’ai la botte secrète et je bouffe plus d’épinards. Merci, de rien, au revoir messieurs-dames.",
                        livre: "Livre II",
                        episode: "La botte secrète II",
                        
                    },  
                    {
                        texte: "Alors là, c'est Ashton, lui c'est Rutz, lui c'est Pierce, l'autre derrière c'est Pierce aussi, j'ai jamais compris pourquoi, et lui euh, j'crois qu'il a pas d'prénom, tout le monde l'appelle Connard...",
                        livre: "Livre II",
                        episode: "La Garde Royale",
                        
                    },  
                    {
                        texte: "La Garde Royale",
                        livre: "Livre II",
                        episode: "O'brother",
                        
                    },
                    {
                        texte: "C'est l'anniversaire dans tous les recoins, c'est presque tous les ans qu'on a l'anniversaire. Grâce à cet anni... c'est la joie c'est pratique, c'est au moins un principe à retenir pour faire la frite... c'est huuuum lalalalala. Cette année c'est bien, l'anniversaire tombe à pic !",
                        livre: "Livre II",
                        episode: "Les félicitations",
                        
                    },
                    {
                        texte: "PAYS DE GALLES INDÉPENDANT !",
                        livre: "Livre II",
                        episode: "L'ivresse",
                        
                    },  
                    {
                        texte: "Sans blague on pourrait pas fêter la mort des mecs que je connais pour une fois ?",
                        livre: "Livre III",
                        episode: "Le jour d'Alexandre",
                        
                    },  
                    {
                        texte: "Non, vous, vous vous maravez. Quand on a pas de technique, il faut y aller à la zob.",
                        livre: "Livre III",
                        episode: "Morituri",
                        
                    },  
                    {
                        texte: "Le code c'est le code ? Ça va, ils se sont pas trop cassé le bonnet, pour l'trouver celui-là !",
                        livre: "Livre III",
                        episode: "Poltergeist",
                        
                    },  
                    {
                        texte: "Y'a du grabuge alors on appelle les 2 couillons... On met les glandus à profit !",
                        livre: "Livre III",
                        episode: "Poltergeist",
                        
                    },  
                    {
                        texte: "Les framboises sont perchées sur le tabouret de mon grand-père.",
                        livre: "Livre III",
                        episode: "Poltergeist",
                        
                    },  
                    {
                        texte: "À ROULEEEEETTES !! HOULA... J'l'ai un peu trop gueulé ça, non ? À roulettes.",
                        livre: "Livre III",
                        episode: "L'étudiant",
                        
                    },  
                    {
                        texte: "Ouh làlà! elle va pas me gonfler longtemps, la rouquine !!!",
                        livre: "Livre III",
                        episode: "Aux Yeux De Tous II",
                        
                    },  
                    {
                        texte: "Sloubi 1, sloubi 2, sloubi 3, sloubi 4, sloubi 5 [...] sloubi 324, sloubi 325!...",
                        livre: "Livre III",
                        episode: "Chante Sloubi",
                        
                    },  
                    {
                        texte: "Dans le Languedoc, ils m'appellent Provençal. Mais c'est moi qui m'suis gouré en disant mon nom. Sinon, en Bretagne, c'est le Gros Faisan au sud, et au nord, c'est juste Ducon ..",
                        livre: "Livre III",
                        episode: "Le Sanglier De Cornouaille",
                        
                    },
                    {
                        texte: "Au printemps, j’aime bien pisser du haut des remparts au lever du soleil… Y’a une belle vue !",
                        livre: "Livre IV",
                        episode: "Tous les matins du monde, 2e partie",
                        
                    },    
                     {
                        texte: "Sur une échelle de 2 à 76, et là je préfère prendre large, de 2 à 71 on ne nous écoute pas, de 72 à 75, on nous écoute toujours pas, et seulement à 76 on nous laisse parler sans nous engueuler.",
                        livre: "Livre IV",
                        episode: "L’Échelle de Perceval",
                        
                    },   
                     {
                        texte: "Mais cherchez pas à faire des phrases pourries... On en a gros, c'est tout !",
                        livre: "Livre IV",
                        episode: "Les Exploités II",
                        
                    },   
                     {
                        texte: "En plus je connais une technique pour tuer trois hommes en un coup rien qu’avec des feuilles mortes ! Alors là, vous êtes deux, vous avez bien de la chance.",
                        livre: "Livre IV",
                        episode: "Les chaperons",
                        
                    },   
                     {
                        texte: "Vous vous prenez pour un enseignant ?",
                        livre: "Livre IV",
                        episode: "Les chaperons",
                        
                    },   
                     {
                        texte: "Bon ça suffit maintenant ! Vous voulez qu'j'me foute en rogne comme un enseignant ? ... Qu'est ce que j'ai avec ça moi ?",
                        livre: "Livre IV",
                        episode: "Les chaperons",
                        
                    },   
                     {
                        texte: "C'est pas moi qu'explique mal, c'est les autres qui sont cons !",
                        livre: "Livre IV",
                        episode: "Perceval Fait Raitournelle",
                        
                    },   
                     {
                        texte: "Elle a compris la vilaine frisée ? On a dans l'projet de fonder un clan autonome pour partir à l'aventure et ramener du pognon pour entretenir vos grosses miches !! Alors le cageot il dit merci et il ferme sa boîte à caca!!!",
                        livre: "Livre V",
                        episode: "L'épée des rois",
                        
                    },   
                     {
                        texte: "Bien sur que je sais crocheter, le seul ennui c’est qu’on a pas les outils. A la limite j’ai ma chemise, mais c’est trop mou.",
                        livre: "Livre V",
                        episode: "Les éxilés",
                        
                    },   
                     {
                        texte: "Vous, vous avez une idée derrière la main, j'en mettrais ma tête au feu!",
                        livre: "Livre V",
                        episode: "Perceval de Sinope",
                        
                    },   
                     {
                        texte: "Si on avait bu un coup dans des trucs qui s'cassent, j'en aurais pété un par terre avant d'monter dans ma chambre, pour bien montrer comment j'suis colère.",
                        livre: "Livre V",
                        episode: "La promesse",
                        
                    },   
                     {
                        texte: "Je vais vous poser une série de questions. Vous répondez par oui, non, ou Zbradaraldjan. Ok c'est parti : où se trouve l'oiseau ?... Allez c'est facile ça. Trouve pas ? Bon tant pis. C'était sur la branche. Eh oui, y a des pièges.",
                        livre: "Livre V",
                        episode: "Les recruteurs",
                        
                    },
                     {
                        texte: "Si la mémoire est à la tête ce que le passé, peut-on y accéder à six ? Oui, non, zbradaraldjan ?",
                        livre: "Livre V",
                        episode: "Les recruteurs",
                        
                    },  
                    {
                        texte: "Ma tante me demande de trouver un endroit pour y entreposer 667 noix. A la cave il y a de la place pour 595, à la remise il y a la place pour 337. Qu'est-ce que je fais ? Je les ?... Allez on cherche bon dieu ! Je les... Zbradaraldjan le grenier!... Allez il dégage le bourrin !",
                        livre: "Livre V",
                        episode: "Les recruteurs",
                        
                    }, 
                    {
                        texte: "Je crois que c'est rentré par là, et c'est ressorti par là ; et c'est re-rentré par là, et c'est RE-RE-SORTI PAR LA. ET NOUS ON S'SAIGNE AUX QUATRE FROMAGES !!!",
                        livre: "Livre V",
                        episode: "Domi Nostrae",
                        
                    }, 
                    {
                        texte: "Par contre pas un mot là, sinon la porte. Bon là y en a pas, mais ce n'est pas la première fois qu'on fabrique une porte à la dernière minute pour virer un petit trou de balle qui fait son malin.",
                        livre: "Livre V",
                        episode: "Unagi V",
                        
                    }, 
                    {
                        texte: "On a une autorité naturelle, il faut en profiter... J'suis sûr que même à poil on ferait toujours chef !",
                        livre: "Livre V",
                        episode: "Le royaume sans tête",
                        
                    }, 
                    {
                        texte: "Votre femme, si j'avais pas la flemme de descendre de là, elle aurait pris mon pied dans son cul depuis un moment.",
                        livre: "Livre V",
                        episode: "Les dauphins",
                        
                    },
                    {
                        texte: "Non mais Sire, faut pas prendre ce qu'on dit au sérieux, vous savez bien qu'on est des cons, nous.",
                        livre: "Livre V",
                        episode: "Le retour du roi",
                        
                    }, 
                    {
                        texte: "Nan mais je l'ai déjà impressionné, moi ! Je lui ai expliqué une nouvelle technique de combat : on se bat à moitié à mains nues, et à moitié avec du calcium. J'peux vous dire il faisait moins le malin !",
                        livre: "Livre VI",
                        episode: "Dux bellorum",
                        
                    }
                ]
            }
 ]
            

let index = 0;
let citationActuelle =  "";
let indiceActuel = 0;

function normalize(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function montrerIndice() {
    const zoneIndice = document.getElementById("indice");

    // Si la citation n'a pas d'indices
    if (!citationActuelle.indices) {
        zoneIndice.textContent = "Aucun indice disponible.";
        return;
    }

    // Si on a encore des indices à afficher
    if (indiceActuel < citationActuelle.indices.length) {
        zoneIndice.textContent = citationActuelle.indices[indiceActuel];
        indiceActuel++;
        return;
    }

    // Si on a déjà affiché les 3 indices → afficher la réponse
    zoneIndice.textContent = `Réponse : ${quiz[index].personnage}`;
}


// ✅ Affiche UNE citation
function afficherCitation() {
    const citations = quiz[index].citation;
    const randomIndex = Math.floor(Math.random() * citations.length);
    citationActuelle = citations[randomIndex];

    document.getElementById("citation").textContent =
        `"${citationActuelle.texte}"`;

    document.getElementById("reponse").value = "";
    document.getElementById("resultat").textContent = "";
    indiceActuel = 0;
    document.getElementById("indice").textContent = "";

}


afficherCitation(); // une seule fois au chargement

function verifier() {
    const saisie = normalize(document.getElementById("reponse").value);
    const bonneReponse = normalize(quiz[index].personnage);
    const resultat = document.getElementById("resultat");

    if (saisie === bonneReponse) {
        resultat.textContent = "✅ Bonne réponse !";
        resultat.className = "result bon";
    } else {
        resultat.textContent =
            `❌ Mauvaise réponse. C'était : ${quiz[index].personnage}`;
        resultat.className = "result mauvais";
    }



    // Question suivante après 2 secondes
    setTimeout(() => {
        index = (index + 1) % quiz.length;
        afficherCitation();
    }, 2000);
}
