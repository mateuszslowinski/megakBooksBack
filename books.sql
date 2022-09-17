-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 13, 2022 at 03:29 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `megak_books`
--

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `author` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` decimal(2,0) DEFAULT NULL,
  `desc` varchar(2000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `publisher` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pages` decimal(4,0) DEFAULT NULL,
  `species` varchar(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `author`, `rating`, `desc`, `publisher`, `pages`, `species`) VALUES
('40d75805-edda-4378-a7a5-cd148987d8a5', 'Tajemnice Fleat House', 'Lucinda Riley', '7', 'Niepublikowana dotąd powieść Lucindy Riley.\n\nTo szczególna pozycja, którą autorka udowodniła, że potrafi wykraczać poza ramy powieści obyczajowej, i zrobiła to w doskonałym stylu.\n\n„Tajemnice Fleat House” to powieść kryminalna i choć nasuwają się przy niej oczywiste skojarzenia z Agathą Christie, z resztą twórczości Lucindy Riley łączy ją sposób splatania aktualnych wydarzeń z przeszłością.\n\nPrywatna szkoła z internatem na angielskiej prowincji.\nPodejrzana śmierć jednego z uczniów.\nKolejny zgon osoby związanej ze szkołą, który nie może być przypadkowy.\nZniknięcie małego chłopca.\nA wszystko to owiane całunem tajemnicy.\n\nKiedy w internacie Szkoły Świętego Szczepana umiera jeden ze starszych uczniów, wszystko wskazuje na to, że nie doszło do przestępstwa. Wpływowy ojciec chłopca domaga się jednak wszczęcia śledztwa.\n\nProwadzenie dochodzenia zostaje powierzone młodej błyskotliwej detektyw Jazz Hunter, która ma za sobą bardzo ciężki rok. Czeka ją trudne zadanie, choćby dlatego, że nie jest w stanie wykrzesać w sobie sympatii dla ofiary. Ale przede wszystkim dlatego, że osoby, z którymi rozmawia, wyraźnie coś przed nią ukrywają. I Jazz czuje, że nie chodzi im tylko o chronienie dobrego imienia szkoły.\n\nJazz, która musi walczyć z własnymi demonami, zaczyna zdawać sobie sprawę, że czeka ją najbardziej skomplikowane śledztwo w jej karierze. Bo Fleat House skrywa tajemnice tak mroczne, że być może sama nie chciałaby ich odkryć. ', 'Albatros', '448', 'Kryminał'),
('43a529f4-a819-4351-aead-f0b126e89c4c', 'Też tak mam', 'Magdalena Kostyszyn', '6', '„A w tej czapeczce nie będzie córce za ciepło?” „Depresja? Jaka depresja? Poszłabyś do normalnej pracy, to by ci przeszło.”, „Za bardzo boli? To okres, musi boleć.”\n\nTak, o naszym życiu można powiedzieć jeszcze wiele rzeczy. Można strywializować kolejne jego aspekty, ośmieszyć problemy, unieważnić to, co czujemy.\n\nMożna zapytać czy kobieta pracująca na tym samym stanowisku co mężczyzna, powinna zarabiać mniej od niego? Można zapytać o to, czy zajmowanie się domem to hobby, czy może jednak praca? O to, czy komentarz „fajne masz cycki” jest komplementem. I o to, czy krótka sukienka jest zaproszeniem do gwałtu.\n\nTo nie jest literacka fikcja. To codzienność Polek. I to o nich, o nas jest ta książka. ', 'W.A.B.', '174', 'Reportaż'),
('44e4224a-b742-4bdd-9db3-9e5637e89932', 'Ona', 'Adrian Bednarek', '7', '\n\nOna ma na imię Alicja. Jest jedyną kobietą, której pożądam. Gdy byliśmy nastolatkami, potajemnie odwiedzałem jej pokój, śledziłem ją, poznawałem sekrety i próbowałem się do niej zbliżyć. Ona nigdy nie zwracała na mnie uwagi. Potem wyjechała, ale ja z niej nie zrezygnowałem. Zmieniłem wygląd, rozkochałem w sobie jej przyjaciółkę, nauczyłem się trudnej sztuki manipulowania ludzkimi uczuciami. Po sześciu latach Ona wróciła, a ja wreszcie jestem gotowy. Nie obchodzi mnie, że wkrótce ma wyjść za mąż. Nie obchodzi mnie, że jest zakazaną trucizną, a to, co zamierzam, wywoła chaos. Ona mnie pokocha, nawet jeśli nasz świat będzie musiał stanąć w płomieniach.\n', 'Amare', '344', 'Kryminał'),
('4845fe08-d534-4fbc-8b3e-ce584f5fea3c', 'Ice Queen', 'Riva Scott', '5', 'Na lodzie czują się pewnie. Czy w miłości podwójny axel wyjdzie im równie mistrzowsko?\n\nHailey Queen to prawdziwa królowa lodu. Zapalona łyżwiarka, dla której nie liczy się nic poza przygotowaniem do zawodów. W przeszłości została głęboko zraniona przez bliskie osoby, teraz najpewniej czuje się na śliskiej tafli, nad którą panuje za pomocą naostrzonych płoz. Kiedy jej partner ulega wypadkowi, Hailey nie ma wyjścia - musi szybko znaleźć zastępstwo, aby zdążyć przygotować się do udziału w zawodach. Nikt nie nadaje się lepiej do tego zadania niż Tyler Jackson. Kiedyś razem trenowali. Kiedyś łączyło ich także coś znacznie więcej niż sport...\n\nTyler Jackson porzucił łyżwiarstwo figurowe na rzecz hokeja. Ogólne rzecz biorąc, rzucanie wychodzi mu całkiem nieźle, o czym zaświadczyć może niejedna dziewczyna z okolicy. Teraz chciałby pomóc Hailey i wspólnie z nią trenować do zawodów. Problem w tym, że łyżwiarka nie chce o tym słyszeć i ma ku temu całkiem poważne powody. Czy pewnemu siebie hokeiście uda się roztopić lód w sercu Ice Queen? ', 'Wydawnictwo Kobiece', '336', 'Literatura obyczajowa'),
('49504cf5-eacf-40de-959f-3963452d7e0e', 'Słowa światłości', 'Brandon Sanderson', '9', 'Świetliści Rycerze muszą znów powstać. W końcu wypowiedziano starożytne przysięgi, spreny powracają. Ludzie szukają tego, co zostało utracone. Być może ta misja ich zniszczy. Wiatrowy zagubił się w strzaskanej krainie i balansuje na granicy między zemstą a honorem. Tkaczka Światła, którą powoli pochłania przeszłość, poszukuje kłamstwa, którym musi się stać. Kowal Więzi, zrodzony z krwi i śmierci, teraz próbuje odbudować to, co zostało zniszczone. Badaczka, od której zależą losy dwóch ludów, zostaje zmuszona do dokonania wyboru między powolną śmiercią a straszliwą zdradą wszystkiego, w co wierzy. Najwyższy czas, by się przebudzili, nadchodzi bowiem Wieczna Burza. I przybył Skrytobójca. ', 'Mag', '1200', 'Fantasy'),
('58b57cea-93de-4457-8fc9-dbbcc86117b6', 'Dom', 'Piotr Kościelny', '8', 'Wschowa to spokojne, niewielkie miasto, którego sielankę przerywają dwie zagadkowe śmierci. Na swoje życie targnęli się były nauczyciel i ksiądz miejscowej parafii.\n\nIch sprawy prowadzi komisarz Marta Lipowicz – policjantka od niedawna służąca w lokalnej komendzie. Intuicja podpowiada jej, że samobójstwa były upozorowane, a w mieście pojawił się mściciel wyrównujący rachunki.\n\nKlucz do rozwiązania zagadki może tkwić w przeszłości, o której mieszkańcy Wschowy nie chcą mówić. Lipowicz podejrzewa, że zabójstwa mają związek z miejscowym domem dziecka, skrywającym wiele mrocznych tajemnic.\n\nCzy policjantka zdoła odkryć prawdę i powstrzymać mordercę, zanim ten zabije kolejne osoby? Czy może podda się naciskom przełożonych i odpuści? ', 'Czarna Owca', '448', 'Kryminał'),
('647d10d5-27d1-467c-805d-22a920cce8e3', 'Pacjentka', 'Alex Michaelides', '7', 'Najbardziej oczekiwany thriller psychologiczny 2019 roku!\n\nCeniona malarka i fotografka mody Alicia Berenson wiedzie życie, jakiego każdy mógłby jej pozazdrościć. Do czasu. Pewnego wieczoru jej mąż Gabriel wraca do domu, zaś Alicia strzela mu w głowę pięć razy, zabijając go na miejscu. Od tego momentu kobieta przestaje mówić. Nikt poza nią nie wie, co wydarzyło się tamtej nocy. Ostatecznie trafia do zamkniętego ośrodka psychiatrycznego Grove.\n\nPo sześciu latach w tymże ośrodku rozpoczyna pracę psychoterapeuta Theo Faber, zafascynowany postacią Alicii i jej historią. Theo robi wszystko, co w jego mocy, aby dotrzeć do pacjentki i sprawić, żeby się przed nim otworzyła, a także aby rozwikłać zagadkę śmierci Gabriela. Poznając pacjentkę, psychoterapeuta nieoczekiwanie odnajduje coraz więcej podobieństw w ich losach, począwszy od traumatycznego dzieciństwa. Dokąd zaprowadzą go te rozmowy i co się stanie, jeśli Alicia wreszcie zacznie mówić?\n\nPrawa do wydania powieści sprzedano już do ponad trzydziestu krajów! ', 'W.A.B.', '352', 'Kryminał'),
('7e1268ea-7ec0-40b7-8f8e-b7522db38384', 'Rana', 'Wojciech Chmielarz', '7', 'Podobno czas leczy rany. Jednak niektóre nigdy się nie zabliźniają.\n\nNajpierw pod kołami pociągu ginie Marysia, uczennica ekskluzywnej prywatnej szkoły na warszawskim Mokotowie. Jej nauczycielka, Elżbieta próbuje odkryć, co się naprawdę stało. Rozpoczyna prywatne śledztwo tylko po to, żeby wkrótce sama zginąć. Ale jej ciało znika, a jedynymi osobami, które cokolwiek widziały, są Gniewomir, nieprzystosowany społecznie chłopak zafascynowany seryjnymi zabójcami, i Klementyna, samotna nauczycielka na życiowym zakręcie, której wydaje się, że zdobywszy pracę w poważanej szkole, los wreszcie się do niej uśmiechnął. Nic bardziej mylnego.\n\nŻadne z nich nie chce angażować się w tę sprawę – każde z nich ma swoje powody – ale żadne z nich nie ma wyjścia. Gdyby wiedzieli, dokąd zaprowadzi ich to śledztwo, nigdy by się na to nie odważyli. Szkoła okazuje się pełna tajemnic. Podobnie jak pracujący w niej nauczyciele…\n\nRana to bezlitosne studium zła uśpionego w zaciszu domowego ogniska. Niepokojące i mroczne, odsłania najgłębiej skrywane tajemnice, o których nikt nie chce mówić. Nowa powieść jednego z najwyżej ocenianych i najchętniej czytanych współczesnych pisarzy odziera z wszelkich złudzeń. ', 'Marginesy', '414', 'Kryminał'),
('822555be-4b53-40eb-9aa0-e4f65fcd0025', 'Dziewczyna z indeksem', 'Elżbieta Nieć', '6', 'Kolorowa młodość w szarych czasach PRL-u.\n\nGdańsk, lata 70. XX wieku. W stronę Wybrzeża zwracają się oczy wszystkich Polaków marzących o wolności. Dla Uśki, studentki filologii rosyjskiej na gdańskim uniwersytecie, każdy kolejny rok akademicki okazuje się pretekstem do zaskakujących odkryć. Nowe fakty historyczne, do niedawna skrzętnie ukrywane przez władzę, wstydliwe tajemnice rodzinne, różnice kulturowe, a także… gorące uczucie do syna prominentnego członka partii – wszystko to sprawia, że w życiu dziewczyny nieustannie zachodzą zmiany. Zmiany, które mogą okazać się ważniejsze, niż do tej pory sądziła… Czy będzie potrafiła udźwignąć ich konsekwencje? ', 'Novae Res', '390', 'Literatura obyczajowa'),
('97286291-6fe4-465b-aa7e-ad631dc3aec6', 'Nocna Podróż', 'Radosław Chróściński', '5', 'Zbiór ten jest wyjątkową mieszanką opowiadań z gatunków post-apo, sci-fi i horroru. Znajdziesz tutaj niesamowite światy przyszłości, zniszczone i opuszczone miasta, a nawet mrożące krew w żyłach historie inspirowane mitologią słowiańską i nie tylko. Będziesz także mieć możliwość zwiedzenia Poznania z zupełnie innej, dotąd niewyobrażalnej perspektywy. ', 'Rideró', '100', 'Fantasy'),
('97850eb0-3f4f-48fd-93c3-bc86f13a5d2f', 'Żmijowisko', 'Wojciech Chmielarz', '7', 'Bestsellerowy thriller mistrza kryminału. Serial na Canal Plus.\n\nGrupa trzydziestolatków, przyjaciół ze studiów, co roku wyjeżdża wspólnie ze swoimi rodzinami na wakacje. Tym razem trafiają do zagubionej wśród jezior i lasów agroturystyki w niewielkiej wsi Żmijowisko. Bawią się jak zwykle – odreagowując stres szybkiego wielkomiejskiego życia. Jest alkohol, są narkotyki. A także skrywane od lat urazy, dawne uczucia i wzajemne pretensje, które w czasie kolejnych dni wyjdą na jaw.\n\nPodczas jednej z mocno zakrapianych imprez ktoś kogoś prawie topi. Wywiązuje się kłótnia, rozdrapują dawne rany. Następnego dnia córka jednej z par, piętnastoletnia Ada, znika. Dosłownie rozpływa się w powietrzu. Pomimo intensywnych poszukiwań, nikomu nie udaje się jej odnaleźć. Rok po tym wydarzeniu, jej ojciec powraca do Żmijowiska, by podjąć ostatnią próbę odnalezienia córki. Ale – jak się okazuje – nie wraca tam sam…\n\n\"Żmijowisko\" to opowieść o tragedii, która niszczy wszystkich dookoła. O rodzinie, która musi stawić czoło próbie przekraczającej ludzkie wyobrażenia. Uczuciach, które trwają pomimo mijających lat, a które niosą destrukcję zamiast pocieszenia. Zdradzie, bólu i miłości. Strachu, zbrodni i karze. To opowieść o tym, jak wiele jesteśmy w stanie zrobić dla naszych dzieci i jak wiele nas to kosztuje. ', 'Marginesy', '480', 'Kryminał'),
('a7093460-245e-4362-8bfb-c64e594004ef', 'Środek lata', 'Małgorzata Warda', '7', 'W Trójmieście znika dziewczyna. Po roku bezowocnych poszukiwań, kiedy nikt już nie wierzy w jej odnalezienie, młoda dziennikarka, Marlena, rozpoczyna własne śledztwo. Niewielka teczka dotycząca zaginionej Sylwii i kulisów sprawy okazuje się źródłem wielu pytań: jaka była naprawdę i kto ponosi winę za jej zniknięcie. Uparcie powracał jeszcze jeden wątek - romansu dziewczyny z bratem.\nW tej błyskotliwie skonstruowanej, bogatej w obserwacje obyczajowe i świetnie napisanej historii nic nie jest jednoznaczne, zwłaszcza Sylwia, której obraz zmienia się w relacjach opisujących ją osób. Na portrecie rodziny Feyów pojawiają się rysy - wychodzą na jaw skrywane głęboko tajemnice, powracają bolesne wspomnienia i fakty z odległej przeszłości. Pytanie o winnego tragedii nie jest już najważniejsze.', 'Prószyński i S-ka', '432', 'Literatura piękna'),
('af59ad72-15ca-458d-999c-b59161a7230d', 'Zbyt szalony na męża', 'Eloisa James', '4', 'Aż skrzy się humorem i seksownym wdziękiem: to znak firmowy Eloisy James. „Romantic Times”\n\nPrzystojny i zawadiacki dziedzic książęcego tytułu lord Roland Northbridge Wilde wyjechał na wojnę dwa lata temu, porzucony na przyjęciu zaręczynowym przez pannę Dianę Belgrave. Po powrocie do Anglii North zastaje Dianę w rodzinnym zamku... pracującą jako guwernantka. Ale na tym nie koniec niespodzianek: w towarzystwie panuje opinia, że Wilde jest „zbyt szalony na męża”…\n\nNorth mimo skandalu wciąż pragnie Diany i gotów jest podjąć każde ryzyko, by ją zdobyć. Teraz jest już zaprawionym w bojach wojownikiem, a bitwę o serce swej damy postanowił wygrać. Tymczasem Diana musi stoczyć trudną walkę, by nie stracić głowy dla mężczyzny, którego przecież wciąż nie zamierza poślubić… ', 'Amber', '336', 'Literatura obyczajowa'),
('b65e1b15-b071-4a8b-ad4e-500d7f78adf0', 'Empuzjon', 'Olga Tokarczuk', '8', 'Najnowsza powieść Olgi Tokarczuk – pierwsza po otrzymaniu Literackiej Nagrody Nobla!\n\nNajciekawsze pozostaje zawsze w cieniu, w tym, co niewidoczne.\n\nWrzesień 1913 roku, uzdrowisko Görbersdorf (dzisiejsze Sokołowsko na Dolnym Śląsku). Właśnie tutaj, u podnóża gór, od przeszło pół wieku działa jedno z pierwszych na świecie i słynne w całej Europie specjalistyczne sanatorium leczące choroby „piersiowe i gardlane”.\n\nMieczysław Wojnicz, student ze Lwowa, przyjeżdża do uzdrowiska z nadzieją, że nowatorskie metody i krystalicznie czyste powietrze powstrzymają rozwój jego choroby, a może nawet całkowicie go uleczą. Diagnoza nie pozostawia jednak złudzeń – tuberculosis. Gruźlica.\n\nW Pensjonacie dla Panów, gdzie zamieszkuje, poznaje innych kuracjuszy. Chorzy z Wiednia, Królewca, Breslau i Berlina przy nalewce Schwärmerei niestrudzenie omawiają najważniejsze sprawy tego świata. Czy Europie grozi wojna? Monarchia czy demokracja? Czy demony istnieją? Czy oddając się lekturze, da się rozpoznać, czyją ręką tekst został napisany – kobiety czy mężczyzny?\n\nAle nie tylko te pytania zajmują pensjonariuszy. Do Wojnicza docierają też przerażające historie o tragicznych wydarzeniach w górskich okolicach sanatorium. Choć on sam zajęty jest ukrywaniem prawdy o sobie, zagadka budzących grozę wypadków fascynuje go coraz bardziej. Nie wie jednak, że mroczne siły już wzięły go sobie na cel.\n\nOlga Tokarczuk w \"Empuzjonie\" odsłania przed czytelnikami prawdy o świecie, których albo nie zauważamy, albo za wszelką cenę nie chcemy do siebie dopuścić. ', 'Wydawnictwo Literackie', '391', 'Literatura piękna'),
('bfeb7b03-83db-4215-aa31-9ee8956cb0ec', 'Sposób na szczęście', 'Amanda Cinelli', '4', 'Daniela Avelar po tragicznej śmierci brata przejmuje funkcję prezesa w przedsiębiorstwie jachtowym. Nie wszyscy w zarządzie ją akceptują. Część nieprzychylnych jej osób chce wręcz pozbyć się Danieli z firmy. Może jej pomóc tylko najbliższy przyjaciel i współpracownik brata – Valerio Marchesi. Daniela odnajduje go i prosi, by przyjechał na zebranie zarządu do Monte Carlo. Valerio zgadza się, ale stawia zadziwiający warunek… ', 'HarperCollins Polska', '160', 'Literatura obyczajowa'),
('c64a4fbe-ef8e-4b84-b4e6-69ddb82cb92e', 'Gry nie tylko miłosne', 'Irena Matuszkiewicz', '6', 'Julia Blenda, jest dziewczyną stuprocentową. Bo i nowoczesną - inżynier informatyk - i rozkosznie staroświecką zarazem: najlepiej by się czuła w silnych męskich ramionach, najchętniej sławnego i przystojnego aktora. Julia oczywiście na to wszystko zasługuje - tyle że mieszka we Włocławku. To zaś oznacza pokój przy rodzicach, etat za grosze w szemranej firmie na krawędzi bankructwa i żadnych aktorów w zasięgu wzroku. A w pracy - tylko pomaganie sekretarce i wyręczanie sprzątaczki... Słowem, życie w nieupiększonej rzeczywistości Polski początku XXI wieku, przyprawionej zbrodnią, szantażem i dobrze nam znanym brudem. W takich warunkach Julia, wyposażona w oręż wydawałoby się archaiczny - wierność wartościom - walczy o ocalenie tego, co najcenniejsze: przyjaźni i miłości. ', 'Prószyński i S-ka', '448', 'Literatura piękna'),
('f002f3df-f88c-47ef-9558-902533fe018c', 'Rdza', 'Jakub Małecki', '8', 'Przyjaźń poddana wielkiej próbie i marzenie, które staje się ciężarem.\n\nLato 2002 roku. Czekając na powrót rodziców z wielkiego miasta, siedmioletni Szymon układa monety na torach. Nie wie, że jego życie już nigdy nie będzie takie, jak dotychczas.\n\nKilka dekad wcześniej jego babka, Tośka, wyrusza w podróż, którą zapamięta na zawsze. Wyrwana z bezpiecznego domu dziewczynka trafia do obcego świata, którego zasad musi się nauczyć. Jako dorosła kobieta stanie przed konsekwencją swoich dawnych wyborów.\n\nLosy tych dwojga splatają się w sposób, którego żadne z nich się nie spodziewa. Zmuszeni żyć ze sobą, pomimo różnic, Szymon i Tośka próbują zrozumieć się nawzajem i uwierzyć, że wszystko będzie dobrze. ', 'Sine Qua Non', '288', 'Literatura Piękna'),
('f7c7807d-e2a6-4139-afa3-8a94695444c5', 'Horyzont', 'Jakub Małecki', '10', 'Czasami prawda rozciąga się daleko za horyzont.\n\nJałowe lata bez wschodów i zachodów słońca. Wspomnienia jak burza piaskowa, jak skrzypienie desek w starym domu. Smugi przeszłości płytko pod skórą. Gry komputerowe i bułgarski rap.\n\nManiek i Zuza mieszkają po sąsiedzku na warszawskim Mokotowie. On, były saper, próbuje spisać wspomnienia z misji w Afganistanie, mając nadzieję wreszcie stamtąd wrócić. Ona, dziecko pokolenia Y, uczy się żyć na własny rachunek i mimowolnie zatraca się w rodzinnej tajemnicy. Choć z pozoru nic ich nie łączy, ciążą ku sobie, niezdolni i niechętni do pielęgnowania więzi z otoczeniem.\n\nNowa książka Jakuba Małeckiego to zaskakująca opowieść o tęsknocie, przyjaźni i odwadze. O konfrontacji z zadrą – własną i cudzą. O próbach znalezienia właściwej wersji siebie. ', 'Sine Qua Non', '336', 'Literatura piękna');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;