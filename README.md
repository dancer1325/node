# Node.js

* := JavaScript runtime environment /
  * open-source,
  * cross-platform

* [OpenJS Foundation][]
  * -- supports the -- project

## Release

### Release types

* **Current**
  * == ACTIVE development
  * code | dedicated branch
    * _Example:_ [v22.x](https://github.com/nodejs/node/tree/v22.x)
  * NEW major version /
    * EVERY 6 months (April & October)
      * April releases
        * | October -- converts to -- LTS
      * October releases
        * support life of 8 months
    * ⚠️allowing for breaking changes ⚠️
  * follow [semantic versioning](https://semver.org)
  * [signed](#release-keys) -- by a -- member of the Release Team
* **LTS**
  * == Releases /
    * Long Term Support (1 year) + Maintenance (6 months)
    * focus on stability & security
    * 💡even-numbered major version 💡
    * names
      * alphabetically-ordered
      * "v4 Argon *"
  * EXCEPT SPECIAL circumstances, NO
    * breaking changes
    * feature additions
  * follow [semantic versioning](https://semver.org)
  * [signed](#release-keys) -- by a -- member of the Release Team
* **Nightly**
  * == code | Current branch / if there are changes -> built EVERY 24-hours
  * "version-nightlyUTCDate"
    * naming
    * _Example:_ `v22.0.0-nightly20240424ddd0a9e494`

* see [Release README](https://github.com/nodejs/Release#readme)

### Download

* [here](https://nodejs.org/en/download/)
  * Binaries,
  * installers,
  * source tarballs

#### Current & LTS releases

* [here](https://nodejs.org/download/release/)
  * [latest directory](https://nodejs.org/download/release/latest/)
    * == latest Current release's alias
  * latest-_codename_ directory
    * == latest LTS release's alias
    * _Example:_ [latest-hydrogen directory](https://nodejs.org/download/release/latest-hydrogen/) == latest Hydrogen (Node.js 18) release

#### Nightly releases

* [here](https://nodejs.org/download/nightly/)

#### API documentation / EACH latest Current release

* [here](https://nodejs.org/api/) or [here](https://nodejs.org/download/docs/)
* source code | docs/

### Verifying binaries

* `SHASUMS256.txt`
  * EXISTING | "download/"
    * -> EACH Current or LTS
  * == SHA checksums -- for the -- files
  * `curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt`
    * download it
  * `sha256sum -c SHASUMS256.txt --ignore-missing`
    * check that downloaded files -- match the -- checksum

* `SHASUMS256.txt.sig`
  * == `SHASUMS256.txt`'s GPG detached signature
  * steps
    * import [the GPG keys of individuals authorized to create releases](#release-keys)
    * download the `SHASUMS256.txt.sig` / the release
      ```
      curl -O https://nodejs.org/dist/vx.y.z/SHASUMS256.txt.sig
      ```
    * `gpg --verify SHASUMS256.txt.sig SHASUMS256.txt`
      * verify the file's signature

## Building Node.js

* see [BUILDING.md](BUILDING.md)

## How to contribute?

* [Contributing to the project][]
* [Working Groups][]
* [Strategic initiatives][]
* [Technical values and prioritization][]

## Team members

* see [GOVERNANCE.md](./GOVERNANCE.md)

### TSC (Technical Steering Committee)

#### TSC voting members

<!--lint disable prohibited-strings-->

* [aduh95](https://github.com/aduh95) -
  **Antoine du Hamel** <<duhamelantoine1995@gmail.com>> (he/him)
* [anonrig](https://github.com/anonrig) -
  **Yagiz Nizipli** <<yagiz@nizipli.com>> (he/him)
* [benjamingr](https://github.com/benjamingr) -
  **Benjamin Gruenbaum** <<benjamingr@gmail.com>>
* [BridgeAR](https://github.com/BridgeAR) -
  **Ruben Bridgewater** <<ruben@bridgewater.de>> (he/him)
* [gireeshpunathil](https://github.com/gireeshpunathil) -
  **Gireesh Punathil** <<gpunathi@in.ibm.com>> (he/him)
* [jasnell](https://github.com/jasnell) -
  **James M Snell** <<jasnell@gmail.com>> (he/him)
* [joyeecheung](https://github.com/joyeecheung) -
  **Joyee Cheung** <<joyeec9h3@gmail.com>> (she/her)
* [legendecas](https://github.com/legendecas) -
  **Chengzhong Wu** <<legendecas@gmail.com>> (he/him)
* [marco-ippolito](https://github.com/marco-ippolito) -
  **Marco Ippolito** <<marcoippolito54@gmail.com>> (he/him)
* [mcollina](https://github.com/mcollina) -
  **Matteo Collina** <<matteo.collina@gmail.com>> (he/him)
* [mhdawson](https://github.com/mhdawson) -
  **Michael Dawson** <<midawson@redhat.com>> (he/him)
* [MoLow](https://github.com/MoLow) -
  **Moshe Atlow** <<moshe@atlow.co.il>> (he/him)
* [RafaelGSS](https://github.com/RafaelGSS) -
  **Rafael Gonzaga** <<rafael.nunu@hotmail.com>> (he/him)
* [richardlau](https://github.com/richardlau) -
  **Richard Lau** <<rlau@redhat.com>>
* [ronag](https://github.com/ronag) -
  **Robert Nagy** <<ronagy@icloud.com>>
* [ruyadorno](https://github.com/ruyadorno) -
  **Ruy Adorno** <<ruy@vlt.sh>> (he/him)
* [ShogunPanda](https://github.com/ShogunPanda) -
  **Paolo Insogna** <<paolo@cowtech.it>> (he/him)
* [targos](https://github.com/targos) -
  **Michaël Zasso** <<targos@protonmail.com>> (he/him)
* [tniessen](https://github.com/tniessen) -
  **Tobias Nießen** <<tniessen@tnie.de>> (he/him)

#### TSC regular members

* [apapirovski](https://github.com/apapirovski) -
  **Anatoli Papirovski** <<apapirovski@mac.com>> (he/him)
* [BethGriggs](https://github.com/BethGriggs) -
  **Beth Griggs** <<bethanyngriggs@gmail.com>> (she/her)
* [bnoordhuis](https://github.com/bnoordhuis) -
  **Ben Noordhuis** <<info@bnoordhuis.nl>>
* [cjihrig](https://github.com/cjihrig) -
  **Colin Ihrig** <<cjihrig@gmail.com>> (he/him)
* [codebytere](https://github.com/codebytere) -
  **Shelley Vohr** <<shelley.vohr@gmail.com>> (she/her)
* [GeoffreyBooth](https://github.com/GeoffreyBooth) -
  **Geoffrey Booth** <<webadmin@geoffreybooth.com>> (he/him)
* [Trott](https://github.com/Trott) -
  **Rich Trott** <<rtrott@gmail.com>> (he/him)

<details>

<summary>TSC emeriti members</summary>

#### TSC emeriti members

* [addaleax](https://github.com/addaleax) -
  **Anna Henningsen** <<anna@addaleax.net>> (she/her)
* [ChALkeR](https://github.com/ChALkeR) -
  **Сковорода Никита Андреевич** <<chalkerx@gmail.com>> (he/him)
* [chrisdickinson](https://github.com/chrisdickinson) -
  **Chris Dickinson** <<christopher.s.dickinson@gmail.com>>
* [danbev](https://github.com/danbev) -
  **Daniel Bevenius** <<daniel.bevenius@gmail.com>> (he/him)
* [danielleadams](https://github.com/danielleadams) -
  **Danielle Adams** <<adamzdanielle@gmail.com>> (she/her)
* [evanlucas](https://github.com/evanlucas) -
  **Evan Lucas** <<evanlucas@me.com>> (he/him)
* [fhinkel](https://github.com/fhinkel) -
  **Franziska Hinkelmann** <<franziska.hinkelmann@gmail.com>> (she/her)
* [Fishrock123](https://github.com/Fishrock123) -
  **Jeremiah Senkpiel** <<fishrock123@rocketmail.com>> (he/they)
* [gabrielschulhof](https://github.com/gabrielschulhof) -
  **Gabriel Schulhof** <<gabrielschulhof@gmail.com>>
* [gibfahn](https://github.com/gibfahn) -
  **Gibson Fahnestock** <<gibfahn@gmail.com>> (he/him)
* [indutny](https://github.com/indutny) -
  **Fedor Indutny** <<fedor@indutny.com>>
* [isaacs](https://github.com/isaacs) -
  **Isaac Z. Schlueter** <<i@izs.me>>
* [joshgav](https://github.com/joshgav) -
  **Josh Gavant** <<josh.gavant@outlook.com>>
* [mmarchini](https://github.com/mmarchini) -
  **Mary Marchini** <<oss@mmarchini.me>> (she/her)
* [mscdex](https://github.com/mscdex) -
  **Brian White** <<mscdex@mscdex.net>>
* [MylesBorins](https://github.com/MylesBorins) -
  **Myles Borins** <<myles.borins@gmail.com>> (he/him)
* [nebrius](https://github.com/nebrius) -
  **Bryan Hughes** <<bryan@nebri.us>>
* [ofrobots](https://github.com/ofrobots) -
  **Ali Ijaz Sheikh** <<ofrobots@google.com>> (he/him)
* [orangemocha](https://github.com/orangemocha) -
  **Alexis Campailla** <<orangemocha@nodejs.org>>
* [piscisaureus](https://github.com/piscisaureus) -
  **Bert Belder** <<bertbelder@gmail.com>>
* [RaisinTen](https://github.com/RaisinTen) -
  **Darshan Sen** <<raisinten@gmail.com>> (he/him)
* [rvagg](https://github.com/rvagg) -
  **Rod Vagg** <<r@va.gg>>
* [sam-github](https://github.com/sam-github) -
  **Sam Roberts** <<vieuxtech@gmail.com>>
* [shigeki](https://github.com/shigeki) -
  **Shigeki Ohtsu** <<ohtsu@ohtsu.org>> (he/him)
* [thefourtheye](https://github.com/thefourtheye) -
  **Sakthipriyan Vairamani** <<thechargingvolcano@gmail.com>> (he/him)
* [TimothyGu](https://github.com/TimothyGu) -
  **Tiancheng "Timothy" Gu** <<timothygu99@gmail.com>> (he/him)
* [trevnorris](https://github.com/trevnorris) -
  **Trevor Norris** <<trev.norris@gmail.com>>

</details>

<!-- node-core-utils and find-inactive-collaborators.mjs depend on the format
     of the collaborator list. If the format changes, those utilities need to be
     tested and updated. -->

### Collaborators

* [abmusse](https://github.com/abmusse) -
  **Abdirahim Musse** <<abdirahim.musse@ibm.com>>
* [addaleax](https://github.com/addaleax) -
  **Anna Henningsen** <<anna@addaleax.net>> (she/her)
* [aduh95](https://github.com/aduh95) -
  **Antoine du Hamel** <<duhamelantoine1995@gmail.com>> (he/him) - [Support me](https://github.com/sponsors/aduh95)
* [anonrig](https://github.com/anonrig) -
  **Yagiz Nizipli** <<yagiz@nizipli.com>> (he/him) - [Support me](https://github.com/sponsors/anonrig)
* [apapirovski](https://github.com/apapirovski) -
  **Anatoli Papirovski** <<apapirovski@mac.com>> (he/him)
* [atlowChemi](https://github.com/atlowChemi) -
  **Chemi Atlow** <<chemi@atlow.co.il>> (he/him)
* [Ayase-252](https://github.com/Ayase-252) -
  **Qingyu Deng** <<i@ayase-lab.com>>
* [bengl](https://github.com/bengl) -
  **Bryan English** <<bryan@bryanenglish.com>> (he/him)
* [benjamingr](https://github.com/benjamingr) -
  **Benjamin Gruenbaum** <<benjamingr@gmail.com>>
* [BethGriggs](https://github.com/BethGriggs) -
  **Beth Griggs** <<bethanyngriggs@gmail.com>> (she/her)
* [bnb](https://github.com/bnb) -
  **Tierney Cyren** <<hello@bnb.im>> (they/them)
* [bnoordhuis](https://github.com/bnoordhuis) -
  **Ben Noordhuis** <<info@bnoordhuis.nl>>
* [BridgeAR](https://github.com/BridgeAR) -
  **Ruben Bridgewater** <<ruben@bridgewater.de>> (he/him)
* [cclauss](https://github.com/cclauss) -
  **Christian Clauss** <<cclauss@me.com>> (he/him)
* [cjihrig](https://github.com/cjihrig) -
  **Colin Ihrig** <<cjihrig@gmail.com>> (he/him)
* [codebytere](https://github.com/codebytere) -
  **Shelley Vohr** <<shelley.vohr@gmail.com>> (she/her)
* [cola119](https://github.com/cola119) -
  **Kohei Ueno** <<kohei.ueno119@gmail.com>> (he/him)
* [daeyeon](https://github.com/daeyeon) -
  **Daeyeon Jeong** <<daeyeon.dev@gmail.com>> (he/him)
* [debadree25](https://github.com/debadree25) -
  **Debadree Chatterjee** <<debadree333@gmail.com>> (he/him)
* [deokjinkim](https://github.com/deokjinkim) -
  **Deokjin Kim** <<deokjin81.kim@gmail.com>> (he/him)
* [edsadr](https://github.com/edsadr) -
  **Adrian Estrada** <<edsadr@gmail.com>> (he/him)
* [ErickWendel](https://github.com/ErickWendel) -
  **Erick Wendel** <<erick.workspace@gmail.com>> (he/him)
* [Ethan-Arrowood](https://github.com/Ethan-Arrowood) -
  **Ethan Arrowood** <<ethan@arrowood.dev>> (he/him)
* [F3n67u](https://github.com/F3n67u) -
  **Feng Yu** <<F3n67u@outlook.com>> (he/him)
* [fhinkel](https://github.com/fhinkel) -
  **Franziska Hinkelmann** <<franziska.hinkelmann@gmail.com>> (she/her)
* [Flarna](https://github.com/Flarna) -
  **Gerhard Stöbich** <<deb2001-github@yahoo.de>> (he/they)
* [gabrielschulhof](https://github.com/gabrielschulhof) -
  **Gabriel Schulhof** <<gabrielschulhof@gmail.com>>
* [gengjiawen](https://github.com/gengjiawen) -
  **Jiawen Geng** <<technicalcute@gmail.com>>
* [GeoffreyBooth](https://github.com/GeoffreyBooth) -
  **Geoffrey Booth** <<webadmin@geoffreybooth.com>> (he/him)
* [gireeshpunathil](https://github.com/gireeshpunathil) -
  **Gireesh Punathil** <<gpunathi@in.ibm.com>> (he/him)
* [guybedford](https://github.com/guybedford) -
  **Guy Bedford** <<guybedford@gmail.com>> (he/him)
* [H4ad](https://github.com/H4ad) -
  **Vinícius Lourenço Claro Cardoso** <<contact@viniciusl.com.br>> (he/him)
* [HarshithaKP](https://github.com/HarshithaKP) -
  **Harshitha K P** <<harshitha014@gmail.com>> (she/her)
* [himself65](https://github.com/himself65) -
  **Zeyu "Alex" Yang** <<himself65@outlook.com>> (he/him)
* [jakecastelli](https://github.com/jakecastelli) -
  **Jake Yuesong Li** <<jake.yuesong@gmail.com>> (he/him)
* [JakobJingleheimer](https://github.com/JakobJingleheimer) -
  **Jacob Smith** <<jacob@frende.me>> (he/him)
* [jasnell](https://github.com/jasnell) -
  **James M Snell** <<jasnell@gmail.com>> (he/him)
* [jazelly](https://github.com/jazelly) -
  **Jason Zhang** <<xzha4350@gmail.com>> (he/him)
* [jkrems](https://github.com/jkrems) -
  **Jan Krems** <<jan.krems@gmail.com>> (he/him)
* [joyeecheung](https://github.com/joyeecheung) -
  **Joyee Cheung** <<joyeec9h3@gmail.com>> (she/her)
* [juanarbol](https://github.com/juanarbol) -
  **Juan José Arboleda** <<soyjuanarbol@gmail.com>> (he/him)
* [JungMinu](https://github.com/JungMinu) -
  **Minwoo Jung** <<nodecorelab@gmail.com>> (he/him)
* [KhafraDev](https://github.com/KhafraDev) -
  **Matthew Aitken** <<maitken033380023@gmail.com>> (he/him)
* [kvakil](https://github.com/kvakil) -
  **Keyhan Vakil** <<kvakil@sylph.kvakil.me>>
* [legendecas](https://github.com/legendecas) -
  **Chengzhong Wu** <<legendecas@gmail.com>> (he/him)
* [lemire](https://github.com/lemire) -
  **Daniel Lemire** <<daniel@lemire.me>>
* [Linkgoron](https://github.com/Linkgoron) -
  **Nitzan Uziely** <<linkgoron@gmail.com>>
* [LiviaMedeiros](https://github.com/LiviaMedeiros) -
  **LiviaMedeiros** <<livia@cirno.name>>
* [ljharb](https://github.com/ljharb) -
  **Jordan Harband** <<ljharb@gmail.com>>
* [lpinca](https://github.com/lpinca) -
  **Luigi Pinca** <<luigipinca@gmail.com>> (he/him)
* [lukekarrys](https://github.com/lukekarrys) -
  **Luke Karrys** <<luke@lukekarrys.com>> (he/him)
* [Lxxyx](https://github.com/Lxxyx) -
  **Zijian Liu** <<lxxyxzj@gmail.com>> (he/him)
* [marco-ippolito](https://github.com/marco-ippolito) -
  **Marco Ippolito** <<marcoippolito54@gmail.com>> (he/him) - [Support me](https://github.com/sponsors/marco-ippolito)
* [marsonya](https://github.com/marsonya) -
  **Akhil Marsonya** <<akhil.marsonya27@gmail.com>> (he/him)
* [MattiasBuelens](https://github.com/MattiasBuelens) -
  **Mattias Buelens** <<mattias@buelens.com>> (he/him)
* [mcollina](https://github.com/mcollina) -
  **Matteo Collina** <<matteo.collina@gmail.com>> (he/him) - [Support me](https://github.com/sponsors/mcollina)
* [meixg](https://github.com/meixg) -
  **Xuguang Mei** <<meixuguang@gmail.com>> (he/him)
* [mhdawson](https://github.com/mhdawson) -
  **Michael Dawson** <<midawson@redhat.com>> (he/him)
* [mildsunrise](https://github.com/mildsunrise) -
  **Alba Mendez** <<me@alba.sh>> (she/her)
* [MoLow](https://github.com/MoLow) -
  **Moshe Atlow** <<moshe@atlow.co.il>> (he/him)
* [MrJithil](https://github.com/MrJithil) -
  **Jithil P Ponnan** <<jithil@outlook.com>> (he/him)
* [ovflowd](https://github.com/ovflowd) -
  **Claudio Wunder** <<cwunder@gnome.org>> (he/they)
* [panva](https://github.com/panva) -
  **Filip Skokan** <<panva.ip@gmail.com>> (he/him)
* [pimterry](https://github.com/pimterry) -
  **Tim Perry** <<pimterry@gmail.com>> (he/him)
* [pmarchini](https://github.com/pmarchini) -
  **Pietro Marchini** <<pietro.marchini94@gmail.com>> (he/him)
* [Qard](https://github.com/Qard) -
  **Stephen Belanger** <<admin@stephenbelanger.com>> (he/him)
* [RafaelGSS](https://github.com/RafaelGSS) -
  **Rafael Gonzaga** <<rafael.nunu@hotmail.com>> (he/him)
* [richardlau](https://github.com/richardlau) -
  **Richard Lau** <<rlau@redhat.com>>
* [rluvaton](https://github.com/rluvaton) -
  **Raz Luvaton** <<rluvaton@gmail.com>> (he/him)
* [ronag](https://github.com/ronag) -
  **Robert Nagy** <<ronagy@icloud.com>>
* [ruyadorno](https://github.com/ruyadorno) -
  **Ruy Adorno** <<ruy@vlt.sh>> (he/him)
* [santigimeno](https://github.com/santigimeno) -
  **Santiago Gimeno** <<santiago.gimeno@gmail.com>>
* [ShogunPanda](https://github.com/ShogunPanda) -
  **Paolo Insogna** <<paolo@cowtech.it>> (he/him)
* [srl295](https://github.com/srl295) -
  **Steven R Loomis** <<srl295@gmail.com>>
* [StefanStojanovic](https://github.com/StefanStojanovic) -
  **Stefan Stojanovic** <<stefan.stojanovic@janeasystems.com>> (he/him)
* [sxa](https://github.com/sxa) -
  **Stewart X Addison** <<sxa@redhat.com>> (he/him)
* [targos](https://github.com/targos) -
  **Michaël Zasso** <<targos@protonmail.com>> (he/him)
* [theanarkh](https://github.com/theanarkh) -
  **theanarkh** <<theratliter@gmail.com>> (he/him)
* [tniessen](https://github.com/tniessen) -
  **Tobias Nießen** <<tniessen@tnie.de>> (he/him)
* [trivikr](https://github.com/trivikr) -
  **Trivikram Kamat** <<trivikr.dev@gmail.com>>
* [Trott](https://github.com/Trott) -
  **Rich Trott** <<rtrott@gmail.com>> (he/him)
* [UlisesGascon](https://github.com/UlisesGascon) -
  **Ulises Gascón** <<ulisesgascongonzalez@gmail.com>> (he/him)
* [vmoroz](https://github.com/vmoroz) -
  **Vladimir Morozov** <<vmorozov@microsoft.com>> (he/him)
* [VoltrexKeyva](https://github.com/VoltrexKeyva) -
  **Mohammed Keyvanzadeh** <<mohammadkeyvanzade94@gmail.com>> (he/him)
* [watilde](https://github.com/watilde) -
  **Daijiro Wachi** <<daijiro.wachi@gmail.com>> (he/him)
* [zcbenz](https://github.com/zcbenz) -
  **Cheng Zhao** <<zcbenz@gmail.com>> (he/him)
* [ZYSzys](https://github.com/ZYSzys) -
  **Yongsheng Zhang** <<zyszys98@gmail.com>> (he/him)

<details>

<summary>Emeriti</summary>

<!-- find-inactive-collaborators.mjs depends on the format of the emeriti list.
     If the format changes, those utilities need to be tested and updated. -->

### Collaborator emeriti

* [ak239](https://github.com/ak239) -
  **Aleksei Koziatinskii** <<ak239spb@gmail.com>>
* [andrasq](https://github.com/andrasq) -
  **Andras** <<andras@kinvey.com>>
* [AndreasMadsen](https://github.com/AndreasMadsen) -
  **Andreas Madsen** <<amwebdk@gmail.com>> (he/him)
* [AnnaMag](https://github.com/AnnaMag) -
  **Anna M. Kedzierska** <<anna.m.kedzierska@gmail.com>>
* [antsmartian](https://github.com/antsmartian) -
  **Anto Aravinth** <<anto.aravinth.cse@gmail.com>> (he/him)
* [aqrln](https://github.com/aqrln) -
  **Alexey Orlenko** <<eaglexrlnk@gmail.com>> (he/him)
* [AshCripps](https://github.com/AshCripps) -
  **Ash Cripps** <<email@ashleycripps.co.uk>>
* [bcoe](https://github.com/bcoe) -
  **Ben Coe** <<bencoe@gmail.com>> (he/him)
* [bmeck](https://github.com/bmeck) -
  **Bradley Farias** <<bradley.meck@gmail.com>>
* [bmeurer](https://github.com/bmeurer) -
  **Benedikt Meurer** <<benedikt.meurer@gmail.com>>
* [boneskull](https://github.com/boneskull) -
  **Christopher Hiller** <<boneskull@boneskull.com>> (he/him)
* [brendanashworth](https://github.com/brendanashworth) -
  **Brendan Ashworth** <<brendan.ashworth@me.com>>
* [bzoz](https://github.com/bzoz) -
  **Bartosz Sosnowski** <<bartosz@janeasystems.com>>
* [calvinmetcalf](https://github.com/calvinmetcalf) -
  **Calvin Metcalf** <<calvin.metcalf@gmail.com>>
* [ChALkeR](https://github.com/ChALkeR) -
  **Сковорода Никита Андреевич** <<chalkerx@gmail.com>> (he/him)
* [chrisdickinson](https://github.com/chrisdickinson) -
  **Chris Dickinson** <<christopher.s.dickinson@gmail.com>>
* [claudiorodriguez](https://github.com/claudiorodriguez) -
  **Claudio Rodriguez** <<cjrodr@yahoo.com>>
* [danbev](https://github.com/danbev) -
  **Daniel Bevenius** <<daniel.bevenius@gmail.com>> (he/him)
* [danielleadams](https://github.com/danielleadams) -
  **Danielle Adams** <<adamzdanielle@gmail.com>> (she/her)
* [DavidCai1993](https://github.com/DavidCai1993) -
  **David Cai** <<davidcai1993@yahoo.com>> (he/him)
* [davisjam](https://github.com/davisjam) -
  **Jamie Davis** <<davisjam@vt.edu>> (he/him)
* [devnexen](https://github.com/devnexen) -
  **David Carlier** <<devnexen@gmail.com>>
* [devsnek](https://github.com/devsnek) -
  **Gus Caplan** <<me@gus.host>> (they/them)
* [digitalinfinity](https://github.com/digitalinfinity) -
  **Hitesh Kanwathirtha** <<digitalinfinity@gmail.com>> (he/him)
* [dmabupt](https://github.com/dmabupt) -
  **Xu Meng** <<dmabupt@gmail.com>> (he/him)
* [dnlup](https://github.com/dnlup) -
  **dnlup** <<dnlup.dev@gmail.com>>
* [eljefedelrodeodeljefe](https://github.com/eljefedelrodeodeljefe) -
  **Robert Jefe Lindstaedt** <<robert.lindstaedt@gmail.com>>
* [estliberitas](https://github.com/estliberitas) -
  **Alexander Makarenko** <<estliberitas@gmail.com>>
* [eugeneo](https://github.com/eugeneo) -
  **Eugene Ostroukhov** <<eostroukhov@google.com>>
* [evanlucas](https://github.com/evanlucas) -
  **Evan Lucas** <<evanlucas@me.com>> (he/him)
* [firedfox](https://github.com/firedfox) -
  **Daniel Wang** <<wangyang0123@gmail.com>>
* [Fishrock123](https://github.com/Fishrock123) -
  **Jeremiah Senkpiel** <<fishrock123@rocketmail.com>> (he/they)
* [gdams](https://github.com/gdams) -
  **George Adams** <<gadams@microsoft.com>> (he/him)
* [geek](https://github.com/geek) -
  **Wyatt Preul** <<wpreul@gmail.com>>
* [gibfahn](https://github.com/gibfahn) -
  **Gibson Fahnestock** <<gibfahn@gmail.com>> (he/him)
* [glentiki](https://github.com/glentiki) -
  **Glen Keane** <<glenkeane.94@gmail.com>> (he/him)
* [hashseed](https://github.com/hashseed) -
  **Yang Guo** <<yangguo@chromium.org>> (he/him)
* [hiroppy](https://github.com/hiroppy) -
  **Yuta Hiroto** <<hello@hiroppy.me>> (he/him)
* [iansu](https://github.com/iansu) -
  **Ian Sutherland** <<ian@iansutherland.ca>>
* [iarna](https://github.com/iarna) -
  **Rebecca Turner** <<me@re-becca.org>>
* [imran-iq](https://github.com/imran-iq) -
  **Imran Iqbal** <<imran@imraniqbal.org>>
* [imyller](https://github.com/imyller) -
  **Ilkka Myller** <<ilkka.myller@nodefield.com>>
* [indutny](https://github.com/indutny) -
  **Fedor Indutny** <<fedor@indutny.com>>
* [isaacs](https://github.com/isaacs) -
  **Isaac Z. Schlueter** <<i@izs.me>>
* [italoacasas](https://github.com/italoacasas) -
  **Italo A. Casas** <<me@italoacasas.com>> (he/him)
* [JacksonTian](https://github.com/JacksonTian) -
  **Jackson Tian** <<shyvo1987@gmail.com>>
* [jasongin](https://github.com/jasongin) -
  **Jason Ginchereau** <<jasongin@microsoft.com>>
* [jbergstroem](https://github.com/jbergstroem) -
  **Johan Bergström** <<bugs@bergstroem.nu>>
* [jdalton](https://github.com/jdalton) -
  **John-David Dalton** <<john.david.dalton@gmail.com>>
* [jhamhader](https://github.com/jhamhader) -
  **Yuval Brik** <<yuval@brik.org.il>>
* [joaocgreis](https://github.com/joaocgreis) -
  **João Reis** <<reis@janeasystems.com>>
* [joesepi](https://github.com/joesepi) -
  **Joe Sepi** <<sepi@joesepi.com>> (he/him)
* [joshgav](https://github.com/joshgav) -
  **Josh Gavant** <<josh.gavant@outlook.com>>
* [julianduque](https://github.com/julianduque) -
  **Julian Duque** <<julianduquej@gmail.com>> (he/him)
* [kfarnung](https://github.com/kfarnung) -
  **Kyle Farnung** <<kfarnung@microsoft.com>> (he/him)
* [kunalspathak](https://github.com/kunalspathak) -
  **Kunal Pathak** <<kunal.pathak@microsoft.com>>
* [kuriyosh](https://github.com/kuriyosh) -
  **Yoshiki Kurihara** <<yosyos0306@gmail.com>> (he/him)
* [lance](https://github.com/lance) -
  **Lance Ball** <<lball@redhat.com>> (he/him)
* [Leko](https://github.com/Leko) -
  **Shingo Inoue** <<leko.noor@gmail.com>> (he/him)
* [lucamaraschi](https://github.com/lucamaraschi) -
  **Luca Maraschi** <<luca.maraschi@gmail.com>> (he/him)
* [lundibundi](https://github.com/lundibundi) -
  **Denys Otrishko** <<shishugi@gmail.com>> (he/him)
* [lxe](https://github.com/lxe) -
  **Aleksey Smolenchuk** <<lxe@lxe.co>>
* [maclover7](https://github.com/maclover7) -
  **Jon Moss** <<me@jonathanmoss.me>> (he/him)
* [mafintosh](https://github.com/mafintosh) -
  **Mathias Buus** <<mathiasbuus@gmail.com>> (he/him)
* [matthewloring](https://github.com/matthewloring) -
  **Matthew Loring** <<mattloring@google.com>>
* [Mesteery](https://github.com/Mesteery) -
  **Mestery** <<mestery@protonmail.com>> (he/him)
* [micnic](https://github.com/micnic) -
  **Nicu Micleușanu** <<micnic90@gmail.com>> (he/him)
* [mikeal](https://github.com/mikeal) -
  **Mikeal Rogers** <<mikeal.rogers@gmail.com>>
* [miladfarca](https://github.com/miladfarca) -
  **Milad Fa** <<mfarazma@redhat.com>> (he/him)
* [misterdjules](https://github.com/misterdjules) -
  **Julien Gilli** <<jgilli@netflix.com>>
* [mmarchini](https://github.com/mmarchini) -
  **Mary Marchini** <<oss@mmarchini.me>> (she/her)
* [monsanto](https://github.com/monsanto) -
  **Christopher Monsanto** <<chris@monsan.to>>
* [MoonBall](https://github.com/MoonBall) -
  **Chen Gang** <<gangc.cxy@foxmail.com>>
* [mscdex](https://github.com/mscdex) -
  **Brian White** <<mscdex@mscdex.net>>
* [MylesBorins](https://github.com/MylesBorins) -
  **Myles Borins** <<myles.borins@gmail.com>> (he/him)
* [not-an-aardvark](https://github.com/not-an-aardvark) -
  **Teddy Katz** <<teddy.katz@gmail.com>> (he/him)
* [ofrobots](https://github.com/ofrobots) -
  **Ali Ijaz Sheikh** <<ofrobots@google.com>> (he/him)
* [Olegas](https://github.com/Olegas) -
  **Oleg Elifantiev** <<oleg@elifantiev.ru>>
* [orangemocha](https://github.com/orangemocha) -
  **Alexis Campailla** <<orangemocha@nodejs.org>>
* [othiym23](https://github.com/othiym23) -
  **Forrest L Norvell** <<ogd@aoaioxxysz.net>> (they/them/themself)
* [oyyd](https://github.com/oyyd) -
  **Ouyang Yadong** <<oyydoibh@gmail.com>> (he/him)
* [petkaantonov](https://github.com/petkaantonov) -
  **Petka Antonov** <<petka_antonov@hotmail.com>>
* [phillipj](https://github.com/phillipj) -
  **Phillip Johnsen** <<johphi@gmail.com>>
* [piscisaureus](https://github.com/piscisaureus) -
  **Bert Belder** <<bertbelder@gmail.com>>
* [pmq20](https://github.com/pmq20) -
  **Minqi Pan** <<pmq2001@gmail.com>>
* [PoojaDurgad](https://github.com/PoojaDurgad) -
  **Pooja D P** <<Pooja.D.P@ibm.com>> (she/her)
* [princejwesley](https://github.com/princejwesley) -
  **Prince John Wesley** <<princejohnwesley@gmail.com>>
* [psmarshall](https://github.com/psmarshall) -
  **Peter Marshall** <<petermarshall@chromium.org>> (he/him)
* [puzpuzpuz](https://github.com/puzpuzpuz) -
  **Andrey Pechkurov** <<apechkurov@gmail.com>> (he/him)
* [RaisinTen](https://github.com/RaisinTen) -
  **Darshan Sen** <<raisinten@gmail.com>> (he/him)
* [refack](https://github.com/refack) -
  **Refael Ackermann (רפאל פלחי)** <<refack@gmail.com>> (he/him/הוא/אתה)
* [rexagod](https://github.com/rexagod) -
  **Pranshu Srivastava** <<rexagod@gmail.com>> (he/him)
* [rickyes](https://github.com/rickyes) -
  **Ricky Zhou** <<0x19951125@gmail.com>> (he/him)
* [rlidwka](https://github.com/rlidwka) -
  **Alex Kocharin** <<alex@kocharin.ru>>
* [rmg](https://github.com/rmg) -
  **Ryan Graham** <<r.m.graham@gmail.com>>
* [robertkowalski](https://github.com/robertkowalski) -
  **Robert Kowalski** <<rok@kowalski.gd>>
* [romankl](https://github.com/romankl) -
  **Roman Klauke** <<romaaan.git@gmail.com>>
* [ronkorving](https://github.com/ronkorving) -
  **Ron Korving** <<ron@ronkorving.nl>>
* [RReverser](https://github.com/RReverser) -
  **Ingvar Stepanyan** <<me@rreverser.com>>
* [rubys](https://github.com/rubys) -
  **Sam Ruby** <<rubys@intertwingly.net>>
* [rvagg](https://github.com/rvagg) -
  **Rod Vagg** <<rod@vagg.org>>
* [ryzokuken](https://github.com/ryzokuken) -
  **Ujjwal Sharma** <<ryzokuken@disroot.org>> (he/him)
* [saghul](https://github.com/saghul) -
  **Saúl Ibarra Corretgé** <<s@saghul.net>>
* [sam-github](https://github.com/sam-github) -
  **Sam Roberts** <<vieuxtech@gmail.com>>
* [sebdeckers](https://github.com/sebdeckers) -
  **Sebastiaan Deckers** <<sebdeckers83@gmail.com>>
* [seishun](https://github.com/seishun) -
  **Nikolai Vavilov** <<vvnicholas@gmail.com>>
* [shigeki](https://github.com/shigeki) -
  **Shigeki Ohtsu** <<ohtsu@ohtsu.org>> (he/him)
* [shisama](https://github.com/shisama) -
  **Masashi Hirano** <<shisama07@gmail.com>> (he/him)
* [silverwind](https://github.com/silverwind) -
  **Roman Reiss** <<me@silverwind.io>>
* [starkwang](https://github.com/starkwang) -
  **Weijia Wang** <<starkwang@126.com>>
* [stefanmb](https://github.com/stefanmb) -
  **Stefan Budeanu** <<stefan@budeanu.com>>
* [tellnes](https://github.com/tellnes) -
  **Christian Tellnes** <<christian@tellnes.no>>
* [thefourtheye](https://github.com/thefourtheye) -
  **Sakthipriyan Vairamani** <<thechargingvolcano@gmail.com>> (he/him)
* [thlorenz](https://github.com/thlorenz) -
  **Thorsten Lorenz** <<thlorenz@gmx.de>>
* [TimothyGu](https://github.com/TimothyGu) -
  **Tiancheng "Timothy" Gu** <<timothygu99@gmail.com>> (he/him)
* [trevnorris](https://github.com/trevnorris) -
  **Trevor Norris** <<trev.norris@gmail.com>>
* [tunniclm](https://github.com/tunniclm) -
  **Mike Tunnicliffe** <<m.j.tunnicliffe@gmail.com>>
* [vdeturckheim](https://github.com/vdeturckheim) -
  **Vladimir de Turckheim** <<vlad2t@hotmail.com>> (he/him)
* [vkurchatkin](https://github.com/vkurchatkin) -
  **Vladimir Kurchatkin** <<vladimir.kurchatkin@gmail.com>>
* [vsemozhetbyt](https://github.com/vsemozhetbyt) -
  **Vse Mozhet Byt** <<vsemozhetbyt@gmail.com>> (he/him)
* [watson](https://github.com/watson) -
  **Thomas Watson** <<w@tson.dk>>
* [whitlockjc](https://github.com/whitlockjc) -
  **Jeremy Whitlock** <<jwhitlock@apache.org>>
* [XadillaX](https://github.com/XadillaX) -
  **Khaidi Chu** <<i@2333.moe>> (he/him)
* [yashLadha](https://github.com/yashLadha) -
  **Yash Ladha** <<yash@yashladha.in>> (he/him)
* [yhwang](https://github.com/yhwang) -
  **Yihong Wang** <<yh.wang@ibm.com>>
* [yorkie](https://github.com/yorkie) -
  **Yorkie Liu** <<yorkiefixer@gmail.com>>
* [yosuke-furukawa](https://github.com/yosuke-furukawa) -
  **Yosuke Furukawa** <<yosuke.furukawa@gmail.com>>

</details>

<!--lint enable prohibited-strings-->

Collaborators follow the [Collaborator Guide](./doc/contributing/collaborator-guide.md) in
maintaining the Node.js project.

### Triagers

* [atlowChemi](https://github.com/atlowChemi) -
  **Chemi Atlow** <<chemi@atlow.co.il>> (he/him)
* [Ayase-252](https://github.com/Ayase-252) -
  **Qingyu Deng** <<i@ayase-lab.com>>
* [bmuenzenmeyer](https://github.com/bmuenzenmeyer) -
  **Brian Muenzenmeyer** <<brian.muenzenmeyer@gmail.com>> (he/him)
* [CanadaHonk](https://github.com/CanadaHonk) -
  **Oliver Medhurst** <<honk@goose.icu>> (they/them)
* [daeyeon](https://github.com/daeyeon) -
  **Daeyeon Jeong** <<daeyeon.dev@gmail.com>> (he/him)
* [F3n67u](https://github.com/F3n67u) -
  **Feng Yu** <<F3n67u@outlook.com>> (he/him)
* [gireeshpunathil](https://github.com/gireeshpunathil) -
  **Gireesh Punathil** <<gpunathi@in.ibm.com>> (he/him)
* [iam-frankqiu](https://github.com/iam-frankqiu) -
  **Frank Qiu** <<iam.frankqiu@gmail.com>> (he/him)
* [KevinEady](https://github.com/KevinEady) -
  **Kevin Eady** <<kevin.c.eady@gmail.com>> (he/him)
* [kvakil](https://github.com/kvakil) -
  **Keyhan Vakil** <<kvakil@sylph.kvakil.me>>
* [marsonya](https://github.com/marsonya) -
  **Akhil Marsonya** <<akhil.marsonya27@gmail.com>> (he/him)
* [meixg](https://github.com/meixg) -
  **Xuguang Mei** <<meixuguang@gmail.com>> (he/him)
* [mertcanaltin](https://github.com/mertcanaltin) -
  **Mert Can Altin** <<mertgold60@gmail.com>>
* [preveen-stack](https://github.com/preveen-stack) -
  **Preveen Padmanabhan** <<wide4head@gmail.com>> (he/him)
* [VoltrexKeyva](https://github.com/VoltrexKeyva) -
  **Mohammed Keyvanzadeh** <<mohammadkeyvanzade94@gmail.com>> (he/him)

Triagers follow the [Triage Guide](./doc/contributing/issues.md#triaging-a-bug-report) when
responding to new issues.

### Release keys

Primary GPG keys for Node.js Releasers (some Releasers sign with subkeys):

* **Antoine du Hamel** <<duhamelantoine1995@gmail.com>>
  `C0D6248439F1D5604AAFFB4021D900FFDB233756`
* **Juan José Arboleda** <<soyjuanarbol@gmail.com>>
  `DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7`
* **Marco Ippolito** <<marcoippolito54@gmail.com>>
  `CC68F5A3106FF448322E48ED27F5E38D5B0A215F`
* **Michaël Zasso** <<targos@protonmail.com>>
  `8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600`
* **Rafael Gonzaga** <<rafael.nunu@hotmail.com>>
  `890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4`
* **Richard Lau** <<rlau@redhat.com>>
  `C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C`
* **Ruy Adorno** <<ruyadorno@hotmail.com>>
  `108F52B48DB57BB0CC439B2997B01419BD92F80A`
* **Ulises Gascón** <<ulisesgascongonzalez@gmail.com>>
  `A363A499291CBBC940DD62E41F10027AF002F8B0`

To import the full set of trusted release keys (including subkeys possibly used
to sign releases):

```bash
gpg --keyserver hkps://keys.openpgp.org --recv-keys C0D6248439F1D5604AAFFB4021D900FFDB233756 # Antoine du Hamel
gpg --keyserver hkps://keys.openpgp.org --recv-keys DD792F5973C6DE52C432CBDAC77ABFA00DDBF2B7 # Juan José Arboleda
gpg --keyserver hkps://keys.openpgp.org --recv-keys CC68F5A3106FF448322E48ED27F5E38D5B0A215F # Marco Ippolito
gpg --keyserver hkps://keys.openpgp.org --recv-keys 8FCCA13FEF1D0C2E91008E09770F7A9A5AE15600 # Michaël Zasso
gpg --keyserver hkps://keys.openpgp.org --recv-keys 890C08DB8579162FEE0DF9DB8BEAB4DFCF555EF4 # Rafael Gonzaga
gpg --keyserver hkps://keys.openpgp.org --recv-keys C82FA3AE1CBEDC6BE46B9360C43CEC45C17AB93C # Richard Lau
gpg --keyserver hkps://keys.openpgp.org --recv-keys 108F52B48DB57BB0CC439B2997B01419BD92F80A # Ruy Adorno
gpg --keyserver hkps://keys.openpgp.org --recv-keys A363A499291CBBC940DD62E41F10027AF002F8B0 # Ulises Gascón
```

See [Verifying binaries](#verifying-binaries) for how to use these keys to
verify a downloaded file.

<details>

<summary>Other keys used to sign some previous releases</summary>

* **Beth Griggs** <<bethanyngriggs@gmail.com>>
  `4ED778F539E3634C779C87C6D7062848A1AB005C`
* **Bryan English** <<bryan@bryanenglish.com>>
  `141F07595B7B3FFE74309A937405533BE57C7D57`
* **Chris Dickinson** <<christopher.s.dickinson@gmail.com>>
  `9554F04D7259F04124DE6B476D5A82AC7E37093B`
* **Colin Ihrig** <<cjihrig@gmail.com>>
  `94AE36675C464D64BAFA68DD7434390BDBE9B9C5`
* **Danielle Adams** <<adamzdanielle@gmail.com>>
  `1C050899334244A8AF75E53792EF661D867B9DFA`
  `74F12602B6F1C4E913FAA37AD3A89613643B6201`
* **Evan Lucas** <<evanlucas@me.com>>
  `B9AE9905FFD7803F25714661B63B535A4C206CA9`
* **Gibson Fahnestock** <<gibfahn@gmail.com>>
  `77984A986EBC2AA786BC0F66B01FBB92821C587A`
* **Isaac Z. Schlueter** <<i@izs.me>>
  `93C7E9E91B49E432C2F75674B0A78B0A6C481CF6`
* **Italo A. Casas** <<me@italoacasas.com>>
  `56730D5401028683275BD23C23EFEFE93C4CFFFE`
* **James M Snell** <<jasnell@keybase.io>>
  `71DCFD284A79C3B38668286BC97EC7A07EDE3FC1`
* **Jeremiah Senkpiel** <<fishrock@keybase.io>>
  `FD3A5288F042B6850C66B31F09FE44734EB7990E`
* **Juan José Arboleda** <<soyjuanarbol@gmail.com>>
  `61FC681DFB92A079F1685E77973F295594EC4689`
* **Julien Gilli** <<jgilli@fastmail.fm>>
  `114F43EE0176B71C7BC219DD50A3051F888C628D`
* **Myles Borins** <<myles.borins@gmail.com>>
  `C4F0DFFF4E8C1A8236409D08E73BC641CC11F4C8`
* **Rod Vagg** <<rod@vagg.org>>
  `DD8F2338BAE7501E3DD5AC78C273792F7D83545D`
* **Ruben Bridgewater** <<ruben@bridgewater.de>>
  `A48C2BEE680E841632CD4E44F07496B3EB3C1762`
* **Shelley Vohr** <<shelley.vohr@gmail.com>>
  `B9E2F5981AA6E0CD28160D9FF13993A75599653C`
* **Timothy J Fontaine** <<tjfontaine@gmail.com>>
  `7937DFD2AB06298B2293C3187D33FF9D0246406D`

</details>

### Security release stewards

* -- manage, via [rotation -- security releases](./doc/contributing/security-release-process.md)

* [Datadog](https://www.datadoghq.com/)
  * [bengl](https://github.com/bengl) -
    **Bryan English** <<bryan@bryanenglish.com>> (he/him)
* [NodeSource](https://nodesource.com/)
  * [juanarbol](https://github.com/juanarbol) -
    **Juan José Arboleda** <<soyjuanarbol@gmail.com>> (he/him)
  * [RafaelGSS](https://github.com/RafaelGSS) -
    **Rafael Gonzaga** <<rafael.nunu@hotmail.com>> (he/him)
* [Platformatic](https://platformatic.dev/)
  * [mcollina](https://github.com/mcollina) -
    **Matteo Collina** <<matteo.collina@gmail.com>> (he/him)
* [Red Hat](https://redhat.com) / [IBM](https://ibm.com)
  * [joesepi](https://github.com/joesepi) -
    **Joe Sepi** <<joesepi@ibm.com>> (he/him)
  * [mhdawson](https://github.com/mhdawson) -
    **Michael Dawson** <<midawson@redhat.com>> (he/him)

## License

* Node.js' license == [MIT License](https://opensource.org/licenses/MIT)
* Node.js' external libraries' license -- depend on -- EACH one

[Code of Conduct]: https://github.com/nodejs/admin/blob/HEAD/CODE_OF_CONDUCT.md
[Contributing to the project]: CONTRIBUTING.md
[Node.js website]: https://nodejs.org/
[OpenJS Foundation]: https://openjsf.org/
[Strategic initiatives]: doc/contributing/strategic-initiatives.md
[Technical values and prioritization]: doc/contributing/technical-values.md
[Working Groups]: https://github.com/nodejs/TSC/blob/HEAD/WORKING_GROUPS.md
