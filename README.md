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
Sivuston etusivulta (kuva 1) löytyy sisäänkirjautumiselle ja rekisteröitymiselle painikkeet. Tämän lisäksi sivuston yläpalkista voi käydä katsomassa eri visualisointeja. Rekisteröitymisessä kuva 2) käyttäjä syöttää käyttäjänimen, etu- ja sukunimen, sähköpostin ja salasanan. Kun tiedot on syötetty, rekisteröintipainiketta painamalla tiedot lähetetään tietokantaan. Salasana kryptataan bcryptillä. Kirjautuminen tapahtuu käyttäjänimellä ja salasanalla.

![image](https://user-images.githubusercontent.com/112496055/235734794-aa9de55c-a959-4884-9821-8fa0302c3be4.png)
> **KUVA 1**. Sivuston etusivu.

![image](https://user-images.githubusercontent.com/112496055/235734893-a8c79dbb-4c1e-4141-9330-c3aebfc3d835.png)
> **KUVA 2**. Käyttäjän rekisteröinti.

### Profiili
Kun käyttäjä kirjautuu sisään, tulee näkyville käyttäjän profiili (kuva 3), yläpalkkiin painike oman visualisoinnin luomiselle sekä omien visualisointien tarkastelulle. Tällä sivulla käyttäjä voi halutessaan poistaa käyttäjänsä.

![image](https://user-images.githubusercontent.com/112496055/235735105-9d6879b3-896e-41b7-b973-057b026ef4e0.png)
> **KUVA 3**. Sivusto sisäänkirjautumisen jälkeen.

### Visualisoinnin luonti
Visualisointia luodessa (kuva 4) käyttäjä päättää visualisointinsa nimen, mitä eri kaavioita visualisoinnissa näytetään, niiden asettelun vierekkäis- tai pystysuunnassa, sekä visualisoinnin ja kaavioiden kuvaukset. Luodulle visualisoinnille generoidaan linkki, jonka kautta rekisteröitymättömätkin käyttäjät pääsevät tarkastelemaan sitä.

![image](https://user-images.githubusercontent.com/112496055/235735173-f3f57136-cf89-4137-be68-f8e6ffcf7683.png)
> **KUVA 4**. Visualisoinnin luonti.

### Omat visualisoinnit
My pages -sivulta (kuva 5) löytyy käyttäjän luomien visualisointien linkit ja mahdollisuus poistaa ne.

![image](https://user-images.githubusercontent.com/112496055/235735224-e108f288-e539-461d-b730-32164dde8864.png)
> **KUVA 5**. My pages -sivu.

### Esimerkki visualisoinnista
Esimerkki luodusta visualisoinnista (kuva 6):

![image](https://user-images.githubusercontent.com/112496055/235735255-e8e82689-f3ed-477e-997d-593d4cd91b7d.png)
> **KUVA 6**. Esimerkki visualisointi.

## Testaus
### Backend user testaus
Backend kansiossa käynnistä  ``` npm test ``` 

### Visualisaationäkymien 1-5 http requestien testaus
Testit tehdään Mocha ja Chai -kirjastoilla

WebProject9-kansiossa 

 ```npm install ```
 ```npx mocha ```

Suorittaa http GET testit visualisointeihin 1-5 sekä yhden POST testin.

### Frontend testaus
Frontendin testaus suoritetaan ```npm test``` -komennolla frontend kansiossa. 
Testeissä käydään läpi sisäänkirjautuminen ja rekisteröinti. Testauksessa käytetään Jest-kirjastoa ja apukirjastona React Testing Libraryä. Jestin ilmaisuvoimaa laajennetaan myös jest-dom:lla.

## Sovelluksen käyttöönotto 
https://ilmi.oulu.azatotweb.com/

## Linkit
* [Backend](https://webproj9.oulu.azatotweb.com)
* [Frontend](https://ilmi.oulu.azatotweb.com)
