 const quiz = [
            {
                personnage: "Arthur",
                citation: [
                    "Ah le printemps ! La nature se réveille, les oiseaux reviennent, on crame des mecs… ",
                    "Mais c’est incroyable, j’ai l’impression de bouffer de la terre avec de la bouse et du gravier",
                    "Vous, vous devriez arrêter de sourire. J’vous promets, ça devient vraiment malsain",
                    "Parce qu’à force de passer pour un con et de foirer systématiquement tout ce que vous faites, vous allez finir par devenir une légende",
                    "Mais qu’est-ce que j’en ai à foutre ! Vous pourriez bien vous marier avec une chèvre si ça vous chante",
                    "Allez vous peignez !",
                    "Bah oui mais j’entrainais pas des débiles… si j’entrainais des débiles, mais pas des débiles comme ça !",
                    "Bon, vous faites deux cents pas sur le chemin et vous montez la garde au cas où quelqu'un approche.",
                    "Je pense que vous glandouillez bien assez comme ça dans la réalité pour qu’on puisse se permettre d’optimiser le fictionnel",
                    "Que vous soyez débile, c’est une chose, mais là, il y a de la mauvaise volonté",
                    "Nouvelle technique : on passe pour des cons, les autres se marrent et on frappe. C'est nouveau."
                ]
            },
            {
                personnage: "Perceval",
                citation:  [
                    "C'est pas faux !",
                    "Plutôt crever la langue dehors plutot qu’être libéré par mamie dégueu !",
                    "C’est pas un frère, c’est un débile.",
                    "La patience est un plat qui se mange sans sauce",
                    "Après demain, à partir d'aujourd'hui ?",
                    "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !"
                ]
            },
            {
              personnage: "Karadoc",
                citation:  [
                    "Mais colonel à titre aromatique. Je vous l'ai déjà dit, c'est pour le féliciter."
                ]
            },
            {
                personnage: "Kadoc",
                citation : [
                    "A Kadoc.",
                    "Faut pas respirer la compote, ça fait tousser."
                ]
            },
            {
            personnage: "Leodagan",
                citation:  [
                    "Moi j'ai appris à lire, ben je souhaite ça à personne.",
                    "Si les dieux avaient dû être avec notre côté, ils nous auraient pas refilé des enfants comme vous."
                ]
            },
            {
            personnage: "Yvain",
                citation:  [
                "Moi, je m’en fous, si on me force à y retourner, je retiens ma respiration jusqu’à ce qu’on arrête de me forcer à y retourner."
                ]
            },
            {
                personnage: "Urgan",
                citation: [
                    "Halte là, manants de bon conseils ! Rebroussez malice à l’instant où il vous en cuira. A l’étuvée."
                ]
            },
            {
                personnage: "Fraganan",
                citation: [
                    "La visite en Carmélide, c’est un peu comme les plans de fraises. Plus c’est espacé, mieux c’est !",
                ]
            },
            {
                personnage: "Angharad",
                citation: [
                    "Hé ben, si un jour j’oublie que je suis boniche, vous serez gentil de me le rappeler !",
                    "Si Monsieur et Madame préfèrent s'envoyer des fions dans l'intimité, je peux aussi me retirer.",
                ]
            },
            {
                personnage: "Anna",
                citation: [
                    "Vous êtes une gigantesque tarlouze.",
                    "Excusez-moi, est-ce qu'à un seul moment, j'aurais par mégarde donné le moindre signe de vouloir discuter avec vous?",
                    "Quand on veut être sûr de son coup, mon petit bonhomme, on plante des carottes, on ne joue pas les chefs d'État !"
                ]
            },
 ]
            

let index = 0;
let citationActuelle = "";

// ✅ Affiche UNE citation
function afficherCitation() {
    const citations = quiz[index].citation;
    const randomIndex = Math.floor(Math.random() * citations.length);
    citationActuelle = citations[randomIndex];

    document.getElementById("citation").textContent =
        `"${citationActuelle}"`;

    document.getElementById("reponse").value = "";
    document.getElementById("resultat").textContent = "";
}

afficherCitation(); // une seule fois au chargement

function verifier() {
    const saisie = document.getElementById("reponse").value
        .trim()
        .toLowerCase();

    const bonneReponse = quiz[index].personnage.toLowerCase();
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
