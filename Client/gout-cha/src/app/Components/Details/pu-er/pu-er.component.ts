import { Component } from '@angular/core';
import { ChapterComponent } from "../chapter/chapter.component";
import { Chapter } from '../../../Models/chapter';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pu-er',
  standalone: true,
  imports: [ChapterComponent, CommonModule],
  template: `
    <!-- Titre section -->
    <h1 class="text-c1d1d1b text-center text-8xl">Thés Pu'er</h1>
    <p class="text-c1d1d1b text-center text-xl">De plus en plus emblématiques des amateurs de thé, les thés Pu'er sont encore source de nombreux mystères. <br/>Essayons ici de mieux comprendre qui sont ces thés afin de mieux savoir les choisir.</p>
  
  <section id="intro" class="">
            <div class="container">
            	
            	<!--Start of row -->
                <div class="row">
                    <div class="tasting-block-B row">
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-bottom-30">
                        	<p class="pbloc"><span class="alinéa"></span>Les <i>thés Pu'er</i> sont des thés traditionnels du sud du Yunnan, à partir de théiers à grandes feuilles, dont les étapes de fabrication contiennent une phase de cuisson à la poêle et de séchage au soleil. Ils existent depuis 1976 en deux variétés, l'une dite "crue" se rapprochant d'un thé vert (variété originale), l'autre dite "cuite" qui résulte de la fermentation de la première. 
                        	<br class="interligne"><span class="alinéa"></span>Depuis le 9e siècle, le thé du Yunnan se compresse en une certaine forme pour en faciliter le transport. Le dalaï lama du Tibet en recevait en forme de flame. L'empereur de la dynastie Tang en galettes de 357g. C'est cette forme qui reste la plus répandue. Aujourd'hui, les galettes les plus rares peuvent se vendre jusqu'à 30 000 euros (la galette), comme le vin, en fonction de leur terroir, exploitation, année, qualité des autres galettes vendues. Avec l'arrivée du thé pu'er sur le marché européen, et la plus faible consommation de thé de ces derniers, on trouve désormais des galettes de 100g, ou des petits nids de 5g. 
						
							</p>
						</div>
						<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 margin-bottom-60">
								<p class="pbloc text-centered" style="font-weight:600;"><i>Galettes de thé Pu'er</i> <span class="中文">普洱茶饼</span></p>
								<img width="100%" src="/assets/images/puerchabing.jpg" style="border: 1px solid #1D1D1B"/>
						</div>
					</div>
				</div>
			</div>
			
	</section>

<!-- Chapter 1 section -->
<div class="px-20">

<app-chapter 
  *ngFor="let chapter of chapters"
  [chapter]=chapter>
</app-chapter>

</div>


<!-- Begining of section résa-->
        <section id="thes" class="Réservations">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 text-centered">
                        <p class="text-centered fs-325rem"><b>Nos thés Pu'er</b></p>
                        <div class="separator" style="background:#75ab3d;"></div>
                    </div>
                    
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        
                        
                        <div class="pages_icon col-md-6 col-sm-6 col-xs-6 text-centered">
                            <a href="reservations/resa-3.php" target="_blank">
                                <div class="pages_rot">
                                
                                    <div class="pages_rot_icon" style="background:url(/assets/images/fondPuerSheng.jpg) no-repeat center center;background-size:cover;">
                                        <a href="" target="_blank"></a>
                                    </div>
    
                                    <p class="text-centered fs-175rem solo">Thés Pu'er crus</p>
                                    <div class="separator3"></div>
                                    <p class="text-centered fs-125rem gras"><b></b></p>
                                </div>
                            </a>
                        </div>
                        <div class="pages_icon col-md-6 col-sm-6 col-xs-6 text-centered">
                            <a href="reservations/resa-3.php" target="_blank">
                                <div class="pages_rot">
                                
                                    <div class="pages_rot_icon" style="background:url(/assets/images/fondPuerShu.jpg) no-repeat center center;background-size:cover;">
                                    	<a href="" target="_blank"></a>
                                    </div>
    
                                    <p class="text-centered fs-175rem solo">Thés Pu'er cuits</p>
                                    <div class="separator3"></div>
                                    <p class="text-centered fs-125rem gras"><b></b></p>
                                </div>
                            </a>
                        </div>
                    </div>
                
                   
                </div>
            </div>
        </section>
  `,
  styles: ``
})
export class PuErComponent {
  chapters : Chapter[] = [{
    title: "Thé Pu'er cru 普洱生茶",
    images: [{
      title: "Caravanier sur l'ancienne route du thé",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Men_Laden_With_Tea%2C_Sichuan_Sheng%2C_China_1908_Ernest_H._Wilson_RESTORED.jpg?uselang=fr",
      overlay: '"Men Laden with Tea, Sichuan" <br/> 1908, Ernest H.Wilson'
    },
    {
      title: "Théier à grandes feuilles 大叶茶树",
      src: "/assets/images/dayeChashu.jpg"
    }],
    content: `
          Le thé Pu'er tient son nom de la ville de Pu'er, anciennement <a href="https://www.openstreetmap.org/node/4527824590#map=7/22.7331/100.4844" target="_blank"><i>Sīmáo</i></a>. Le Yunnan centralisait son thé en la ville de Pu'er (nommée à partir de l'ethnie Pu et du lac Erhai) pour un marché annuel, dont les caravanes partaient sur la route du thé, tant pour emmener le thé chez les royaumes plus puissants (tributs) que pour vendre le reste aux peuples d'Asie mineure. Ce thé existait donc sous deux formes : en feuilles libres (en vrac), consommées sur place, et en forme compressées pour l'export. <br/>
          L'histoire du Pu'er est lié à l'histoire du Yunnan et aux peuples qui y vivent. On y trouve de très divers groupes linguistiques, et notamment le groupe Austroasiatique, qui partage propablement un ancêtre commun avec les langues les plus vieilles d'Asie du Sud-Est et des Austronésiens (Australie, Indonésie, Polynésie, Madagascar). Le Khmer et le Vietnamien font partie des langues Austroasiatiques. Qui dit langue, dit culture, aussi on parle aujoud'hui d'ethnies, et en comparaison des groupes ethniques qui ont conquis de plus vastes territoires que leur zone de répartition d'origine (majoritaires au sein d'un pays), on leur attribue la dénomination d'ethnies minoritaires. <br/>
          Parmi les nombreuses ethnies minoritaires du Yunnan (cf. <a href="/pages/nous/lieux.php" target="_blank">notre page sur le Yunnan</a>), les ethnies De'Ang et Blang qui se répartissent entre Myanmar, l'Assam et la Chine semblent avoir participé à la migration des théiers à grandes feuilles. Deux indices permettent de soutenir cette théorie : premièrement, les théiers ont migré vers des zones où ces ethnies ont migré (vers l'Assam puis l'inde, vers Myanmar et la Thailande le long du fleuve Irrawady) il y a environ 3800 ans<sup>[<a href="/pages/nous/recherche.php#mee18" target="_blank">1</a>]</sup>, deuxièmement leur mythe de la création remplace le dieu qui se sacrifie (PanGu dans la mythologie chinoise, Rangi dans la mythologie Māori) pour donner naissance à la géographie de la planète (puis à l'humanité) par un jeune théier. Ses branches, ses racines et sa sève deviennent montagnes, herbes et rivières, tandis que ses feuilles deviennent des demi-dieux, ancêtres de l'humanité. Ce mythe place le théier au rang de divinité, et c'est encore comme tels que sont considérés les quelques théiers millénaires restants. <br/>
          Si les théiers sont des dieux, les feuilles et les plats que l'on peut en faire sont des offrandes. Dans ces traditions, consommer les feuilles de thé ne se fait pas que par infusion dans une théière en terre, mais de plus de 15 manières différentes. Parmi tant d'autres, on dénombre les feuilles de thé mastiquées crues, cuites avec des pierres brûlantes, bouillies dans du bambou, séchées au soleil ou conservées en saumure de vinaigre et consommées comme accompagnement. La tradition de cuire les feuilles sur le feu pour en obtenir un breuvage existe aussi, sous le nom chinois de <i>guànchá</i> <span class="中文" size="1.5rem">罐茶</span>, littéralement "thé en pot-sur-braises". Le procédé est rudimentaire : dans un pot en terre cuite placé sur les braises, on place une bonne pincée de feuilles de thé fraîches, que l'on laisse griller. Lorsque l'odeur de l'herbe a disparu, on y verse de l'eau qui bout instantanément. On sert alors le breuvage (sans les feuilles).<br/>
          Bien qu'élémentaire, cette tradition pourrait être l'ancêtre du thé torréfié moderne, qui a évolué par le biai du thé de Pu'er.
        `,
    style: 'right'
  },

  {
    images: [{
      title: "Thé en pot sur braises 罐茶",
      src: "/assets/images/guancha.jpg"
    },
    {
      title: "Feuilles en vrac 散茶叶",
      src: "/assets/images/sanShengChaye.jpg"
    }],
    content: `
          <span class="alinéa"></span>C'est au neuvième siècle, alors que le Yunnan s'appelle "Royaume de Nanzhao" et que la Chine s'appelle "L'empire de Tang", que le thé de Nanzhao va sortir de son territoire pour être découvert par d'autres cultures. Au nord de Nanzhao se trouve le Royaume du Tibet, à l'est le Royaume de Tang. Deux puissances tantôt bénines tantôt bélliqueuses. Lorsque le Tibet entre en guerre contre Tang, l'apport en thé du Jiangsu (autour de l'actuel Hangzhou) essentiel à la vie pastorale des hautes montagnes (c'est leur seul moyen d'éliminer les graisses ingérées pour tenir le froid de l'altitude) est rompu, les tibétains se tournent vers leur vassal méridional. Le thé de Nanzhao sort alors du pays et est très apprécié. Il est compressé pour en faciliter le transport, et se stocke plus facilement. Quand, plus tard, Nanzhao devient vassal de Tang pour ne pas être conquis , les mêmes galettes deviennent part du tribut de l'empereur, et deviennent très appréciées des lettrés. <br>
          En plus d'être offert comme tribu à la cour impériale Tang, et d'être vendu aux tibétains, les caravanes voyagent jusqu'en perse, où le thé est vendu. Aucune trace ne va plus loin, mais on postule que Tolstoï aurait bu du thé Pu'er, puisque la Russie obtenait du thé via la route de la soie interne, connectée à la route du thé. <br class="interligne">
          <span class="alinéa"></span>C'est au 18e siècle, dans le roman <span class="中文" size="1.5rem">红楼蒙</span> "Rêve dans le pavillon rouge", que le mot "Thé Pu'er" apparaît à l'écrit<sup>[<a href="https://ctext.org/post-han?searchu=%E6%99%AE%E6%B4%B1" target="_blank">2</a>]</sup>. Lors de la chute de la Chine impériale en 1914, les lignes de chemin de fer installées par les français au 19e siècle, reliant le Yunnan au Vietnam, permettent l'export d'une très grande quantité de galettes de thé vers les concessions françaises de Hanoi, Pakoi (Beihai) et Canton. Le thé devient à la mode des chinois insulaires de Maccao, Hong-kong et Taïwan. Le thé Pu'er s'exporte via Hong-kong et Taïwan, même durant la révolution culturelle. En 1976, l'usine de Menghai (usine principale de Pu'er, alors rachetée par des Hong-kongais peu scrupuleux) met au point une techniques empruntée au Liubao (un thé fermenté du Guangxi) dite "en piles humides", qui permet d'obtenir un thé fermenté sensé ressembler au galettes qui ont lentement fermenté à froid durant le transport et les longues années de garde, en 3 mois. La variante cuite est née : un thé fermenté très doux, qui fait fureur chez les occidentaux. Il faudra attendre l'an 2000 pour que le Pu'er (surtout la variante fermentée) plaise à la bouche chinoise en dehors des habitants du sud (Guangdong, Guangxi, Guizhou et Hunan) qui le consomment déjà assorti de fleurs de chrysanthème ou de peaux d'orange séchées. En 2008, le thé Pu'er devient le premier AOP chinois, il ne peut désormais qu'être produit dans le Yunnan, à partir de théier Daye (à grandes feuilles, variété Camellia sinensis var. Assamica), et doit suivre les étapes de production dans le bon ordre. La technique moderne du thé Pu'er associe le savoir-faire ancestral des populations indigènes du Yunnan et le savoir-faire technique des Chinois en matière de diversité de thés. Il existe plus de 1000 jardins reconnus et probablement plus encore de petites plantations familiales. <br>
          Le thé Pu'er en galette ou en brique s'enveloppe dans un papier en bois de murier vieilli fait selon une méthode ancestrale. Moins une galette a d'inscription sur son papier, plus le thé est authentique et provient de petites exploitations. La seule obligation moderne reste la date de compression, imprimée en rouge sur le dernier coin plié. Le thé Pu'er s'écrit <span class="中文" size="1.5rem">普洱</span> en chinois, <i>pǔ'ěr</i> en pinyin (méthode de retranscription du chinois depuis 1949), et <i>Pu'erh</i> en Wade-Giles (méthode de retranscription du Chinois au 18e siècle, encore utilisée par les pays anglophones). <br>La variante crue se nomme <i>shēng</i> <span class="中文" size="1.5rem">生</span>.
          `,
    style: 'right'
  },

  {
    images: [{
      title: "Galettes de thé Pu'er cru vs cuit",
      src: "/assets/images/11.jpg"
    },
    {
      title: "Infusion de thé Pu'er cru vs cuit",
      src: "/assets/images/22.jpg"
    }],
  },

  {
    title: "Thé Pu'er cuit 普洱熟茶",
    images: [{
      title: "Fermentation en piles 渥堆发酵",
      src: "/assets/images/wodui.jpg"
      },
      {
        title: "Vieilles têtes de thé 老茶头",
        src: "/assets/images/laoChaTou.jpg"
      }],
    content:`
      <span class="alinéa"></span>Le thé fermenté est une spécialité chinoise de nombreuses régions. Le Sichuan, l'Anhui, le Hunan et le Guangxi sont réputés depuis des siècles pour leurs thés fermentés. La technique est simple mais demande une grande maîtrise : empiler les feuilles de thé cuites mais humides en grandes piles (on parle en tonnes de thé), et les conserver humides pendant 3 semaines à 3 mois. De nombreux microbiotes présent dans l'air se développent alors dans les piles de thé, faisant monter la température (comme le foin). Une fois le stade souhaité atteint, les feuilles sont séchées, puis compressées en brique ou en galettes, parfois dans des tubes de bambous, puis conservées plusieurs années avant consommation. <br class="interligne">
									<span class="alinéa"></span>En 1976, les amateurs de thé Pu'er de Hong-kong souhaitaient pouvoir produire en 3 mois ce qu'un Pu'er cru vieux donnait en 30 ans. La perte de l'astringence, le retour doux instantané et le suave qui colonise les papilles, ces qualités sont propres à un Pu'er cru fermenté à froid sur le cours de plusieurs années (appelé "post-fermenté" en europe, par erreur) par l'environnement. Les grands amateurs de thés fermentés du sud de la Chine ont exporté le processus de <i>fermentation en piles</i> des thés fermentés, appelé <i>wòduī</i> <span class="中文">渥堆</span> littéralement "piles humides". Le thé gagne en équilibre, perd son amertume âcre et gagne en amertume suave et douce. La présence de microbiotes dans le processus de formation favorise également le dépôt de nombreux acides aminés et enzymes qui sont bons pour la flore intestinale et qui favorisent une meilleure élimination des graisses (il ne fait pas maigrir, mails il participe à aider à une meilleure digestion des graisses). Le Thé Pu'er cuit est né. On l'appelle <i>shóu</i> ou <i>shú</i> <span class="中文">熟</span>, qui signifie "mûr" ou "cuit". <br class="interligne">
									<span class="alinéa"></span>Comme pour les autres thés fermentés, le processus de wodui est inégal, et produit dans la partie supérieure (jusqu'à 5cm du haut de la pile) un agrégat gluant et sucré de feuilles de thé, appelé "vieilles têtes de thé"  <i>lǎochátóu</i> <span class="中文">老茶头</span>. Une fois séchés, ces agrégats forment des paquets naturels, qu'il n'est pas aisé de briser. Leur qualité est très supérieure au reste de la pile, ce qui fait que les artisans les gardent pour leur propre consommation. Si un thé Pu'er cuit donne une liqueur épaisse et sombre, l'infusion de laochatou donne une infusion claire et douce, beaucoup plus proche d'un Pu'er cru lentement fermenté à froid. 
						`,
    style: 'left'
  }
  ]
;
}
