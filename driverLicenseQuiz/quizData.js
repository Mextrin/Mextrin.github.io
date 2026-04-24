const signs = [
    {
        name: "Avfartsskarm",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x04.-avfartsskarm/x4-1.png"
    },
    {
        name: "Cirkulationstrafik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x09.-cirkulationstrafik/x9-1.png"
    },
    {
        name: "Gul Ljuspil Eller Ljuspilar",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x05.-gul-ljuspil-eller-ljuspilar/x5-1.png"
    },
    {
        name: "Markeringspil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x01.-markeringspil/x1.png"
    },
    {
        name: "Markeringsskarm For Hinder",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x02.-markeringsskarm-for-hinder/x2-1.png"
    },
    {
        name: "Markeringsskarm For Sidohinder",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x03.-markeringsskarm-for-sidohinder/x3-1.png"
    },
    {
        name: "Sarskild Varningsanordning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x06.-sarskild-varningsanordning/x6-1.png"
    },
    {
        name: "Stolpmarkeringsanordning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x10.-stolpmarkeringsanordning/x10.png"
    },
    {
        name: "Vagbom",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x07.-vagbom/x7-1.png"
    },
    {
        name: "Tillfallig Stangning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/x.-andra-anordningar-for-anvisningar-for-trafiken/x08.-tillfallig-stangning/x8-1.png"
    },
    {
        name: "Atervandsvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e17.-atervandsvag/e17-1.png"
    },
    {
        name: "Automatisk Trafikovervakning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e24.-automatisk-trafikovervakning/e24-1.png"
    },
    {
        name: "Betalvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e25.-betalvag/e25-1.png"
    },
    {
        name: "Busshallplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e22.-busshallplats/e22-1.png"
    },
    {
        name: "Cykelgata",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e33.-cykelgata/e33-cykelgata.png"
    },
    {
        name: "Cykelgata Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e34.-cykelgata-upphor/e34-cykelgata-upphor.png"
    },
    {
        name: "Enkelriktad Trafik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e16.-enkelriktad-trafik/e16-1.png"
    },
    {
        name: "Gagata",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e07.-gagata/e7-1.png"
    },
    {
        name: "Gagata Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e08.-gagata-upphor/e8-1.png"
    },
    {
        name: "Gangfartsomrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e09.-gangfartsomrade/e9-1.png"
    },
    {
        name: "Gangfartsomrade Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e10.-gangfartsomrade-upphor/e10-1.png"
    },
    {
        name: "Miljozon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e31.-miljozon/e31-1.png"
    },
    {
        name: "Motesplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e18.-motesplats/e18-1.png"
    },
    {
        name: "Motortrafikled",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e03.-motortrafikled/e3-1.png"
    },
    {
        name: "Motortrafikled Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e04.-motortrafikled-upphor/e4-1.png"
    },
    {
        name: "Motorvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e01.-motorvag/e-11.png"
    },
    {
        name: "Motorvag Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e02.-motorvag-upphor/e2-1.png"
    },
    {
        name: "Noduppstallningsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e27.-noduppstallningsplats/e27-1.png"
    },
    {
        name: "Nodutgang",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e28.-nodutgang/e28-1.png"
    },
    {
        name: "Omradesmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e20.-omradesmarke/e20-1.png"
    },
    {
        name: "Parkering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e19.-parkering/e19-1.png"
    },
    {
        name: "Rekommenderad Hogsta Hastighet",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e13.-rekommenderad-hogsta-hastighet/e13-1.png"
    },
    {
        name: "Rekommenderad Hogsta Hastighet Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e14.-rekommenderad-hogsta-hastighet-upphor/e14-1.png"
    },
    {
        name: "Rekommenderad Lagre Hastighet",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e11.-rekommenderad-lagre-hastighet/e11-1.png"
    },
    {
        name: "Rekommenderad Lagre Hastighet Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e12.-rekommenderad-lagre-hastighet-upphor/e12-1.png"
    },
    {
        name: "Sammanvavning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e15.-sammanvavning/e15-1.png"
    },
    {
        name: "Sarskilda Bestammelser For Parkering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e30.-sarskilda-bestammelser-for-parkering/e30.png"
    },
    {
        name: "Slut Pa Miljozon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e32.-slut-pa-miljozon/e32-1.png"
    },
    {
        name: "Slut Pa Omrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e21.-slut-pa-omrade/e21-1.png"
    },
    {
        name: "Tattbebyggt Omrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e05.-tattbebyggt-omrade/e5-1.png"
    },
    {
        name: "Tattbebyggt Omrade Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e06.-tattbebyggt-omrade-upphor/e6-1.png"
    },
    {
        name: "Taxi",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e23.-taxi/e23-1.png"
    },
    {
        name: "Tunnel",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e26.-tunnel/e26-1.png"
    },
    {
        name: "Utrymningsvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/e.-anvisningsmarken/e29.-utrymningsvag/e29-1.png"
    },
    {
        name: "Andamalsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c40.-andamalsplats/c40-1.png"
    },
    {
        name: "Barighetsklass",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c22.-barighetsklass/c22-3.png"
    },
    {
        name: "Begransad Bruttovikt Pa Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c20.-begransad-bruttovikt-pa-fordon/c20-1.png"
    },
    {
        name: "Begransad Bruttovikt Pa Fordon Och Fordonstag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c21.-begransad-bruttovikt-pa-fordon-och-fordonstag/c21-1.png"
    },
    {
        name: "Begransad Fordonsbredd",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c16.-begransad-fordonsbredd/c16-1.png"
    },
    {
        name: "Begransad Fordonshojd",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c17.-begransad-fordonshojd/c17-1.png"
    },
    {
        name: "Begransad Fordonslangd",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c18.-begransad-fordonslangd/c18-1.png"
    },
    {
        name: "Begransat Axeltryck",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c23.-begransat-axeltryck/c23-1.png"
    },
    {
        name: "Begransat Boggitryck",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c24.-begransat-boggitryck/c24-1.png"
    },
    {
        name: "Begransat Trippelaxeltryck",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c46.-begransat-trippelaxeltryck/c46.png"
    },
    {
        name: "Datumparkering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c38.-datumparkering/c38-1.png"
    },
    {
        name: "Forbud Mot Att Parkera Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c35.-forbud-mot-att-parkera-fordon/c35-1.png"
    },
    {
        name: "Forbud Mot Att Parkera Fordon Pa Dag Med Jamnt Datum",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c37.-forbud-mot-att-parkera-fordon-pa-dag-med-jamnt-datum/c37-1.png"
    },
    {
        name: "Forbud Mot Att Parkera Fordon Pa Dag Med Udda Datum",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c36.-forbud-mot-att-parkera-fordon-pa-dag-med-udda-datum/c36-1.png"
    },
    {
        name: "Forbud Mot Att Stanna Och Parkera Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c39.-forbud-mot-att-stanna-och-parkera-fordon/c39-1.png"
    },
    {
        name: "Forbud Mot Gangtrafik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c15.-forbud-mot-gangtrafik/c15-1.png"
    },
    {
        name: "Forbud Mot Infart Med Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c01.-forbud-mot-infart-med-fordon/c1-1.png"
    },
    {
        name: "Forbud Mot Omkorning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c27.-forbud-mot-omkorning/c27-1.png"
    },
    {
        name: "Forbud Mot Omkorning Med Tung Lastbil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c29.-forbud-mot-omkorning-med-tung-lastbil/c29-1.png"
    },
    {
        name: "Forbud Mot Ridning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c14.-forbud-mot-ridning/c14-1.png"
    },
    {
        name: "Forbud Mot Svang I Korsning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c25.-forbud-mot-svang-i-korsning/c25-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Annat Motordrivet Fordon An Moped Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c03.-forbud-mot-trafik-med-annat-motordrivet-fordon-an-moped-klass-ii/c3-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Annat Motordrivet Fordon Med Dubbdack An Moped Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c44.-forbud-mot-trafik-med-annat-motordrivet-fordon-med-dubbdack-an-moped-klass-ii/c44.png"
    },
    {
        name: "Forbud Mot Trafik Med Cykel Och Moped Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c10.-forbud-mot-trafik-med-cykel-och-moped-klass-ii/c10-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c02.-forbud-mot-trafik-med-fordon/c2-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Fordon Forspant Med Dragdjur",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c12.-forbud-mot-trafik-med-fordon-forspant-med-dragdjur/c12-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Fordon Lastat Med Farligt Gods",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c09.-forbud-mot-trafik-med-fordon-lastat-med-farligt-gods/c9-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Moped Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c11.-forbud-mot-trafik-med-moped-klass-ii/c11-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Motorcykel Och Moped Klass I",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c05.-forbud-mot-trafik-med-motorcykel-och-moped-klass-i/c5-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Motordrivet Fordon Med Fler An Tva Hjul",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c04.-forbud-mot-trafik-med-motordrivet-fordon-med-fler-an-tva-hjul/c4-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Motordrivet Fordon Med Tillkopplad Slapvagn",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c06.-forbud-mot-trafik-med-motordrivet-fordon-med-tillkopplad-slapvagn/c6-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Terrangmotorfordon Och Terrangslap",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c13.-forbud-mot-trafik-med-terrangmotorfordon-och-terrangslap/c13-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Traktor Och Motorredskap Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c08.-forbud-mot-trafik-med-traktor-och-motorredskap-klass-ii/c8-1.png"
    },
    {
        name: "Forbud Mot Trafik Med Tung Lastbil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c07.-forbud-mot-trafik-med-tung-lastbil/c7-1.png"
    },
    {
        name: "Forbud Mot U Svang",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c26.-forbud-mot-u-svang/c26-1.png"
    },
    {
        name: "Hastighetsbegransning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c31.-hastighetsbegransning/c31-3.png"
    },
    {
        name: "Minsta Avstand",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c19.-minsta-avstand/c19-1.png"
    },
    {
        name: "Sarskilda Bestammelser For Stannande Och Parkering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c45.-sarskilda-bestammelser-for-stannande-och-parkering/c45.png"
    },
    {
        name: "Slut Pa Andamalsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c41.-slut-pa-andamalsplats/c41-1.png"
    },
    {
        name: "Slut Pa Forbud Mot Omkorning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c28.-slut-pa-forbud-mot-omkorning/c28-1.png"
    },
    {
        name: "Slut Pa Forbud Mot Omkorning Med Tung Lastbil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c30.-slut-pa-forbud-mot-omkorning-med-tung-lastbil/c30-1.png"
    },
    {
        name: "Slut Pa Vandplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c43.-slut-pa-vandplats/c43-1.png"
    },
    {
        name: "Stopp For Angivet Andamal",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c34.-stopp-for-angivet-andamal/c34.png"
    },
    {
        name: "Stopp Vid Tull",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c33.-stopp-vid-tull/c33-1.png"
    },
    {
        name: "Tillfallig Hastighetsbegransning Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c32.-tillfallig-hastighetsbegransning-upphor/c32-3.png"
    },
    {
        name: "Vandplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/c.-forbudsmarken/c42.-vandplats/c42-1.png"
    },
    {
        name: "Avstandstavla",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f37.-avstandstavla/f37-1.png"
    },
    {
        name: "Cykelled",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f38.-cykelled/f38-1.png"
    },
    {
        name: "Platsmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f36.-platsmarke/f36-1.png"
    },
    {
        name: "Tabellvagvisare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f35.-tabellvagvisare/f35-1.png"
    },
    {
        name: "Vagvisare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning-av-gang--och-cykeltrafik/f34.-vagvisare/f34-1.png"
    },
    {
        name: "Landmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i03.-landmarke/i3-1.png"
    },
    {
        name: "Turistomrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i02.-turistomrade/i2-1.png"
    },
    {
        name: "Turistvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i01.-turistvag/i1-1.png"
    },
    {
        name: "Varldsarv",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/i.-lokaliseringsmarken-for-turistiskt-intressanta-mal/i04.-varldsarv/i4-1.png"
    },
    {
        name: "Akutsjukhus",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g04.-akutsjukhus/g4-1.png"
    },
    {
        name: "Brandslackare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g09.-brandslackare/g9-1.png"
    },
    {
        name: "Busstation",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g07.-busstation/g7.png"
    },
    {
        name: "Farja",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g11.-farja/g11.png"
    },
    {
        name: "Flygplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g08.-flygplats/g8-1.png"
    },
    {
        name: "Handelsomrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g10.-handelsomrade/g10.png"
    },
    {
        name: "Hjalptelefon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g02.-hjalptelefon/g2-1.png"
    },
    {
        name: "Industriomrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g05.-industriomrade/g5-1.png"
    },
    {
        name: "Jarnvagsstation",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g06.-jarnvagsstation/g6-1.png"
    },
    {
        name: "Personfarja",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g12.-personfarja/g12.png"
    },
    {
        name: "Post",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g01.-post/g1-1.png"
    },
    {
        name: "Radiostation For Vagtrafikinformation",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/g.-lokaliseringsmarken-for-upplysning-om-allmanna-intrattningar/g03.-radiostation-for-vagtrafikinformation/g3-1.png"
    },
    {
        name: "Anlaggning Bilar Bostadsutrymme",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h28.-anlaggning-bilar-bostadsutrymme/h28.png"
    },
    {
        name: "Badplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h15.-badplats/h15-1.png"
    },
    {
        name: "Campingplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h11.-campingplats/h11-1.png"
    },
    {
        name: "Drivmedel",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h03.-drivmedel/h3-1.png"
    },
    {
        name: "Forberedande Upplysning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h23.-forberedande-upplysning/h23.png"
    },
    {
        name: "Fordonsverkstad",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h02.-fordonsverkstad/h2-1.png"
    },
    {
        name: "Forsaljningsstalle For Fiskekort",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h21.-forsaljningsstalle-for-fiskekort/h21-1.png"
    },
    {
        name: "Friluftsomrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h16.-friluftsomrade/h16-1.png"
    },
    {
        name: "Gardsbutik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h25.-gardsbutik/h25.png"
    },
    {
        name: "Gas For Fordonsdrift",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h04.-gas-for-fordonsdrift/h4-1.png"
    },
    {
        name: "Golfbana",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h20.-golfbana/h20-1.png"
    },
    {
        name: "Hantverk",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h26.-hantverk/h26.png"
    },
    {
        name: "Hotell",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h07.-hotell/h7-1.png"
    },
    {
        name: "Husvagnsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h12.-husvagnsplats/h12-1.png"
    },
    {
        name: "Informationsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h01.-informationsplats/h1-1.png"
    },
    {
        name: "Laddstation",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h27.-laddstation/h27.png"
    },
    {
        name: "Rastplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h13.-rastplats/h13-1.png"
    },
    {
        name: "Restaurang",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h06.-restaurang/h6-1.png"
    },
    {
        name: "Rum Och Frukost",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h24.-rum-och-frukost/h24-1.png"
    },
    {
        name: "Servering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h05.-servering/h5-1.png"
    },
    {
        name: "Sevardhet",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h22.-sevardhet/h22-1.png"
    },
    {
        name: "Slaplift",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h19.-slaplift/h19-1.png"
    },
    {
        name: "Stollift",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h18.-stollift/h18-1.png"
    },
    {
        name: "Stuga",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h10.-stuga/h10-1.png"
    },
    {
        name: "Stugby",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h09.-stugby/h9-1.png"
    },
    {
        name: "Toalett",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h14.-toalett/h14-1.png"
    },
    {
        name: "Vandrarhem",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h08.-vandrarhem/h8-1.png"
    },
    {
        name: "Vandringsled",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/h.-lokaliseringsmarken-for-upplysning-om-serviceanlaggningar/h17.-vandringsled/h17-1.png"
    },
    {
        name: "Avfartsorienteringstavla",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f04.-avfartsorienteringstavla/f4-1.png"
    },
    {
        name: "Avfartsvisare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f07.-avfartsvisare/f7-1.png"
    },
    {
        name: "Avstandstavla",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f13.-avstandstavla/f13-1.png"
    },
    {
        name: "Fardriktning Vid Omledning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f24.-fardriktning-vid-omledning/f24-1.png"
    },
    {
        name: "Fardvag For Langa Fordonstag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f31a.-fardvag-for-langa-fordonstag/f31a.png"
    },
    {
        name: "Farligt Gods",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f32.-farligt-gods/f32-1.png"
    },
    {
        name: "Infartsparkering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f29.-infartsparkering/f29-1.png"
    },
    {
        name: "Korfalt Avstangt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f26.-korfalt-avstangt/f26-1.png"
    },
    {
        name: "Korfaltsindelning Fore Korsning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f21.-korfaltsindelning-fore-korsning/f21-1.png"
    },
    {
        name: "Korfaltsindelning Pa Stracka",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f18.-korfaltsindelning-pa-stracka/f18-1.png"
    },
    {
        name: "Korfaltsvagvisare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f08.-korfaltsvagvisare/f8-1.png"
    },
    {
        name: "Korfalt Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f25.-korfalt-upphor/f25-1.png"
    },
    {
        name: "Lamplig Vag Eller Forbifart For Visst Fordonsslag Eller Trafikantgrupp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f31.-lamplig-vag-eller-forbifart-for-visst-fordonsslag-eller-trafikantgrupp/f31-1.png"
    },
    {
        name: "Lokal Slinga",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f30.-lokal-slinga/f30-1.png"
    },
    {
        name: "Minskning Av Antal Korfalt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f17.-minskning-av-antal-korfalt/f17-1.png"
    },
    {
        name: "Okning Av Antal Korfalt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f16.-okning-av-antal-korfalt/f16-1.png"
    },
    {
        name: "Omledning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f15.-omledning/f15-1.png"
    },
    {
        name: "Orienteringstavla",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f01.-orienteringstavla/f1-1.png"
    },
    {
        name: "Orienteringstavla For Omledningsvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f23.-orienteringstavla-for-omledningsvag/f23-1.png"
    },
    {
        name: "Orienteringstavla Vid Forbjuden Svang I Korsning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f02.-orienteringstavla-vid-forbjuden-svang-i-korsning/f2-1.png"
    },
    {
        name: "Parkeringshus",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f28.-parkeringshus/f28-1.png"
    },
    {
        name: "Platsmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f10.-platsmarke/f10-1.png"
    },
    {
        name: "Raddningsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f33.-raddningsplats/f33-1.png"
    },
    {
        name: "Riksmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f22.-riksmarke/f22-2.png"
    },
    {
        name: "Samlingsmarke For Vagvisning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f09.-samlingsmarke-for-vagvisning/f9-1.png"
    },
    {
        name: "Tabellorienteringstavla",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f03.-tabellorienteringstavla/f3-1.png"
    },
    {
        name: "Tabellvagvisare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f06.-tabellvagvisare/f6-1.png"
    },
    {
        name: "Trafikplatsnummer",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f27.-trafikplatsnummer/f27-1.png"
    },
    {
        name: "Vaganslutning Med Accelerationsfalt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f19.-vaganslutning-med-accelerationsfalt/f19-1.png"
    },
    {
        name: "Vaganslutning Med Separat Korfalt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f20.-vaganslutning-med-separat-korfalt/f20-1.png"
    },
    {
        name: "Vagnamn",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f11.-vagnamn/f11-1.png"
    },
    {
        name: "Vagnummer",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f14.-vagnummer/f14-1.png"
    },
    {
        name: "Vagvisare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f05.-vagvisare/f5-1.png"
    },
    {
        name: "Vattendrag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/f.-lokaliseringsmarken-for-vagvisning/f12.-vattendrag/f12-1.png"
    },
    {
        name: "Cirkulationsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d03.-cirkulationsplats/d3-1.png"
    },
    {
        name: "Pabjuden Cykelbana",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d04.-pabjuden-cykelbana/d4-1.png"
    },
    {
        name: "Pabjuden Gangbana",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d05.-pabjuden-gangbana/d5-1.png"
    },
    {
        name: "Pabjuden Gang Och Cykelbana",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d06.-pabjuden-gang--och-cykelbana/d6-1.png"
    },
    {
        name: "Pabjuden Korbana",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d02.-pabjuden-korbana/d2-1.png"
    },
    {
        name: "Pabjuden Korriktning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d01.-pabjuden-korriktning/d1-1.png"
    },
    {
        name: "Pabjuden Korriktning For Fordon Lastat Med Farligt Gods",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d12.-pabjuden-korriktning-for-fordon-lastat-med-farligt-gods/d12-1.png"
    },
    {
        name: "Pabjuden Led For Terrangmotorfordon Och Terrangslap",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d09.-pabjuden-led-for-terrangmotorfordon-och-terrangslap/d9-1.png"
    },
    {
        name: "Pabjuden Ridvag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d08.-pabjuden-ridvag/d8-1.png"
    },
    {
        name: "Pabjudet Korfalt Eller Korbana For Fordon I Linjetrafik M.fl",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d10.-pabjudet-korfalt-eller-korbana-for-fordon-i-linjetrafik-m.fl/d10-1.png"
    },
    {
        name: "Pabjudna Gang Och Cykelbanor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d07.-pabjudna-gang--och-cykelbanor/d7-1.png"
    },
    {
        name: "Slut Pa Pabjuden Bana Korfalt Vag Eller Led",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/d.-pabudsmarken/d11.-slut-pa-pabjuden-bana-korfalt-vag-eller-led/d11-1.png"
    },
    {
        name: "Bom",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y03.-bom/y3-1.png"
    },
    {
        name: "Ljudsignal",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y02.-ljudsignal/y2-1.gif"
    },
    {
        name: "Plankorsningsskarm",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y04.-plankorsningsskarm/y4.png"
    },
    {
        name: "Rott Blinkande Ljus",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/y.-signaler-vid-korsning-med-jarnvag-eller-sparvag/y01.-rott-blinkande-ljus/y1.png"
    },
    {
        name: "Buss",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s05.-buss/s5-1.png"
    },
    {
        name: "Cykel Och Moped Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s08.-cykel-och-moped-klass-ii/s8-1.png"
    },
    {
        name: "Gaende",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s10.-gaende/s10-1.png"
    },
    {
        name: "Motorcykel",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s07.-motorcykel/s7-1.png"
    },
    {
        name: "Personbil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s03.-personbil/s3-1.png"
    },
    {
        name: "Personbil Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s12.-personbil-klass-ii/s12-1.png"
    },
    {
        name: "Personbil Med Slapkarra",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s04.-personbil-med-slapkarra/s4-1.png"
    },
    {
        name: "Personfarja",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s13.-personfarja/s13-1.png"
    },
    {
        name: "Rorelsehindrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s11.-rorelsehindrade/s11-1.png"
    },
    {
        name: "Slapkarra",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s09.-slapkarra/s9-1.png"
    },
    {
        name: "Traktor Och Motorredskap Klass Ii",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s06.-traktor-och-motorredskap-klass-ii/s6-1.png"
    },
    {
        name: "Tung Lastbil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s01.-tung-lastbil/s1-1.png"
    },
    {
        name: "Tung Lastbil Med Slapvagn",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/s.-symboler/s02.-tung-lastbil-med-slapvagn/s2-1.png"
    },
    {
        name: "Folj Med Och Stanna",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p10.-folj-med-och-stanna/p10-1.png"
    },
    {
        name: "Forberedande Upplysning Om Kontroll",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p07.-forberedande-upplysning-om-kontroll/p7-1.png"
    },
    {
        name: "Kontroll",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p06.-kontroll/p6-1.png"
    },
    {
        name: "Kor Fram",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p04.-kor-fram/p4-1.png"
    },
    {
        name: "Kor In Till Vagkanten",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p11.-kor-in-till-vagkanten/p11-1.png"
    },
    {
        name: "Minska Hastigheten",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p05.-minska-hastigheten/p5-1.png"
    },
    {
        name: "Minska Hastigheten",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p08.-minska-hastigheten/p8-1.png"
    },
    {
        name: "Minska Hastigheten",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p09.-minska-hastigheten/p9-1.png"
    },
    {
        name: "Stopp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p01.-stopp/p1-1.png"
    },
    {
        name: "Stopp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p02.-stopp/p2-1.png"
    },
    {
        name: "Stopp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/p.-tecken-av-polisman/p03.-stopp/p3-1.png"
    },
    {
        name: "Kannetecken",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v03.-kannetecken/v3.png"
    },
    {
        name: "Kor Fram",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v02.-kor-fram/v2.png"
    },
    {
        name: "Stopp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/v.-tecken-av-vakt/v01.-stopp/v1.png"
    },
    {
        name: "Avgift",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t16.-avgift/t16.png"
    },
    {
        name: "Avstand",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t02.-avstand/t2-1.png"
    },
    {
        name: "Avstand Till Stopplikt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t03.-avstand-till-stopplikt/t3-1.png"
    },
    {
        name: "Boende",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t19.-boende/t19.png"
    },
    {
        name: "Flervagsstopp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t14.-flervagsstopp/t14-1.png"
    },
    {
        name: "Flervagsvajning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t13.-flervagsvajning/t13-1.png"
    },
    {
        name: "Fri Bredd",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t04.-fri-bredd/t4-1.png"
    },
    {
        name: "Laddplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t24.-laddplats/t24-1.png"
    },
    {
        name: "Nedsatt Horsel",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t10.-nedsatt-horsel/t10.png"
    },
    {
        name: "Nedsatt Syn",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t09.-nedsatt-syn/t9-1.png"
    },
    {
        name: "Oppet Dygnet Runt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t25.-oppet-dygnet-runt/t25-1.png"
    },
    {
        name: "Parkeringsbiljett",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t20.-parkeringsbiljett/t20.png"
    },
    {
        name: "Parkeringsskiva",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t17.-parkeringsskiva/t17-1.png"
    },
    {
        name: "Rorelsehindrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t07.-rorelsehindrade/t7.png"
    },
    {
        name: "Symboltavla",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t08.-symboltavla/t8-1.png"
    },
    {
        name: "Riktning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t12.-riktning/t12-1.png"
    },
    {
        name: "Text",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t22.-text/t22-1.png"
    },
    {
        name: "Tidangivelse",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t06.-tidangivelse/t6-1.png"
    },
    {
        name: "Tillaten Tid For Parkering",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t18.-tillaten-tid-for-parkering/t18.png"
    },
    {
        name: "Totalvikt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t05.-totalvikt/t5.png"
    },
    {
        name: "Tunnelkategori",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t23.-tunnelkategori/t23-1.jpg"
    },
    {
        name: "Uppstallning Av Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t21.-uppstallning-av-fordon/t21-1.png"
    },
    {
        name: "Utstrackning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t11.-utstrackning/t11-1.png"
    },
    {
        name: "Vagars Fortsattning I Korsning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t15.-vagars-fortsattning-i-korsning/t15-1.png"
    },
    {
        name: "Vagstrackas Langd",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/t.-tillaggstavlor/t01.-vagstrackas-langd/t1-1.png"
    },
    {
        name: "Blinkande Gul",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig05.-blinkande-gul/sig5-1.png"
    },
    {
        name: "Gron",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig03.-gron/sig3-1.png"
    },
    {
        name: "Gron Akustisk Signal",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig07.-gron-akustisk-signal/sig7-1.png"
    },
    {
        name: "Gron Pil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig14.-gron-pil/sig14-1.png"
    },
    {
        name: "Gul",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig04.-gul/sig4-1.png"
    },
    {
        name: "Gul Pil Eller Pilar",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig13.-gul-pil-eller-pilar/sig13-1.png"
    },
    {
        name: "Gult Blinkande Ljus",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig18.-gult-blinkande-ljus/sig18-1.png"
    },
    {
        name: "Lodratt Streck Eller Pil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig10.-lodratt-streck-eller-pil/sig10-1.png"
    },
    {
        name: "Rod",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig01.-rod/sig1-1.png"
    },
    {
        name: "Rod Akustisk Signal",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig06.-rod-akustisk-signal/sig6-1.png"
    },
    {
        name: "Rodgul",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig02.-rodgul/sig2-1.png"
    },
    {
        name: "Rott Blinkande Ljus",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig16.-rott-blinkande-ljus/sig16-1.png"
    },
    {
        name: "Rott Fast Ljus",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig17.-rott-fast-ljus/sig17-1.png"
    },
    {
        name: "Rott Kryss",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig12.-rott-kryss/sig12-1.png"
    },
    {
        name: "S",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig08.-s/sig8-1.png"
    },
    {
        name: "Svagratt Streck",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig09.-svagratt-streck/sig9-1.png"
    },
    {
        name: "Vagratt Streck",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/sig.-trafiksignaler/sig11.-vagratt-streck/sig11-1.png"
    },
    {
        name: "Livsfarlig Ledning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/j.-upplysningsmarken/j03.-livsfarlig-ledning/j3-1.png"
    },
    {
        name: "Upplysningsmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/j.-upplysningsmarken/j02.-upplysningsmarke/j2-1.png"
    },
    {
        name: "Andamalsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m31.-andamalsplats/m31-1.png"
    },
    {
        name: "Buss",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m28.-buss/m28-1.png"
    },
    {
        name: "Cykel",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m26.-cykel/m26-1.png"
    },
    {
        name: "Cykelbox",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m17a.-cykelbox/m17a-cykelbox.png"
    },
    {
        name: "Cykelfaltslinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m05.-cykelfaltslinje/m5-1.png"
    },
    {
        name: "Cykelpassage Eller Cykeloverfart",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m16.-cykelpassage-eller-cykeloverfart/m16-1.jpg"
    },
    {
        name: "Farthinder",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m17.-farthinder/m17-1.png"
    },
    {
        name: "Forberedande Upplysning Om Vajningsplikt Eller Stopplikt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m18.-forberedande-upplysning-om-vajningsplikt-eller-stopplikt/m18-1.png"
    },
    {
        name: "Forbud Mot Att Parkera",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m22.-forbud-mot-att-parkera/m22-1.png"
    },
    {
        name: "Forbud Mot Att Stanna Och Parkera",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m21.-forbud-mot-att-stanna-och-parkera/m21-1.png"
    },
    {
        name: "Forbud Mot Att Stanna Och Parkera Eller Att Parkera",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m23.-forbud-mot-att-stanna-och-parkera-eller-att-parkera/m23-1.png"
    },
    {
        name: "Gaende",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m27.-gaende/m27-1.png"
    },
    {
        name: "Gang Och Cykelpil",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m25.-gang--och-cykelpil/m25-1.png"
    },
    {
        name: "Hastighet",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m29.-hastighet/m29-1.png"
    },
    {
        name: "Heldragen Linje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m08.-heldragen-linje/m8-1.png"
    },
    {
        name: "Information",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m34.-information/m34-1.png"
    },
    {
        name: "Kantlinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m02.-kantlinje/m2-1.png"
    },
    {
        name: "Korfaltsbyte",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m20.-korfaltsbyte/m20-1.png"
    },
    {
        name: "Korfaltspilar",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m19.-korfaltspilar/m19-1.png"
    },
    {
        name: "Ledlinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m04.-ledlinje/m4-1.png"
    },
    {
        name: "Linje For Fordon I Linjetrafik Med Flera",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m06.-linje-for-fordon-i-linjetrafik-med-flera/m6-1.png"
    },
    {
        name: "Mittlinje Eller Korfaltslinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m01.-mittlinje-eller-korfaltslinje/m1-1.png"
    },
    {
        name: "Mittlinje Eller Korfaltslinje Och Heldragen Linje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m10.-mittlinje-eller-korfaltslinje-och-heldragen-linje/m10-1.png"
    },
    {
        name: "Mittlinje Och Varningslinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m12.-mittlinje-och-varningslinje/m12-1.png"
    },
    {
        name: "Overgangsstalle",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m15.-overgangsstalle/m15-1.png"
    },
    {
        name: "Reversibelt Korfalt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m07.-reversibelt-korfalt/m7-1.png"
    },
    {
        name: "Rorelsehindrad",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m33.-rorelsehindrad/m33-1.png"
    },
    {
        name: "Sparromrade",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m09.-sparromrade/m9-1.png"
    },
    {
        name: "Stopp",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m32.-stopp/m32-1.png"
    },
    {
        name: "Stopplinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m13.-stopplinje/m13-1.png"
    },
    {
        name: "Uppstallningsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m24.-uppstallningsplats/m24-1.png"
    },
    {
        name: "Vagnummer",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m30.-vagnummer/m30.png"
    },
    {
        name: "Vajningslinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m14.-vajningslinje/m14-1.png"
    },
    {
        name: "Varningslinje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m03.-varningslinje/m3-1.png"
    },
    {
        name: "Varningslinje Och Heldragen Linje",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/m.-vagmarkeringar/m11.-varningslinje-och-heldragen-linje/m11-1.png"
    },
    {
        name: "Cykeloverfart",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b08.-cykeloverfart/b8-1.png"
    },
    {
        name: "Huvudled",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b04.-huvudled/b4-1.png"
    },
    {
        name: "Huvudled Upphor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b05.-huvudled-upphor/b5-1.png"
    },
    {
        name: "Motande Trafik Har Vajningsplikt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b07.-motande-trafik-har-vajningsplikt/b7-1.png"
    },
    {
        name: "Overgangsstalle",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b03.-overgangsstalle/b3-1.png"
    },
    {
        name: "Stopplikt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b02.-stopplikt/b2-1.png"
    },
    {
        name: "Vajningsplikt",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b01.-vajningsplikt/b1-1.png"
    },
    {
        name: "Vajningsplikt Mot Motande Trafik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/b.-vajningspliktsmarken/b06.-vajningsplikt-mot-motande-trafik/b6-1.png"
    },
    {
        name: "Avstand Till Plankorsning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a38.-avstand-till-plankorsning/a38-1.png"
    },
    {
        name: "Kryssmarke",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a39.-kryssmarke/a39-1.png"
    },
    {
        name: "Slut Pa Stracka Med Vagarbete",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a21.-slut-pa-stracka-med-vagarbete/a21-1.png"
    },
    {
        name: "Varning For Annan Fara",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a40.-varning-for-annan-fara/a40-1.png"
    },
    {
        name: "Varning For Avsmalnande Vag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a05.-varning-for-avsmalnande-vag/a5-1.png"
    },
    {
        name: "Varning For Barn",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a15.-varning-for-barn/a15-1.png"
    },
    {
        name: "Varning For Bro",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a06.-varning-for-bro/a6-1.png"
    },
    {
        name: "Varning For Cirkulationsplats",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a30.-varning-for-cirkulationsplats/a30-1.png"
    },
    {
        name: "Varning For Cyklande Och Mopedforare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a16.-varning-for-cyklande-och-mopedforare/a16-1.png"
    },
    {
        name: "Varning For Djur",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a19.-varning-for-djur/a19-1.png"
    },
    {
        name: "Varning For Farlig Kurva",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a01.-varning-for-farlig-kurva/a1-1.png"
    },
    {
        name: "Varning For Farthinder",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a09.-varning-for-farthinder/a9-1.png"
    },
    {
        name: "Varning For Flera Farliga Kurvor",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a02.-varning-for-flera-farliga-kurvor/a2-1.png"
    },
    {
        name: "Varning For Flerfargssignal",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a22.-varning-for-flerfargssignal/a22-1.png"
    },
    {
        name: "Varning For Fordon Med Forspant Dragdjur",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a32.-varning-for-fordon-med-forspant-dragdjur/a32-1.png"
    },
    {
        name: "Varning For Gaende",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a14.-varning-for-gaende/a14.png"
    },
    {
        name: "Varning For Jarnvagskorsning Med Bommar",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a35.-varning-for-jarnvagskorsning-med-bommar/a35-1.png"
    },
    {
        name: "Varning For Jarnvagskorsning Utan Bommar",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a36.-varning-for-jarnvagskorsning-utan-bommar/a36-1.png"
    },
    {
        name: "Varning For Kaj",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a07.-varning-for-kaj/a7-1.png"
    },
    {
        name: "Varning For Ko",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a34.-varning-for-ko/a34-1.png"
    },
    {
        name: "Varning For Korsning Med Sparvag Utan Bommar",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a37.-varning-for-korsning-med-sparvag-utan-bommar/a37-1.png"
    },
    {
        name: "Varning For Lagt Flygande Flygplan",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a23.-varning-for-lagt-flygande-flygplan/a23-1.png"
    },
    {
        name: "Varning For Langsamtgaende Fordon",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a31.-varning-for-langsamtgaende-fordon/a31.png"
    },
    {
        name: "Varning For Motande Trafik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a25.-varning-for-motande-trafik/a25-1.png"
    },
    {
        name: "Varning For Nedforslutning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a03.-varning-for-nedforslutning/a3-1.png"
    },
    {
        name: "Varning For Ojamn Vag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a08.-varning-for-ojamn-vag/a8-1.png"
    },
    {
        name: "Varning For Olycka",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a41.-varning-for-olycka/a41.png"
    },
    {
        name: "Varning For Overgangsstalle",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a13.-varning-for-overgangsstalle/a13-1.png"
    },
    {
        name: "Varning For Ridande",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a18.-varning-for-ridande/a18-1.png"
    },
    {
        name: "Varning For Sidvind",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a24.-varning-for-sidvind/a24-1.png"
    },
    {
        name: "Varning For Skidakare",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a17.-varning-for-skidakare/a17-1.png"
    },
    {
        name: "Varning For Slirig Vag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a10.-varning-for-slirig-vag/a10-1.png"
    },
    {
        name: "Varning For Stenras",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a12.-varning-for-stenras/a12-1.png"
    },
    {
        name: "Varning For Stenskott",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a11.-varning-for-stenskott/a11-1.png"
    },
    {
        name: "Varning For Stigning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a04.-varning-for-stigning/a4-1.png"
    },
    {
        name: "Varning For Svag Vagkant Eller Hog Korbanekant",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a27.-varning-for-svag-vagkant-eller-hog-korbanekant/a27-1.png"
    },
    {
        name: "Varning For Terrangskotertrafik",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a33.-varning-for-terrangskotertrafik/a33-1.png"
    },
    {
        name: "Varning For Tunnel",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a26.-varning-for-tunnel/a26-1.png"
    },
    {
        name: "Varning For Vagarbete",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a20.-varning-for-vagarbete/a20-1.png"
    },
    {
        name: "Varning For Vagkorsning",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a28.-varning-for-vagkorsning/a28-1.png"
    },
    {
        name: "Varning For Vagkorsning Dar Trafikanter Pa Anslutande Vag",
        imageUrl: "https://www.transportstyrelsen.se/globalassets/global/vag/vagmarken2/a.-varningsmarken/a29.-varning-for-vagkorsning-dar-trafikanter-pa-anslutande-vag/a29-1.png"
    }
];

