# Ilmi - Ilmastonmuutos visualisoituna
Tekijät: Artemii Korshunov (TvoiaJopa), Joni Halkola (Tonttu22), Janika Vuorma (Janikavuo), Niko Ahokas (Orzasku)

## Esittely
Ilmin tarkoituksena on suunnitella ja toteuttaa ilmastonmuutokseen liittyvä tiedon visualisointityökalu. Sovelluksen käyttöliittymä on toteutettu React- ja Chart.js JavaScript -kirjastoilla. Backend on rakennettu käyttäen Node.js-ympäristöä. 

Projekti on Oulun ammattikorkeakoulun 2. vuoden opiskelijoiden neljän hengen ryhmätyö, jossa jokainen ryhmän jäsen toimii full stack -kehittäjänä.

Ilmi on REST API -web-sovellus, joka näyttää graafisessa muodossa mitattua tietoa ilmastonmuutoksesta. Tietoa näytetään viidessä eri visuaalisessa näkymässä, joita käyttäjä voi tarkastella yksitellen. Käyttäjä voi myös luoda omia näkymäryhmiä ja tallentaa niihin haluamiansa visualisointeja. Nämä ryhmät tallentuvat käyttäjän omaan tunnukseen ja ne voi replikoida yksilöllisellä url-osoitteella tai valikosta valitsemalla. Sovellus hakee näytettävät tiedot MySQL-tietokonnasta.
Projektin tavoitteena on luoda käyttäjäystävällinen sovellus, joka auttaa käyttäjiä ymmärtämään ilmastonmuutoksen vaikutuksia eri aloilla, kuten energiankulutuksessa, maataloudessa ja teollisuudessa. Graafisten elementtien, kuten ympyrä- ja viivadiagrammien avulla käyttäjät voivat syventyä eri alojen tietoihin, tutkia eri tietoaineistoja sekä vertailla eri tilastotietoja keskenään.

**Sovellus käyttää seuraavia teknologioita**: 

*MySQL-tietokanta*: Tämä tietokanta sisältää CO2-visualisoinnin dataa, käyttäjien tietoja ja käyttäjien tallentamaa dataa. 

*Docker-kontit*: Sovellus käyttää Dockeria käyttöympäristön eristämiseen ja helpottamaan sovelluksen asennusta ja käyttöönottoa. 

*Caprover*: Tämä työkalu auttaa sovelluksen käyttöönotossa, joten käyttäjien ei tarvitse huolehtia monimutkaisesta ympäristön asennuksesta ja konfiguroinnista. 

*ReactJS*: Sovelluksen käyttöliittymä on rakennettu ReactJS:llä. 

Sovelluksen arkkitehtuuri sisältää kolme kerrosta: käyttöliittymä, palvelin ja tietokanta. Käyttöliittymä on rakennettu ReactJS:llä, ja se käyttää REST-rajapintaa kommunikoidakseen palvelimen kanssa. Palvelinpuoli käyttää Node.js:ää ja Express.js:ää. Tietokanta on MySQL-tietokanta, joka sisältää CO2-visualisoinnin dataa ja käyttäjien tietoja. 

Sovelluksen käyttöliittymäsuunnitelma sisältää kirjautumisen, rekisteröitymisen ja profiilin muokkaamisen toiminnot. Käyttäjät voivat tarkastella CO2-visualisointia ja luoda omia CO2-visualisointeja. Tämän repositoryn avulla käyttäjät voivat kloonata sovelluksen ja käyttää sitä omalla koneellaan tai asentaa sen palvelimelle Caproverin avulla.


## Sovelluksen käyttöliittymän toteutus

### Etusivu
Sivuston etusivulta (kuva 1) löytyy sisäänkirjautumiselle ja rekisteröitymiselle painikkeet. Tämän lisäksi sivuston yläpalkista voi käydä katsomassa eri visualisointeja. Rekisteröitymisessä käyttäjä syöttää käyttäjänimen, etu- ja sukunimen, sähköpostin ja salasanan. Kun tiedot on syötetty, rekisteröintipainiketta painamalla tiedot lähetetään tietokantaan. Salasana kryptataan bcryptillä. Kirjautuminen tapahtuu käyttäjänimellä ja salasanalla.

![image](https://user-images.githubusercontent.com/112496055/234589055-b768989e-65ab-4809-aa73-f55bf63544da.png)
> **KUVA 1**. Sivuston etusivu.

### Profiili
Kun käyttäjä kirjautuu sisään, tulee näkyville käyttäjän profiili (kuva 2), yläpalkkiin painike oman visualisoinnin luomiselle sekä omien visualisointien tarkastelulle. Tällä sivulla käyttäjä voi halutessaan poistaa käyttäjänsä.

![image](https://user-images.githubusercontent.com/112496055/234589158-77abe3ca-4cea-44ad-aa61-2e48101922a6.png)
> **KUVA 2**. Sivusto sisäänkirjautumisen jälkeen.

### Visualisoinnin luonti
Visualisointia luodessa (kuva 3) käyttäjä päättää visualisointinsa nimen, mitä eri kaavioita visualisoinnissa näytetään, niiden asettelun vierekkäis- tai pystysuunnassa, sekä visualisoinnin ja kaavioiden kuvaukset. Luodulle visualisoinnille generoidaan linkki, jonka kautta rekisteröitymättömätkin käyttäjät pääsevät tarkastelemaan sitä.

![image](https://user-images.githubusercontent.com/112496055/234589189-7ceada47-e8d9-4c66-99af-14b2c5f571f8.png)
> **KUVA 3**. Visualisoinnin luonti.

### Omat visualisoinnit
My pages -sivulta (kuva 4) löytyy käyttäjän luomien visualisointien linkit ja mahdollisuus poistaa ne.

![image](https://user-images.githubusercontent.com/112496055/234589223-e737ba03-2922-46ab-baec-65384e6d6909.png)
> **KUVA 4**. My pages -sivu.

### Esimerkki visualisoinnista
Esimerkki luodusta visualisoinnista (kuva 5):

![image](https://user-images.githubusercontent.com/112496055/234589253-320a2963-3e6c-471f-ba6d-a198f5d2fb0d.png)
> **KUVA 5**. Esimerkki visualisointi.

## Sovelluksen käyttöönotto 
https://climatedata.oulu.azatotweb.com/

## Linkit
* [Backend](https://webproj9.oulu.azatotweb.com)
* [Frontend](https://visualiztions.oulu.azatotweb.com)
