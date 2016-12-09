-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Client :  localhost:3306
-- Généré le :  Ven 09 Décembre 2016 à 12:26
-- Version du serveur :  5.5.38
-- Version de PHP :  5.5.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `tp-proverb-service`
--

-- --------------------------------------------------------

--
-- Structure de la table `proverb`
--

CREATE TABLE `proverb` (
`id` int(11) NOT NULL,
  `text` varchar(255) NOT NULL,
  `author` varchar(100) NOT NULL,
  `theme` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=137 DEFAULT CHARSET=latin1;

--
-- Contenu de la table `proverb`
--

INSERT INTO `proverb` (`id`, `text`, `author`, `theme`) VALUES
(1, 'L''absence diminue les mÃ©diocres passions et augmente les grandes, comme le vent Ã©teint les bougies et allume le feu.', 'La Rochefoucauld', 1),
(2, 'Si tu veux Ãªtre apprÃ©ciÃ©, meurs ou voyage.', 'Proverbe Persan', 1),
(3, 'Les absents sont assassinÃ©s Ã  coups de langue.', 'Scarron', 1),
(4, 'Quand le soleil s''Ã©clipse, on en voit la grandeur.', 'Cf. SÃ©nÃ¨que', 1),
(5, 'La prÃ©sence est une puissante dÃ©esse.', 'Goethe', 1),
(6, 'L''absence est le plus grand des maux.', 'La Fontaine', 1),
(7, 'L''Ã©loge des absents se fait sans flatterie.', 'Gresset', 1),
(8, 'Trois choses donnent la mesure de l''homme: la richesse, le pouvoir, l''adversitÃ©.', 'Proverbe Arabe', 2),
(9, 'L''homme est un apprenti, la douleur est son maÃ®tre.', 'Alfred de Musset', 2),
(10, 'La glaise ne devient terre Ã  mouler qu''aprÃ¨s avoir Ã©tÃ© pÃ©trie.', 'Proverbe Grec', 2),
(11, 'C''est une loi: souffrir pour comprendre.', 'Eschyle', 2),
(12, 'L''infortune est la sage-femme du gÃ©nie.', 'NapolÃ©on 1er', 2),
(13, 'Il n''y a rien de si infortunÃ© qu''un homme qui n''a jamais souffert.', 'Joseph de Maistre', 2),
(14, 'Ce qui Ã©tonne, Ã©tonne une fois, mais ce qui est admirable est de plus en plus admirÃ©.', 'J. Joubert', 3),
(15, 'L''admiration est la fille de l''ignorance.', 'Chevalier de mÃ©rÃ©', 3),
(16, 'Nous aimons toujours ceux qui nous admirent, et nous n''aimons pas toujours ceux que nous admirons.', 'La Rochefoucauld', 3),
(17, 'La jeunesse a cela de beau qu''elle peut admirer sans comprendre.', 'Anatole France', 3),
(18, 'Un sot trouve toujours un plus sot qui l''admire.', 'Nicolas Boileau', 3),
(19, 'La prospÃ©ritÃ© montre les heureux, l''adversitÃ© rÃ©vÃ¨le les grands.', 'Pline le Jeune', 4),
(20, 'Il faut de plus grandes vertus pour soutenir la bonne fortune que la mauvaise.', 'La Rochefoucauld', 4),
(21, 'L''Ã¢me vile est enflÃ©e d''orgueil dans la prospÃ©ritÃ© et abattue dans l''adversitÃ©.', 'Epicure', 4),
(22, 'La prospÃ©ritÃ© dÃ©couvre nos vices et l''adversitÃ© nos vertus.', 'Francis Bacon', 4),
(23, 'Quand le ciel veut sauver un homme, il lui donne l''affection pour le protÃ©ger.', 'Lao-Tseu', 5),
(24, 'Les grandes pensÃ©es viennent du coeur, et les grandes affections viennent de la raison.', 'Louis de Bonald', 5),
(25, 'L''homme arrive novice Ã  chaque Ã¢ge de la vie.', 'Chamfort', 6),
(26, 'Les jeunes vont en bandes, les adultes par couples, et les vieux tout seuls.', 'Proverbe SuÃ©dois', 6),
(27, 'Chaque Ã¢ge a ses plaisirs, son esprit et ses moeurs.', 'Boileau', 6),
(28, 'D''Ã¢ge en Ã¢ge on ne fait que changer de folie.', 'La ChaussÃ©e', 6),
(29, 'Aimer, c''est jouir, tandis que ce n''est pas jouir que d''Ãªtre aimÃ©.', 'Aristote', 7),
(30, 'Quand on aime, ou bien l''on n''a point de peine, ou bien l''on aime jusqu''Ã  sa peine.', 'Saint Augustin', 7),
(31, 'On est aisÃ©ment dupÃ© par ce qu''on aime.', 'MoliÃ¨re', 7),
(32, 'Qui aime l''arbre aime aussi les branches.', 'CitÃ© par MoliÃ¨re', 7),
(33, 'Aime comme si un jour tu devais haÃ¯r; hais comme si un jour tu devais aimer.', 'Bias', 8),
(34, 'Mieux vaut vivre enchaÃ®nÃ© prÃ¨s de celui que l''on aime, que libre au milieu des jardins prÃ¨s de celui que l''on hait.', 'Proverbe Persan', 8),
(35, 'L''amour et la haine sont des parents consanguins.', 'Proverbe Allemand', 8),
(36, 'Qui chÃ©rit Ã  l''excÃ¨s sait haÃ¯r Ã  l''excÃ¨s.', 'Aristote', 8),
(37, 'Aime et publie-le; hais et cache-le.', 'Proverbe Egyptien', 8),
(38, 'Qui t''aime te fait pleurer; qui te hait te fait rire.', 'Proverbe Espagnol', 8),
(39, 'On a peine Ã  haÃ¯r ce qu''on a bien aimÃ©.', 'Corneille', 8),
(40, 'On aime sans raison, et sans raison l''on hait.', 'Regnard', 8),
(41, 'Par la rue Â«Plus tardÂ», on arrive Ã  la place Â«JamaisÂ».', 'Proverbe Espagnol', 9),
(42, 'Un de ces jours c''est aucun de ces jours.', 'Proverbe Anglais', 9),
(43, 'Tout ce qui peut Ãªtre fait un autre jour, le peut Ãªtre aujourd''hui.', 'Montaigne', 9),
(44, 'Pour Ãªtre aimÃ©, soyez discret, La clÃ© des coeurs, c''est le secret.', 'Florian', 10),
(45, 'Le plus grand amour est l''amour d''une mÃ¨re, vient ensuite l''amour d''un chien, puis l''amour d''un amant.', 'Proverbe Polonais', 10),
(46, 'L''amant ne connaÃ®t que son dÃ©sir, il ne voit pas ce qu''il prend.', 'Publitius Syrus', 10),
(47, 'On peut aimer l''amour et mÃ©priser l''amant.', 'G. Farquhar', 10),
(48, 'Ceux qui s''avancent trop prÃ©cipitamment reculeront encore plus vite.', 'Mencius', 11),
(49, 'Quand les ailes poussent Ã  la fourmi, c''est pour sa perte.', 'Origine arabe ou persane', 11),
(50, 'Si tu ne veux pas que les choucas t''assiÃ¨gent de leurs cris, ne sois pas la boule d''un clocher.', 'Goethe', 11),
(51, 'L''ambition est comme un torrent et ne regarde pas derriÃ¨re soi.', 'Ben Jonson', 11),
(52, 'Le difficile n''est pas de monter, mais, en montant, de rester soi.', 'Jules Michelet', 11),
(53, 'Un homme n''est pas malheureux parce qu''il a de l''ambition, mais parce qu''il en est dÃ©vorÃ©.', 'Montesquieu', 11),
(54, 'La terre nous fait attendre ses prÃ©sents Ã  chaque saison, mais on recueille Ã  chaque instant les fruits de l''amitiÃ©.', 'DÃ©mophile', 12),
(55, 'Avoir de l''or faux est un malheur supportable et facile Ã  dÃ©couvrir; mais le faux ami, c''est ce qu''il y a de plus pÃ©nible Ã  dÃ©couvrir.', 'ThÃ©ognis', 12),
(56, 'Il faut tendre la main Ã  ses amis sans fermer les doigts.', 'DiogÃ¨ne', 12),
(57, 'Un ami est long Ã  trouver et prompt Ã  perdre.', 'Proverbe gÃ©nÃ©ral', 12),
(58, 'Vous avez trois sortes d''amis: vos amis qui vous aiment, vos amis qui ne se soucient pas de vous, et vos amis qui vous haÃ¯ssent.', 'Chamfort', 12),
(59, 'Un ami, c''est quelqu''un qui sait tout de toi, et qui t''aime quand mÃªme.', 'F.W. Hubbard', 12),
(60, 'Deux choses ne se peuvent cacher: l''ivresse et l''amour.', 'Antiphane', 12),
(61, 'On ne saurait Ãªtre sage quand on aime, ni aimer quand on est sage.', 'Publilius Syrus', 12),
(62, 'Pour bien aimer une vivante, il faut l''aimer comme si elle devait mourir demain.', 'Proverbe Arabe', 12),
(63, 'L''amour ne se paie qu''avec l''amour et les oeuvres avec les oeuvres.', 'Fernando de Rojas', 12),
(64, 'Il n''y a qu''une sorte d''amour, mais il y en a mille diffÃ©rentes copies.', 'La Rochefoucauld', 12),
(65, 'Il en est du vÃ©ritable amour comme de l''apparition des esprits: tout le monde en parle, mais peu de gens en ont vu.', 'La Rochefoucauld', 12),
(66, 'L''amour Ã´te l''esprit Ã  ceux qui en ont et en donne Ã  ceux qui n''en ont pas.', 'Diderot', 12),
(67, 'L''amour n''est que le roman du coeur, c''est le plaisir qui en est l''histoire.', 'Beaumarchais', 12),
(68, 'L''amour a besoin des yeux, comme la pensÃ©e a besoin de la mÃ©moire.', 'Mme Necker', 12),
(69, 'L''amour est un Ã©goÃ¯sme Ã  deux.', 'Mme de StaÃ«l', 12),
(70, 'Quand on est aimÃ©, on ne doute de rien. Quand on aime, on doute de tout.', 'Colette', 12),
(71, 'On passe souvent de l''amour Ã  l''ambition, mais on ne revient guÃ¨re de l''ambition Ã  l''amour.', 'La Rochefoucauld', 12),
(72, 'On passe une moitiÃ© de sa vie Ã  attendre ceux qu''on aimera et l''autre moitiÃ© Ã  quitter ceux qu''on aime.', 'Victor Hugo', 12),
(73, 'L''amour est la seule passion qui se paye d''une monnaie qu''elle fabrique elle-mÃªme.', 'Stendhal', 12),
(74, 'L''amitiÃ© finit parfois en amour, mais rarement l''amour en amitiÃ©.', 'C. C. Colton', 13),
(75, 'L''amour est Ã  la portÃ©e de tous, mais l''amitiÃ© est l''Ã©preuve du coeur.', 'A. d''Houdetot', 13),
(76, 'Offrir l''amitiÃ© Ã  qui veut l''amour, c''est donner du pain Ã  qui meurt de soif.', 'Proverbe Espagnol', 13),
(77, 'La violence qu''on se fait pour demeurer fidÃ¨le Ã  ce qu''on aime ne vaut guÃ¨re mieux qu''une infidÃ©litÃ©.', 'La Rochefoucauld', 14),
(78, 'En amour, il n''y a que les commencements qui soient charmants; c''est pourquoi on trouve du plaisir Ã  recommencer souvent.', 'Prince de Ligne', 14),
(79, 'On examine avec soin les objets dans les boutiques, mais quand il s''agit des gens, on les juge sur l''apparence.', 'Aristippe de CyrÃ¨ne', 15),
(80, 'Un homme n''est pas bon Ã  tout, mais il n''est jamais propre Ã  rien.', 'AntiquitÃ© Chinoise', 16),
(81, 'La beautÃ© sans la grÃ¢ce attire, mais elle ne sait pas retenir; c''est un appÃ¢t sans hameÃ§on.', 'Maxime Planude', 17),
(82, 'Trois choses sont fugitives: l''Ã©cho, l''arc-en-ciel, la beautÃ© des femmes.', 'Proverbe Allemand', 17),
(83, 'Une femme belle est le paradis des yeux, l''enfer de l''Ã¢me, et le purgatoire de la bourse.', 'Proverbe Estonien', 17),
(84, 'La beautÃ© plaÃ®t aux yeux, la douceur charme l''Ã¢me.', 'Voltaire', 17),
(85, 'Une femme qui est belle a toujours de l''esprit; elle a l''esprit d''Ãªtre belle.', 'ThÃ©ophile Gautier', 17),
(86, 'La beautÃ© du corps, dÃ©couronnÃ©e de celle de l''Ã¢me, n''est un ornement que pour les animaux.', 'DÃ©mocrate', 17),
(87, 'Les jolies filles ne sont pas toujours heureuses et les garÃ§ons intelligents sont rarement beaux.', 'Proverbe Chinois', 17),
(88, 'A cÃ´tÃ© de la beautÃ©, l''esprit et le coeur font toujours l''effet de parents pauvres.', 'Etienne Rey', 17),
(89, 'Il y a deux sortes de gens: ceux qui peuvent Ãªtre heureux et ne le sont pas, et ceux qui cherchent le bonheur sans le trouver.', 'Proverbe Arabe', 18),
(90, 'Un homme heureux est une barque qui navigue sous un vent favorable.', 'Proverbe Chinois', 18),
(91, 'Un grand obstacle au bonheur, c''est de s''attendre Ã  un trop grand bonheur.', 'Fontenelle', 18),
(92, 'Le plaisir peut s''appuyer sur l''illusion, mais le bonheur repose sur la rÃ©alitÃ©.', 'Chamfort', 18),
(93, 'Le bonheur est comme l''Ã©cho: il vous rÃ©pond: mais il ne vient pas.', 'Carmen Sylva', 18),
(94, 'Le bonheur naÃ®t du malheur, le malheur est cachÃ© au sein du bonheur.', 'Lao-Tseu', 18),
(95, 'On n''est jamais si malheureux qu''on croit ni si heureux qu''on avait espÃ©rÃ©.', 'La Rochefoucauld', 18),
(96, 'C''est son caractÃ¨re qui fait Ã  chacun sa destinÃ©e.', 'Cornelius Nepos', 19),
(97, 'On ne dÃ©couvre jamais mieux son caractÃ¨re qu''en parlant de celui d''autrui.', 'J. P. Richter', 19),
(98, 'Crois, si tu veux, que des montagnes ont changÃ©s de place; mais ne crois pas que des hommes puissent changer de caractÃ¨re.', 'Proverbe Persan', 19),
(99, 'Le chagrin est comme la maladie: pour les uns, il est bÃ©nin; pour les autres il est aigu.', 'Proverbe FranÃ§ais', 20),
(100, 'Le chagrin est comme un grand trÃ©sor: on ne s''en ouvre qu''Ã  ses intimes.', 'Proverbe Malgache', 20),
(101, 'Si la chance veut venir Ã  toi, tu la conduiras avec un cheveu; mais si la chance veut partir, elle rompra une chaÃ®ne.', 'Proverbe BerbÃ¨re', 21),
(102, 'Lorsque la chance nous sourit, nous rencontrons des amis; lorsqu''elle est contre nous, une jolie femme.', 'Proverbe Chinois', 21),
(103, 'N''entretiens pas l''espoir de ce qui peut Ãªtre espÃ©rÃ©.', 'Pytagore', 22),
(104, 'Si l''on Ã´tait les chimÃ¨res aux hommes, quel plaisir leur resterait-il?', 'Fontenelle', 22),
(105, 'Suis ton coeur, pour que ton visage brille durant le temps de ta vie.', 'Plathotep', 23),
(106, 'Le coeur perÃ§oit ce que l''oeil ne voit pas.', 'Al-Gazal', 23),
(107, 'Le coeur de l''homme parfait est comme une mer dont on ne peut dÃ©couvrir les lointains rivages.', 'Proverbe Chinois', 23),
(108, 'Le monde est une mer, notre coeur en est le rivage.', 'Proverbe Chinois', 23),
(109, 'Le hasard gagne des batailles mais le coeur ne se gagne que par des vertus.', 'Florian', 23),
(110, 'On peut fendre un rocher; on ne peut pas toujours attendrir un coeur.', 'Proverbe Indien (tamil)', 23),
(111, 'La soif du coeur ne s''apaise pas avec une goutte d''eau.', 'Saadi', 23),
(112, 'L''esprit a beau faire plus de chemin que le coeur, il ne va jamais si loin.', 'Proverbe Chinois', 23),
(113, 'La raison peut nous avertir de ce qu''il faut Ã©viter, le coeur seul nous dit ce qu''il faut faire.', 'J. Joubert', 23),
(114, 'Le coeur a ses raisons que la raison ne connaÃ®t point.', 'Pascal', 23),
(115, 'Les consÃ©quences de la colÃ¨re sont beaucoup plus graves que ses causes.', 'Marc AurÃ¨le', 24),
(116, 'Vaincre la colÃ¨re, c''est triompher de son plus grand ennemi.', 'Publilius Syrus', 24),
(117, 'Les hommes colÃ©reux se font Ã  eux-mÃªmes un lit d''orties.', 'Samuel Richardson', 24),
(118, 'Le plus grand arbre est nÃ© d''une graÃ®ne menue; une tour de neuf Ã©tages est partie d''une poignÃ©e de terre.', 'Lao-Tseu', 25),
(119, 'Si vous cherchez la source du fleuve Yosthino, vous la trouverez dans les gouttes d''eau sur la mousse.', 'Proverbe Japonais', 26),
(120, 'On ne donne rien de si bon marchÃ© que les compliments.', 'A. de Montluc', 26),
(121, 'Les compliments sont le protocole des sots.', 'Voltaire', 26),
(122, 'Confiance et dÃ©fiance sont Ã©galement la ruine des hommes.', 'HÃ©siode', 27),
(123, 'Souviens-toi de te mÃ©fier.', 'Epicharme', 27),
(124, 'L''erreur est aussi grande de se fier Ã  tous que de tous se dÃ©fier.', 'SÃ©nÃ¨que', 27),
(125, 'Notre dÃ©fiance justifie la tromperie d''autrui.', 'La Rochefoucauld', 27),
(126, 'La conscience est la lumiÃ¨re de l''intelligence pour distinguer le bien du mal.', 'Confucius', 28),
(127, 'La plus importante et la plus nÃ©gligÃ©e de toutes les conversations, c''est l''entretien avec soi-mÃªme.', 'Chancelier Oxenstiern', 28),
(128, 'Suis le conseil de celui qui te fait pleurer, et non de celui qui te fait rire.', 'Proverbe Arabe', 29),
(129, 'Les bons conseils pÃ©nÃ¨trent jusqu''au coeur du sage; ils ne font que traverser l''oreilles des mÃ©chants.', 'Proverbe Chinois', 29),
(130, 'J''Ã©tais furieux de n''avoir pas de souliers; alors j''ai rencontrÃ© un homme qui n''avait pas de pieds, et je me suis trouvÃ© content de mon sort.', 'Proverbe Chinois', 30),
(131, 'Perte d''argent, perte lÃ©gÃ¨re; perte d''honneur, grosse perte; perte de courage, perte irrÃ©parable.', 'Goethe', 31),
(132, 'Le dÃ©couragement est la mort morale.', 'La Rochefoucauld', 31),
(133, 'Nous n''avouons de petits dÃ©fauts que pour persuader que nous n''en avons pas de grands.', 'La Rochefoucauld', 32),
(134, 'Nous convenons de nos dÃ©fauts, mais c''est pour que l''on nous dÃ©mente.', 'Florian', 32),
(135, 'Si nous n''avions pas tant de dÃ©fauts, nous ne prendrions pas tant de plaisir Ã  en remarquer chez les autres.', 'La Rochefoucauld', 32),
(136, 'J''ai goÃ»tÃ© bien des substances amÃ¨res, et nulle ne l''est plus que de demander.', 'Proverbe Arabe', 33);

-- --------------------------------------------------------

--
-- Structure de la table `theme`
--

CREATE TABLE `theme` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `theme`
--

INSERT INTO `theme` (`id`, `name`) VALUES
(1, '0'),
(2, '0'),
(3, 'amitié'),
(4, 'amour'),
(5, 'Age de la vie'),
(6, 'Aimer'),
(7, 'Aimer et haÃ¯r'),
(8, 'Ajourner'),
(9, 'Amant et maÃ®tresse'),
(10, 'Ambition'),
(11, 'AmitiÃ©'),
(12, 'Amour'),
(13, 'Amour et amitiÃ©'),
(14, 'Apparence'),
(15, 'Aptitude'),
(16, 'BeautÃ©'),
(17, 'Bonheur'),
(18, 'CaractÃ¨re'),
(19, 'Chagrin'),
(20, 'Chance'),
(21, 'ChimÃ¨re'),
(22, 'Coeur'),
(23, 'ColÃ¨re'),
(24, 'Commencer'),
(25, 'Compliment'),
(26, 'Confiance et dÃ©fiance'),
(27, 'Conscience'),
(28, 'Conseil'),
(29, 'Contentement'),
(30, 'DÃ©couragement'),
(31, 'DÃ©fault'),
(32, 'Demander');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `proverb`
--
ALTER TABLE `proverb`
 ADD PRIMARY KEY (`id`);

--
-- Index pour la table `theme`
--
ALTER TABLE `theme`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `proverb`
--
ALTER TABLE `proverb`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=137;