const statements = [
    {
        statement: "I must stop at the stop line or before entering the road.",
        trueFor: [
            { signName: "Stopplikt", explanation: "This sign means that I must stop before entering or crossing the road." }
        ],
        falseFor: [
            { signName: "Vajningsplikt", explanation: "This sign means that I must yield before entering or crossing the road, not that I must stop before entering or crossing the road." },
            { signName: "Huvudled", explanation: "This sign means that this is a priority road, not that I must stop before entering or crossing the road." },
            { signName: "Motande Trafik Har Vajningsplikt", explanation: "This sign means that oncoming traffic must yield to me, not that I must stop before entering or crossing the road." }
        ],
        similarFalseFor: [
            { signName: "Stopp", explanation: "This sign is related, but it means stopp, not that I must stop before entering or crossing the road." },
            { signName: "Stopplinje", explanation: "This sign is related, but it means stopplinje, not that I must stop before entering or crossing the road." },
            { signName: "Avstand Till Stopplikt", explanation: "This sign is related, but it means distance to a stop requirement ahead, not that I must stop before entering or crossing the road." },
            { signName: "Stopp Vid Tull", explanation: "This sign is related, but it means stopp vid tull, not that I must stop before entering or crossing the road." },
            { signName: "Stopp For Angivet Andamal", explanation: "This sign is related, but it means stopp for angivet andamal, not that I must stop before entering or crossing the road." }
        ]
    },
    {
        statement: "I must yield to traffic on the road I am entering or crossing.",
        trueFor: [
            { signName: "Vajningsplikt", explanation: "This sign means that I must yield before entering or crossing the road." }
        ],
        falseFor: [
            { signName: "Stopplikt", explanation: "This sign means that I must stop before entering or crossing the road, not that I only have to yield before entering or crossing the road." },
            { signName: "Huvudled", explanation: "This sign means that this is a priority road, not that I only have to yield before entering or crossing the road." },
            { signName: "Motande Trafik Har Vajningsplikt", explanation: "This sign means that oncoming traffic must yield to me, not that I only have to yield before entering or crossing the road." }
        ],
        similarFalseFor: [
            { signName: "Forberedande Upplysning Om Vajningsplikt Eller Stopplikt", explanation: "This sign is related, but it means forberedande upplysning om vajningsplikt eller stopplikt, not that I only have to yield before entering or crossing the road." },
            { signName: "Vajningslinje", explanation: "This sign is related, but it means vajningslinje, not that I only have to yield before entering or crossing the road." },
            { signName: "Flervagsvajning", explanation: "This sign is related, but it means flervagsvajning, not that I only have to yield before entering or crossing the road." }
        ]
    },
    {
        statement: "Traffic on connecting roads must yield to me while I am on this priority road.",
        trueFor: [
            { signName: "Huvudled", explanation: "This sign means that this is a priority road." }
        ],
        falseFor: [
            { signName: "Vajningsplikt", explanation: "This sign means that I must yield before entering or crossing the road, not that traffic on connecting roads must yield to me on a priority road." },
            { signName: "Stopplikt", explanation: "This sign means that I must stop before entering or crossing the road, not that traffic on connecting roads must yield to me on a priority road." },
            { signName: "Huvudled Upphor", explanation: "This sign means that the priority road is ending, not that traffic on connecting roads must yield to me on a priority road." }
        ],
        similarFalseFor: [
            { signName: "Varning For Vagkorsning Dar Trafikanter Pa Anslutande Vag", explanation: "This sign is related, but it means a warning for vagkorsning dar trafikanter pa anslutande vag, not that traffic on connecting roads must yield to me on a priority road." },
            { signName: "Varning For Vagkorsning", explanation: "This sign is related, but it means a warning for vagkorsning, not that traffic on connecting roads must yield to me on a priority road." }
        ]
    },
    {
        statement: "The priority road ends here.",
        trueFor: [
            { signName: "Huvudled Upphor", explanation: "This sign means that the priority road is ending." }
        ],
        falseFor: [
            { signName: "Huvudled", explanation: "This sign means that this is a priority road, not that the priority road is ending." },
            { signName: "Vajningsplikt", explanation: "This sign means that I must yield before entering or crossing the road, not that the priority road is ending." },
            { signName: "Stopplikt", explanation: "This sign means that I must stop before entering or crossing the road, not that the priority road is ending." }
        ],
        similarFalseFor: [
            { signName: "Slut Pa Omrade", explanation: "This sign is related, but it means the end of an area with local rules, not that the priority road is ending." },
            { signName: "Slut Pa Pabjuden Bana Korfalt Vag Eller Led", explanation: "This sign is related, but it means the end of a mandatory lane, carriageway, road, or path, not that the priority road is ending." },
            { signName: "Tillfallig Hastighetsbegransning Upphor", explanation: "This sign is related, but it means the end of a temporary speed limit, not that the priority road is ending." }
        ]
    },
    {
        statement: "I have priority over oncoming traffic on this narrow section.",
        trueFor: [
            { signName: "Motande Trafik Har Vajningsplikt", explanation: "This sign means that oncoming traffic must yield to me." }
        ],
        falseFor: [
            { signName: "Vajningsplikt Mot Motande Trafik", explanation: "This sign means that I must yield to oncoming traffic, not that I have priority over oncoming traffic." },
            { signName: "Varning For Motande Trafik", explanation: "This sign means a warning for oncoming traffic, not that I have priority over oncoming traffic." }
        ],
        similarFalseFor: [
            { signName: "Vaganslutning Med Separat Korfalt", explanation: "This sign is related, but it means a road connection with a separate lane, not that I have priority over oncoming traffic." }
        ]
    },
    {
        statement: "I must yield to oncoming traffic on this narrow section.",
        trueFor: [
            { signName: "Vajningsplikt Mot Motande Trafik", explanation: "This sign means that I must yield to oncoming traffic." }
        ],
        falseFor: [
            { signName: "Motande Trafik Har Vajningsplikt", explanation: "This sign means that oncoming traffic must yield to me, not that I must yield to oncoming traffic." },
            { signName: "Varning For Motande Trafik", explanation: "This sign means a warning for oncoming traffic, not that I must yield to oncoming traffic." }
        ],
        similarFalseFor: [
            { signName: "Vajningsplikt", explanation: "This sign is related, but it means that I must yield before entering or crossing the road, not that I must yield to oncoming traffic." }
        ]
    },
    {
        statement: "I must drive around the roundabout in the direction shown by the arrows.",
        trueFor: [
            { signName: "Cirkulationstrafik", explanation: "This sign means that I must drive around the roundabout in the arrow direction." }
        ],
        falseFor: [
            { signName: "Varning For Cirkulationsplats", explanation: "This sign means that a roundabout is coming ahead, not that I must follow the mandatory roundabout direction." },
            { signName: "Cirkulationsplats", explanation: "This sign means cirkulationsplats, not that I must follow the mandatory roundabout direction." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign is related, but it means a mandatory driving direction, not that I must follow the mandatory roundabout direction." },
            { signName: "Pabjuden Korbana", explanation: "This sign is related, but it means a mandatory carriageway or side of the road, not that I must follow the mandatory roundabout direction." }
        ]
    },
    {
        statement: "This sign warns me that a roundabout is ahead.",
        trueFor: [
            { signName: "Varning For Cirkulationsplats", explanation: "This sign means that a roundabout is coming ahead." }
        ],
        falseFor: [
            { signName: "Cirkulationstrafik", explanation: "This sign means that I must drive around the roundabout in the arrow direction, not that a roundabout is only being warned about ahead." },
            { signName: "Cirkulationsplats", explanation: "This sign means cirkulationsplats, not that a roundabout is only being warned about ahead." }
        ],
        similarFalseFor: [
            { signName: "Varning For Vagkorsning", explanation: "This sign is related, but it means a warning for vagkorsning, not that a roundabout is only being warned about ahead." }
        ]
    },
    {
        statement: "I must follow the direction or directions shown by this mandatory direction sign.",
        trueFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign means drivers must travel in the indicated direction." }
        ],
        falseFor: [
            { signName: "Enkelriktad Trafik", explanation: "This sign means one-way traffic on the road, not that I must follow the direction or directions shown by this mandatory direction sign." },
            { signName: "Markeringspil", explanation: "This sign means a marker showing which side to pass an obstacle, not that I must follow the direction or directions shown by this mandatory direction sign." },
            { signName: "Korfaltspilar", explanation: "This sign means korfaltspilar, not that I must follow the direction or directions shown by this mandatory direction sign." }
        ],
        similarFalseFor: [
            { signName: "Cirkulationstrafik", explanation: "This sign is related, but it means that I must drive around the roundabout in the arrow direction, not that I must follow the direction or directions shown by this mandatory direction sign." }
        ]
    },
    {
        statement: "I may only drive in the direction shown because this road is one-way.",
        trueFor: [
            { signName: "Enkelriktad Trafik", explanation: "This sign means one-way traffic on the road." }
        ],
        falseFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign means a mandatory driving direction, not that I may only drive in the direction shown because this road is one-way." },
            { signName: "Markeringspil", explanation: "This sign means a marker showing which side to pass an obstacle, not that I may only drive in the direction shown because this road is one-way." },
            { signName: "Korfaltspilar", explanation: "This sign means korfaltspilar, not that I may only drive in the direction shown because this road is one-way." }
        ],
        similarFalseFor: [
            { signName: "Atervandsvag", explanation: "This sign is related, but it means a road with no through exit, not that I may only drive in the direction shown because this road is one-way." }
        ]
    },
    {
        statement: "This road has no through exit for vehicles.",
        trueFor: [
            { signName: "Atervandsvag", explanation: "This sign means a road with no through exit." }
        ],
        falseFor: [
            { signName: "Enkelriktad Trafik", explanation: "This sign means one-way traffic on the road, not that this road has no through exit." },
            { signName: "Vagvisare", explanation: "This sign means direction guidance to a destination, not that this road has no through exit." },
            { signName: "Orienteringstavla", explanation: "This sign means advance route information rather than a rule sign, not that this road has no through exit." }
        ],
        similarFalseFor: [
            { signName: "Avfartsskarm", explanation: "This sign is related, but it means a marker panel at an exit or sharp alignment change, not that this road has no through exit." }
        ]
    },
    {
        statement: "I must not enter this road with a vehicle from this direction.",
        trueFor: [
            { signName: "Forbud Mot Infart Med Fordon", explanation: "This sign means no entry for vehicles from this direction." }
        ],
        falseFor: [
            { signName: "Forbud Mot Trafik Med Fordon", explanation: "This sign means no vehicle traffic past the sign, not that I must not enter this road with a vehicle from this direction." },
            { signName: "Enkelriktad Trafik", explanation: "This sign means one-way traffic on the road, not that I must not enter this road with a vehicle from this direction." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign is related, but it means a mandatory driving direction, not that I must not enter this road with a vehicle from this direction." },
            { signName: "Stopplikt", explanation: "This sign is related, but it means that I must stop before entering or crossing the road, not that I must not enter this road with a vehicle from this direction." }
        ]
    },
    {
        statement: "I must not drive any vehicle past this point.",
        trueFor: [
            { signName: "Forbud Mot Trafik Med Fordon", explanation: "This sign means no vehicle traffic past the sign." }
        ],
        falseFor: [
            { signName: "Forbud Mot Infart Med Fordon", explanation: "This sign means no entry for vehicles from this direction, not that I must not drive any vehicle past this point." },
            { signName: "Forbud Mot Trafik Med Annat Motordrivet Fordon An Moped Klass Ii", explanation: "This sign means no motor vehicles except class II mopeds, not that I must not drive any vehicle past this point." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Trafik Med Motordrivet Fordon Med Fler An Tva Hjul", explanation: "This sign is related, but it means no motor vehicles with more than two wheels, not that I must not drive any vehicle past this point." }
        ]
    },
    {
        statement: "I must not drive a motor vehicle here, except a class II moped.",
        trueFor: [
            { signName: "Forbud Mot Trafik Med Annat Motordrivet Fordon An Moped Klass Ii", explanation: "This sign means no motor vehicles except class II mopeds." }
        ],
        falseFor: [
            { signName: "Forbud Mot Trafik Med Fordon", explanation: "This sign means no vehicle traffic past the sign, not that I must not drive a motor vehicle here, except a class II moped." },
            { signName: "Forbud Mot Trafik Med Moped Klass Ii", explanation: "This sign means no class II mopeds, not that I must not drive a motor vehicle here, except a class II moped." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Trafik Med Motorcykel Och Moped Klass I", explanation: "This sign is related, but it means no motorcycles or class I mopeds, not that I must not drive a motor vehicle here, except a class II moped." },
            { signName: "Forbud Mot Trafik Med Motordrivet Fordon Med Fler An Tva Hjul", explanation: "This sign is related, but it means no motor vehicles with more than two wheels, not that I must not drive a motor vehicle here, except a class II moped." }
        ]
    },
    {
        statement: "Cyclists and class II moped riders must not ride here.",
        trueFor: [
            { signName: "Forbud Mot Trafik Med Cykel Och Moped Klass Ii", explanation: "This sign means cyclists and class II moped riders must not ride here." }
        ],
        falseFor: [
            { signName: "Pabjuden Cykelbana", explanation: "This sign means cyclists must use a cycle track, not that cyclists and class II moped riders must not ride here." },
            { signName: "Cykel Och Moped Klass Ii", explanation: "This sign identifies bicycles and class II mopeds as a category, not that cyclists and class II moped riders must not ride here." },
            { signName: "Cykel", explanation: "This sign identifies bicycles as a category, not that cyclists and class II moped riders must not ride here." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Trafik Med Moped Klass Ii", explanation: "This sign is related, but it means class II moped riders are prohibited, not that cyclists and class II moped riders must not ride here." },
            { signName: "Cykelgata", explanation: "This sign is related, but it means that a bicycle street begins here, not that cyclists and class II moped riders must not ride here." }
        ]
    },
    {
        statement: "Class II moped riders must not ride here.",
        trueFor: [
            { signName: "Forbud Mot Trafik Med Moped Klass Ii", explanation: "This sign means class II moped riders must not ride here." }
        ],
        falseFor: [
            { signName: "Forbud Mot Trafik Med Cykel Och Moped Klass Ii", explanation: "This sign means no bicycles or class II mopeds, not that class II moped riders must not ride here." },
            { signName: "Cykel Och Moped Klass Ii", explanation: "This sign identifies bicycles and class II mopeds as a category, not that class II moped riders must not ride here." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Trafik Med Motorcykel Och Moped Klass I", explanation: "This sign is related, but it means no motorcycles or class I mopeds, not that class II moped riders must not ride here." }
        ]
    },
    {
        statement: "Drivers of heavy lorries must not drive here.",
        trueFor: [
            { signName: "Forbud Mot Trafik Med Tung Lastbil", explanation: "This sign means drivers of heavy lorries must not drive here." }
        ],
        falseFor: [
            { signName: "Tung Lastbil", explanation: "This sign identifies heavy lorries as a vehicle category, not a ban on driving them here." },
            { signName: "Tung Lastbil Med Slapvagn", explanation: "This sign identifies heavy lorries with trailers, not a general ban on heavy lorries." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Omkorning Med Tung Lastbil", explanation: "This sign is related, but it bans overtaking by heavy lorries rather than banning them from the road." },
            { signName: "Forbud Mot Trafik Med Traktor Och Motorredskap Klass Ii", explanation: "This sign is related, but it bans tractors and class II motor equipment, not heavy lorries." }
        ]
    },
    {
        statement: "I must not overtake another motor vehicle other than a two-wheeled moped or motorcycle.",
        trueFor: [
            { signName: "Forbud Mot Omkorning", explanation: "This sign means no overtaking with motor vehicles except two-wheeled mopeds or motorcycles." }
        ],
        falseFor: [
            { signName: "Slut Pa Forbud Mot Omkorning", explanation: "This sign means the end of forbud mot omkorning, not that I must not overtake another motor vehicle other than a two-wheeled moped or motorcycle." },
            { signName: "Forbud Mot Omkorning Med Tung Lastbil", explanation: "This sign means no overtaking by heavy lorries, not that I must not overtake another motor vehicle other than a two-wheeled moped or motorcycle." }
        ],
        similarFalseFor: [
            { signName: "Varning For Motande Trafik", explanation: "This sign is related, but it means a warning for oncoming traffic, not that I must not overtake another motor vehicle other than a two-wheeled moped or motorcycle." }
        ]
    },
    {
        statement: "I must not turn around with a U-turn here.",
        trueFor: [
            { signName: "Forbud Mot U Svang", explanation: "This sign means no U-turns." }
        ],
        falseFor: [
            { signName: "Forbud Mot Svang I Korsning", explanation: "This sign means no turn in the shown direction at the intersection, not that I must not turn around with a U-turn here." },
            { signName: "Pabjuden Korriktning", explanation: "This sign means a mandatory driving direction, not that I must not turn around with a U-turn here." }
        ],
        similarFalseFor: [
            { signName: "Orienteringstavla Vid Forbjuden Svang I Korsning", explanation: "This sign is related, but it means advance information about a prohibited turn, not that I must not turn around with a U-turn here." }
        ]
    },
    {
        statement: "I must not turn in the direction shown by this sign at the intersection.",
        trueFor: [
            { signName: "Forbud Mot Svang I Korsning", explanation: "This sign means no turn in the shown direction at the intersection." }
        ],
        falseFor: [
            { signName: "Forbud Mot U Svang", explanation: "This sign means no U-turns, not that I must not turn in the direction shown by this sign at the intersection." },
            { signName: "Pabjuden Korriktning", explanation: "This sign means a mandatory driving direction, not that I must not turn in the direction shown by this sign at the intersection." }
        ],
        similarFalseFor: [
            { signName: "Orienteringstavla Vid Forbjuden Svang I Korsning", explanation: "This sign is related, but it means advance information about a prohibited turn, not that I must not turn in the direction shown by this sign at the intersection." }
        ]
    },
    {
        statement: "I must not park here.",
        trueFor: [
            { signName: "Forbud Mot Att Parkera Fordon", explanation: "This sign means that parking is prohibited, but stopping is a separate rule." }
        ],
        falseFor: [
            { signName: "Parkering", explanation: "This sign means that parking is allowed at this place, not that I must not park here." },
            { signName: "Forbud Mot Att Stanna Och Parkera Fordon", explanation: "This sign means that both stopping and parking are prohibited, not that I must not park here." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Att Parkera", explanation: "This sign is related, but it means a road marking or symbol for no parking rather than the upright no-parking sign, not that I must not park here." },
            { signName: "Sarskilda Bestammelser For Parkering", explanation: "This sign is related, but it means special parking conditions rather than the basic parking-place sign, not that I must not park here." }
        ]
    },
    {
        statement: "I must not stop or park here.",
        trueFor: [
            { signName: "Forbud Mot Att Stanna Och Parkera Fordon", explanation: "This sign means that both stopping and parking are prohibited." },
            { signName: "Forbud Mot Att Stanna Och Parkera", explanation: "This sign means that a road marking prohibits both stopping and parking." }
        ],
        falseFor: [
            { signName: "Forbud Mot Att Parkera Fordon", explanation: "This sign means that parking is prohibited, but stopping is a separate rule, not that both stopping and parking are prohibited here." },
            { signName: "Parkering", explanation: "This sign means that parking is allowed at this place, not that both stopping and parking are prohibited here." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Att Stanna Och Parkera Eller Att Parkera", explanation: "This sign is related, but it means that a road marking may prohibit stopping and parking or only parking depending on how it is used, not that both stopping and parking are prohibited here." }
        ]
    },
    {
        statement: "This sign marks a place where parking is allowed.",
        trueFor: [
            { signName: "Parkering", explanation: "This sign means that parking is allowed at this place." }
        ],
        falseFor: [
            { signName: "Forbud Mot Att Parkera Fordon", explanation: "This sign means that parking is prohibited, but stopping is a separate rule, not that parking is allowed here." },
            { signName: "Forbud Mot Att Stanna Och Parkera Fordon", explanation: "This sign means that both stopping and parking are prohibited, not that parking is allowed here." }
        ],
        similarFalseFor: [
            { signName: "Parkeringshus", explanation: "This sign is related, but it means a parking garage or parking building, not that parking is allowed here." },
            { signName: "Infartsparkering", explanation: "This sign is related, but it means park-and-ride parking, not that parking is allowed here." },
            { signName: "Parkeringsbiljett", explanation: "This sign is related, but it means that a parking ticket applies or is needed, not that parking is allowed here." }
        ]
    },
    {
        statement: "I must not drive faster than the speed shown on the sign.",
        trueFor: [
            { signName: "Hastighetsbegransning", explanation: "This sign means that the speed shown is a binding maximum speed limit." }
        ],
        falseFor: [
            { signName: "Rekommenderad Hogsta Hastighet", explanation: "This sign means that the speed shown is recommended, not a binding limit, not that I must not drive faster than the speed shown on the sign." },
            { signName: "Rekommenderad Lagre Hastighet", explanation: "This sign means that a lower speed is recommended for this road section, not that I must not drive faster than the speed shown on the sign." },
            { signName: "Hastighet", explanation: "This sign means a speed-related road marking or extra indication, not that I must not drive faster than the speed shown on the sign." }
        ],
        similarFalseFor: [
            { signName: "Tillfallig Hastighetsbegransning Upphor", explanation: "This sign is related, but it means the end of a temporary speed limit, not that I must not drive faster than the speed shown on the sign." },
            { signName: "Minska Hastigheten", explanation: "This sign is related, but it means an instruction from a traffic officer to reduce speed, not that I must not drive faster than the speed shown on the sign." }
        ]
    },
    {
        statement: "This sign shows a recommended maximum speed.",
        trueFor: [
            { signName: "Rekommenderad Hogsta Hastighet", explanation: "This sign means that the speed shown is recommended, not a binding limit." }
        ],
        falseFor: [
            { signName: "Hastighetsbegransning", explanation: "This sign means that the speed shown is a binding maximum speed limit, not that the sign shows a recommended maximum speed." },
            { signName: "Rekommenderad Hogsta Hastighet Upphor", explanation: "This sign means that the recommended maximum speed ends here, not that the sign shows a recommended maximum speed." }
        ],
        similarFalseFor: [
            { signName: "Rekommenderad Lagre Hastighet", explanation: "This sign is related, but it means that a lower speed is recommended for this road section, not that the sign shows a recommended maximum speed." }
        ]
    },
    {
        statement: "This sign shows a recommended lower speed for this road section.",
        trueFor: [
            { signName: "Rekommenderad Lagre Hastighet", explanation: "This sign means that a lower speed is recommended for this road section." }
        ],
        falseFor: [
            { signName: "Hastighetsbegransning", explanation: "This sign means that the speed shown is a binding maximum speed limit, not that the sign shows a recommended lower speed for this road section." },
            { signName: "Rekommenderad Hogsta Hastighet", explanation: "This sign means that the speed shown is recommended, not a binding limit, not that the sign shows a recommended lower speed for this road section." }
        ],
        similarFalseFor: [
            { signName: "Minska Hastigheten", explanation: "This sign is related, but it means an instruction from a traffic officer to reduce speed, not that the sign shows a recommended lower speed for this road section." },
            { signName: "Rekommenderad Lagre Hastighet Upphor", explanation: "This sign is related, but it means that the recommended lower speed ends here, not that the sign shows a recommended lower speed for this road section." }
        ]
    },
    {
        statement: "I am entering a motorway.",
        trueFor: [
            { signName: "Motorvag", explanation: "This sign means that the motorway begins here." }
        ],
        falseFor: [
            { signName: "Motorvag Upphor", explanation: "This sign means that the motorway ends here, not that the motorway begins here." },
            { signName: "Motortrafikled", explanation: "This sign means that the motor-traffic road begins here, not that the motorway begins here." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Korbana", explanation: "This sign is related, but it means a mandatory carriageway or side of the road, not that the motorway begins here." }
        ]
    },
    {
        statement: "I am leaving the motorway.",
        trueFor: [
            { signName: "Motorvag Upphor", explanation: "This sign means that the motorway ends here." }
        ],
        falseFor: [
            { signName: "Motorvag", explanation: "This sign means that the motorway begins here, not that the motorway ends here." },
            { signName: "Motortrafikled Upphor", explanation: "This sign means that the motor-traffic road ends here, not that the motorway ends here." }
        ],
        similarFalseFor: [
            { signName: "Slut Pa Pabjuden Bana Korfalt Vag Eller Led", explanation: "This sign is related, but it means the end of a mandatory lane, carriageway, road, or path, not that the motorway ends here." }
        ]
    },
    {
        statement: "I am entering a motor-traffic road.",
        trueFor: [
            { signName: "Motortrafikled", explanation: "This sign means that the motor-traffic road begins here." }
        ],
        falseFor: [
            { signName: "Motortrafikled Upphor", explanation: "This sign means that the motor-traffic road ends here, not that the motor-traffic road begins here." },
            { signName: "Motorvag", explanation: "This sign means that the motorway begins here, not that the motor-traffic road begins here." }
        ],
        similarFalseFor: [
            { signName: "Tattbebyggt Omrade", explanation: "This sign is related, but it means that a built-up area begins here, not that the motor-traffic road begins here." }
        ]
    },
    {
        statement: "I am leaving the motor-traffic road.",
        trueFor: [
            { signName: "Motortrafikled Upphor", explanation: "This sign means that the motor-traffic road ends here." }
        ],
        falseFor: [
            { signName: "Motortrafikled", explanation: "This sign means that the motor-traffic road begins here, not that the motor-traffic road ends here." },
            { signName: "Motorvag Upphor", explanation: "This sign means that the motorway ends here, not that the motor-traffic road ends here." }
        ],
        similarFalseFor: [
            { signName: "Tattbebyggt Omrade Upphor", explanation: "This sign is related, but it means that the built-up area ends here, not that the motor-traffic road ends here." }
        ]
    },
    {
        statement: "I am entering a built-up area.",
        trueFor: [
            { signName: "Tattbebyggt Omrade", explanation: "This sign means that a built-up area begins here." }
        ],
        falseFor: [
            { signName: "Tattbebyggt Omrade Upphor", explanation: "This sign means that the built-up area ends here, not that a built-up area begins here." },
            { signName: "Omradesmarke", explanation: "This sign means an area with local rules shown on the sign, not that a built-up area begins here." }
        ],
        similarFalseFor: [
            { signName: "Miljozon", explanation: "This sign is related, but it means that an environmental zone begins here, not that a built-up area begins here." },
            { signName: "Turistomrade", explanation: "This sign is related, but it means a tourist area, not that a built-up area begins here." }
        ]
    },
    {
        statement: "I am leaving a built-up area.",
        trueFor: [
            { signName: "Tattbebyggt Omrade Upphor", explanation: "This sign means that the built-up area ends here." }
        ],
        falseFor: [
            { signName: "Tattbebyggt Omrade", explanation: "This sign means that a built-up area begins here, not that the built-up area ends here." },
            { signName: "Slut Pa Omrade", explanation: "This sign means the end of an area with local rules, not that the built-up area ends here." }
        ],
        similarFalseFor: [
            { signName: "Slut Pa Miljozon", explanation: "This sign is related, but it means that the environmental zone ends here, not that the built-up area ends here." }
        ]
    },
    {
        statement: "I am entering an environmental zone.",
        trueFor: [
            { signName: "Miljozon", explanation: "This sign means that an environmental zone begins here." }
        ],
        falseFor: [
            { signName: "Slut Pa Miljozon", explanation: "This sign means that the environmental zone ends here, not that an environmental zone begins here." },
            { signName: "Tattbebyggt Omrade", explanation: "This sign means that a built-up area begins here, not that an environmental zone begins here." }
        ],
        similarFalseFor: [
            { signName: "Omradesmarke", explanation: "This sign is related, but it means an area with local rules shown on the sign, not that an environmental zone begins here." }
        ]
    },
    {
        statement: "I am leaving an environmental zone.",
        trueFor: [
            { signName: "Slut Pa Miljozon", explanation: "This sign means that the environmental zone ends here." }
        ],
        falseFor: [
            { signName: "Miljozon", explanation: "This sign means that an environmental zone begins here, not that the environmental zone ends here." },
            { signName: "Slut Pa Omrade", explanation: "This sign means the end of an area with local rules, not that the environmental zone ends here." }
        ],
        similarFalseFor: [
            { signName: "Tattbebyggt Omrade Upphor", explanation: "This sign is related, but it means that the built-up area ends here, not that the environmental zone ends here." }
        ]
    },
    {
        statement: "I must drive at walking speed in this walking-speed area.",
        trueFor: [
            { signName: "Gangfartsomrade", explanation: "This sign means that a walking-speed area begins here." }
        ],
        falseFor: [
            { signName: "Gangfartsomrade Upphor", explanation: "This sign means that the walking-speed area ends here, not that I must drive at walking speed in this walking-speed area." },
            { signName: "Gagata", explanation: "This sign means that a pedestrian street begins here, not that I must drive at walking speed in this walking-speed area." },
            { signName: "Cykelgata", explanation: "This sign means that a bicycle street begins here, not that I must drive at walking speed in this walking-speed area." }
        ],
        similarFalseFor: [
            { signName: "Varning For Gaende", explanation: "This sign is related, but it means a warning for pedestrians near or crossing the road, not that I must drive at walking speed in this walking-speed area." },
            { signName: "Pabjuden Gangbana", explanation: "This sign is related, but it means a mandatory footpath, not that I must drive at walking speed in this walking-speed area." }
        ]
    },
    {
        statement: "I am leaving the walking-speed area.",
        trueFor: [
            { signName: "Gangfartsomrade Upphor", explanation: "This sign means that the walking-speed area ends here." }
        ],
        falseFor: [
            { signName: "Gangfartsomrade", explanation: "This sign means that a walking-speed area begins here, not that I am leaving the walking-speed area." },
            { signName: "Gagata Upphor", explanation: "This sign means that the pedestrian street ends here, not that I am leaving the walking-speed area." }
        ],
        similarFalseFor: [
            { signName: "Cykelgata Upphor", explanation: "This sign is related, but it means that the bicycle street ends here, not that I am leaving the walking-speed area." }
        ]
    },
    {
        statement: "I am entering a pedestrian street.",
        trueFor: [
            { signName: "Gagata", explanation: "This sign means that a pedestrian street begins here." }
        ],
        falseFor: [
            { signName: "Gangfartsomrade", explanation: "This sign means that a walking-speed area begins here, not that I am entering a pedestrian street." },
            { signName: "Gagata Upphor", explanation: "This sign means that the pedestrian street ends here, not that I am entering a pedestrian street." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign is related, but it means a mandatory footpath, not that I am entering a pedestrian street." },
            { signName: "Forbud Mot Gangtrafik", explanation: "This sign is related, but it means pedestrians are prohibited, not that I am entering a pedestrian street." }
        ]
    },
    {
        statement: "I am entering a bicycle street.",
        trueFor: [
            { signName: "Cykelgata", explanation: "This sign means that a bicycle street begins here." }
        ],
        falseFor: [
            { signName: "Cykelgata Upphor", explanation: "This sign means that the bicycle street ends here, not that I am entering a bicycle street." },
            { signName: "Pabjuden Cykelbana", explanation: "This sign means cyclists must use a cycle track, not that I am entering a bicycle street." }
        ],
        similarFalseFor: [
            { signName: "Cykel Och Moped Klass Ii", explanation: "This sign is related, but it means bicycles and class II mopeds as a symbol or road-user category, not that I am entering a bicycle street." },
            { signName: "Cykel", explanation: "This sign is related, but it means bicycles as a symbol or road-user category, not that I am entering a bicycle street." }
        ]
    },
    {
        statement: "Cyclists must use the cycle track.",
        trueFor: [
            { signName: "Pabjuden Cykelbana", explanation: "This sign means cyclists must use this cycle track." }
        ],
        falseFor: [
            { signName: "Forbud Mot Trafik Med Cykel Och Moped Klass Ii", explanation: "This sign means cyclists and class II moped riders are prohibited, not required to use a cycle track." },
            { signName: "Cykelgata", explanation: "This sign means a bicycle street begins here, not that cyclists must use a separate cycle track." }
        ],
        similarFalseFor: [
            { signName: "Cykel Och Moped Klass Ii", explanation: "This sign is related, but it identifies bicycles and class II mopeds rather than requiring use of a cycle track." },
            { signName: "Pabjuden Gang Och Cykelbana", explanation: "This sign is related, but it requires a shared pedestrian and cycle path rather than a cycle-only track." }
        ]
    },
    {
        statement: "Pedestrians must use the footpath.",
        trueFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign means pedestrians must use this footpath." }
        ],
        falseFor: [
            { signName: "Forbud Mot Gangtrafik", explanation: "This sign prohibits pedestrians, rather than requiring them to use a footpath." },
            { signName: "Pabjuden Cykelbana", explanation: "This sign is for cyclists using a cycle track, not pedestrians using a footpath." }
        ],
        similarFalseFor: [
            { signName: "Gaende", explanation: "This sign is related, but it identifies pedestrians rather than requiring a footpath." },
            { signName: "Pabjuden Gang Och Cykelbana", explanation: "This sign is related, but it requires a shared path rather than a pedestrian-only footpath." }
        ]
    },
    {
        statement: "Pedestrians and cyclists must use the shared path.",
        trueFor: [
            { signName: "Pabjuden Gang Och Cykelbana", explanation: "This sign means pedestrians and cyclists must use this shared path." }
        ],
        falseFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign means pedestrians must use a footpath, not that pedestrians and cyclists must use the shared path." },
            { signName: "Pabjuden Cykelbana", explanation: "This sign means cyclists must use a cycle track, not that pedestrians and cyclists must use the shared path." },
            { signName: "Pabjudna Gang Och Cykelbanor", explanation: "This sign means pedestrians and cyclists must use separated paths, not that pedestrians and cyclists must use the shared path." }
        ],
        similarFalseFor: [
            { signName: "Gang Och Cykelpil", explanation: "This sign is related, but it gives direction for pedestrian and cycle traffic, not that pedestrians and cyclists must use the shared path." }
        ]
    },
    {
        statement: "Pedestrians and cyclists must use the separated paths as shown.",
        trueFor: [
            { signName: "Pabjudna Gang Och Cykelbanor", explanation: "This sign means pedestrians and cyclists must use the separated paths shown." }
        ],
        falseFor: [
            { signName: "Pabjuden Gang Och Cykelbana", explanation: "This sign means pedestrians and cyclists must use a shared path, not that pedestrians and cyclists must use the separated paths as shown." },
            { signName: "Pabjuden Gangbana", explanation: "This sign means pedestrians must use a footpath, not that pedestrians and cyclists must use the separated paths as shown." },
            { signName: "Pabjuden Cykelbana", explanation: "This sign means cyclists must use a cycle track, not that pedestrians and cyclists must use the separated paths as shown." }
        ],
        similarFalseFor: [
            { signName: "Gang Och Cykelpil", explanation: "This sign is related, but it gives direction for pedestrian and cycle traffic, not that pedestrians and cyclists must use the separated paths as shown." }
        ]
    },
    {
        statement: "Pedestrians must not walk here.",
        trueFor: [
            { signName: "Forbud Mot Gangtrafik", explanation: "This sign means pedestrians must not walk here." }
        ],
        falseFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign means pedestrians must use a footpath, not that pedestrians must not walk here." },
            { signName: "Gaende", explanation: "This sign identifies pedestrians as a category, not that pedestrians must not walk here." },
            { signName: "Gagata", explanation: "This sign means that a pedestrian street begins here, not that pedestrians must not walk here." }
        ],
        similarFalseFor: [
            { signName: "Varning For Gaende", explanation: "This sign is related, but it means a warning for pedestrians near or crossing the road, not that pedestrians must not walk here." }
        ]
    },
    {
        statement: "This warning sign means a pedestrian crossing is ahead.",
        trueFor: [
            { signName: "Varning For Overgangsstalle", explanation: "This sign means that a pedestrian crossing is ahead." }
        ],
        falseFor: [
            { signName: "Overgangsstalle", explanation: "This sign means that I am at the pedestrian crossing itself, not that a pedestrian crossing is ahead rather than here." },
            { signName: "Varning For Gaende", explanation: "This sign means a warning for pedestrians near or crossing the road, not that a pedestrian crossing is ahead rather than here." }
        ],
        similarFalseFor: [
            { signName: "Cykelpassage Eller Cykeloverfart", explanation: "This sign is related, but it means a cycle passage or cycle crossing marking, not that a pedestrian crossing is ahead rather than here." }
        ]
    },
    {
        statement: "I am at a pedestrian crossing.",
        trueFor: [
            { signName: "Overgangsstalle", explanation: "This sign means that I am at the pedestrian crossing itself." }
        ],
        falseFor: [
            { signName: "Varning For Overgangsstalle", explanation: "This sign means that a pedestrian crossing is ahead, not that I am at the pedestrian crossing itself." },
            { signName: "Varning For Gaende", explanation: "This sign means a warning for pedestrians near or crossing the road, not that I am at the pedestrian crossing itself." }
        ],
        similarFalseFor: [
            { signName: "Cykeloverfart", explanation: "This sign is related, but it means a cycle crossing, not that I am at the pedestrian crossing itself." }
        ]
    },
    {
        statement: "This warning sign means cyclists or class II moped riders may cross or enter ahead.",
        trueFor: [
            { signName: "Varning For Cyklande Och Mopedforare", explanation: "This sign means a warning for cyclists or class II moped riders." }
        ],
        falseFor: [
            { signName: "Cykelpassage Eller Cykeloverfart", explanation: "This sign means a cycle passage or cycle crossing marking, not that the warning sign means cyclists or class II moped riders may cross or enter ahead." },
            { signName: "Cykeloverfart", explanation: "This sign means a cycle crossing, not that the warning sign means cyclists or class II moped riders may cross or enter ahead." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Cykelbana", explanation: "This sign is related, but it means a mandatory cycle track, not that the warning sign means cyclists or class II moped riders may cross or enter ahead." }
        ]
    },
    {
        statement: "I must expect children near the road.",
        trueFor: [
            { signName: "Varning For Barn", explanation: "This sign means a warning for children near the road." }
        ],
        falseFor: [
            { signName: "Varning For Gaende", explanation: "This sign means a warning for pedestrians near or crossing the road, not that I must expect children near the road." },
            { signName: "Overgangsstalle", explanation: "This sign means that I am at the pedestrian crossing itself, not that I must expect children near the road." }
        ],
        similarFalseFor: [
            { signName: "Varning For Cyklande Och Mopedforare", explanation: "This sign is related, but it means a warning for cyclists or class II moped riders, not that I must expect children near the road." }
        ]
    },
    {
        statement: "I must expect roadworks ahead.",
        trueFor: [
            { signName: "Varning For Vagarbete", explanation: "This sign means a warning for roadworks ahead." }
        ],
        falseFor: [
            { signName: "Slut Pa Stracka Med Vagarbete", explanation: "This sign means the end of a roadworks section, not that I must expect roadworks ahead." },
            { signName: "Varning For Annan Fara", explanation: "This sign means a warning for another danger not covered by a more specific warning sign, not that I must expect roadworks ahead." }
        ],
        similarFalseFor: [
            { signName: "Korfalt Avstangt", explanation: "This sign is related, but it means a closed lane, not that I must expect roadworks ahead." },
            { signName: "Tillfallig Stangning", explanation: "This sign is related, but it means a temporary road closure, not that I must expect roadworks ahead." }
        ]
    },
    {
        statement: "I must expect an uneven road surface ahead.",
        trueFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign means a warning for an uneven road surface." }
        ],
        falseFor: [
            { signName: "Varning For Farthinder", explanation: "This sign means a warning for a speed hump or similar traffic calming feature, not that I must expect an uneven road surface ahead." },
            { signName: "Farthinder", explanation: "This sign means a speed hump or traffic calming marking, not that I must expect an uneven road surface ahead." },
            { signName: "Varning For Slirig Vag", explanation: "This sign means a warning for a slippery road, not that I must expect an uneven road surface ahead." }
        ],
        similarFalseFor: [
            { signName: "Varning For Stenskott", explanation: "This sign is related, but it means a warning for loose stones or stone chips, not that I must expect an uneven road surface ahead." }
        ]
    },
    {
        statement: "I must expect a speed bump or other road hump ahead.",
        trueFor: [
            { signName: "Varning For Farthinder", explanation: "This sign means a warning for a speed hump or similar traffic calming feature." }
        ],
        falseFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign means a warning for an uneven road surface, not that I must expect a speed bump or other road hump ahead." },
            { signName: "Farthinder", explanation: "This sign means a speed hump or traffic calming marking, not that I must expect a speed bump or other road hump ahead." }
        ],
        similarFalseFor: [
            { signName: "Minska Hastigheten", explanation: "This sign is related, but it means an instruction from a traffic officer to reduce speed, not that I must expect a speed bump or other road hump ahead." }
        ]
    },
    {
        statement: "I must expect the road to be slippery.",
        trueFor: [
            { signName: "Varning For Slirig Vag", explanation: "This sign means a warning for a slippery road." }
        ],
        falseFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign means a warning for an uneven road surface, not that I must expect the road to be slippery." },
            { signName: "Varning For Stenskott", explanation: "This sign means a warning for loose stones or stone chips, not that I must expect the road to be slippery." }
        ],
        similarFalseFor: [
            { signName: "Varning For Nedforslutning", explanation: "This sign is related, but it means a warning for a steep downhill slope, not that I must expect the road to be slippery." }
        ]
    },
    {
        statement: "I must expect loose stones or stone chips on the road.",
        trueFor: [
            { signName: "Varning For Stenskott", explanation: "This sign means a warning for loose stones or stone chips." }
        ],
        falseFor: [
            { signName: "Varning For Stenras", explanation: "This sign means a warning for falling rocks or rocks on the road, not that I must expect loose stones or stone chips on the road." },
            { signName: "Varning For Slirig Vag", explanation: "This sign means a warning for a slippery road, not that I must expect loose stones or stone chips on the road." }
        ],
        similarFalseFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign is related, but it means a warning for an uneven road surface, not that I must expect loose stones or stone chips on the road." }
        ]
    },
    {
        statement: "I must expect falling rocks or rocks on the road.",
        trueFor: [
            { signName: "Varning For Stenras", explanation: "This sign means a warning for falling rocks or rocks on the road." }
        ],
        falseFor: [
            { signName: "Varning For Stenskott", explanation: "This sign means a warning for loose stones or stone chips, not that I must expect falling rocks or rocks on the road." },
            { signName: "Varning For Annan Fara", explanation: "This sign means a warning for another danger not covered by a more specific warning sign, not that I must expect falling rocks or rocks on the road." }
        ],
        similarFalseFor: [
            { signName: "Varning For Svag Vagkant Eller Hog Korbanekant", explanation: "This sign is related, but it means a warning for svag vagkant eller hog korbanekant, not that I must expect falling rocks or rocks on the road." }
        ]
    },
    {
        statement: "I must expect a steep downhill slope ahead.",
        trueFor: [
            { signName: "Varning For Nedforslutning", explanation: "This sign means a warning for a steep downhill slope." }
        ],
        falseFor: [
            { signName: "Varning For Stigning", explanation: "This sign means a warning for a steep uphill slope, not that I must expect a steep downhill slope ahead." },
            { signName: "Varning For Slirig Vag", explanation: "This sign means a warning for a slippery road, not that I must expect a steep downhill slope ahead." }
        ],
        similarFalseFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign is related, but it means a warning for an uneven road surface, not that I must expect a steep downhill slope ahead." }
        ]
    },
    {
        statement: "I must expect a steep uphill slope ahead.",
        trueFor: [
            { signName: "Varning For Stigning", explanation: "This sign means a warning for a steep uphill slope." }
        ],
        falseFor: [
            { signName: "Varning For Nedforslutning", explanation: "This sign means a warning for a steep downhill slope, not that I must expect a steep uphill slope ahead." },
            { signName: "Varning For Langsamtgaende Fordon", explanation: "This sign means a warning for slow-moving vehicles, not that I must expect a steep uphill slope ahead." }
        ],
        similarFalseFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign is related, but it means a warning for an uneven road surface, not that I must expect a steep uphill slope ahead." }
        ]
    },
    {
        statement: "I must expect a dangerous curve ahead.",
        trueFor: [
            { signName: "Varning For Farlig Kurva", explanation: "This sign means a warning for one dangerous curve." }
        ],
        falseFor: [
            { signName: "Varning For Flera Farliga Kurvor", explanation: "This sign means a warning for several dangerous curves, not that I must expect a dangerous curve ahead." },
            { signName: "Markeringspil", explanation: "This sign means a marker showing which side to pass an obstacle, not that I must expect a dangerous curve ahead." }
        ],
        similarFalseFor: [
            { signName: "Avfartsskarm", explanation: "This sign is related, but it means a marker panel at an exit or sharp alignment change, not that I must expect a dangerous curve ahead." }
        ]
    },
    {
        statement: "I must expect several dangerous curves ahead.",
        trueFor: [
            { signName: "Varning For Flera Farliga Kurvor", explanation: "This sign means a warning for several dangerous curves." }
        ],
        falseFor: [
            { signName: "Varning For Farlig Kurva", explanation: "This sign means a warning for one dangerous curve, not that I must expect several dangerous curves ahead." },
            { signName: "Markeringspil", explanation: "This sign means a marker showing which side to pass an obstacle, not that I must expect several dangerous curves ahead." }
        ],
        similarFalseFor: [
            { signName: "Avfartsskarm", explanation: "This sign is related, but it means a marker panel at an exit or sharp alignment change, not that I must expect several dangerous curves ahead." }
        ]
    },
    {
        statement: "I must expect the road to narrow.",
        trueFor: [
            { signName: "Varning For Avsmalnande Vag", explanation: "This sign means a warning that the road narrows." }
        ],
        falseFor: [
            { signName: "Varning For Bro", explanation: "This sign means a warning for a bridge or movable bridge, not that I must expect the road to narrow." },
            { signName: "Varning For Motande Trafik", explanation: "This sign means a warning for oncoming traffic, not that I must expect the road to narrow." }
        ],
        similarFalseFor: [
            { signName: "Vajningsplikt Mot Motande Trafik", explanation: "This sign is related, but it means that I must yield to oncoming traffic, not that I must expect the road to narrow." },
            { signName: "Motande Trafik Har Vajningsplikt", explanation: "This sign is related, but it means that oncoming traffic must yield to me, not that I must expect the road to narrow." }
        ]
    },
    {
        statement: "I must expect oncoming traffic.",
        trueFor: [
            { signName: "Varning For Motande Trafik", explanation: "This sign means a warning for oncoming traffic." }
        ],
        falseFor: [
            { signName: "Motande Trafik Har Vajningsplikt", explanation: "This sign means that oncoming traffic must yield to me, not that I must expect oncoming traffic." },
            { signName: "Vajningsplikt Mot Motande Trafik", explanation: "This sign means that I must yield to oncoming traffic, not that I must expect oncoming traffic." }
        ],
        similarFalseFor: [
            { signName: "Varning For Avsmalnande Vag", explanation: "This sign is related, but it means a warning that the road narrows, not that I must expect oncoming traffic." }
        ]
    },
    {
        statement: "I must expect traffic signals ahead.",
        trueFor: [
            { signName: "Varning For Flerfargssignal", explanation: "This sign means a warning for traffic signals ahead." }
        ],
        falseFor: [
            { signName: "Rod", explanation: "This sign means a red traffic signal requiring traffic to stop, not that I must expect traffic signals ahead." },
            { signName: "Gul", explanation: "This sign means a yellow traffic signal showing the signal is changing, not that I must expect traffic signals ahead." },
            { signName: "Gron", explanation: "This sign means a green traffic signal permitting traffic to continue, not that I must expect traffic signals ahead." }
        ],
        similarFalseFor: [
            { signName: "Blinkande Gul", explanation: "This sign is related, but it means a flashing yellow signal requiring extra caution, not that I must expect traffic signals ahead." },
            { signName: "Gult Blinkande Ljus", explanation: "This sign is related, but it means a flashing yellow light warning rather than a stop signal, not that I must expect traffic signals ahead." }
        ]
    },
    {
        statement: "I must stop because the traffic signal is red.",
        trueFor: [
            { signName: "Rod", explanation: "This sign means a red traffic signal requiring traffic to stop." }
        ],
        falseFor: [
            { signName: "Gul", explanation: "This sign means a yellow traffic signal showing the signal is changing, not that I must stop because the traffic signal is red." },
            { signName: "Gron", explanation: "This sign means a green traffic signal permitting traffic to continue, not that I must stop because the traffic signal is red." },
            { signName: "Rodgul", explanation: "This sign means a red-yellow traffic signal showing green is about to follow, not that I must stop because the traffic signal is red." }
        ],
        similarFalseFor: [
            { signName: "Rott Fast Ljus", explanation: "This sign is related, but it means a steady red lane or signal indication, not that I must stop because the traffic signal is red." },
            { signName: "Rott Blinkande Ljus", explanation: "This sign is related, but it means flashing red lights requiring traffic to stop, not that I must stop because the traffic signal is red." }
        ]
    },
    {
        statement: "The green traffic signal permits traffic to continue.",
        trueFor: [
            { signName: "Gron", explanation: "This sign means a green traffic signal permitting traffic to continue." }
        ],
        falseFor: [
            { signName: "Rod", explanation: "This sign means a red traffic signal requiring traffic to stop, not that the green traffic signal permits traffic to continue." },
            { signName: "Gul", explanation: "This sign means a yellow traffic signal showing the signal is changing, not that the green traffic signal permits traffic to continue." },
            { signName: "Rodgul", explanation: "This sign means a red-yellow traffic signal showing green is about to follow, not that the green traffic signal permits traffic to continue." }
        ],
        similarFalseFor: [
            { signName: "Gron Pil", explanation: "This sign is related, but it means a green arrow permitting traffic only in the arrow direction, not that the green traffic signal permits traffic to continue." },
            { signName: "Lodratt Streck Eller Pil", explanation: "This sign is related, but it means a lane signal allowing travel in the indicated lane or direction, not that the green traffic signal permits traffic to continue." }
        ]
    },
    {
        statement: "The yellow traffic signal means the signal is changing and I must not pass unless stopping would be unsafe.",
        trueFor: [
            { signName: "Gul", explanation: "This sign means a yellow traffic signal showing the signal is changing." }
        ],
        falseFor: [
            { signName: "Gron", explanation: "This sign means a green traffic signal permitting traffic to continue, not that the yellow traffic signal means the signal is changing and I must not pass unless stopping would be unsafe." },
            { signName: "Rod", explanation: "This sign means a red traffic signal requiring traffic to stop, not that the yellow traffic signal means the signal is changing and I must not pass unless stopping would be unsafe." },
            { signName: "Blinkande Gul", explanation: "This sign means a flashing yellow signal requiring extra caution, not that the yellow traffic signal means the signal is changing and I must not pass unless stopping would be unsafe." }
        ],
        similarFalseFor: [
            { signName: "Gul Pil Eller Pilar", explanation: "This sign is related, but it means a yellow arrow signal for the indicated direction, not that the yellow traffic signal means the signal is changing and I must not pass unless stopping would be unsafe." },
            { signName: "Gult Blinkande Ljus", explanation: "This sign is related, but it means a flashing yellow light warning rather than a stop signal, not that the yellow traffic signal means the signal is changing and I must not pass unless stopping would be unsafe." }
        ]
    },
    {
        statement: "The green arrow permits traffic to continue only in the arrow direction.",
        trueFor: [
            { signName: "Gron Pil", explanation: "This sign means a green arrow permitting traffic only in the arrow direction." }
        ],
        falseFor: [
            { signName: "Gron", explanation: "This sign means a green traffic signal permitting traffic to continue, not that the green arrow permits traffic to continue only in the arrow direction." },
            { signName: "Gul Pil Eller Pilar", explanation: "This sign means a yellow arrow signal for the indicated direction, not that the green arrow permits traffic to continue only in the arrow direction." },
            { signName: "Pabjuden Korriktning", explanation: "This sign means a mandatory driving direction, not that the green arrow permits traffic to continue only in the arrow direction." }
        ],
        similarFalseFor: [
            { signName: "Lodratt Streck Eller Pil", explanation: "This sign is related, but it means a lane signal allowing travel in the indicated lane or direction, not that the green arrow permits traffic to continue only in the arrow direction." }
        ]
    },
    {
        statement: "I must stop because red lights are flashing.",
        trueFor: [
            { signName: "Rott Blinkande Ljus", explanation: "This sign means flashing red lights requiring traffic to stop." }
        ],
        falseFor: [
            { signName: "Rott Fast Ljus", explanation: "This sign means a steady red lane or signal indication, not that I must stop because red lights are flashing." },
            { signName: "Rod", explanation: "This sign means a red traffic signal requiring traffic to stop, not that I must stop because red lights are flashing." },
            { signName: "Blinkande Gul", explanation: "This sign means a flashing yellow signal requiring extra caution, not that I must stop because red lights are flashing." }
        ],
        similarFalseFor: [
            { signName: "Varning For Jarnvagskorsning Utan Bommar", explanation: "This sign is related, but it means that a railway crossing without barriers is ahead, not that I must stop because red lights are flashing." },
            { signName: "Kryssmarke", explanation: "This sign is related, but it means that I am at the railway crossing itself, not that I must stop because red lights are flashing." }
        ]
    },
    {
        statement: "I must expect a railway crossing with barriers ahead.",
        trueFor: [
            { signName: "Varning For Jarnvagskorsning Med Bommar", explanation: "This sign means that a railway crossing with barriers is ahead." }
        ],
        falseFor: [
            { signName: "Varning For Jarnvagskorsning Utan Bommar", explanation: "This sign means that a railway crossing without barriers is ahead, not that a railway crossing with barriers is ahead." },
            { signName: "Bom", explanation: "This sign means a barrier at a railway crossing or controlled passage, not that a railway crossing with barriers is ahead." }
        ],
        similarFalseFor: [
            { signName: "Kryssmarke", explanation: "This sign is related, but it means that I am at the railway crossing itself, not that a railway crossing with barriers is ahead." },
            { signName: "Plankorsningsskarm", explanation: "This sign is related, but it means a marker panel for a level crossing, not that a railway crossing with barriers is ahead." }
        ]
    },
    {
        statement: "I must expect a railway crossing without barriers ahead.",
        trueFor: [
            { signName: "Varning For Jarnvagskorsning Utan Bommar", explanation: "This sign means that a railway crossing without barriers is ahead." }
        ],
        falseFor: [
            { signName: "Varning For Jarnvagskorsning Med Bommar", explanation: "This sign means that a railway crossing with barriers is ahead, not that a railway crossing without barriers is ahead." },
            { signName: "Bom", explanation: "This sign means a barrier at a railway crossing or controlled passage, not that a railway crossing without barriers is ahead." }
        ],
        similarFalseFor: [
            { signName: "Kryssmarke", explanation: "This sign is related, but it means that I am at the railway crossing itself, not that a railway crossing without barriers is ahead." },
            { signName: "Plankorsningsskarm", explanation: "This sign is related, but it means a marker panel for a level crossing, not that a railway crossing without barriers is ahead." }
        ]
    },
    {
        statement: "I am at a railway crossing and must watch for rail traffic.",
        trueFor: [
            { signName: "Kryssmarke", explanation: "This sign means that I am at the railway crossing itself." }
        ],
        falseFor: [
            { signName: "Varning For Jarnvagskorsning Utan Bommar", explanation: "This sign means that a railway crossing without barriers is ahead, not that I am at the railway crossing itself." },
            { signName: "Varning For Jarnvagskorsning Med Bommar", explanation: "This sign means that a railway crossing with barriers is ahead, not that I am at the railway crossing itself." }
        ],
        similarFalseFor: [
            { signName: "Avstand Till Plankorsning", explanation: "This sign is related, but it means distance remaining to a railway crossing, not that I am at the railway crossing itself." },
            { signName: "Plankorsningsskarm", explanation: "This sign is related, but it means a marker panel for a level crossing, not that I am at the railway crossing itself." }
        ]
    },
    {
        statement: "I must expect a bridge or movable bridge ahead.",
        trueFor: [
            { signName: "Varning For Bro", explanation: "This sign means a warning for a bridge or movable bridge." }
        ],
        falseFor: [
            { signName: "Varning For Kaj", explanation: "This sign means a warning for a quay or waterfront edge, not that I must expect a bridge or movable bridge ahead." },
            { signName: "Varning For Avsmalnande Vag", explanation: "This sign means a warning that the road narrows, not that I must expect a bridge or movable bridge ahead." }
        ],
        similarFalseFor: [
            { signName: "Vattendrag", explanation: "This sign is related, but it means the name of a watercourse or water feature, not that I must expect a bridge or movable bridge ahead." }
        ]
    },
    {
        statement: "I must expect a quay, ferry berth, or waterfront edge ahead.",
        trueFor: [
            { signName: "Varning For Kaj", explanation: "This sign means a warning for a quay or waterfront edge." }
        ],
        falseFor: [
            { signName: "Varning For Bro", explanation: "This sign means a warning for a bridge or movable bridge, not that I must expect a quay, ferry berth, or waterfront edge ahead." },
            { signName: "Farja", explanation: "This sign means a ferry route or ferry terminal, not that I must expect a quay, ferry berth, or waterfront edge ahead." }
        ],
        similarFalseFor: [
            { signName: "Personfarja", explanation: "This sign is related, but it means a passenger ferry, not that I must expect a quay, ferry berth, or waterfront edge ahead." }
        ]
    },
    {
        statement: "I must expect a tunnel ahead.",
        trueFor: [
            { signName: "Varning For Tunnel", explanation: "This sign means that a tunnel is ahead." }
        ],
        falseFor: [
            { signName: "Tunnel", explanation: "This sign means that I am entering or at a tunnel, not that a tunnel is ahead." },
            { signName: "Tunnelkategori", explanation: "This sign means a tunnel category for dangerous goods restrictions, not that a tunnel is ahead." }
        ],
        similarFalseFor: [
            { signName: "Livsfarlig Ledning", explanation: "This sign is related, but it means a warning for a life-threatening electrical line, not that a tunnel is ahead." }
        ]
    },
    {
        statement: "I am entering a tunnel.",
        trueFor: [
            { signName: "Tunnel", explanation: "This sign means that I am entering or at a tunnel." }
        ],
        falseFor: [
            { signName: "Varning For Tunnel", explanation: "This sign means that a tunnel is ahead, not that I am entering or at a tunnel." },
            { signName: "Tunnelkategori", explanation: "This sign means a tunnel category for dangerous goods restrictions, not that I am entering or at a tunnel." }
        ],
        similarFalseFor: [
            { signName: "Motorvag", explanation: "This sign is related, but it means that the motorway begins here, not that I am entering or at a tunnel." }
        ]
    },
    {
        statement: "This warning sign means there is another danger ahead.",
        trueFor: [
            { signName: "Varning For Annan Fara", explanation: "This sign means a warning for another danger not covered by a more specific warning sign." }
        ],
        falseFor: [
            { signName: "Varning For Olycka", explanation: "This sign means a warning for an accident or incident ahead, not that the warning sign means there is another danger ahead." },
            { signName: "Varning For Vagarbete", explanation: "This sign means a warning for roadworks ahead, not that the warning sign means there is another danger ahead." }
        ],
        similarFalseFor: [
            { signName: "Text", explanation: "This sign is related, but it means supplementary text, not that the warning sign means there is another danger ahead." },
            { signName: "Symboltavla", explanation: "This sign is related, but it means a supplementary symbol plate, not that the warning sign means there is another danger ahead." }
        ]
    },
    {
        statement: "I must expect an accident or incident ahead.",
        trueFor: [
            { signName: "Varning For Olycka", explanation: "This sign means a warning for an accident or incident ahead." }
        ],
        falseFor: [
            { signName: "Varning For Annan Fara", explanation: "This sign means a warning for another danger not covered by a more specific warning sign, not that I must expect an accident or incident ahead." },
            { signName: "Varning For Vagarbete", explanation: "This sign means a warning for roadworks ahead, not that I must expect an accident or incident ahead." }
        ],
        similarFalseFor: [
            { signName: "Sarskild Varningsanordning", explanation: "This sign is related, but it means a special warning device at an obstruction or danger, not that I must expect an accident or incident ahead." }
        ]
    },
    {
        statement: "I must expect animals on or near the road.",
        trueFor: [
            { signName: "Varning For Djur", explanation: "This sign means a warning for animals." }
        ],
        falseFor: [
            { signName: "Varning For Ridande", explanation: "This sign means a warning for horse riders, not that I must expect animals on or near the road." },
            { signName: "Varning For Fordon Med Forspant Dragdjur", explanation: "This sign means a warning for animal-drawn vehicles, not that I must expect animals on or near the road." }
        ],
        similarFalseFor: [
            { signName: "Varning For Terrangskotertrafik", explanation: "This sign is related, but it means a warning for snowmobile or terrain-scooter traffic, not that I must expect animals on or near the road." }
        ]
    },
    {
        statement: "I must expect riders on horseback.",
        trueFor: [
            { signName: "Varning For Ridande", explanation: "This sign means a warning for horse riders." }
        ],
        falseFor: [
            { signName: "Pabjuden Ridvag", explanation: "This sign means horse riders must use a riding path, not that I must expect riders on horseback." },
            { signName: "Forbud Mot Ridning", explanation: "This sign means horse riders are prohibited, not that I must expect riders on horseback." }
        ],
        similarFalseFor: [
            { signName: "Varning For Djur", explanation: "This sign is related, but it means a warning for animals, not that I must expect riders on horseback." }
        ]
    },
    {
        statement: "Horse riders must use the riding path.",
        trueFor: [
            { signName: "Pabjuden Ridvag", explanation: "This sign means horse riders must use this riding path." }
        ],
        falseFor: [
            { signName: "Forbud Mot Ridning", explanation: "This sign prohibits horse riding, rather than requiring a riding path." },
            { signName: "Varning For Ridande", explanation: "This sign warns about horse riders ahead, rather than requiring riders to use a path." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign is related, but it requires pedestrians to use a footpath, not horse riders to use a riding path." }
        ]
    },
    {
        statement: "Horse riders must not ride here.",
        trueFor: [
            { signName: "Forbud Mot Ridning", explanation: "This sign means horse riders must not ride here." }
        ],
        falseFor: [
            { signName: "Pabjuden Ridvag", explanation: "This sign means horse riders must use a riding path, not that horse riders must not ride here." },
            { signName: "Varning For Ridande", explanation: "This sign means a warning for horse riders, not that horse riders must not ride here." }
        ],
        similarFalseFor: [
            { signName: "Forbud Mot Gangtrafik", explanation: "This sign is related, but it means pedestrians are prohibited, not that horse riders must not ride here." }
        ]
    },
    {
        statement: "Drivers of vehicles carrying dangerous goods must not drive here.",
        trueFor: [
            { signName: "Forbud Mot Trafik Med Fordon Lastat Med Farligt Gods", explanation: "This sign means drivers of vehicles carrying dangerous goods must not drive here." }
        ],
        falseFor: [
            { signName: "Farligt Gods", explanation: "This sign shows a route for dangerous goods traffic, not a ban on vehicles carrying dangerous goods." },
            { signName: "Pabjuden Korriktning For Fordon Lastat Med Farligt Gods", explanation: "This sign requires dangerous-goods traffic to follow a direction, not that it is banned from the road." }
        ],
        similarFalseFor: [
            { signName: "Tunnelkategori", explanation: "This sign is related, but it shows a tunnel category rather than a direct ban on dangerous-goods vehicles." }
        ]
    },
    {
        statement: "This sign shows a route for vehicles carrying dangerous goods.",
        trueFor: [
            { signName: "Farligt Gods", explanation: "This sign means a route or direction for dangerous goods traffic." }
        ],
        falseFor: [
            { signName: "Forbud Mot Trafik Med Fordon Lastat Med Farligt Gods", explanation: "This sign means no vehicles carrying dangerous goods, not that the sign shows a route for vehicles carrying dangerous goods." },
            { signName: "Pabjuden Korriktning For Fordon Lastat Med Farligt Gods", explanation: "This sign means a mandatory direction for dangerous goods traffic, not that the sign shows a route for vehicles carrying dangerous goods." }
        ],
        similarFalseFor: [
            { signName: "Tunnelkategori", explanation: "This sign is related, but it means a tunnel category for dangerous goods restrictions, not that the sign shows a route for vehicles carrying dangerous goods." }
        ]
    },
    {
        statement: "Vehicles carrying dangerous goods must follow the indicated mandatory direction.",
        trueFor: [
            { signName: "Pabjuden Korriktning For Fordon Lastat Med Farligt Gods", explanation: "This sign means a mandatory direction for dangerous goods traffic." }
        ],
        falseFor: [
            { signName: "Farligt Gods", explanation: "This sign means a route or direction for dangerous goods traffic, not that Vehicles carrying dangerous goods must follow the indicated mandatory direction." },
            { signName: "Forbud Mot Trafik Med Fordon Lastat Med Farligt Gods", explanation: "This sign means no vehicles carrying dangerous goods, not that Vehicles carrying dangerous goods must follow the indicated mandatory direction." }
        ],
        similarFalseFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign is related, but it means a mandatory driving direction, not that Vehicles carrying dangerous goods must follow the indicated mandatory direction." }
        ]
    },
    {
        statement: "I must not drive a vehicle wider than the width shown.",
        trueFor: [
            { signName: "Begransad Fordonsbredd", explanation: "This sign means a maximum vehicle width." }
        ],
        falseFor: [
            { signName: "Begransad Fordonshojd", explanation: "This sign means a maximum vehicle height, not that I must not drive a vehicle wider than the width shown." },
            { signName: "Begransad Fordonslangd", explanation: "This sign means a maximum vehicle or vehicle-combination length, not that I must not drive a vehicle wider than the width shown." }
        ],
        similarFalseFor: [
            { signName: "Fri Bredd", explanation: "This sign is related, but it means free width information rather than a prohibition by vehicle width, not that I must not drive a vehicle wider than the width shown." }
        ]
    },
    {
        statement: "I must not drive a vehicle higher than the height shown.",
        trueFor: [
            { signName: "Begransad Fordonshojd", explanation: "This sign means a maximum vehicle height." }
        ],
        falseFor: [
            { signName: "Begransad Fordonsbredd", explanation: "This sign means a maximum vehicle width, not that I must not drive a vehicle higher than the height shown." },
            { signName: "Begransad Fordonslangd", explanation: "This sign means a maximum vehicle or vehicle-combination length, not that I must not drive a vehicle higher than the height shown." }
        ],
        similarFalseFor: [
            { signName: "Tunnelkategori", explanation: "This sign is related, but it means a tunnel category for dangerous goods restrictions, not that I must not drive a vehicle higher than the height shown." }
        ]
    },
    {
        statement: "I must not drive a vehicle or combination longer than the length shown.",
        trueFor: [
            { signName: "Begransad Fordonslangd", explanation: "This sign means a maximum vehicle or vehicle-combination length." }
        ],
        falseFor: [
            { signName: "Begransad Fordonsbredd", explanation: "This sign means a maximum vehicle width, not that I must not drive a vehicle or combination longer than the length shown." },
            { signName: "Begransad Fordonshojd", explanation: "This sign means a maximum vehicle height, not that I must not drive a vehicle or combination longer than the length shown." }
        ],
        similarFalseFor: [
            { signName: "Fardvag For Langa Fordonstag", explanation: "This sign is related, but it means a route for long vehicle combinations, not that I must not drive a vehicle or combination longer than the length shown." }
        ]
    },
    {
        statement: "I must not drive if my vehicle exceeds the gross weight shown.",
        trueFor: [
            { signName: "Begransad Bruttovikt Pa Fordon", explanation: "This sign means a maximum gross weight for a single vehicle." }
        ],
        falseFor: [
            { signName: "Begransad Bruttovikt Pa Fordon Och Fordonstag", explanation: "This sign means a maximum gross weight for a vehicle or vehicle combination, not that I must not drive if my vehicle exceeds the gross weight shown." },
            { signName: "Begransat Axeltryck", explanation: "This sign means a maximum axle load, not that I must not drive if my vehicle exceeds the gross weight shown." }
        ],
        similarFalseFor: [
            { signName: "Totalvikt", explanation: "This sign is related, but it means total weight information or a supplementary weight condition, not that I must not drive if my vehicle exceeds the gross weight shown." },
            { signName: "Barighetsklass", explanation: "This sign is related, but it means the road's carrying-capacity class, not that I must not drive if my vehicle exceeds the gross weight shown." }
        ]
    },
    {
        statement: "I must keep at least the indicated distance to the vehicle in front.",
        trueFor: [
            { signName: "Minsta Avstand", explanation: "This sign means a required minimum following distance." }
        ],
        falseFor: [
            { signName: "Avstand", explanation: "This sign means distance information on an extra plate, not that I must keep at least the indicated distance to the vehicle in front." },
            { signName: "Avstand Till Stopplikt", explanation: "This sign means distance to a stop requirement ahead, not that I must keep at least the indicated distance to the vehicle in front." }
        ],
        similarFalseFor: [
            { signName: "Avstandstavla", explanation: "This sign is related, but it means distance information to destinations or crossings, not that I must keep at least the indicated distance to the vehicle in front." }
        ]
    },
    {
        statement: "I am being told that a bus stop is here.",
        trueFor: [
            { signName: "Busshallplats", explanation: "This sign means a bus stop." }
        ],
        falseFor: [
            { signName: "Busstation", explanation: "This sign means a bus station, not that I am being told that a bus stop is here." },
            { signName: "Buss", explanation: "This sign means buses as a symbol or road-user category, not that I am being told that a bus stop is here." }
        ],
        similarFalseFor: [
            { signName: "Linje For Fordon I Linjetrafik Med Flera", explanation: "This sign is related, but it means a lane marking for public transport and similar vehicles, not that I am being told that a bus stop is here." }
        ]
    },
    {
        statement: "I am being told that taxis use this place.",
        trueFor: [
            { signName: "Taxi", explanation: "This sign means a taxi place or taxi-related restriction." }
        ],
        falseFor: [
            { signName: "Busshallplats", explanation: "This sign means a bus stop, not that I am being told that taxis use this place." },
            { signName: "Parkering", explanation: "This sign means that parking is allowed at this place, not that I am being told that taxis use this place." }
        ],
        similarFalseFor: [
            { signName: "Uppstallningsplats", explanation: "This sign is related, but it means a place for vehicle standing or staging, not that I am being told that taxis use this place." }
        ]
    },
    {
        statement: "This sign indicates a hospital with emergency care.",
        trueFor: [
            { signName: "Akutsjukhus", explanation: "This sign means a hospital with emergency care." }
        ],
        falseFor: [
            { signName: "Hjalptelefon", explanation: "This sign means an emergency or help telephone, not that the sign indicates a hospital with emergency care." },
            { signName: "Raddningsplats", explanation: "This sign means a rescue point, not that the sign indicates a hospital with emergency care." }
        ],
        similarFalseFor: [
            { signName: "Informationsplats", explanation: "This sign is related, but it means an information place, not that the sign indicates a hospital with emergency care." }
        ]
    },
    {
        statement: "This sign indicates a fuel station.",
        trueFor: [
            { signName: "Drivmedel", explanation: "This sign means a fuel station." }
        ],
        falseFor: [
            { signName: "Gas For Fordonsdrift", explanation: "This sign means vehicle gas fuel, not that the sign indicates a fuel station." },
            { signName: "Laddstation", explanation: "This sign means a charging station, not that the sign indicates a fuel station." }
        ],
        similarFalseFor: [
            { signName: "Fordonsverkstad", explanation: "This sign is related, but it means a vehicle repair workshop, not that the sign indicates a fuel station." }
        ]
    },
    {
        statement: "This sign indicates a charging station.",
        trueFor: [
            { signName: "Laddstation", explanation: "This sign means a charging station." }
        ],
        falseFor: [
            { signName: "Drivmedel", explanation: "This sign means a fuel station, not that the sign indicates a charging station." },
            { signName: "Gas For Fordonsdrift", explanation: "This sign means vehicle gas fuel, not that the sign indicates a charging station." }
        ],
        similarFalseFor: [
            { signName: "Laddplats", explanation: "This sign is related, but it means a charging place or parking bay for charging, not that the sign indicates a charging station." }
        ]
    },
    {
        statement: "This sign indicates a ferry.",
        trueFor: [
            { signName: "Farja", explanation: "This sign means a ferry route or ferry terminal." }
        ],
        falseFor: [
            { signName: "Personfarja", explanation: "This sign means a passenger ferry, not that the sign indicates a ferry." },
            { signName: "Varning For Kaj", explanation: "This sign means a warning for a quay or waterfront edge, not that the sign indicates a ferry." }
        ],
        similarFalseFor: [
            { signName: "Vattendrag", explanation: "This sign is related, but it means the name of a watercourse or water feature, not that the sign indicates a ferry." }
        ]
    },
    {
        statement: "This sign indicates a rest area.",
        trueFor: [
            { signName: "Rastplats", explanation: "This sign means a rest area." }
        ],
        falseFor: [
            { signName: "Motesplats", explanation: "This sign means a passing place on a narrow road, not that the sign indicates a rest area." },
            { signName: "Noduppstallningsplats", explanation: "This sign means an emergency stopping place, not that the sign indicates a rest area." }
        ],
        similarFalseFor: [
            { signName: "Vandplats", explanation: "This sign is related, but it means a turning place, not that the sign indicates a rest area." }
        ]
    },
    {
        statement: "I am being told there is a passing place on a narrow road.",
        trueFor: [
            { signName: "Motesplats", explanation: "This sign means a passing place on a narrow road." }
        ],
        falseFor: [
            { signName: "Rastplats", explanation: "This sign means a rest area, not that I am being told there is a passing place on a narrow road." },
            { signName: "Vandplats", explanation: "This sign means a turning place, not that I am being told there is a passing place on a narrow road." }
        ],
        similarFalseFor: [
            { signName: "Varning For Avsmalnande Vag", explanation: "This sign is related, but it means a warning that the road narrows, not that I am being told there is a passing place on a narrow road." }
        ]
    },
    {
        statement: "I am being shown a place intended for turning vehicles around.",
        trueFor: [
            { signName: "Vandplats", explanation: "This sign means a turning place." }
        ],
        falseFor: [
            { signName: "Slut Pa Vandplats", explanation: "This sign means the end of a turning place, not that I am being shown a place intended for turning vehicles around." },
            { signName: "Motesplats", explanation: "This sign means a passing place on a narrow road, not that I am being shown a place intended for turning vehicles around." }
        ],
        similarFalseFor: [
            { signName: "Atervandsvag", explanation: "This sign is related, but it means a road with no through exit, not that I am being shown a place intended for turning vehicles around." }
        ]
    },
    {
        statement: "I am being told that the turning place ends.",
        trueFor: [
            { signName: "Slut Pa Vandplats", explanation: "This sign means the end of a turning place." }
        ],
        falseFor: [
            { signName: "Vandplats", explanation: "This sign means a turning place, not that I am being told that the turning place ends." },
            { signName: "Slut Pa Andamalsplats", explanation: "This sign means the end of a destination-specific place, not that I am being told that the turning place ends." }
        ],
        similarFalseFor: [
            { signName: "Slut Pa Omrade", explanation: "This sign is related, but it means the end of an area with local rules, not that I am being told that the turning place ends." }
        ]
    },
    {
        statement: "Buses and other line traffic must use the reserved lane or carriageway.",
        trueFor: [
            { signName: "Pabjudet Korfalt Eller Korbana For Fordon I Linjetrafik M.fl", explanation: "This sign means buses and other line traffic must use this reserved lane or carriageway." }
        ],
        falseFor: [
            { signName: "Linje For Fordon I Linjetrafik Med Flera", explanation: "This sign means a lane marking for public transport and similar vehicles, not that buses and other line traffic must use the reserved lane or carriageway." },
            { signName: "Buss", explanation: "This sign means buses as a symbol or road-user category, not that buses and other line traffic must use the reserved lane or carriageway." }
        ],
        similarFalseFor: [
            { signName: "Korfaltsindelning Pa Stracka", explanation: "This sign is related, but it means lane allocation along a road section, not that buses and other line traffic must use the reserved lane or carriageway." }
        ]
    },
    {
        statement: "I must expect my lane to merge with another lane.",
        trueFor: [
            { signName: "Sammanvavning", explanation: "This sign means lanes merging together." }
        ],
        falseFor: [
            { signName: "Minskning Av Antal Korfalt", explanation: "This sign means a reduction in the number of lanes, not that I must expect my lane to merge with another lane." },
            { signName: "Okning Av Antal Korfalt", explanation: "This sign means an increase in the number of lanes, not that I must expect my lane to merge with another lane." }
        ],
        similarFalseFor: [
            { signName: "Korfaltsbyte", explanation: "This sign is related, but it means a lane change or lane shift, not that I must expect my lane to merge with another lane." }
        ]
    },
    {
        statement: "I must expect the number of lanes to decrease.",
        trueFor: [
            { signName: "Minskning Av Antal Korfalt", explanation: "This sign means a reduction in the number of lanes." }
        ],
        falseFor: [
            { signName: "Okning Av Antal Korfalt", explanation: "This sign means an increase in the number of lanes, not that I must expect the number of lanes to decrease." },
            { signName: "Sammanvavning", explanation: "This sign means lanes merging together, not that I must expect the number of lanes to decrease." }
        ],
        similarFalseFor: [
            { signName: "Korfalt Avstangt", explanation: "This sign is related, but it means a closed lane, not that I must expect the number of lanes to decrease." }
        ]
    },
    {
        statement: "I must expect the number of lanes to increase.",
        trueFor: [
            { signName: "Okning Av Antal Korfalt", explanation: "This sign means an increase in the number of lanes." }
        ],
        falseFor: [
            { signName: "Minskning Av Antal Korfalt", explanation: "This sign means a reduction in the number of lanes, not that I must expect the number of lanes to increase." },
            { signName: "Sammanvavning", explanation: "This sign means lanes merging together, not that I must expect the number of lanes to increase." }
        ],
        similarFalseFor: [
            { signName: "Korfaltsindelning Pa Stracka", explanation: "This sign is related, but it means lane allocation along a road section, not that I must expect the number of lanes to increase." }
        ]
    },
    {
        statement: "I must expect this lane to be closed.",
        trueFor: [
            { signName: "Korfalt Avstangt", explanation: "This sign means a closed lane." }
        ],
        falseFor: [
            { signName: "Korfalt Upphor", explanation: "This sign means a lane ending, not that I must expect this lane to be closed." },
            { signName: "Minskning Av Antal Korfalt", explanation: "This sign means a reduction in the number of lanes, not that I must expect this lane to be closed." }
        ],
        similarFalseFor: [
            { signName: "Tillfallig Stangning", explanation: "This sign is related, but it means a temporary road closure, not that I must expect this lane to be closed." }
        ]
    },
    {
        statement: "I must expect the lane to end.",
        trueFor: [
            { signName: "Korfalt Upphor", explanation: "This sign means a lane ending." }
        ],
        falseFor: [
            { signName: "Korfalt Avstangt", explanation: "This sign means a closed lane, not that I must expect the lane to end." },
            { signName: "Minskning Av Antal Korfalt", explanation: "This sign means a reduction in the number of lanes, not that I must expect the lane to end." }
        ],
        similarFalseFor: [
            { signName: "Slut Pa Pabjuden Bana Korfalt Vag Eller Led", explanation: "This sign is related, but it means the end of a mandatory lane, carriageway, road, or path, not that I must expect the lane to end." }
        ]
    },
    {
        statement: "This sign marks the start of motorway rules.",
        trueFor: [
            { signName: "Motorvag", explanation: "This sign means motorway rules begin here." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I am now on a road reserved for motorway traffic.",
        trueFor: [
            { signName: "Motorvag", explanation: "This sign means the road is a motorway from this point." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign does not mean the motorway is ending.",
        trueFor: [
            { signName: "Motorvag", explanation: "This sign means the motorway starts, not that it ends." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign shows a place set aside for parking.",
        trueFor: [
            { signName: "Parkering", explanation: "This sign means parking is allowed at this place." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign is permission to park, not a parking ban.",
        trueFor: [
            { signName: "Parkering", explanation: "This sign means parking is allowed, not prohibited." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I may park at this marked parking place.",
        trueFor: [
            { signName: "Parkering", explanation: "This sign marks an allowed parking place." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Cyclists must use this cycle track.",
        trueFor: [
            { signName: "Pabjuden Cykelbana", explanation: "This sign means the cycle track is mandatory for cyclists." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign is a requirement to use the cycle path, not a warning about cyclists.",
        trueFor: [
            { signName: "Pabjuden Cykelbana", explanation: "This sign means cyclists must use the path." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "The route shown is intended as a mandatory cycle facility.",
        trueFor: [
            { signName: "Pabjuden Cykelbana", explanation: "This sign means the route is a mandatory cycle track." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Pedestrians must use this footpath.",
        trueFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign means the footpath is mandatory for pedestrians." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign is a requirement to walk on the path, not a warning about pedestrians.",
        trueFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign means pedestrians must use the path." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "The route shown is intended as a mandatory pedestrian path.",
        trueFor: [
            { signName: "Pabjuden Gangbana", explanation: "This sign means the route is a mandatory footpath." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Drivers must travel only in the direction indicated.",
        trueFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign means the indicated driving direction is mandatory." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign gives a mandatory direction, not just route guidance.",
        trueFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign means the direction must be followed." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Drivers must follow the arrow direction shown on this sign.",
        trueFor: [
            { signName: "Pabjuden Korriktning", explanation: "This sign means the arrow shows a mandatory driving direction." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This signal means traffic may continue.",
        trueFor: [
            { signName: "Gron", explanation: "This signal means traffic is permitted to continue." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "The green light permits movement through the signal.",
        trueFor: [
            { signName: "Gron", explanation: "This signal means traffic may pass." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This signal is permission to proceed, not an order to stop.",
        trueFor: [
            { signName: "Gron", explanation: "This signal permits traffic to proceed." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This signal means I must stop.",
        trueFor: [
            { signName: "Rod", explanation: "This signal means traffic must stop." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "The red light prohibits passing the signal.",
        trueFor: [
            { signName: "Rod", explanation: "This signal means traffic must not pass." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This signal is a stop signal, not permission to continue.",
        trueFor: [
            { signName: "Rod", explanation: "This signal requires traffic to stop." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I am travelling on a priority road.",
        trueFor: [
            { signName: "Huvudled", explanation: "This sign means this is a priority road." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Drivers from connecting roads must yield to traffic on my road.",
        trueFor: [
            { signName: "Huvudled", explanation: "This sign means connecting-road traffic must yield to the priority road." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign starts or continues priority-road status.",
        trueFor: [
            { signName: "Huvudled", explanation: "This sign means the road has priority-road status." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I must come to a complete stop before continuing.",
        trueFor: [
            { signName: "Stopplikt", explanation: "This sign means stopping is mandatory before continuing." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Yielding without stopping is not enough for this sign.",
        trueFor: [
            { signName: "Stopplikt", explanation: "This sign requires a stop, not only yielding." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign creates a stop requirement at the intersection or road entry.",
        trueFor: [
            { signName: "Stopplikt", explanation: "This sign means I must stop before entering or crossing." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I must give way before entering or crossing.",
        trueFor: [
            { signName: "Vajningsplikt", explanation: "This sign means I must yield before entering or crossing." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This sign requires yielding, not a mandatory stop every time.",
        trueFor: [
            { signName: "Vajningsplikt", explanation: "This sign means I must yield, but it is not the stop sign." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "Traffic on the road I enter has priority over me.",
        trueFor: [
            { signName: "Vajningsplikt", explanation: "This sign means I must yield to traffic on the road I enter or cross." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I must expect the road surface to be uneven.",
        trueFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign warns of an uneven road surface." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "This warning is about bumps or unevenness in the roadway.",
        trueFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign warns that the road surface may be uneven." }
        ],
        falseFor: [],
        similarFalseFor: []
    },
    {
        statement: "I should be prepared for a rough road surface ahead.",
        trueFor: [
            { signName: "Varning For Ojamn Vag", explanation: "This sign warns of rough or uneven road ahead." }
        ],
        falseFor: [],
        similarFalseFor: []
    }
];
